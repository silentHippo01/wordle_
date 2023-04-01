import { words } from './../lib/words';

export const guessWord = () => {
    let index = Math.floor(Math.random() * words.length);
    return words[index].toLowerCase();
}