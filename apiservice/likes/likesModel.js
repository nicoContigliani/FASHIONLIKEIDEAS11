const likesDao = require('./likesDao');
const bcrypt = require('bcrypt')



const getLikes = async () => {
  const likes = await likesDao.getLikes()
  return likes
}

const getLikesId = async (id_user) => {
  const likes = await likesDao.getLikes(id_user)
  return likes
}


const saveBudget = async (resource) => {
  const budget = await budgetDao.saveBudget(resource)
  return budget
}
const deleteBudget = async (id_budget) => {
  const budget = await budgetDao.deleteBudget(id_budget)
  return budget
}
const updateBudget = async (everything) => {
  const budget = await budgetDao.updateBudget(everything)
  return budget
}



module.exports = {
  getLikes,
  getLikesId,
  saveBudget,
  deleteBudget,
  updateBudget
}