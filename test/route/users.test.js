import { expect } from 'chai'
import request from 'supertest'
import express from 'express'
import { router} from '../../src/route/users_v2.js'

const app = express()
app.use(express.json())
app.use('/api', router)

describe('User Routes', () => {
  beforeEach(async () => {
    await request(app).delete('/api/users').send()
  })

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ id: 1, name: 'John Doe' })
      .expect(201)

    expect(res.body).to.have.property('id', 1)
    expect(res.body).to.have.property('name', 'John Doe')
  })

  it('should get all users', async () => {
    await request(app).post('/api/users').send({ id: 1, name: 'John Doe' })

    const res = await request(app)
      .get('/api/users')
      .expect(200)

    expect(res.body).to.be.an('array').that.has.lengthOf(1)
    expect(res.body[0]).to.have.property('id', 1)
    expect(res.body[0]).to.have.property('name', 'John Doe')
  })

  it('should get a user by ID', async () => {
    await request(app).post('/api/users').send({ id: 1, name: 'John Doe' })

    const res = await request(app)
      .get('/api/users/1')
      .expect(200)

    expect(res.body).to.have.property('id', 1)
    expect(res.body).to.have.property('name', 'John Doe')
  })

  it('should update a user by ID', async () => {
    await request(app).post('/api/users').send({ id: 1, name: 'John Doe' })

    const res = await request(app)
      .put('/api/users/1')
      .send({ name: 'Jane Doe' })
      .expect(200)

    expect(res.body).to.have.property('name', 'Jane Doe')
  })

  it('should delete a user by ID', async () => {
    await request(app).post('/api/users').send({ id: 1, name: 'John Doe' })

    const res = await request(app)
      .delete('/api/users/1')
      .expect(200)

    expect(res.body).to.have.property('result', 'User deleted')
  })

  it('should delete all users', async () => {
    await request(app).post('/api/users').send({ id: 1, name: 'John Doe' })

    const res = await request(app)
      .delete('/api/users')
      .expect(200)

    expect(res.body).to.have.property('result', 'Users deleted')
  })
})
