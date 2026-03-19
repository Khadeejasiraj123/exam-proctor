  DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) DEFAULT 'user' NOT NULL,
    "proof" VARCHAR(255) NOT NULL
  );


  DROP TABLE IF EXISTS tests CASCADE;
  CREATE TABLE "tests" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "type" VARCHAR(255)
    );

  DROP TABLE IF EXISTS questions CASCADE;
  CREATE TABLE "questions" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "test_id" INTEGER REFERENCES tests(id) ON DELETE CASCADE,
    "question" VARCHAR(255),
    "answer1" VARCHAR(255),
    "answer2" VARCHAR(255),
    "answer3" VARCHAR(255),
    "answer4" VARCHAR(255),
    "correct_answer" VARCHAR(255)
  );

  DROP TABLE IF EXISTS user_answers CASCADE;
  CREATE TABLE "user_answers" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "test_id" INTEGER REFERENCES tests(id) ON DELETE CASCADE,
    "question_id" INTEGER REFERENCES questions(id) ON DELETE CASCADE,
    "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
    "response" VARCHAR(255)
  );

  DROP TABLE IF EXISTS appointments CASCADE;
  CREATE TABLE "appointments" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "student_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
    "proctor_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
    "test_id" INTEGER REFERENCES tests(id) ON DELETE CASCADE,
    "start_date" DATE,
    "final_score" NUMERIC(3,2) default NULL
  );

  DROP TABLE IF EXISTS messages CASCADE;
  CREATE TABLE "messages" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "appointment_id" INTEGER REFERENCES appointments(id) ON DELETE CASCADE,
    "student_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
    "timestamp" timestamp,
    "message" VARCHAR(255)
  );