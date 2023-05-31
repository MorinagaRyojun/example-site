import { Card, Form, Row, InputGroup, Button, Col, Container } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock, faKey } from '@fortawesome/free-solid-svg-icons'
// import firebaseConfig from '../config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Register2() {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Tags Name
  const objSetting = {
    formHeaderName: "REGISTER",
    label:{
        form1: "Your Name",
        form2: 'Your Email',
        form3: 'Password',
        form4: 'Repeat your password',
        
    },
    placeholder:{
        form1: "Your Name",
        form2: 'Your Email',
        form3: 'Password',
        form4: 'Repeat your password',
    },
    textMessage:{
        agreeConditions: "Agree to terms and conditions",
        agreeFeedback: "You must agree before submitting."
    },
    submitButton: "Register"

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
      <Card className='text-black m-5' style={{borderRadius: '25px'}}>

        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Row className="mb-3">
                <Col  md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                        <FontAwesomeIcon className='fa-user me-3' icon={faUser}  size='lg' />
                        <Form.Control required label={objSetting.label.form1} placeholder={objSetting.placeholder.form1} name="fullName" type='text' value={state.fullName} onChange={handleChange} />
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                        <FontAwesomeIcon className='fa-envelope me-3' icon={faEnvelope}  size='lg' />
                        <Form.Control required label={objSetting.label.form2} placeholder={objSetting.placeholder.form2} name="email" type='email' value={state.email} onChange={handleChange} />
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                        <FontAwesomeIcon className='fa-lock me-3' icon={faLock}  size='lg' />
                        <Form.Control required label={objSetting.label.form3} placeholder={objSetting.placeholder.form3} name="password" type='password' value={state.password} onChange={handleChange} />
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                        <FontAwesomeIcon className='fa-key me-3' icon={faKey}  size='lg' />
                        <Form.Control required label={objSetting.label.form4} placeholder={objSetting.placeholder.form4} id='form4' type='password' />
                    </div>
                    <div className='mb-4'>
                        <Form.Group>
                            <Form.Check
                                required
                                label={objSetting.textMessage.agreeConditions}
                                feedback={objSetting.textMessage.agreeFeedback}
                                feedbackType="invalid"
                            />
                        </Form.Group>
                    </div>
                    <Button className='mb-4' size='lg'>Register</Button>

                </Col>
                <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                    <Card.Img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'/>
                </Col>

            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register2;
