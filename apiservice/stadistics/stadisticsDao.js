const pool = require('../../services/database');
const bcrypt = require('bcrypt')




const getstadisticsT = async () => {
    // console.log(id_user)
    try {
        // const response = await pool.query('select p.id_post,p.title,count(l.id_post) as viewss_l from likess l inner join post p on l.id_post =p.id_post where l.likes like ' % t % ' group by p.id_post order by p.id_post desc;');
        const response = await pool.query(`select p.id_post,p.title,count(l.id_post) as viewss_l from likess l inner join post p on l.id_post =p.id_post where l.likes like  '%` + 't' + `%'  group by p.id_post order by p.id_post desc;`);

        re = response.rows
        return re
    } catch (error) {
        console.log(error)

    }
}

const getstadisticsF = async () => {
    // console.log(id_user)
    try {
        const response = await pool.query(`select p.id_post,p.title,count(l.id_post) as viewss_l from likess l inner join post p on l.id_post =p.id_post where l.likes like  '%` + 'f' + `%'  group by p.id_post order by p.id_post desc;`);

        re = response.rows
        return re
    } catch (error) {
        console.log(error)

    }
}




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

const updatePost = async (everything) => {
    console.log(everything)
    try {

        const { title, bodys, urlimg, id_post } = everything;
        const response = await pool.query('UPDATE public.post SET title = $1, bodys = $2,urlimg =$3 where id_post = $4', [
            title, bodys, urlimg, id_post
        ]);

        budgets = response.rows
        return budgets
    } catch (error) {
        console.log(error)

    }
}


module.exports = {
    // getBudgets,
    getstadisticsT,
    getstadisticsF,

    getPost,
    savePost,
    deletePost,
    updatePost,

}