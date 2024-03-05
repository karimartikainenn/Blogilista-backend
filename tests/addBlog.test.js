const { test } = require('node:test');
const supertest = require('supertest');
const app = require('../app');
const assert = require('assert');

const api = supertest(app);

test('can add a new blog', async () => {
  const newBlog = {
    title: 'Testi Blogi',
    author: 'Testi Tekijä',
    url: 'https://esimerkki.fi',
    likes: 12
  };

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const response = await api.get('/api/blogs');
  const addedBlog = response.body.find(blog => blog.title === newBlog.title && blog.author === newBlog.author);

  assert.ok(addedBlog);
});
