import { LOAD_CHARACTER } from '../../constants/characterSheet';

const initialState = {
  character: {},
};

export default function appInfoReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_CHARACTER:
      return {
        ...state,
        character: payload.character,
      };
    default:
      return state;
  }
}
