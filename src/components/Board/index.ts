import { boardSlice } from './model/slice/boardSlice';
// export { Board } from './ui/Board';
// export { BoardSchema } from './model/types/BoardSchema'

import { Board } from "./ui/Board";
import { BoardSchema } from "./model/types/BoardSchema";
import { boardActions, boardReducer } from "./model/slice/boardSlice";

export {
    Board,
    boardSlice,
    BoardSchema,
    boardReducer,
    boardActions,
}