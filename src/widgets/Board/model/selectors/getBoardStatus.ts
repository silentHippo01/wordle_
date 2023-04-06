import { StateSchema } from 'app/StoreProvider/index';

export const getBoardStatus = (state: StateSchema) => state.board.status; 