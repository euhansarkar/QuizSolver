import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quizs from './components/Quizs/Quizs';

function App() {

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Main></Main>,
      children: [
        {
          path: `/`,
          loader: () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element: <Home></Home>
        },
        {
          path: `/quizs/:quizId`,
          element: <Quizs></Quizs>,
          loader: async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
         } 
        },
        {
          path: `/statistics`,
          element: <Statistics></Statistics>
        },
        {
          path: `/blog`,
          element: <Blog></Blog>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
