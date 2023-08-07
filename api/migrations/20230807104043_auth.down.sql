-- Add down migration script here
DROP INDEX IF EXISTS clients_token_idx;

DROP TABLE IF EXISTS clients;
