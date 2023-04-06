import classNames from "classnames";
import { memo, ReactNode } from "react";
import { variantStatus } from "../../../widgets/Board/model/types/BoardSchema";
import cls from './Cell.module.scss';

interface CellProps {
    value: string;
    status?: number;
    children?: ReactNode;
}

const Cell = memo((props: CellProps) => {

    let {
        value,
        status,
    } = props;

    const mods: Record<string, boolean> = {
        [cls.rightPosition]: status === variantStatus.RIGHT_POSITION,
        [cls.wrongPosition]: status === variantStatus.WRONG_POSITION,
        [cls.notExist]: status === variantStatus.NOT_EXIST,
    }
    return (
        <div className={classNames(cls.cell, mods, [])}>
            {value}
        </div>
    );
});

export default Cell;