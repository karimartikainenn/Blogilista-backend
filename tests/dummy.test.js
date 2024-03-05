const { test, describe, after } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");
const mongoose = require("mongoose");

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  assert.strictEqual(result, 1);
});

after(async () => {
  await mongoose.connection.close();
});
