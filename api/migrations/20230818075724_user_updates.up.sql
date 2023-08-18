-- Add up migration script here
CREATE TABLE IF NOT EXISTS user_updates (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  persona VARCHAR(255) NOT NULL,
  account_id VARCHAR(64) NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  project_or_company VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  age SMALLINT NOT NULL,
  goal VARCHAR(255) NOT NULL,
  twitter VARCHAR(255) NOT NULL,
  telegram VARCHAR(255) NOT NULL,
  referral VARCHAR(255) NOT NULL,
  public_key VARCHAR(255) NOT NULL
);

CREATE INDEX IF NOT EXISTS user_updates_user_id_idx ON user_updates(user_id);
