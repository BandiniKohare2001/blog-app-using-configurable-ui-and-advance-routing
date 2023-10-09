import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Posts from './views/Posts/Post';
import ReadMore from './views/ReadMore/ReadMore'


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts />
  },
  {
    path: '/Post/ReadPost/:id',
    element:<ReadMore />
  },
  {
    path: '*',
    element:<div>404 Not Found</div>
  }
])
root.render(<RouterProvider router = {router} />);

