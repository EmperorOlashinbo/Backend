import { expect } from 'chai'
import UsersModel from '../../src/model/UsersModel.js'
import { controller } from '../../src/controller/usersController.js'

describe('UserController', () => {
  let req, res

  beforeEach(() => {
    req = {}
    res = {
      json: (data) => res.body = data,
      status: (code) => {
        res.statusCode = code
        return res
      },
    }
    UsersModel.deleteAllUsers()
  })

  describe('getUsers', () => {
    it('should get all users', () => {
      controller.getUsers(req, res)
      expect(res.body).to.be.an('array').that.is.empty
    })
  })

  describe('createUser', () => {
    it('should create a new user', () => {
      req.body = { id: 1, name: 'John Doe' }
      controller.createUser(req, res)
      expect(res.statusCode).to.equal(201)
      expect(res.body).to.have.property('id', 1)
      expect(res.body).to.have.property('name', 'John Doe')
    })
  })

  describe('getUserById', () => {
    it('should get a user by ID', () => {
      UsersModel.createUser({ id: 1, name: 'John Doe' })
      req.userId = 1
      controller.getUserById(req, res)
      expect(res.body).to.have.property('id', 1)
      expect(res.body).to.have.property('name', 'John Doe')
    })

    it('should return error if user not found', () => {
      req.userId = 999
      controller.getUserById(req, res)
      expect(res.statusCode).to.equal(404)
      expect(res.body).to.have.property('error', 'User not found')
    })
  })

  describe('updateUser', () => {
    it('should update a user by ID', () => {
      UsersModel.createUser({ id: 1, name: 'John Doe' })
      req.userId = 1
      req.body = { name: 'Jane Doe' }
      controller.updateUser(req, res)
      expect(res.body).to.have.property('name', 'Jane Doe')
    })

    it('should return error if user not found', () => {
      req.userId = 999
      req.body = { name: 'Jane Doe' }
      controller.updateUser(req, res)
      expect(res.statusCode).to.equal(404)
      expect(res.body).to.have.property('error', 'User not found')
    })
  })

  describe('deleteUser', () => {
    it('should delete a user by ID', () => {
      UsersModel.createUser({ id: 1, name: 'John Doe' })
      req.userId = 1
      controller.deleteUser(req, res)
      expect(res.body).to.have.property('result', 'User deleted')
    })

    it('should return error if user not found', () => {
      req.userId = 999
      controller.deleteUser(req, res)
      expect(res.statusCode).to.equal(404)
      expect(res.body).to.have.property('error', 'User not found')
    })
  })

  describe('deleteUsers', () => {
    it('should delete all users', () => {
      UsersModel.createUser({ id: 1, name: 'John Doe' })
      controller.deleteUsers(req, res)
      expect(res.body).to.have.property('result', 'Users deleted')
      expect(UsersModel.getAllUsers()).to.be.an('array').that.is.empty
    })
  })
})
