use axum::{debug_handler, extract::State, http::StatusCode, routing::get, Json, Router};

#[derive(Clone)]
pub struct AppState {
    pub pool: sqlx::PgPool,
}

#[debug_handler]
async fn get_hello_from_db(
    State(AppState { pool }): State<AppState>,
) -> Result<Json<String>, (StatusCode, String)> {
    sqlx::query_scalar!(
        r#"
        SELECT 'Hello from DB!'
        "#,
    )
    .fetch_one(&pool)
    .await
    .map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Could not fetch from db: {e:?}"),
        )
    })
    .map(|hello| Json(hello.unwrap_or_default()))
}

pub fn create_router() -> Router<AppState> {
    Router::new()
        .route("/", get(get_hello_from_db))
        .route("/*any", get(get_hello_from_db))
}
