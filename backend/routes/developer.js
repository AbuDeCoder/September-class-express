const express = require('express');
const router = express.Router();
const {Developer, Sequelize, sequelize} = require("../database/models")
const { createDeveloper, listAll } = require('../controllers/developer-controller');
const { logModifiedName, titleCaseName }  = require('../middlewares/developer');

router.post('/create', 
  // titleCaseName,
  // logModifiedName,
  createDeveloper
)

router.post('/find-by-id', function(request, response, next){
  const { name, language } = request.body;
  const id = request.query.id;
  //const userId = request.params.userId;*/
 
  return response.send([
    {
      id,
      router: 'developers',
      method: 'POST',
      name,
      age: 45,
      language
    },
    {
      id,
      router: 'developer',
      method: 'POST',
      name,
      age: 45, 
      language
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
