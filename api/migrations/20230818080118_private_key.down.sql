-- Add down migration script here
ALTER TABLE
  user_updates DROP COLUMN private_key;

ALTER TABLE
  users DROP COLUMN private_key;
