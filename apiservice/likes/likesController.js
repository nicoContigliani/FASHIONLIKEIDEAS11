const likesModel = require('./likesModel')
const likesDto = require('./likesDto')



const getId = async (req, res) => {
    try {
        const id_user = parseInt(req.params.id);
        const likes = await likesModel.getLikesId(id_user);

        const likesRow = await likesDto.singles(likes)
        res.status(200).json(
            {
                data: likesRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400

            }
        );
    }

}


const get = async (req, res) => {
    try {
        const likes = await likesModel.getLikes();

        const likesRow = await likesDto.singles(likes)
        res.status(200).json(
            {
                data: likesRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400

            }
        );
    }

}



const save = async (req, res) => {
    try {
        const likesSave = await likesModel.saveLikes(req.body);
        const id_user = parseInt(req.body.id_user)

        const likes = await likesModel.getLikesId(id_user);
        const likesRow = await likesDto.singles(likes)
        res.status(200).json(
            {
                data: likesRow,
                status: 200
            }
        );

    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }


}

const deletes = async (req, res) => {
    try {
        const id_like = parseInt(req.params.id);
        const id_user = req.body.id_user
        const likess = await budgetModel.deleteBudget(id_budget);

        const likes = await budgetModel.getBudget(id_user);
        const likesRow = await budgetDto.singles(likes)
        res.status(200).json(
            {
                data: likesRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }




}
const update = async (req, res) => {
    try {
        const id_likes = parseInt(req.params.id);
        const id_user = parseInt(req.body.id_user);
        const element = req.body;
        const everything = { ...element, id_likes }
        const likess = await likesModel.updateLikes(everything);

        const likes = await likesModel.getLikesId(id_user);

        const likesRow = await likesDto.singles(likes)
        res.status(200).json(
            {
                data: likesRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }
}


module.exports = {
    getId,
    get,
    save,
    deletes,
    update
}