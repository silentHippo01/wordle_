import { StateSchema } from './../../../../../src/app/StoreProvider/index';
import { getBoardState } from './getBoardState';


export const getBoardWords = (state: StateSchema) => state?.board.words;