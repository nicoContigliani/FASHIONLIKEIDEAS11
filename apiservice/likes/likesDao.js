const pool = require('../../services/database');
const bcrypt = require('bcrypt')





const getLikes = async () => {
    // console.log(id_user)
    try {
        const response = await pool.query('SELECT *  FROM public.likess  ORDER BY id_likes desc');
        user = response.rows
        return user
    } catch (error) {
        console.log(error)

    }
}

const getLikesId = async (id_user) => {
    // console.log(id_user)
    try {
        const response = await pool.query('SELECT *  FROM public.likess WHERE id_user =' + id_user + ' ORDER BY id_likes desc');
        user = response.rows
        return user
    } catch (error) {
        console.log(error)

    }
}

const saveLikes = async (resource) => {
    const { likes, id_user, id_post } = resource;
    try {
        const response = await pool.query('INSERT INTO public.likess (likes, id_user, id_post ) VALUES ($1,$2,$3)', [likes, id_user, id_post]);
        likess = response
        return likess
    } catch (error) {
        console.log(error)

    }
}




const deleteLikes = async (id_like) => {
    try {
        const response = await pool.query('DELETE FROM public.likess WHERE id_like = $1', [
            id_like
        ]);
        likes = response.rows
        return likes
    } catch (error) {
        console.log(error)

    }
}

const updateLikes = async (everything) => {
    console.log(everything)



    try {

        const { likes, id_user, id_post, id_likes } = everything;
        const response = await pool.query('UPDATE public.likess SET  likes= $1,id_user=$2,id_post=$3 where id_likes=$4', [
            likes, id_user, id_post, id_likes
        ]);


        const likess = response.rows
        return likess
    } catch (error) {
        console.log(error)

    }
}


module.exports = {
    // getBudgets,
    getLikes,
    getLikesId,
    saveLikes,
    deleteLikes,
    updateLikes,

}