import React from 'react';

const Option = ({option}) => {
    return (
        <div className='flex'>
            <input type="radio" name="rad" id="radio" />
            <h2>{option}</h2>
        </div>
    );
};

export default Option;