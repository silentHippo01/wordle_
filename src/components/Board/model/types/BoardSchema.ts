export interface BoardSchema {
    words: string[],
    currentWord: string,
    currentRow: number,
    correctAnswer: string,
    status: boolean,
}