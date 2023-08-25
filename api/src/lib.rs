use std::sync::Arc;

use axum::{
    debug_handler,
    extract::{Path, State},
    http::{HeaderMap, StatusCode},
    routing::{patch, post},
    Json, Router,
};
use futures::StreamExt;
use near_jsonrpc_client::{JsonRpcClient, NEAR_MAINNET_RPC_URL};
use near_jsonrpc_primitives::types::query::{QueryResponseKind, RpcQueryRequest, RpcQueryResponse};
use near_primitives::{
    types::{BlockReference, Finality, FunctionArgs},
    views::{CallResult, QueryRequest},
};
use serde::{Deserialize, Serialize};
use serde_json::json;
use sqlx::{FromRow, Pool, Postgres};

mod auth;

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
    #[serde(default, skip_serializing)]
    pub public_key: String,
    #[serde(default, skip_serializing)]
    pub private_key: String,
    #[serde(default, skip_serializing)]
    #[sqlx(try_from = "String")]
    pub change_status: ChangeStatus,
}

#[derive(Debug, Deserialize, Serialize, FromRow)]
pub struct UserUpdate {
    #[serde(default, skip_deserializing)]
    pub id: i32,
    pub user_id: i32,
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
    pub private_key: String,
}

#[debug_handler(state = AppState)]
async fn create(
    State(AppState { pool }): State<AppState>,
    headers: HeaderMap,
    Json(data): Json<User>,
) -> Result<Json<User>, (StatusCode, String)> {
    auth::authenticate(headers, &pool).await?;
    sqlx::query!(
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
            change_status,
            private_key
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
            $15,
            $16
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
          change_status,
          private_key
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
        serde_json::to_string(&data.change_status).unwrap_or_default(),
        data.private_key
    )
    .fetch_one(&pool)
    .await
    .map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Could not insert into db: {e:?}"),
        )
    })
    .map(|user| {
        Json(User {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            persona: user.persona,
            account_id: user.account_id,
            job_title: user.job_title,
            project_or_company: user.project_or_company,
            country: user.country,
            age: user.age as u8,
            goal: user.goal,
            twitter: user.twitter,
            telegram: user.telegram,
            referral: user.referral,
            public_key: user.public_key,
            change_status: serde_json::from_str(&user.change_status).unwrap_or_default(),
            private_key: user.private_key,
        })
    })
}

#[debug_handler(state = AppState)]
async fn change_owner(
    State(AppState { pool }): State<AppState>,
    Path(public_key): Path<String>,
    headers: HeaderMap,
    Json(data): Json<User>,
) -> Result<Json<UserUpdate>, (StatusCode, String)> {
    auth::authenticate(headers, &pool).await?;
    sqlx::query!(
        r#"
        INSERT INTO
          user_updates (
            user_id,
            account_id,
            age,
            country,
            email,
            first_name,
            goal,
            job_title,
            last_name,
            persona,
            project_or_company,
            telegram,
            twitter,
            referral,
            public_key,
            private_key
          )
        VALUES (
          (SELECT id FROM users WHERE public_key = $1),
          $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,
          $13, $14, $15, $16
        )
        RETURNING id,
          user_id,
          account_id,
          age,
          country,
          email,
          first_name,
          goal,
          job_title,
          last_name,
          persona,
          project_or_company,
          public_key,
          private_key,
          referral,
          telegram,
          twitter
        "#,
        public_key,
        data.account_id,
        data.age as i16,
        data.country,
        data.email,
        data.first_name,
        data.goal,
        data.job_title,
        data.last_name,
        data.persona,
        data.project_or_company,
        data.telegram,
        data.twitter,
        data.referral,
        data.public_key,
        data.private_key,
    )
    .fetch_one(&pool)
    .await
    .map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Could not update row: {e:?}"),
        )
    })
    .map(|user| {
        Json(UserUpdate {
            id: user.id,
            user_id: user.user_id,
            account_id: user.account_id,
            age: user.age as u8,
            country: user.country,
            email: user.email,
            first_name: user.first_name,
            goal: user.goal,
            job_title: user.job_title,
            last_name: user.last_name,
            persona: user.persona,
            project_or_company: user.project_or_company,
            public_key: user.public_key,
            referral: user.referral,
            telegram: user.telegram,
            twitter: user.twitter,
            private_key: user.private_key,
        })
    })
}

