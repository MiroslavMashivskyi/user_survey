import React from 'react';

const YourResult = ({ result }) => {
   
    return (
        <div className='result'>
            <span  className='result__text'>
                У Вас {result.filter(item => item === true).length} правильних відповідей з 5 
            </span>
        </div>
    );
}

export default YourResult;