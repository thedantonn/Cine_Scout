import { Provider } from 'react-redux';
import './App.css';
import LandingPage from './components/Pages/LandingPage';
import appStore from './utilis/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import MainContainer from './components/MainContainer';
import TrailerPage from './components/Pages/TrailerPage';
import BrowsePage from './components/Pages/BrowsePage';
import TempPage from './components/Pages/TempPage';
import CollectionPage from './components/Pages/CollectionPage';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>
    },
    {
      path: "/browsePage",
      element: (
        <ProtectedRoute>
          <BrowsePage/>
        </ProtectedRoute>
      )
    },
    {
      path: "/movies/:movieId",
      element: <TrailerPage/>
    },
    {
      path: "/main",
      element: <MainContainer/>
    },
    {
      path: "/comingsoon",
      element: <TempPage/>
    },
    {
      path: "/collection",
      element: <CollectionPage/>
    }
  ])
  return (
    <Provider store={appStore}>
       <RouterProvider router={appRouter} />
    </Provider>
    
  );
}

export default App;
