import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";

const AddSong = React.lazy(() => import('./components/AddSong'));
const SongDetail = React.lazy(() => import('./components/SongDetail'));



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "songs/create",
    element: <AddSong/>,
  },
  {
    path: "/songs/:id",
    element: <SongDetail/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Suspense fallback={<>loading</>}>
        <RouterProvider router={router} />
      </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
