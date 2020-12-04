import React from "react";
import FormInput from "../form-input/form-input.component";
import CButton from "../Custom-Button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.data";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (Event) => {
    const { displayName, email, password, confirmPassword } = this.state;
    Event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password Don't Match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up" onSubmit={this.handleSubmit}>
        <h2 className="title">Do Not Have Account?</h2>
        <span>Sign up With Email and Password</span>
        <form>
          <FormInput
            name="displayName"
            placeholder="Name"
            value={displayName}
            type="text"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            placeholder="Email"
            value={email}
            type="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            placeholder="Password"
            value={password}
            handleChange={this.handleChange}
            required
            type="password"
          />
          <FormInput
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
            type="password"
          />
          <div className="buttons">
            <CButton type="submit">SIGN UP</CButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
