import { StateSchema } from './../../../../../src/app/StoreProvider/index';


// export const getBoardStatusRow = (state: StateSchema) => state.board.rowStatus[state.board.currentRow - 1]; 
export const getBoardStatusRow = (state: StateSchema) => state.board.rowStatus; 