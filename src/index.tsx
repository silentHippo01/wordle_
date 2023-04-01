import { render } from "react-dom";
import { App } from "./App";
import { ThemeProvider } from "./app/Providers/ThemeProvider";
import { StoreProvider } from "./app/StoreProvider/index";
import './app/styles/index.scss'

render(
    <StoreProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StoreProvider>,
    document.getElementById('root'),
)