DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  text TEXT UNIQUE NOT NULL,
  days TEXT NOT NULL,
  reminder INTEGER NOT NULL
);

