import { StateSchema } from './../../../../StoreProvider/config/StateSchema';


// export const getBoardStatusRow = (state: StateSchema) => state.board.rowStatus[state.board.currentRow - 1]; 
export const getBoardStatusRow = (state: StateSchema) => state.board.rowStatus; 