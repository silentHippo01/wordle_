import { createSlice } from '@reduxjs/toolkit';
import { BoardSchema } from '../types/BoardSchema';

const initialState: BoardSchema = {
    words: ['', '', '', '', ''],
    currentRow: 0,
    currentWord: '',
    correctAnswer: 'загон',
    status: false,
};

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        ADD_LETTER: (state, action) => {
            if(state.words[state.currentRow].length < 5){
                state.currentWord += action.payload.toLowerCase();
                state.words[state.currentRow] += action.payload.toLowerCase();
            }
        },

        DELETE_LETTER: (state) => {
            state.words[state.currentRow] = state.words[state.currentRow].slice(0, -1);
            state.currentWord = state.currentWord.slice(0, -1);
        },

        ADD_WORD: (state) => {
            if(state.currentWord === state.correctAnswer){
                state.status = true;
            } else{
                state.currentWord = '';
                state.currentRow++;
            }
        }
    },
});


export const { actions: boardActions } = boardSlice;
export const { reducer: boardReducer } = boardSlice;
