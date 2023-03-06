import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { validateEmail } from '../utils/helpers';

function Form() {
const [email, setEmail] = useState('');
const [userName, setUserName] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [emailError, setEmailError] = useState('');
const [userNameError, setUserNameError] = useState('');
const [messageError, setMessageError] = useState('');

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

const handleEmailBlur = () => {
if (!email) {
setEmailError('Email address required'); 
} else if (email && !validateEmail(email)) {
setEmailError('Email is invalid');
} else {
setEmailError('');
}
};

const handleUserNameBlur = () => {
if (!userName) {
setUserNameError('Full Name is required');
} else {
setUserNameError('');
}
};

const handleMessageBlur = () => {
if (!message) {
setMessageError('message is required');
} else {
setMessageError('');
}
};

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