-- Add down migration script here
DROP INDEX IF EXISTS users_public_key_idx;

DROP INDEX IF EXISTS users_change_status_idx;

DROP INDEX IF EXISTS users_account_id_idx;

DROP TABLE IF EXISTS users;
