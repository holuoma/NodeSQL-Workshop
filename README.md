**_HOW TO MAKE THIS SANDBOX WORK?_**

1/ **CREATE A DB INSTANCE ON [ELEPHANT SQL](https://api.elephantsql.com/)**

2/ **ADD DB CREDENTIALS AS SECRETS ON CODESANDBOX**

Store the ElephantSQL credentials as server secrets (env) on codesandbox
see: https://codesandbox.io/docs/secrets
see: database/client.js

3/ **CREATE A USERS TABLE**:

CREATE TABLE users (id serial primary key, firstname varchar(255), lastname varchar(255));
INSERT INTO users (firstname, lastname) VALUES ('Jack', 'Welsh');
INSERT INTO users (firstname, lastname) VALUES ('John', 'Doe');
INSERT INTO users (firstname, lastname) VALUES ('Jill', 'Valentine');
INSERT INTO users (firstname, lastname) VALUES ('Mike', 'Smith');
INSERT INTO users (firstname, lastname) VALUES ('Dan', 'Apara');

Alternatively you can also call GET route /demo/recreate to recreate the table users
