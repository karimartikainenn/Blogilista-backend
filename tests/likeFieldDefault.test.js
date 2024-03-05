const { test, after } = require("node:test");
const supertest = require("supertest");
const app = require("../app");
const assert = require("assert");
const mongoose = require("mongoose");

const api = supertest(app);

test("if likes field is not provided, it is set to 0", async () => {
  const newBlog = {
    title: "Testi Blogi",
    author: "Testi Tekijä",
    url: "https://esimerkki.fi",
  };

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const response = await api.get("/api/blogs");
  const addedBlog = response.body.find(
    (blog) => blog.title === newBlog.title && blog.author === newBlog.author
  );

  assert.strictEqual(addedBlog.likes, 0);
});

after(async () => {
  await mongoose.connection.close();
});
