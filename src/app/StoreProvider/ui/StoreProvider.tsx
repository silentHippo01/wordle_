import { DeepPartial } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {

    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore()

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

