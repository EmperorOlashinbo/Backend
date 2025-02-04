import UsersModel from '../model/UsersModel.js'

export const controller = {}

/**
 * Middleware to verify the user ID.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {function} next - The next middleware function.
 * @param {string} id - The user ID as a string.
 */
controller.verifyUserId = (req, res, next, id) => {
  try {
    req.userId = UsersModel.verifyUserId(id)
    next()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

/**
 * Get all users.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.getUsers = (req, res) => {
  res.json(UsersModel.getAllUsers())
}

/**
 * Create a new user.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.createUser = (req, res) => {
  const user = req.body
  const newUser = UsersModel.createUser(user)
  res.status(201).json(newUser)
}

/**
 * Get a user by ID.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.getUserById = (req, res) => {
  const user = UsersModel.getUserById(req.userId)
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

/**
 * Update a user by ID.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.updateUser = (req, res) => {
  const user = UsersModel.updateUser(req.userId, req.body)
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

/**
 * Partially update a user by ID.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.partialUpdateUser = (req, res) => {
  const user = UsersModel.updateUser(req.userId, req.body)
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

/**
 * Delete a user by ID.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.deleteUser = (req, res) => {
  const result = UsersModel.deleteUser(req.userId)
  if (result) {
    res.json({ result: 'User deleted' })
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

/**
 * Delete all users.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.deleteUsers = (req, res) => {
  UsersModel.deleteUsers()
  res.json({ result: 'Users deleted' })
}
