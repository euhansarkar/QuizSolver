import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({topic}) => {
    console.log(topic);
    const {id, name, logo, total} = topic;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quizs/${id}`)
    }
    return (
        <div className='border ml-40 flex items-center w-4/5 m-auto justify-evenly rounded-md flex-col md:flex-row'>
            <img className='w-40' src={logo} alt="" />
            <div className="info space-y-3">
                <h2 className='text-4xl shadow-md'>{name}</h2>
                <h3>total: {total}</h3>
                <button onClick={handleNavigate} className='bg-black text-white py-1 rounded-lg px-5'>Start Quiz</button>
            </div>
        </div>
    );
};

export default Topic;