module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
 ) => {
    const errors = {};
    if(username.trim() === ''){
        error.username = 'Username cannot be empty';
    }

    if(email.trim() === ''){
        error.email = 'Email cannot be empty';
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            error.email = 'Password should be a valid password';
        }
    } 

    if(password === ''){
        errors.password = 'Password cannot be empty';
    } else if(password !== confirmPassword){
        errors.confirmPassword = 'Password mismatch';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}