const express = require('express');
const router = express.Router();


const stadistics = require('./stadisticsController');



router.get('/likeAll', stadistics.getlikeAll);
router.get('/notlikeAll', stadistics.getnotlikeAll);

// router.get('/:id', posts.get);
// router.post('/', posts.save);
// router.delete('/:id', posts.deletes);
// router.post('/:id', posts.update);






// /* GET bugdes listing. */
// router.get('/posts', function (req, res, next) {
//     res.send('live!!!');
// });


module.exports = router;
