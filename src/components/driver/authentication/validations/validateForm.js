
export default function validateForm(values) {
    console.log("validating form");
    let hasError= false
    let errors = {}

    //Used to validate email
    //eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //Email conditions
    if(values.email === ""){ // Email should not be empty

        const error = "Email is required";
        errors.email = error;
        hasError = true;

    } else if(!re.test(values.email)){ //Email must be a valid email

        const error = "Please enter valid email";
        errors.email = error;
        hasError = true;

    }else{
        hasError = false;
    }


    //Password conditions
    if(values.password === ''){ //Pasword should not be empty

        const error = 'Password is required';
        errors.password = error;
        hasError = true;

    }else if(values.password.length > 6){ // Pasword should have 6 charancter or more

        const error = 'Password must be 6 characters or more';
        errors.password = error;
        hasError = true;

    } else if(!/[A-Z]/.test(values.password)){ //Password must contain capital letter
        
        const error = 'Password must contain at least 1 capital letter';
        errors.password = error;
        hasError = true;

    } else if(!/\d/.test(values.password)){ //Password must contain a number

        const error = 'Password must contain a number';
        errors.password = error;
        hasError = true;

    }else{
        hasError = false;
    }


    //Confirm Password conditions
    if(values.confirmPassword === ''){ //Confirm password must not be empty

        const error = 'Please confirm password';
        errors.confirmPassword = error;
        hasError = true;

    }else if(values.confirmPassword !== values.password){ //Passwords should match

        const error = 'Passwords do not match';
        errors.confirmPassword = error;
        hasError = true;

    }else{
        hasError = false;
    }

    return {
        hasError,
        errors
    }
}
