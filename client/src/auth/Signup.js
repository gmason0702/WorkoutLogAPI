import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  FormText,
} from "reactstrap";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/create", {
      method: "POST",
      body: JSON.stringify({
        user: { username: username, passwordhash: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => props.updateToken(data.sessionToken));
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            // valid
            // invalid
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            placeholder="enter a username"
            value={username}
          />
          {/* <FormFeedback valid>That username is available!</FormFeedback>
          <FormFeedback invalid>Username is required</FormFeedback> */}
          <FormText>Username is required</FormText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="enter a password"
            value={password}
            type="password"
          />
        </FormGroup>
        <Button type="submit">Sign up</Button>
      </Form>
    </div>
  );
};

export default Signup;
