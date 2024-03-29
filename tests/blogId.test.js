const { test, after } = require("node:test");
const supertest = require("supertest");
const app = require("../app");
const assert = require("assert");
const mongoose = require("mongoose");

const api = supertest(app);

test("returned blogs have id field instead of _id", async () => {
  const response = await api.get("/api/blogs");

  response.body.forEach((blog) => {
    assert.ok(blog.id);
    assert.strictEqual(blog._id, undefined);
  });
});

after(async () => {
  await mongoose.connection.close();
});
