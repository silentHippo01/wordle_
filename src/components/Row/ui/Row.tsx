import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardCorrectAnswer } from '../../Board/model/selectors/getBoardCorrectAnswer';
import { getBoardStatusRow } from '../../Board/model/selectors/getBoardStatusRow';
import Cell from '../../Cell/Cell';
import { Navbar } from '../../Navbar';
import cls from './Row.module.scss';

interface RowProps{
    id: number;
    word: string;
    children?: React.ReactNode;
    classname?: string;
}

const Row = (props: RowProps) => {

    const {
        id,
        word, 
        classname,
    } = props;

    // const correctAnswer = useSelector(getBoardCorrectAnswer).split('');
    const letters = word.split('');
    const statusRow = useSelector(getBoardStatusRow);
    console.log('statusRow: ' + statusRow);

    return (
        <div className={classNames(cls.row, {}, [classname])}> 
            <Cell value={letters[0]} status={statusRow != undefined ? statusRow[id][0] : 3}/>
            <Cell value={letters[1]} status={statusRow != undefined ? statusRow[id][1] : 3}/>
            <Cell value={letters[2]} status={statusRow != undefined ? statusRow[id][2] : 3}/>
            <Cell value={letters[3]} status={statusRow != undefined ? statusRow[id][3] : 3}/>
            <Cell value={letters[4]} status={statusRow != undefined ? statusRow[id][4] : 3}/>
        </div>
    );
};

export default Row;