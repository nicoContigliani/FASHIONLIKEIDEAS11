const stadisticsDao = require('./stadisticsDao');
const bcrypt = require('bcrypt')




const getStadisticsT = async () => {
  const postsget = await stadisticsDao.getstadisticsT()
  return postsget
}
const getStadisticsF = async () => {
  const postsget = await stadisticsDao.getstadisticsF()
  return postsget
}







const getPost = async () => {
  const postsget = await postsDao.getPost()
  return postsget
}

const getIdPost = async (id_user) => {
  const postsget = await postsDao.getPost(id_user)
  return posts
}



const savePost = async (resource) => {
  const posts = await postsDao.savePost(resource)
  return posts
}
const deletePost = async (id_budget) => {
  const budget = await postsDao.deletePost(id_budget)
  return budget
}
const updateBudget = async (everything) => {
  const budget = await postsDao.updatePost(everything)
  return budget
}



module.exports = {

  getStadisticsT,
  getStadisticsF,
  getPost,
  getIdPost,
  savePost,
  deletePost,
  updateBudget
}