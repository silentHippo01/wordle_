import cls from './ResultModal.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { getBoardStatus } from "../../../widgets/Board/model/selectors/getBoardStatus";
import { boardActions } from "../../../widgets/Board";
import { getBoardCorrectAnswer } from '../../../widgets/Board/model/selectors/getBoardCorrectAnswer';
import { Modal } from './../../../shared/ui/Modal';

interface ResultModalProps{
    isOpen?: boolean;
}

export const ResultModal = (props: ResultModalProps) => {
    const {
        isOpen
    } = props;

    const dispatch = useDispatch();
    const status = useSelector(getBoardStatus);
    let correctWord = useSelector(getBoardCorrectAnswer);

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
                {status != 'playing' ? <p className={cls.text}>Правильный ответ: {correctWord}</p> : ''}
                <button className={cls.button} disabled={status === 'playing'} onClick={playAgainHandler}>Сыграть вновь</button>
            </div>
        </Modal>
    );
};
