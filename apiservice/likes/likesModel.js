const likesDao = require('./likesDao');
const bcrypt = require('bcrypt')



const getLikes = async () => {
  const likes = await likesDao.getLikes()
  return likes
}

const getLikesId = async (id_user) => {
  const likes = await likesDao.getLikesId(id_user)
  return likes
}


const saveLikes = async (resource) => {
  const likes = await likesDao.saveLikes(resource)
  return likes
}
const deleteLikes = async (id_budget) => {
  const budget = await likesDao.deleteLikes(id_budget)
  return budget
}
const updateLikes = async (everything) => {
  const budget = await likesDao.updateLikes(everything)
  return budget
}



module.exports = {
  getLikes,
  getLikesId,
  saveLikes,
  deleteLikes,
  updateLikes
}