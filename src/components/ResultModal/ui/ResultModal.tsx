import cls from './ResultModal.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { getBoardStatus } from "../../Board/model/selectors/getBoardStatus";
import { boardActions } from "../../Board";
import { getBoardCorrectAnswer } from '../../Board/model/selectors/getBoardCorrectAnswer';
import { useEffect } from 'react';
import { Modal } from '../../Modal';

interface ResultModalProps{
    isOpen?: boolean;
}

export const ResultModal = (props: ResultModalProps) => {
    const {
        isOpen
    } = props;

    const dispatch = useDispatch();
    const status = useSelector(getBoardStatus);
    let currentWord = useSelector(getBoardCorrectAnswer);
    const playAgainHandler = () => {
        dispatch(boardActions.PLAY());
    }

    return (
        <Modal isOpen={isOpen}>
            <div className={cls.result}>
                <h3 className={cls.title}>
                    {status === 'win' ? <p>Поздравляем, удача на вашей стороне</p> : ''}
                    {status === 'loss' ? <p>К сожалению, вы не угадали</p> : ''}
                </h3>
                <p className={cls.text}>Правильный ответ: {currentWord}</p>
                <button className={cls.button} onClick={playAgainHandler}>Сыграть вновь</button>
            </div>
        </Modal>
    );
};
