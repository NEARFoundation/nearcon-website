-- Add up migration script here
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
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
  public_key VARCHAR(255) NOT NULL,
  change_status VARCHAR(20) NOT NULL
);

CREATE INDEX users_account_id_idx ON users (account_id);

CREATE INDEX users_public_key_idx ON users (public_key);

CREATE INDEX users_change_status_idx ON users (change_status);
