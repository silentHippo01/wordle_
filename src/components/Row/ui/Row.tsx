import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardCorrectAnswer } from '../../Board/model/selectors/getBoardCorrectAnswer';
import Cell from '../../Cell/Cell';
import { Navbar } from '../../Navbar';
import cls from './Row.module.scss';

interface RowProps{
    word: string;
    children?: React.ReactNode;
    classname?: string;
}

const Row = (props: RowProps) => {

    const {
        word,
        classname,
    } = props;

    const correctAnswer = useSelector(getBoardCorrectAnswer);
    const letters = word.split('');
    
    return (
        <div className={classNames(cls.row, {}, [classname])}> 
            <Cell value={letters[0]}/>
            <Cell value={letters[1]}/>
            <Cell value={letters[2]}/>
            <Cell value={letters[3]}/>
            <Cell value={letters[4]}/>
        </div>
    );
};

export default Row;