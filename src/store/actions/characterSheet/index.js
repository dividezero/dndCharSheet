import { LOAD_CHARACTER } from '../../constants/characterSheet';

export function loadCharacter(character) {
  return {
    type: LOAD_CHARACTER,
    payload: { character },
  };
}
