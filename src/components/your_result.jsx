import React from 'react';

const YourResult = ({ result }) => {
   
    return (
        <div>
            У Вас {result.filter(item => item === true).length} правильних відповідей
        </div>
    );
}

export default YourResult;