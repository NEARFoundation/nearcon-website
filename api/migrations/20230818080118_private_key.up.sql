-- Add up migration script here
ALTER TABLE
  users
ADD
  COLUMN private_key VARCHAR(255) NOT NULL;

ALTER TABLE
  user_updates
ADD
  COLUMN private_key VARCHAR(255) NOT NULL;
