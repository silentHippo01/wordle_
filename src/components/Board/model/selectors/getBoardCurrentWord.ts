import { StateSchema } from './../../../../../src/app/StoreProvider/index';
import { getBoardState } from './getBoardState';


export const getBoardCurrentWord = (state: StateSchema) => state?.board.currentWord;