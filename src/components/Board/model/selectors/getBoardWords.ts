import { StateSchema } from './../../../../StoreProvider/config/StateSchema';
import { getBoardState } from './getBoardState';


export const getBoardWords = (state: StateSchema) => state?.board.words;