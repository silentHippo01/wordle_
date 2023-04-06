import classNames from 'classnames';
import Portal from '../../../../shared/ui/Portal/Portal';
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

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    }
 
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, ['app_modal'])}>
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
