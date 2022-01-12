const request = require('supertest')
const app = require('../app')

const preroute = require('../routes/routes')


const routePosts = require('../apiservice/postss/postsRoutes')





// const app = require('../bin/www')
// require('dotenv').config()

// let testServer;
// beforeAll(() => {
//     require('dotenv').config()

//     testServer = app.listen(4000)
// })

// affterAll((done) => {
//     testServer = app.close(done)
// })



// ingresa por una ruta get,post,post:id,delete


//la ruta va a un controlador 
describe('get /api/posts', () => {

    it('should retur  all posts', async () => {
        const response = await request(app).get('/api/auth/login')
        expect(response.error).not.toBeUndefined();
        // expect(response.error).toBe(true)
    });


});





// describe('/api/posts', () => {


//     // it('get response with succes code 200', async () => {
//     //     const response = await request(app).get('/api/posts');
//     //     expect(response.statusCode).toBe(200)
//     // });
// });




// El modelo .crud(req.params.id)

//modelo -->get va a Dao.get y pasa id_user
// dao tiene la consulta - debe tener conexion base de datos 


// describe('case get', () => {


//     // routes/routes auth debe recibir token y pasar 


    //->ruta get

    //->controlador al get

    //modelo->get (req.param.id) -> Dao

    //Dao tiene la revisar que tiene la base de datos, consulta  donde se ingresa id_user  try/error , module.export={get}, devuelve al modelo

    //modelo retorna la resltante al controlador () return element ???

    // en el controlador la resultante del modelo que vino al controlador se pasa a dto

    //en DTO se le da el formato esperado para la resultante que va a la vista, eliminando lo que no se se utiliza

    // El control devuelve status 400-data:0 y 200-data:elementos













