import { types } from '../types/types';

const inicialState = {
  loading: false,
  msgError: null,
  className: '',
};

export const uiReducer = (state = inicialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };

    case types.uiAddClassName:
      return {
        ...state,
        className: action.payload,
      };

    default:
      return state;
  }
};
