import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';
import isEmail from 'validator/lib/isEmail';
import isEqual from 'lodash/isEqual';

export default  function validateInput(data) {
  let errors = {};

  if(isNull(data.username) || isEmpty(data.username)){
    errors.username = 'Username empty';
  }

  if(isNull(data.email) || isEmpty(data.email)){
    errors.email = 'Email empty';
  }
  if(isEmail(data.email) || isEmpty(data.email)){
    errors.email = 'Email incorrect';
  }
  if(isNull(data.password) || isEmpty(data.password)){
    errors.password = 'password incorrect';
  }
  if(isNull(data.passwordConfirmation) || isEmpty(data.passwordConfirmation)){
    errors.passwordConfirmation = 'passwordConfirmation incorrect';
  }
  if(isNull(data.timezone) || isEmpty(data.timezone)){
    errors.timezone = 'timezone empty';
  }
  if(!isEqual(data.password, data.passwordConfirmation)){
    errors.password = "password not matching";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}