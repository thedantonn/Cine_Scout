import { Provider } from 'react-redux';
import './App.css';
import LandingPage from './components/LandingPage';
import appStore from './utilis/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import DropProfile from './components/DropProfile';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>
    },
    {
      path: "/browse",
      element: (
        <ProtectedRoute>
          <Browse/>
        </ProtectedRoute>
      )
    },
    {
      path: "/drop",
      element: <DropProfile/>
    }
  ])
  return (
    <Provider store={appStore}>
       <RouterProvider router={appRouter} />
    </Provider>
    
  );
}

export default App;
