import { FC, useContext, useEffect, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./app/Providers/ThemeProvider/lib/ThemeContext";
import { Board, boardActions } from "./components/Board";
import { Navbar } from "./components/Navbar";
import { Theme } from "./app/Providers/ThemeProvider/lib/ThemeContext";
import { guessWord } from "./shared/service/guessWord";
import { useDispatch, useSelector } from "react-redux";
import { getBoardStatus } from "./components/Board/model/selectors/getBoardStatus";
import { Modal } from "./components/Modal";
import {ResultModal} from "./components/ResultModal";
import { RulesModal } from "./components/RulesModal";

interface AppProps {
    children?: JSX.Element;
}

export const App: FC<AppProps> = () => {

    const { theme, setTheme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const status = useSelector(getBoardStatus);
    const [resulIsOpen, setResulIsOpen] = useState(false);
    const [rulesIsOpen, setRulesIsOpen] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    const toogleRules = () => {
        setRulesIsOpen(!rulesIsOpen);
    }

    const guessWordHandler = () => {
        dispatch(boardActions.GUESS_WORD(guessWord()))
    }

    useEffect(() => {
        guessWordHandler()
    }, [])

    useEffect(() => {
        if(status === 'loss' || status === 'win'){
            setResulIsOpen(true);
        } else {
            setResulIsOpen(false);
        }
    }, [status])

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <Board />
            <ResultModal isOpen={resulIsOpen}/>
            <RulesModal isOpen={rulesIsOpen} isClose={toogleRules}/>
            
            <button onClick={toggleTheme}>
                Theme
            </button>

            <button onClick={toogleRules}>
                Правила
            </button>
        </div>
    );
};
