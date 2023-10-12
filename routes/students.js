var express = require('express');
var router = express.Router();


router.get('/find-by-id', function(request, response, next){
  const { name, children } = request.body;
  const id = request.query.id;
  //const userId = request.params.userId;*/
 
  return response.send([
    {
      id,
      name,
      age: 45,
      children
    },
    {
      id,
      name,
      age: 45,
      children
    }
]);
});

/* GET students listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET students listing. */
router.post('/:id/update', function(req, res, next) {
  const { id } = req.params;
  res.send({ success: true, id});
});


module.exports = router;
