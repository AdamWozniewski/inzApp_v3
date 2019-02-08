import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
// import { modalAction } from './../../actions/modal/modalActions';
import modal_style from './../../styles/modal/modal_styles.scss';

class ModalRoot extends Component {
    render () {
        return (
            <div className={modal_style.header}>
                <h1>Weszlo</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // modal: state.modalReducer,
});

const mapDispatchToProps = (dispatch) => ({
    // modalAction: () => dispatch(modalAction)
});

const ModalRootComponent = connect(mapStateToProps, mapDispatchToProps)(ModalRoot);

export default CSSModules(ModalRootComponent, modal_style);
