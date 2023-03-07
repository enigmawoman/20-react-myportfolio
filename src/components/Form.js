// using state to manage the page state
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// using a regex to validate email addresses
import { validateEmail } from '../utils/helpers';

function Form() {
    // setting the default states
const [email, setEmail] = useState('');
const [userName, setUserName] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [emailError, setEmailError] = useState('');
const [userNameError, setUserNameError] = useState('');
const [messageError, setMessageError] = useState('');

// handle the input into the form
const handleInputChange = (e) => {
const { target } = e;
const inputType = target.name;
const inputValue = target.value;
if (inputType === 'userName') {
setUserName(inputValue);
} else if (inputType === 'email') {
setEmail(inputValue);
} else {
setMessage(inputValue);
}
};

// handle when a user leaves an input field without information or valid email address
const handleEmailBlur = () => {
if (!email) {
setEmailError('Email address required'); 
} else if (email && !validateEmail(email)) {
setEmailError('Email is invalid');
} else {
setEmailError('');
}
};
// handle when a user leaves an input field with information
const handleUserNameBlur = () => {
if (!userName) {
setUserNameError('Full Name is required');
} else {
setUserNameError('');
}
};
// handle when a user leaves an input field with information
const handleMessageBlur = () => {
if (!message) {
setMessageError('message is required');
} else {
setMessageError('');
}
};
// if the input fields are empty and user clicks submit -  a warning is generated
const handleFormSubmit = (e) => {
e.preventDefault();
if (!userName || !email || !message) {
setErrorMessage('Please enter required information before submitting the form');
return;
}
alert(`Hello ${userName}`);
setUserName('');
setMessage('');
setEmail('');
};

return (
<>
<form className="form">
<input
       value={userName}
       name="userName"
       onChange={handleInputChange}
       onBlur={handleUserNameBlur}
       type="text"
       placeholder="Full name"
     />
{userNameError && (
<div>
<p className="error-text">{userNameError}</p>
</div>
)}
<input
       value={email}
       name="email"
       onChange={handleInputChange}
       onBlur={handleEmailBlur}
       type="email"
       placeholder="Email"
     />
{emailError && (
<div>
<p className="error-text">{emailError}</p>
</div>
)}
<input
       value={message}
       className="message-text"
       name="password"
       onChange={handleInputChange}
       onBlur={handleMessageBlur}
       type="text"
       placeholder="Your message here..."
     />
{messageError && (
<div>
<p className="error-text">{messageError}</p>
</div>
)}
<Button className="myButton" variant="primary" onClick={handleFormSubmit}>
Submit
</Button>
</form>
{errorMessage && (
<div>
<p className="form-error-text">{errorMessage}</p>
</div>
)}
</>
);
}

export default Form;