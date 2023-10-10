import React, { useContext } from "react";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { LogIn } from "./components/LogIn";
import { ModalContext } from "./context/ModalContext";

function App() {
    const { modal, open, close } = useContext(ModalContext);

    return (
        <>
            <Header onOpen={open} />
            {modal && (
                <Modal onClose={close}>
                    <LogIn onClose={close} />
                </Modal>
            )}
        </>
    );
}

export default App;
