import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
    
const Interrogation = ({ 
    setAnswer, nextQuestion, 
    correct_answers, questions, question, 
    count, answers, totalCount
    }) => {

    const[selected, setSelected] = useState();
        
    if(count > questions.length) {
        return <Redirect to={"/result"} />
    } 
 
    return (
        <div className='container'>
            <h1>
                Наскільки ти кіберспортивний експерт
            </h1>
            <form onSubmit={(event) => {
                    event.preventDefault();
                    setAnswer(selected === correct_answers[0]);
                    if(count < questions.length) {
                        nextQuestion(questions[count].question, questions[count].answers, questions[count].correct_answers)
                    } else {
                        nextQuestion(null, null, null)
                    }
                    setSelected(null);
                    }}
                    className='form'>
                <div>
                    Запитання №{count}
                </div>
                <div className='question'>
                    {question}
                </div>
                <div className='radio'>
                    {answers.map((item, index) => {
                            return (<div key={index}>
                                        <input value={item} type='radio' id={index} name="answer" onChange={(event) => setSelected(event.target.value)}/>
                                        <label htmlFor={index}>{item}</label>
                                    </div>)
                            })  
                    }
                </div>
                <div className='footer'>
                    <span className='count'>
                        {count}/{totalCount}
                    </span>
                    <button className='button'>
                        Продовжити
                    </button>
                </div>
            </form>
        </div>
    );
}

Interrogation.prototype = {
    question: PropTypes.string
}

export default Interrogation;