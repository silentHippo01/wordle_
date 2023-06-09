// import  { boardReducer } from 'widgets/Board/index';
import { boardReducer } from "../../../widgets/Board";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";


export function createReduxStore(initialState?: StateSchema){
    const rootReducers: ReducersMapObject<StateSchema> = {
        board: boardReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
    })
}