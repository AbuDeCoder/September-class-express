import { Table, Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [visible, setVisible] = useState(false);
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null)

  useEffect(() => {
    fetchStudents()
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:3009/students');
    if (response) {
      setStudents(response.data.students);
    }
  }
  const openAddStudentDialog = () => {
    setVisible(true)

  }

  const closeAddStudentDialog = () => {
    setVisible(false)
  }

  const saveStudent = (event)=>{
        event.preventDefault();
        const form = formRef.current;
        
        if(form.checkValidity() === true){
          const student = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            otherNames: form.otherNames.value,
            email: form.email.value,
            telephone: form.telephone.value,
            dob: form.dob.value,
            studentNumber: form.studentNumber.value,
            registrationNumber: form.registrationNumber.value,
            gender: form.gender.value,
          }
  
          console.log('student', student);
          setVisible(false);
          form.reset();
        }
        setValidated(true);

        
  }

  const deleteStudent = (student)=>{
    const confirm = window.confirm('Are you sure you want to delete this student?');
    if(confirm){


    }
  }

  const submitForm = ()=>{
    formRef.current.requestSubmit();
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12} xs={12} sm={12} className='mb-2'>
            <div className='button-container'>
              <Button variant='success' onClick={openAddStudentDialog}>Add new student</Button>
            </div>
          </Col>
          <Col md={12} xs={12} sm={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>OtherName</th>
                  <th>Student Number</th>
                  <th>Registration Number</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Telephone</th>
                  <th>Dob</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  students?.map((student, index) => {
                    return (<tr>
                      <td>{index + 1}</td>
                      <td>{student.firstName}</td>
                      <td>{student.lastName}</td>
                      <td>{student.otherNames}</td>
                      <td>{student.studentNumber}</td>
                      <td>{student.registrationNumber}</td>
                      <td>{student.gender}</td>
                      <td>{student.email}</td>
                      <td>{student.telephone}</td>
                      <td>{student.dateOfBirth}</td>
                      <td>
                        <div>
                          <Button size='sm' variant='danger' onClick={()=>deleteStudent(student)} >Delete</Button>
                        </div>
                      </td>
                    </tr>)
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={visible}
        onHide={() => setVisible(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New student
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate  validated={validated} ref={formRef} onSubmit={saveStudent} >
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-2"  controlId="firstName">
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control required={true} name='firstName' type="text" placeholder="Enter first name" />
                  <Form.Control.Feedback type="invalid">
                    First name is required.
                  </Form.Control.Feedback>
                </Form.Group>
              <Col xs={12} md={6}>
              </Col>
                <Form.Group className="mb-2" controlId="lastName">
                  <Form.Label>LastName</Form.Label>
                  <Form.Control required={true} name='lastName'  type="text" placeholder="Enter last name" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-2" controlId="otherNames">
                  <Form.Label>OtherNames</Form.Label>
                  <Form.Control name='otherNames' type="text" placeholder="Enter other names" />
                  <Form.Control.Feedback type="valid">
                    All looks good.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control name='email' type="email" placeholder="name@example.com" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-2" controlId="telephone">
                  <Form.Label>Telephone</Form.Label>
                  <Form.Control name='telephone' type="text" placeholder="+256757651074" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-2" controlId="studentNumber">
                  <Form.Label>Student Number</Form.Label>
                  <Form.Control name='studentNumber' required={true} type="text" placeholder="2567576" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-2" controlId="registrationNumber">
                  <Form.Label>Registration Number</Form.Label>
                  <Form.Control name='registrationNumber' required={true} type="text" placeholder="13/u/13963/ps" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-2" controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select name='gender' required={true} aria-label="Select Gender">
                    <option>Open this select menu</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-2" controlId="dob">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control name='dob' type="date" placeholder="12/12/2003" />
                </Form.Group></Col>
            </Row>

            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setVisible(false)}>Cancel</Button>
          <Button onClick={()=>submitForm()} variant='success'  type="Button">Submit</Button>
        </Modal.Footer>
        
      </Modal>
    </div>
  );
}

export default App;
