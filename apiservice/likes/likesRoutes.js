const express = require('express');
const router = express.Router();


const likes = require('./likesController');


router.get('/', likes.get);
router.get('/:id', likes.getId);
router.post('/', likes.save);
router.delete('/:id', likes.deletes);
router.post('/:id', likes.update);






// /* GET bugdes listing. */
// router.get('/arbol', function(req, res, next) {
//   res.send('no se inunda másssss');
// });



module.exports = router;
