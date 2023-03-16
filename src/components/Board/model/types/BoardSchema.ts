
export interface BoardSchema {
    words: string[],
    rowStatus: rowStatus[],
    currentWord: string,
    currentRow: number,
    correctAnswer: string,
    status: boolean,

}

export interface rowStatus {
    [index: number]: number;
}

export enum variantStatus {
    RIGHT_POSITION,
    WRONG_POSITION,
    NOT_EXIST,
}