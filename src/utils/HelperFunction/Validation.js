
export const regexValidations = {
    containsOnlyNumbers : function(str) {
        let pattern = /^\d+$/;
        return pattern.test(str);  // returns a boolean
    },
    doesItHaveNumber : function(str) {
      let pattern = /\d/;
      return pattern.test(str);  // returns a boolean
    },
    doesItHaveLetter : function(str) { 
      let pattern = /[a-zA-Z]/;
      return pattern.test(str);  // returns a boolean
    },
    doesItSpecCharac : function(str) { 
      let pattern = /[!@#$%^&*(),`~/;_+-.?":{}'|<>]/;
      return pattern.test(str);  // returns a boolean
  }
  }
  


export const errorMessage = {
    email : "Please enter a valid Email ID",
    phone : "Please enter a valid phone number",
    sameCurrentPassword : "Your new password cannot be the same as your old password."
}


export const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (re.test(email?.trim())) {
        return { valid: true, message: "" };
    }
    return { valid: false, message: errorMessage.email };
};


export const validatePassword = (password) => {
    const lessThanMin = password?.length < 8;
    const greaterThanMax = password?.length > 32;
    const lengthValidationMsg = lessThanMin ? "Minimum 8 alphanumeric characters required" : "Maximum 32 alphanumeric characters required";

    const containsCharacter = regexValidations.doesItHaveLetter(password);
    const containsNumbers = regexValidations.doesItHaveNumber(password);
    const containspeclcharac = regexValidations.doesItSpecCharac(password);


    switch(true) {
        case (lessThanMin && !containspeclcharac): 
            return {valid: false, message:"Minimum 8 characters are required"};
        case (lessThanMin || greaterThanMax):
         return { valid: false , message : lengthValidationMsg};
        default:
            return { valid: true , message : ""};
    }
};

export const validateFullName = (fullName) => {
    const re = /^[a-zA-Z][a-zA-Z'`.\-\']+?( [a-zA-Z'`.\-/']+)*$/;
    if (re.test(fullName.trim())) {
        return { valid: true, message: "" };
    }
    return { valid: false, message: "Please enter a valid full name" };
};

export const validationObject = {
    type: "",
    message: ""
}
export const validateFields = (fields, values) => {
    let isError = false;
    let error = {
        email :  {...validationObject},
        password :  {...validationObject},
        fullname: {...validationObject},
    
    }
    if (fields.includes("fullname")) {
        if (!values.fullname) {
            error.fullname.type = "required";
            error.fullname.message = "Fullname Required";
            isError = true;
        } else {
            const _validation = validateFullName(values.fullname);
            if (!_validation.valid) {
                error.fullname.type = "pattern";
                error.fullname.message = _validation.message;
                isError = true;
            }
        }
    }
    if (fields.includes("email")) {
        if (!values.email) {
            error.email.type = "required";
            error.email.message = "Email id is required";
            isError = true;
        } else {
            const _validation = validateEmail(values.email);
            if (!_validation.valid) {
                error.email.type = "pattern";
                error.email.message = _validation.message;
                isError = true;
            }
        }
    }
    if(fields.includes("password")) {
        console.log(values.password,"pass")
        if(!values.password) {
            error.password.type = "required";
            error.password.message = "Password Required";
            isError = true
        }else{
            const _validation = validatePassword(values.password);
            isError = !_validation?.valid;
            error.password.type= "pattern"
            error.password.message = _validation?.message;
        }
    }
    return isError ? error : {}
}