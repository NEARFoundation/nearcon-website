use axum::http::{HeaderMap, StatusCode};
use sqlx::{Pool, Postgres};

pub async fn authenticate(
    headers: HeaderMap,
    pool: &Pool<Postgres>,
) -> Result<(), (StatusCode, String)> {
    let auth_header = headers.get("Authorization").ok_or((
        StatusCode::UNAUTHORIZED,
        "No Authorization header".to_string(),
    ))?;

    let bearer_token = auth_header.to_str().map_err(|_| {
        (
            StatusCode::UNAUTHORIZED,
            "Invalid Authorization header".to_string(),
        )
    })?;

    let token = bearer_token.trim_start_matches("Bearer ");

    let user = sqlx::query!(
        r#"
        SELECT * FROM clients
        WHERE token = $1
        "#,
        token
    )
    .fetch_one(pool)
    .await
    .map_err(|_| (StatusCode::UNAUTHORIZED, "Invalid token".to_string()))?;

    if user.active {
        Ok(())
    } else {
        Err((StatusCode::UNAUTHORIZED, "Client is not active".to_string()))
    }
}
