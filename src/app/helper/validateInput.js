import validator from 'validator';
import sanitizer from 'validator';

export const validateInputs = (userData, setError) => {

  const {
    firstName,
    lastName,
    email,
    emailConfirm,
    password,
    passwordConfirm,
    passwordCurrent,
    introduction,
    languages,
    categories,
    location
  } = userData;

  let errorMsg = {
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmError: '',
    passwordCurrentError: '',
    introductionError: '',
    languagesError: '',
    locationError: ''
  };

  let formValid = true;

  if ("firstName" in userData) {
    const errorMessage = validateFirstLastName(firstName, 'first name');
    if (errorMessage) {
      errorMsg.firstNameError = errorMessage;
      formValid = false;
    }
  }

  if ("lastName" in userData) {
    const errorMessage = validateFirstLastName(lastName, 'last name');
    if (errorMessage) {
      errorMsg.lastNameError = errorMessage;
      formValid = false;
    }
  }

  if ("email" in userData) {
    const errorMessage = validateEmail(email);
    if (errorMessage) {
      errorMsg.emailError = errorMessage;
      formValid = false;
    }
  }

  if ("emailConfirm" in userData) {
    const errorMessage = validateEmailConfirm(emailConfirm, email);
    if (errorMessage) {
      errorMsg.emailConfirmError = errorMessage;
      formValid = false;
    }
  }

  if ("password" in userData) {
    const errorMessage = validatePassword(password);
    if (errorMessage) {
      errorMsg.passwordError = errorMessage;
      formValid = false;
    }
  }

  if ("passwordCurrent" in userData) {
    const errorMessage = validatePassword(passwordCurrent);
    if (errorMessage) {
      errorMsg.passwordCurrentError = errorMessage;
      formValid = false;
    }
  }

  if ("passwordConfirm" in userData) {
    const errorMessage = validatePasswordConfirm(passwordConfirm, password);
    if (errorMessage) {
      errorMsg.passwordConfirmError = errorMessage;
      formValid = false;
    }
  }

  if ("introduction" in userData) {
    const errorMessage = validateIntroduction(introduction);
    if (errorMessage) {
      errorMsg.introductionError = errorMessage;
      formValid = false;
    }
  }

  if ("languages" in userData) {
    const errorMessage = validateLanguageCategory(languages, 'language');
    if (errorMessage) {
      errorMsg.languagesError = errorMessage;
      formValid = false;
    }
  }

  if ("categories" in userData) {
    const errorMessage = validateLanguageCategory(categories, 'category');
    if (errorMessage) {
      errorMsg.categoriesError = errorMessage;
      formValid = false;
    }
  }

  if ("location" in userData) {
    const errorMessage = validateLocation(location);
    if (errorMessage) {
      errorMsg.locationError = errorMessage;
      formValid = false;
    }
  }

  setError(errorMsg);
  return formValid;
}

export const sanitizeInputs = (userData, setUser) => {
  let sanitizedUserData = {};

  for( let field in userData ) {
    sanitizedUserData[field] = sanitizer.rtrim(sanitizer.ltrim(userData[field], ' '), ' ');
  }
  setUser(prevState => ({
    ...prevState,
    ...sanitizedUserData
  }));
}

const validateFirstLastName = (name, field) => {

  if (validator.isEmpty(name) !== false) {
    return `Please provide your ${field}.`
  }

  if (validator.isLength(name, {
      min: 3,
      max: 20
    }) !== true) {
    return `A ${field} can contain between 2 and 20 letters.`
  }

  if (validator.isAlpha(name) !== true) {
    return `A ${field} can contain only letters.`
  }
}

const validateEmail = (email) => {

  if (validator.isEmpty(email) !== false) {
    return 'Please provide your email address'
  }

  if (validator.isEmail(email) !== true) {
    return 'Please enter a valid email address'
  }
}

const validateEmailConfirm = (emailConfirm, email) => {
  if (validator.isEmpty(emailConfirm) !== false) {
    return "Please confirm your email."
  }

  if (emailConfirm !== email) {
    return "Email confirm doesn't match your email."
  }
}

const validatePassword = (password) => {
  if (validator.isEmpty(password) !== false) {
    return "Password field can't be blank"
  }

  if (validator.contains(password, ' ') !== false) {
    return "Password can't contain spaces"
  }

  if (validator.isLength(password, {
    min: 8
    }) !== true) {
    return `Password length must be minimum 8 characters.`
  }
}

const validatePasswordConfirm = (passwordConfirm, password) => {
  if (validator.isEmpty(passwordConfirm) !== false) {
    return "Please confirm your password."
  }

  if (passwordConfirm !== password) {
    return "Password confirm doesn't match your password."
  }
}

const validateIntroduction = (introduction) => {
  if (validator.isEmpty(introduction) !== false) {
    return `Introduction field can't be empty.`
  }

  if (validator.isLength(introduction, {
    min: 100,
    max: 250
  }) !== true) {
    return `Introduction length must be between 100 and 250 characters.`
  }
}

const validateLanguageCategory = (item, name) => {
  if (item.length < 1) {
    return `Select at least one ${name}.`
  }
}

const validateLocation = (location) => {
  if (!location) {
    return 'Please select your preferred serve location.'
  }
}