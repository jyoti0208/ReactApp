import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';

export default function validateInput(data) {
  let errors = {};
  if(isNull(data.identifier) || isEmpty(data.identifier)) {
    errors.identifier = "This filed is needed";
  }
  if(isNull(data.password) || isEmpty(data.password)) {
    errors.password = "password filed is needed";
  }

  return{
    errors,
    isValid:isEmpty(errors)
  };

}
