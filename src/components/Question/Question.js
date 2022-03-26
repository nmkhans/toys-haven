import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './Question.css';

const Question = () => {
    return (
        <div className="question">
            <div className="inner__question container">
                <div className="question__content">
                    <div className="question__list">
                        <h3><StarBorderIcon /> How React works?</h3>
                        <p><ArrowRightAltIcon /> React is a javascript library to build user interfaces. React.js is a library. React work using vitual dom. When ever a changes occurs, instead of changing the dom react creates a virtual dom and compare the virtual dom's changes with previous state. React does this with the help of an algorithem called diff algorithem. Then React render only the part that has been changed to the main dom. Thats how it works.</p>
                    </div>
                    <div className="question__list">
                        <h3><StarBorderIcon /> Props Vs State?</h3>
                        <p><ArrowRightAltIcon /> Props stand for properties and state is the condition of a part of site that can be changed. The different between props and state is props are used to send data to components like object and state is used to manage the state of components that can be changed. We can send a data to a components by using the props and recive them as an object. On the other hand, we can manage the state than can be changed of an components by using state.</p>
                    </div>
                    <div className="question__list">
                        <h3><StarBorderIcon /> How use State Works?</h3>
                        <p><ArrowRightAltIcon /> The use state is and react's build in function. It provide us an array with two elements. The first one is an variable and the second one is a function that is used to set the change. Tha function is called dispatcher.We can set an initial value to the variable and then when ever the state change, we can update the state of variable using the dispatcher function. That's how dispatcher works.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;