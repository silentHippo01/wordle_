import { StateSchema } from 'app/StoreProvider/index';

export const getBoardStatusRow = (state: StateSchema) => state.board.rowStatus; 