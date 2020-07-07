import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
    
const Interrogation = ({ 
    setAnswer, nextQuestion, getYourResult, getAnswer,
    correct_answers, questions, question, 
    count, answers, totalCount, result
    }) => {

    const[selected, setSelected] = useState();
        
    if(count > questions.length) {
        return <Redirect to={"/result"} />
    } 
 
    return (
        <form onSubmit={(event) => {
                event.preventDefault();
                setAnswer(selected === correct_answers[0]);
                if(count < questions.length) {
                    nextQuestion(questions[count].question, questions[count].answers, questions[count].correct_answers)
                } else {
                    nextQuestion(null, null, null)
                }
            setSelected(null);
            }}>
            <div>
                Запитання №{count}
            </div>
            <div>
                {question}
            </div>
            <div>
                {answers.map((item, index) => {
                        return (<div key={index}>
                                    <input value={item} type='radio' id={index} name="answer" onChange={(event) => setSelected(event.target.value)}/>
                                    <label htmlFor={index}>{item}</label>
                                </div>)
                        })  
                }
            </div>
            <div>
                <div>
                    {count}/{totalCount}
                </div>
                <button>
                    Продовжити
                </button>
            </div>
        </form>
    );
}

Interrogation.prototype = {
    question: PropTypes.string
}

export default Interrogation;