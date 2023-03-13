import classNames from "classnames";
import { ReactNode } from "react";
import { statusCell } from "../../types";
import cls from './Cell.module.scss';

interface CellProps {
    value: string;
    status?: statusCell;
    children?: ReactNode;
}

const Cell = (props: CellProps) => {
    let {
        value,
    } = props;

    

    return (
        <div className={classNames(cls.cell, {}, [])}>
            {value}
        </div>
    );
};

export default Cell;