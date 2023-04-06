import { FC, useContext, useEffect, useState } from "react";
import { ThemeContext } from "./app/Providers/ThemeProvider/lib/ThemeContext";
import { Board } from "./widgets/Board";
import { Navbar } from "./widgets/Navbar";
import { useSelector } from "react-redux";
import { getBoardStatus } from "./widgets/Board/model/selectors/getBoardStatus";
import { ResultModal } from "./widgets/ResultModal";

interface AppProps {
    children?: JSX.Element;
}

export const App: FC<AppProps> = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const status = useSelector(getBoardStatus);
    const [resultIsOpen, setResultIsOpen] = useState(false);

    useEffect(() => {
        if(status === 'loss' || status === 'win'){
            setResultIsOpen(true);
        } else {
            setResultIsOpen(false);
        }
    }, [status])

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <Board />
            <ResultModal isOpen={resultIsOpen}/>
        </div>
    );
};
