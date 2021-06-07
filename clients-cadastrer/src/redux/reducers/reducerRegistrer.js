import {USER_REGISTRER, USER_LOGIN} from '../actions/action';

const INITIAL_STATE = {
  nome: '',
  idade: 0,
  email: '',
  senha: '',
}

const setLogin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTRER:
      return {
        ...state,
      }
    case USER_LOGIN:
      return {
        ...state,
      }  
      default:
        return{
          ...state,
        }
  }
}

export default setLogin;