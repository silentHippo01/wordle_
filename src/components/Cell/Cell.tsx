import classNames from "classnames";
import { ReactNode } from "react";
import { statusCell } from "../../types";
import { variantStatus } from "../Board/model/types/BoardSchema";
import cls from './Cell.module.scss';

interface CellProps {
    value: string;
    status?: number;
    children?: ReactNode;
}

const Cell = (props: CellProps) => {
    let {
        value,
        status,
    } = props;
    console.log(status)

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
};

export default Cell;