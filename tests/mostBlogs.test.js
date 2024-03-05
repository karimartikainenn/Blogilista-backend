const { test, describe, after } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");
const mongoose = require("mongoose");

describe("most blogs", () => {
  test("when list has only one blog, returns the author with one blog", () => {
    const listWithOneBlog = [
      {
        author: "Esimerkki Kirjoittaja",
        blogs: 1,
      },
    ];
    const result = listHelper.mostBlogs(listWithOneBlog);
    assert.deepStrictEqual(result, {
      author: "Esimerkki Kirjoittaja",
      blogs: 1,
    });
  });

  test("when list has multiple blogs, returns the author with the most blogs", () => {
    const listWithMultipleBlogs = [
      { author: "Robert C. Martin", blogs: 3 },
      { author: "Edsger W. Dijkstra", blogs: 2 },
      { author: "Esimerkki Kirjoittaja", blogs: 1 },
    ];
    const result = listHelper.mostBlogs(listWithMultipleBlogs);
    assert.deepStrictEqual(result, {
      author: "Robert C. Martin",
      blogs: 3,
    });
  });

  test("when list is empty, returns null", () => {
    const emptyList = [];
    const result = listHelper.mostBlogs(emptyList);
    assert.deepStrictEqual(result, null);
  });
});

after(async () => {
  await mongoose.connection.close();
});
