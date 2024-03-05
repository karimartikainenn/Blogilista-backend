const mongoose = require("mongoose");

test("These are two blogs", async () => {
  const response = await api.get("/api/blogs");
  assert.strictEqual(response.body.length, 2);
});

test("The first blog is about HTTP methods", async () => {
    const response = await api.get("/api/blogs");

    const contents = response.body.map(r => r.title);
    assert.strictEqual(contents.includes("HTTP methods"), true);
});