import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { ModalContext } from "./context/ModalContext";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { LogIn } from "./components/LogIn";
import { Footer } from "./components/Footer";

function App() {
    const { modal, open, close } = useContext(ModalContext);

    return (
        <>
            <Header onOpen={open} />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            {modal && (
                <Modal onClose={close}>
                    <LogIn onClose={close} />
                </Modal>
            )}
            <Footer />
        </>
    );
}

export default App;
