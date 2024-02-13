const mongoose = require("mongoose");
require("dotenv").config();

const { TEST_DB_NAME, TEST_DB_USER, TEST_DB_PASSWORD, TEST_DB_PORT } =
  process.env;

const connectionString = `${TEST_DB_PORT}/${TEST_DB_NAME}`;

mongoose
  .connect(connectionString, {
    auth: {
      username: TEST_DB_USER,
      password: TEST_DB_PASSWORD,
    },
  })
  .then(() => {
    console.log("Connected to test database successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to test database:", err);
  });
