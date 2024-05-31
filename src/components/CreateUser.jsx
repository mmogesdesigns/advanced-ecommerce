import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
    const [message, setMessage] = useState('');
    const [userData, setUserData  ]= useState({
        username: '',
        email: '',
        password:''
    });
    const handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    const newData = { ...userData}
    for (let [key, val] of Object.entries(newData)) {
        if (key == name) {
            newData[key] = value
        }
    }
    console.log(newData);
    setUserData(newData);
    const handleSubmit = async (event) => {
        event.preventDefault;
        try {
      const response = await axios.post('https://fakestoreapi.com/users', {
        username,
        email,
        password
      });
      setMessage('User created successfully!');
    } catch (error) {
      setMessage('Error creating user.');
    }


    }}
}
  return (
    <Container fluid className="vh-100 p-0">
      <NavBar />
      <Row className="h-50 my-auto w-100 justify-content-center">
        <Col xs={9} sm={6} className="">
          <Form
            onSubmit={handleSubmit}
            className="w-100 p-4 border rounded mt-5"
          >
            <FloatingLabel controlId="userName" label="User Name">
              <Form.Control
                type="text"
                placeholder="User Name"
                value={username}
                onChange={handleChange}
              />
            </FloatingLabel>
           
            <FloatingLabel controlId="email" label="Email">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
            </FloatingLabel>
           
            <FloatingLabel controlId="password" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </FloatingLabel>
           
            <Button variant="outline-info" type="submit" className="mt-4">
              Create User
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );



export default CreateUser
