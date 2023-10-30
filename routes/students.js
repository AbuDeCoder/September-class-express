const express = require('express');
const router = express.Router();
const { createStudent, listAll } = require('../controllers/student-controller');
const { logModifiedName, titleCaseName }  = require('../middlewares/student');

router.post('/create', 
  titleCaseName,
  logModifiedName,
  createStudent
);


router.post('/find-by-id', function(request, response, next){
  const { name, children } = request.body;
  const id = request.query.id;
  //const userId = request.params.userId;*/
 
  return response.send([
    {
      id,
      router: 'students',
      method: 'POST',
      name,
      age: 45,
      children
    },
    {
      id,
      router: 'students',
      method: 'POST',
      name,
      age: 45, 
      children
    }
]);
});

/* GET students listing. */
router.get('/', listAll);

/* GET students listing. */
router.post('/:id/update', function(req, res, next) {
  const { id } = req.params;
  res.send({ success: true, id});
});


module.exports = router;
