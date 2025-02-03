it('should return 404 for non-existent route', async () => {
  const res = await request.get('/not-found')
  expect(res.status).to.equal(404)
  expect(res.body).to.have.property('status')
  expect(res.body.status).to.equal(404)
})
