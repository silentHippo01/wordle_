import { FC, ReactNode, useEffect, useState } from "react";
import { Board } from "./components/Board";
import { Navbar } from "./components/Navbar";
import { Row } from "./components/Row";
import cls from "./style.module.scss";
import './style/reset.scss';

interface AppProps {
    children?: JSX.Element;
}

export const App: FC<AppProps> = () => {
    return (
        <div className={cls.app}>
            <Navbar />
            <Board />
        </div>
    );
};
