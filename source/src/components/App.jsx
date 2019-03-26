import React from 'react';
import Timer from './timer/Timer';
import ModalRootComponent from "./../containers/modal/Modal";
import RegistrationForm from "./forms/RegistrationForm";

const App = () => (
    <div>
        <ModalRootComponent />
        <RegistrationForm />
        <Timer />
    </div>
);

export default App;