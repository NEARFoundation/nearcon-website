-- Add up migration script here
CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  token VARCHAR(255) NOT NULL
);

CREATE INDEX IF NOT EXISTS clients_token_idx ON clients (token);
