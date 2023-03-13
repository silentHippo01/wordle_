import { FC, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getBoardState } from "../model/selectors/getBoardState";
import { getBoardWords } from "../model/selectors/getBoardWords";
import { boardActions } from "../model/slice/boardSlice";
import { Row } from './../../Row/index';
import cls from "./Board.module.scss";

interface BoardProps {
    children?: ReactNode;
}

export const Board: FC<BoardProps> = () => {

    const board = useSelector(getBoardState);
    const words = useSelector(getBoardWords);
    const dispatch = useDispatch();

    const keyHandler = (event: KeyboardEvent) => {
        if(event.key.match(/^[а-яА-ЯёЁ\s]+$/)){
            dispatch(boardActions.ADD_LETTER(event.key))
        } else if(event.key === 'Enter'){
            dispatch(boardActions.ADD_WORD())
        } else if(event.key === 'Backspace'){
            dispatch(boardActions.DELETE_LETTER());
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyHandler);

        return () => {
            document.removeEventListener('keydown', keyHandler)
        }
    }, [])

    return (
        <div className={cls.board}>
            <Row word={words[0]}/>
            <Row word={words[1]}/>
            <Row word={words[2]}/>
            <Row word={words[3]}/>
            <Row word={words[4]}/>
        </div>
    );
};
