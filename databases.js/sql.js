//========================== LINKS ==========================
https://database.guide/the-3-types-of-relationships-in-database-design/
https://git.generalassemb.ly/wdi-wc-march2018/intro-sql
https://kripken.github.io/sql.js/GUI/  sandbox.

INTRO (all the things you can do): https://git.generalassemb.ly/wdi-wc-march2018/intro-sql

//========================== DEFINITIONS ==========================

1. SQL, Structured Query Language, is a specialized language used to create, manipulate, and query tables in relational databases. It is a big spread of information, like a spreadsheet. Its a relational spreadsheet.

2. non-sql (ex: mongoose) = more of a collection you have to sort through.

3. In sql, and not in mongo, is a primary key. The key can be used in several different partts of the database.

4. TABLE = Collection in Mongo. same thing. Collections had documents. Here, you have ??

5. Each table is organized like a spreadsheet with a Row (also known as "record") for each data item and with attributes of those items arranged in columns.


SHELL v. bash
 your shell (or atom) is for manipulating files (i.e. insert, alter, etc.)
 your bash (i.e. terminal) is for running the file. You want to connect the file to a database and then leave it alone.


//========================== TERMINAL INSTRUCTIONS ==========================

1. psql   gets you in the shell

FIRST, CONNECT TO YOUR DATABASE
2. \c name of database  (ex: \c partyPotensh)
3. \l shows the list of databases.


4.TO GET OUT:  \q     exits the shell OR kills the server. You need to do this command to get out of your shell BEFORE checking your database.


AFTER RUNNING FILES, you can make queries in your shell.

To see your database after making a command: GO IN YOUR SHELL (not bash)
SELECT * FROM table name;  ex: SELECT * FROM authors;



//========================== BASH  INSTRUCTIONS ==========================

tab over to get in bash. Your main reason

IN BASH (NOT IN YOUR SHELL)
5. To run a .sql file, use the following command in your terminal:
psql -f <file_name>  (ex: psql -f example.sql)  note: -f means file name.

6. To run a sql file against a specific database, use:

psql -f <file_name> -d <database_name>






//========================  CREATE A DATABASE EXAMPLE  ========================

example....
Let's create our first relational database (RDB) using the Terminal.
1. $ createdb practice

Then let's connect to it by name so we can practice our SQL.
2. $ psql practice

In your Terminal, you should see a prompt like the following:
practice=#

3. To quit/exit the database console, type:
\q


//======================== PRIMARY KEY =====================================


Primary Key: The primary key of a relational table uniquely identifies each record in the table. This column is automatically assigned a btree index in postgres.

 The primary key is similar to the :/id part in mongo.

// ======================= DATA DEFINITIONS ======================

Data Definition Language

Define and update databases structure
CREATE, ALTER, RENAME, DROP, TRUNCATE
Data Types
Constraints
Data Manipulation Language

CRUD data within the database
SELECT, INSERT, UPDATE, DELETE, ORDER BY
UPSERT (attempts an UPDATE, or on failure, INSERT) is part of SQL 3 but not yet in Postgres
Queries
Aggregation: GROUP BY, SUM, AVG, MIN
Data Control Language (beyond our scope)

GRANT access to parts of the table


// ======================= TABLE EXAMPLE ======================

CREATE TABLE author (
  id SERIAL primary key, //NOTICE: key is lowercase, underscored. Value is CAPS.
  firstName VARCHAR(255),
  year_of_birth INTEGER,
  year_of_death NUMERIC DEFAULT 'NaN',
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT now()
); //NOTICE: the ; is needed at the end.



// ======================= ALTERING TABLES EXAMPLES ======================

From your command line in your shell, make a new terminal tab.
s
FIRST, make sure your top two lines are commented out. Otherwise, itll keep creating and dropping databases.

SECOND, make sure your create table and all the schema is commented out. Otherwise, itll keep creating tables.

AFTER EACH STEP: you can type SELECT * FROM (table name)
            ex: SELECT * FROM author

ADD COLUMN
//ALTER TABLE author ADD COLUMN last_name VARCHAR(255);

DROP COLUMN
//ALTER TABLE author DROP COLUMN description;

CHANGE COLUMN TITLE(?)
// ALTER TABLE author RENAME TO authors;

RENAME
// ALTER TABLE authors RENAME COLUMN firstName TO first_name;

// DROP TABLE
DROP TABLE authors;





// ======================= RELATIONSHIPS ======================

THREE TYPES of relationships in DATABASES
1. one-to-one
2. one-to-many or many-to-one
3. many-to-many
