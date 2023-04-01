import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import Portal from '../../../shared/ui/Portal/Portal';
import { boardActions } from '../../Board';
import { getBoardStatus } from '../../Board/model/selectors/getBoardStatus';
import cls from './Modal.module.scss';
import { ReactNode } from 'react';

interface modalProps {
    isOpen?: boolean;
    className?: string;
    children?: ReactNode;
}

const Modal = (props: modalProps) => {
    const {
        isOpen,
        className,
        children,
    } = props;

    // if (!isOpen) {
    //     return null;
    // }

    const dispatch = useDispatch();
    const status = useSelector(getBoardStatus);

    const playAgainHandler = () => {
        dispatch(boardActions.PLAY());
    }

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    }
 
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={classNames(cls.overlay, {}, [])}>
                    <div className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
