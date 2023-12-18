import React, { useState } from "react";
import { Container, Button, Card, Form } from "react-bootstrap";
import axios from "axios";

// ... (import statements)

export default function CreateAccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Send a POST request to your server with the email and password
        const response = await axios.post("/api/createAccount", {
          email,
          password,
        });
  
        // Handle the response as needed
        console.log("Server response:", response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
  
    return (
      <Container className="createAccountForm" style={{ display: 'flex', justifyContent: 'center' }}>
        <Card>
          <Form onSubmit={handleSubmit}>
            <Form.Group style={{ display: 'flex', justifyContent: 'center' }}>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='email' placeholder='Enter Email' onChange={handleEmailChange} value={email} />
            </Form.Group>
  
            <Form.Group style={{ display: 'flex', justifyContent: 'center' }} controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" onChange={handlePasswordChange} value={password} />
            </Form.Group>
  
            <Form.Group style={{ display: 'flex', justifyContent: 'center' }} controlId="FormBasicCheckbox">
              <Form.Check type="checkbox" label="Are you a current employee?" />
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    );
  }
  