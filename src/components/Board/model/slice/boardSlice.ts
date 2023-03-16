import { createSlice } from '@reduxjs/toolkit';
import { BoardSchema } from '../types/BoardSchema';
import { variantStatus } from '../types/BoardSchema';

const initialState: BoardSchema = {
    words: ['', '', '', '', '', ''],
    rowStatus: [[3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3],[3, 3, 3, 3, 3, 3],[3, 3, 3, 3, 3, 3]],
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

        EVALUATE_ROW: (state) => {
            if(state.currentRow < 6){
                let word = state.correctAnswer.split('');
                let row = state.words[state.currentRow].split('');
                let rowStatusItem = word.map((item, i) => {
                    if(item === row[i]){
                        return variantStatus.RIGHT_POSITION;
                    } else if(item != row[i] && word.includes(row[i])){
                        return variantStatus.WRONG_POSITION;
                    } else {
                        return variantStatus.NOT_EXIST;
                    }
                })
                // state.rowStatus.push(rowStatusItem);
                state.rowStatus[state.currentRow] = rowStatusItem;
                if(rowStatusItem.reduce((acc, cur) => acc + cur) === 0){
                    state.status = true;
                }

                console.log(word);
                console.log(row);
                console.log(rowStatusItem);

            } 
            state.currentRow++;
        }
    },
});


export const { actions: boardActions } = boardSlice;
export const { reducer: boardReducer } = boardSlice;
