import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Home from './coponents/Home/Home';

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
