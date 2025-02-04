/**
  * User model for handling user-related operations.
  */
class UsersModel {
  #users = []
  /**
  * Verify and convert user ID.
  * @param {string} id - The user ID as a string.
  * @returns {number} - The verified user ID as an integer.
  * @throws {Error} - Throws an error if the ID format is invalid.
  */
  verifyUserId(id) {
  }

  /**
  * Get all users.
  * @returns {Array<Object>} - Array of all users.
  */
  getAllUsers() {
  }

  /**
  * Create a new user.
  * @param {Object} user - The user object to be created.
  * @returns {Object} - The created user object.
  */
  createUser(user) {
  }

  /**
  * Get a user by ID.
  * @param {number} userId - The ID of the user to retrieve.
  * @returns {Object|null} - The user object if found, otherwise null.
  */
  getUserById(userId) {
  }

  /**
  * Update a user by ID.
  * @param {number} userId - The ID of the user to update.
  * @param {Object} userData - The new data for the user.
  * @returns {Object|null} - The updated user object if found, otherwise null.
  */
  updateUser(userId, userData) {
  }

  /**
   * Delete a user by ID.
   * @param {number} userId - The ID of the user to delete.
   * @returns {boolean} - True if the user was deleted, otherwise false.
   */
  deleteUser(userId) {
  }

  /**
  * Delete all users.
  */
  deleteUsers() {
  }
}
  
export default new UsersModel();
  