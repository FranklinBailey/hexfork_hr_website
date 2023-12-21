import React, { useState } from "react";
import { Container, Button, Card, Form } from "react-bootstrap";
import axios from "axios";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Email: ", email);
      console.log("Password: ", password);

      const response = await axios.post("http://localhost:5000/api/createAccount", {
        email: email,
        password: password,
      });

      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container className="createAccountForm" style={{ display: 'flex', justifyContent: 'center' }}>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              onChange={e => setEmail(e.target.value)} 
              value={email} 
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              onChange={e => setPassword(e.target.value)} 
              value={password} 
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
            {console.log(email)}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
