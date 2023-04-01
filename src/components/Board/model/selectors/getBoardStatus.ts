import { StateSchema } from './../../../../../src/app/StoreProvider/index';


export const getBoardStatus = (state: StateSchema) => state.board.status; 