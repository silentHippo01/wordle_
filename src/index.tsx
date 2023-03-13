import { render } from "react-dom";
import { App } from "./App";
import { StoreProvider } from "./StoreProvider";

render(
    <StoreProvider>
        <App />,
    </StoreProvider>,
    document.getElementById('root'),
)