use axum::{
    debug_handler,
    extract::{Path, State},
    http::StatusCode,
    routing::{patch, post},
    Json, Router,
};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Clone)]
pub struct AppState {
    pub pool: sqlx::PgPool,
}

#[derive(Debug, Default, Deserialize, Serialize)]
pub enum ChangeStatus {
    Pending,
    Approved,
    #[default]
    None,
}

impl TryFrom<String> for ChangeStatus {
    type Error = String;

    fn try_from(value: String) -> Result<Self, Self::Error> {
        match value.as_str() {
            "Pending" => Ok(ChangeStatus::Pending),
            "Approved" => Ok(ChangeStatus::Approved),
            "None" => Ok(ChangeStatus::None),
            _ => Err(format!("Could not parse {} into ChangeStatus", value)),
        }
    }
}

#[derive(Debug, Deserialize, Serialize, FromRow)]
pub struct User {
    #[serde(default, skip_deserializing)]
    pub id: i32,
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub persona: String,
    #[serde(default)]
    pub account_id: String,
    pub job_title: String,
    pub project_or_company: String,
    pub country: String,
    #[sqlx(try_from = "i16")]
    pub age: u8,
    pub goal: String,
    #[serde(default)]
    pub twitter: String,
    #[serde(default)]
    pub telegram: String,
    #[serde(default)]
    pub referral: String,
    #[serde(default, skip)]
    pub public_key: String,
    #[serde(default, skip)]
    #[sqlx(try_from = "String")]
    pub change_status: ChangeStatus,
}

#[debug_handler(state = AppState)]
async fn create(
    State(AppState { pool }): State<AppState>,
    Json(data): Json<User>,
) -> Result<Json<User>, (StatusCode, String)> {
    sqlx::query_as(
        r#"
        INSERT INTO
          users (
            first_name,
            last_name,
            email,
            persona,
            account_id,
            job_title,
            project_or_company,
            country,
            age,
            goal,
            twitter,
            telegram,
            referral,
            public_key,
            change_status
          )
        VALUES
          (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8,
            $9,
            $10,
            $11,
            $12,
            $13,
            $14,
            $15
          ) RETURNING id, 
          first_name,
          last_name,
          email,
          persona,
          account_id,
          job_title,
          project_or_company,
          country,
          age,
          goal,
          twitter,
          telegram,
          referral,
          public_key,
          change_status
        "#,
    )
    .bind(data.first_name)
    .bind(data.last_name)
    .bind(data.email)
    .bind(data.persona)
    .bind(data.account_id)
    .bind(data.job_title)
    .bind(data.project_or_company)
    .bind(data.country)
    .bind(data.age as i16)
    .bind(data.goal)
    .bind(data.twitter)
    .bind(data.telegram)
    .bind(data.referral)
    .bind(data.public_key)
    .bind(serde_json::to_string(&data.change_status).unwrap_or_default())
    .fetch_one(&pool)
    .await
    .map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Could not insert into db: {e:?}"),
        )
    })
    .map(Json)
}

#[debug_handler(state = AppState)]
async fn change_owner(
    State(AppState { pool }): State<AppState>,
    Path(public_key): Path<String>,
    Json(data): Json<User>,
) -> Result<Json<User>, (StatusCode, String)> {
    sqlx::query_as(
        r#"
        UPDATE
          users
        SET
          account_id = $2,
          age = $3,
          change_status = $4,
          country = $5,
          email = $6,
          first_name = $7,
          goal = $8,
          job_title = $9,
          last_name = $10,
          persona = $11,
          project_or_company = $12,
          public_key = $1,
          referral = $13,
          telegram = $14,
          twitter = $15
        WHERE
          public_key = $1 RETURNING id,
          account_id,
          age,
          change_status,
          country,
          email,
          first_name,
          goal,
          job_title,
          last_name,
          persona,
          project_or_company,
          public_key,
          referral,
          telegram,
          twitter
        "#,
    )
    .bind(public_key)
    .bind(data.account_id)
    .bind(data.age as i16)
    .bind(serde_json::to_string(&ChangeStatus::Pending).unwrap_or_default())
    .bind(data.country)
    .bind(data.email)
    .bind(data.first_name)
    .bind(data.goal)
    .bind(data.job_title)
    .bind(data.last_name)
    .bind(data.persona)
    .bind(data.project_or_company)
    .bind(data.referral)
    .bind(data.telegram)
    .bind(data.twitter)
    .fetch_one(&pool)
    .await
    .map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Could not update row: {e:?}"),
        )
    })
    .map(Json)
}

#[debug_handler(state = AppState)]
async fn get_user(
    State(AppState { pool }): State<AppState>,
    Path(public_key): Path<String>,
) -> Result<Json<User>, (StatusCode, String)> {
    sqlx::query_as(
        r#"
        SELECT
          id,
          account_id,
          age,
          change_status,
          country,
          email,
          first_name,
          goal,
          job_title,
          last_name,
          persona,
          project_or_company,
          public_key,
          referral,
          telegram,
          twitter
        FROM
          users
        WHERE
          public_key = $1
        "#,
    )
    .bind(public_key)
    .fetch_one(&pool)
    .await
    .map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Could not get user: {e:?}"),
        )
    })
    .map(Json)
}

pub fn create_router() -> Router<AppState> {
    Router::new()
        .route("/users", post(create))
        .route("/users/:public_key", patch(change_owner).get(get_user))
}
