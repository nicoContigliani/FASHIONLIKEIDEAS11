const pool = require('../../services/database');
const bcrypt = require('bcrypt')





const getPost = async () => {
    // console.log(id_user)
    try {
        const response = await pool.query('SELECT *  FROM public.post p ORDER BY id_post desc;');
        post = response.rows
        return post
    } catch (error) {
        console.log(error)

    }
}


const getIdPost = async (id_user) => {
    // console.log(id_user)
    try {
        const response = await pool.query('SELECT *  FROM public.budgets WHERE id_user =' + id_user + ' ORDER BY id_budget desc');
        user = response.rows
        return user
    } catch (error) {
        console.log(error)

    }
}





const savePost = async (resource) => {
    const { title, bodys, urlimg } = resource;
    try {
        const response = await pool.query('INSERT INTO public.post (title, bodys, urlimg) VALUES ($1,$2,$3)', [title, bodys, urlimg]);

        posts = response.rows
        return posts
    } catch (error) {
        console.log(error)

    }
}




const deletePost = async (id_post) => {
    try {
        const response = await pool.query('DELETE FROM public.post WHERE id_post = $1', [
            id_post
        ]);
        post = response.rows
        return post
    } catch (error) {
        console.log(error)

    }
}

const updateBudget = async (everything) => {
    console.log(everything)
    try {

        const { concept, amount, date, id_user, type, id_budget } = everything;
        const response = await pool.query('UPDATE public.budgets SET concept = $1, amount = $2,"date" =$3, id_user=$4 , "type"=$5 where id_budget = $6', [
            concept, amount, date, id_user, type, id_budget
        ]);


        budgets = response.rows
        return budgets
    } catch (error) {
        console.log(error)

    }
}


module.exports = {
    // getBudgets,
    getPost,
    savePost,
    deletePost,
    updateBudget,

}