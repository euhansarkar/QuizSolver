import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topicsOfQuiz = useLoaderData();
    return (
        <div>
            <div className="grid md:grid-cols-2 w-5/6  gap-12 mt-20">
            {
                topicsOfQuiz.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
            </div>
        </div>
    );
};

export default Home;