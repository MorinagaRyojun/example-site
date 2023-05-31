import { Card, Form, Row, InputGroup, Button } from "react-bootstrap";
import { useState } from "react";
// import firebaseConfig from '../config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegisterForm() {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Tags Name
  const objSetting = {
    formHeaderName: "REGISTER",
    labelName:{
        fullName: "Full name :",
        email: "Email :",
        password: "Password :",
        
    },
    placeholderName:{
        fullName: "Your Name",
        password: "Password",
        email: "Your Email"
    },
    textMessage:{
        agreeConditions: "Agree to terms and conditions",
        agreeFeedback: "You must agree before submitting."
    },
    submitButton: "Register"

  }


  //From styles.
  const objStyles = {
    cardStyles: {
        border: "1px solid #0f499B",
    },
    hederStyles: {
        background: "DodgerBlue",
    },
    formLabelStyles: {
        margin: 3,
        
    }
  }


  // Function and Validation
  
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };
  const validateForm = () => {
    const { fullName, email, password } = state;
    const errors = {};
  
    if (!fullName) {
      errors.fullName = "Full name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
  
    return { isValid: Object.keys(errors).length === 0, errors };
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const { isValid, errors } = validateForm();
  
    setValidated(true);
    if (isValid) {
      // Submit form
      console.log(state.email);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      // Show errors
      setState((prevState) => ({ ...prevState, errors }));
    }
  };


  return (
    <div className="RegisterForm">
      <Card className="card" style={objStyles.cardStyles}>
        <Card.Header style={objStyles.hederStyles}>{objSetting.formHeaderName}</Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">

                <Form.Group>
                  <Form.Label style={objStyles.formLabelStyles}>{objSetting.labelName.fullName}</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Control
                  required
                  type="text"
                  name="fullName"
                  placeholder={objSetting.placeholderName.fullName}
                  aria-describedby="inputGroupPrepend"
                  value={state.fullName}
                  onChange={handleChange}
                  />
                  </InputGroup>
                </Form.Group>
                

                <Form.Group>
                    <Form.Label style={objStyles.formLabelStyles}>{objSetting.labelName.email}</Form.Label>
                    <InputGroup hasValidation>
                    <Form.Control
                    required
                    type="email"
                    name="email"
                    aria-describedby="inputGroupPrepend"
                    value={state.email}
                    onChange={handleChange}
                    placeholder={objSetting.placeholderName.email}
                    />
                    </InputGroup>
                </Form.Group>



                <Form.Group>
                    <Form.Label style={objStyles.formLabelStyles}>{objSetting.labelName.password}</Form.Label>
                    <InputGroup hasValidation>
                    <Form.Control
                    required
                    type="password"
                    name="password"
                    id="inputPassword"
                    aria-describedby="inputGroupPrepend"
                    value={state.password}
                    onChange={handleChange}
                    placeholder={objSetting.placeholderName.password}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special characters,
                    or emoji.
                    </Form.Text>
                    </InputGroup>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Check
                    required
                    label={objSetting.textMessage.agreeConditions}
                    feedback={objSetting.textMessage.agreeFeedback}
                    feedbackType="invalid"
                    />
                </Form.Group>
              
              <Button type="submit">{objSetting.submitButton}</Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterForm;
