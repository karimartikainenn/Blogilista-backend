const { test, describe, after } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");
const mongoose = require("mongoose");

describe("favorite blog", () => {
  test("when list has only one blog, return the blog", () => {
    const listWithOneBlog = [
      {
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        likes: 5,
      },
    ];
    const result = listHelper.favoriteBlog(listWithOneBlog);
    assert.deepStrictEqual(result, {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      likes: 5,
    });
  });

  test("when list has multiple blogs, returns the blog with most likes", () => {
    const listWithMultipleBlogs = [
      {
        title: "React patterns",
        author: "Michael Chan",
        likes: 7,
      },
      {
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        likes: 5,
      },
      {
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        likes: 12,
      },
    ];
    const result = listHelper.favoriteBlog(listWithMultipleBlogs);
    assert.deepStrictEqual(result, {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12,
    });
  });

  test("when list is empty, returns null", () => {
    const emptyList = [];
    const result = listHelper.favoriteBlog(emptyList);
    assert.strictEqual(result, null);
  });
});

after(async () => {
  await mongoose.connection.close();
});
