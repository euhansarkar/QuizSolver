import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topicsOfQuiz = useLoaderData();
    console.log(topicsOfQuiz);
    return (
        <div>
            {
                topicsOfQuiz.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Home;