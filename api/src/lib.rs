use axum::{
    debug_handler,
    extract::{Path, State},
    http::StatusCode,
    routing::{patch, post},
    Json, Router,
};
use serde::{Deserialize, Serialize};

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

#[derive(Debug, Deserialize, Serialize)]
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
    pub change_status: ChangeStatus,
}

#[debug_handler(state = AppState)]
async fn create(
    State(AppState { pool }): State<AppState>,
    Json(data): Json<User>,
) -> Result<Json<User>, (StatusCode, String)> {
    let row = sqlx::query!(
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
        data.first_name,
        data.last_name,
        data.email,
        data.persona,
        data.account_id,
        data.job_title,
        data.project_or_company,
        data.country,
        data.age as i16,
        data.goal,
        data.twitter,
        data.telegram,
        data.referral,
        data.public_key,
        serde_json::to_string(&data.change_status).unwrap_or_default()
    )
    .fetch_one(&pool)
    .await
    .map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Could not insert into db: {e:?}"),
        )
    })?;

    Ok(Json(User {
        id: row.id,
        account_id: row.account_id,
        age: row.age as u8,
        change_status: serde_json::from_str(&row.change_status).unwrap_or_default(),
        country: row.country,
        email: row.email,
        first_name: row.first_name,
        goal: row.goal,
        job_title: row.job_title,
        last_name: row.last_name,
        persona: row.persona,
        project_or_company: row.project_or_company,
        public_key: row.public_key,
        referral: row.referral,
        telegram: row.telegram,
        twitter: row.twitter,
    }))
}

#[debug_handler(state = AppState)]
async fn change_owner(
    State(AppState { pool }): State<AppState>,
    Path(public_key): Path<String>,
    Json(data): Json<User>,
) -> Result<Json<User>, (StatusCode, String)> {
    let row = sqlx::query!(
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
        public_key,
        data.account_id,
        data.age as i16,
        serde_json::to_string(&ChangeStatus::Pending).unwrap_or_default(),
        data.country,
        data.email,
        data.first_name,
        data.goal,
        data.job_title,
        data.last_name,
        data.persona,
        data.project_or_company,
        data.referral,
        data.telegram,
        data.twitter
    )
    .fetch_one(&pool)
    .await
    .map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Could not update row: {e:?}"),
        )
    })?;

    Ok(Json(User {
        id: row.id,
        account_id: row.account_id,
        age: row.age as u8,
        change_status: serde_json::from_str(&row.change_status).unwrap_or_default(),
        country: row.country,
        email: row.email,
        first_name: row.first_name,
        goal: row.goal,
        job_title: row.job_title,
        last_name: row.last_name,
        persona: row.persona,
        project_or_company: row.project_or_company,
        public_key: row.public_key,
        referral: row.referral,
        telegram: row.telegram,
        twitter: row.twitter,
    }))
}

#[debug_handler(state = AppState)]
async fn get_user(
    State(AppState { pool }): State<AppState>,
    Path(public_key): Path<String>,
) -> Result<Json<User>, (StatusCode, String)> {
    let row = sqlx::query!(
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
        public_key
    )
    .fetch_one(&pool)
    .await
    .map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Could not get user: {e:?}"),
        )
    })?;

    Ok(Json(User {
        id: row.id,
        account_id: row.account_id,
        age: row.age as u8,
        change_status: serde_json::from_str(&row.change_status).unwrap_or_default(),
        country: row.country,
        email: row.email,
        first_name: row.first_name,
        goal: row.goal,
        job_title: row.job_title,
        last_name: row.last_name,
        persona: row.persona,
        project_or_company: row.project_or_company,
        public_key: row.public_key,
        referral: row.referral,
        telegram: row.telegram,
        twitter: row.twitter,
    }))
}

pub fn create_router() -> Router<AppState> {
    Router::new()
        .route("/users", post(create))
        .route("/users/:public_key", patch(change_owner).get(get_user))
}
