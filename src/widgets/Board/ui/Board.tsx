import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getBoardStatus } from "../model/selectors/getBoardStatus";
import { getBoardWords } from "../model/selectors/getBoardWords";
import { boardActions } from "../model/slice/boardSlice";
import { Row } from './../../../shared/ui/Row';
import cls from "./Board.module.scss";
import { Heart } from "../../../shared/ui/Heart/Heart";
 
interface BoardProps {
    children?: ReactNode;
}

export const Board: FC<BoardProps> = () => {
    const words = useSelector(getBoardWords);
    const status = useSelector(getBoardStatus);

    const dispatch = useDispatch();


    const keyHandler = (event: KeyboardEvent) => {
        if (event.key.match(/^[а-яА-ЯёЁ\s]+$/)) {
            dispatch(boardActions.ADD_LETTER(event.key))
        } else if (event.key === 'Enter') {
            dispatch(boardActions.EVALUATE_ROW())
        } else if (event.key === 'Backspace') {
            dispatch(boardActions.DELETE_LETTER());
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyHandler);

        if(status != 'playing'){
            document.removeEventListener('keydown', keyHandler);
        }

        return () => {
            document.removeEventListener('keydown', keyHandler)
        }
    }, [status])

    return (
        <>
            <div className={cls.board}>
                <Row id={0} word={words[0]} />
                <Row id={1} word={words[1]} />
                <Row id={2} word={words[2]} />
                <Row id={3} word={words[3]} />
                <Row id={4} word={words[4]} />
                <Row id={5} word={words[5]} />
            </div>

            <div className={cls.romantic}>
            <span className={cls.romantic_text}>Люблю тебя, моя ехихидна</span>
                <Heart />
            </div>
        </>

    );
};
