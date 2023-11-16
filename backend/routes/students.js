const express = require('express');
const router = express.Router();
const path = require('path');
const { createStudent, listAll } = require('../controllers/student-controller');
const { logModifiedName, titleCaseName }  = require('../middlewares/student');
const multer = require('multer');
const upload = multer({ 
  storage: multer.diskStorage({
    destination: function(req, file, cb){
      try{
       cb(null, path.join(__dirname, '../', 'public', 'images'));
      }catch(error){ }
    },
    filename: function(req, file, cb){
      console.log('mimetype',file.mimetype );
      req.body.imagePath = 'http://localhost:3009/images/'+file.originalname;
      cb(null , file.originalname/*'myfile.'+file.mimetype.split('/')[1]*/);
    }
  })
});

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

router.post('/upload-profile', upload.single('profileImage'), function (request, response){
 return response.status(200).send("File uploaded successfully")
});

module.exports = router;
