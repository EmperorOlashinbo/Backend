import { app } from '../../src/express.js' 
import { expect } from 'chai';
import supertest from 'supertest'

const request = supertest(app)

describe('Express Hello Routes', () => {
  it('should return "Hello World" for GET /', async () => {
    const res = await request.get('/')
    expect(res.status).to.equal(200)
    expect(res.text).to.contain('Hello World')
  })
})
