use api::AppState;
use tower::ServiceBuilder;
use tower_http::{
    cors::{Any, CorsLayer},
    trace::TraceLayer,
};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let database_url = std::env::var("DATABASE_URL").expect("Expected DATABASE_URL to be set!");
    let port = std::env::var("PORT").unwrap_or("3000".to_string());
    let address = format!("0.0.0.0:{port}");

    let pool = sqlx::postgres::PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await?;

    sqlx::migrate!("./migrations").run(&pool).await?;

    let state = AppState { pool };

    tracing_subscriber::fmt::init();

    let trace = TraceLayer::new_for_http();
    let cors = CorsLayer::new().allow_methods(Any).allow_origin(Any);
    let middleware = ServiceBuilder::new().layer(trace).layer(cors);

    let app = api::create_router().with_state(state).layer(middleware);

    axum::Server::bind(&address.parse().unwrap())
        .serve(app.into_make_service())
        .await?;

    eprintln!("Server started!");

    Ok(())
}
