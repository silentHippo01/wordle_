import { StateSchema } from 'app/StoreProvider/index';

export const getBoardWords = (state: StateSchema) => state?.board.words;