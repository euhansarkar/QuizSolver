import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const quizs = useLoaderData();
    console.log(quizs.data.questions);
    return (
        <div>
            {
                quizs.data.questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Quizs;