import { expect } from 'chai'
import UsersModel from '../../src/model/UsersModel.js'

describe('UsersModel', () => {
  beforeEach(() => {
    UsersModel.deleteAllUsers()
  })

  it('should create a user', () => {
    const user = { id: 1, name: 'John Doe' }
    const newUser = UsersModel.createUser(user)
    expect(newUser).to.deep.equal(user)
  })

  it('should get all users', () => {
    const user = { id: 1, name: 'John Doe' }
    UsersModel.createUser(user)
    const users = UsersModel.getAllUsers()
    expect(users).to.have.lengthOf(1)
    expect(users[0]).to.deep.equal(user)
  })

  it('should get a user by ID', () => {
    const user = { id: 1, name: 'John Doe' }
    UsersModel.createUser(user)
    const fetchedUser = UsersModel.getUserById(1)
    expect(fetchedUser).to.deep.equal(user)
  })

  it('should update a user by ID', () => {
    const user = { id: 1, name: 'John Doe' }
    UsersModel.createUser(user)
    const updatedUser = UsersModel.updateUser(1, { name: 'Jane Doe' })
    expect(updatedUser.name).to.equal('Jane Doe')
  })

  it('should delete a user by ID', () => {
    const user = { id: 1, name: 'John Doe' }
    UsersModel.createUser(user)
    const result = UsersModel.deleteUser(1)
    expect(result).to.be.true
    const users = UsersModel.getAllUsers()
    expect(users).to.have.lengthOf(0)
  })
})
