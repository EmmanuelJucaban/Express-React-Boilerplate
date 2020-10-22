const {
  findAllUsers,
  findUserByIdQuery,
  insertUserQuery,
  deleteUserByIdQuery,
} = require('./userQueries');
const connection = require('../config/connection');

const insertUserToDb = async (username, password) => {
  try {
    // Whenever we do an insert, an update or a delete,
    // we dont get the data that we modified back
    // what we get back is how many rows were affected
    // for the insert, it tells the id of the data that was just inserted
    const [result] = await connection.query(insertUserQuery, [username, password]);
    const [userResult] = await connection.query(findUserByIdQuery, result.insertId);
    return userResult[0];
  } catch (e) {
    throw new Error(e);
  }
};


const findAllUsersFromDb = async () => {
  try {
    const [users] = await connection.query(findAllUsers);
    return users;
  } catch (e) {
    throw new Error(e);
  }
};

const findUserByIdFromDb = async (userId) => {
  try {
    const [userResult] = await connection.query(findUserByIdQuery, userId);
    return userResult[0];
  } catch (e) {
    throw new Error(e);
  }
}

// Write the ORM for getting only a single user from the database by their ID
// This function should take an ID
// Make sure your function returns only that user that we were looking for
// and not an array that contains the user that we were looking for
module.exports = {
  insertUserToDb,
  findAllUsersFromDb,
  findUserByIdFromDb,
}