#[debug_handler(state = AppState)]
async fn get_user(
    State(AppState { pool }): State<AppState>,
    Path(public_key): Path<String>,
) -> Result<Json<User>, (StatusCode, String)> {
    sqlx::query!(
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
          private_key,
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
    })
    .map(|user| {
        Json(User {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            persona: user.persona,
            account_id: user.account_id,
            job_title: user.job_title,
            project_or_company: user.project_or_company,
            country: user.country,
            age: user.age as u8,
            goal: user.goal,
            twitter: user.twitter,
            telegram: user.telegram,
            referral: user.referral,
            public_key: user.public_key,
            private_key: user.private_key,
            change_status: serde_json::from_str(&user.change_status).unwrap_or_default(),
        })
    })
}

pub fn create_router() -> Router<AppState> {
    Router::new()
        .route("/users", post(create))
        .route("/users/:public_key", patch(change_owner).get(get_user))
}

pub async fn view_function_call(
    client: &JsonRpcClient,
    request: QueryRequest,
) -> anyhow::Result<Vec<u8>> {
    let RpcQueryResponse { kind, .. } = client
        .call(RpcQueryRequest {
            block_reference: BlockReference::Finality(Finality::Final),
            request,
        })
        .await?;

    let QueryResponseKind::CallResult(CallResult{result, ..}) = kind else {
      anyhow::bail!("Unexpected response kind");
    };

    Ok(result)
}

pub async fn check_balance(
    client: &JsonRpcClient,
    (key, id): (String, i32),
) -> anyhow::Result<i32> {
    let request = QueryRequest::CallFunction {
        account_id: "keypom.near".parse().unwrap(),
        method_name: "get_key_balance".to_string(),
        args: FunctionArgs::from(
            json!({
                "key": key,
            })
            .to_string()
            .into_bytes(),
        ),
    };

    let balance = view_function_call(client, request).await?;

    let balance = serde_json::from_slice::<u128>(&balance)?;

    if balance > 0 {
        Ok(id)
    } else {
        anyhow::bail!("Not enough balance")
    }
}

pub async fn sync_updated(pool: Arc<Pool<Postgres>>) {
    let users = sqlx::query!(
        r#"
        SELECT
          id,
          account_id,
          public_key,
          private_key
        FROM
          users
        WHERE
          change_status = $1
        "#,
        serde_json::to_string(&ChangeStatus::Pending).unwrap_or_default()
    )
    .fetch_all(&*pool)
    .await
    .expect("Could not get users");

    let client = JsonRpcClient::connect(NEAR_MAINNET_RPC_URL);

    let keys = users
        .iter()
        .map(|user| (user.public_key.clone(), user.id))
        .collect::<Vec<_>>();

    let transfered = futures::stream::iter(
        keys.into_iter()
            .map(|key| async { check_balance(&client, key).await }),
    )
    .buffer_unordered(10)
    .collect::<Vec<_>>()
    .await
    .into_iter()
    .filter_map(|x| x.ok())
    .collect::<Vec<_>>();

    let mut tx = pool.begin().await.expect("Could not start transaction");

    sqlx::query!(
        r#"
        UPDATE
          users
        SET
          change_status = $1,
          account_id = uu.account_id,
          age = uu.age,
          country = uu.country,
          email = uu.email,
          first_name = uu.first_name,
          goal = uu.goal,
          job_title = uu.job_title,
          last_name = uu.last_name,
          persona = uu.persona,
          project_or_company = uu.project_or_company,
          public_key = uu.public_key,
          private_key = uu.private_key,
          referral = uu.referral,
          telegram = uu.telegram,
          twitter = uu.twitter
        FROM
          user_updates AS uu
        WHERE
          users.id = ANY($2)
          AND users.id = uu.user_id;
        "#,
        serde_json::to_string(&ChangeStatus::Approved).unwrap_or_default(),
        &transfered,
    )
    .execute(&mut tx)
    .await
    .expect("Could not update users");

    sqlx::query!(
        r#"
        DELETE FROM
          user_updates
        WHERE
          user_id = ANY($1)
        "#,
        &transfered,
    )
    .execute(&mut tx)
    .await
    .expect("Could not delete user updates");

    tx.commit().await.expect("Could not commit transaction");
}
