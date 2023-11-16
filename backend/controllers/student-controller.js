const { Student, Sequelize, sequelize } = require('../database/models')
const { Op } = Sequelize;
async function  createStudent(request, response){
    try{
       const student = await Student.create(request.body);
       return response.status(201).send({ student})
    } catch(error) {
        console.error(error);
        return response.status(500).send({ error })
    }
}

async function  listAll(request, response){
    try{
       const students = await Student.findAll();
       return response.status(200).send({ students})
    } catch(error) {
        console.error(error);
        return response.status(500).send({ error })
    }
}

async function  login(request, response){
    try{
       const { studentNumber, password } = req.body;
       //find a user matching studentNumber/username/email/telephone/employedId/
        const student = await Student.findOne({ 
            where: { 
                studentNumber: {
                    [Op.eq]: studentNumber
                }
            }
        });
        
        return response.status(200).send({ students})
    } catch(error) {
        console.error(error);
        return response.status(500).send({ error })
    }
}

module.exports = {
    createStudent,
    listAll,
    login
}