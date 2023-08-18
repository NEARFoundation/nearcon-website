-- Add down migration script here
DROP INDEX IF EXISTS user_updates_user_id_idx;

DROP TABLE IF EXISTS user_updates;
