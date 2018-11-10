import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children /* Use this to reference child elements passed into component*/}    
        </div>
    );
}

function WelcomeDialog() {
    return (
        //  Note: JSX Components can be passed to Components by their properties
        //  Example: <FancyBorder left={LComp} right={RComp} />
        <FancyBorder color="blue">
            {/* 
                props.children from FancyBorder 
                component references these child 
                components
            */}
            <h1 className="Dialog-title">Welcome</h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
