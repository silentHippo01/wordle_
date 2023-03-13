import { StateSchema } from './../../../../StoreProvider/config/StateSchema';
import { getBoardState } from './getBoardState';


export const getBoardCurrentWord = (state: StateSchema) => state?.board.currentWord;