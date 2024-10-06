import { Provider } from 'react-redux';
import './App.css';
import LandingPage from './components/LandingPage';
import appStore from './utilis/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import DropProfile from './components/DropProfile';
import ProtectedRoute from './components/ProtectedRoute';
import MainContainer from './components/MainContainer';
import SecondContainer from './components/SecondContainer';
import VideoBackground from './components/VideoBackground';
import { Header } from './components/Header';


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
    },
    {
      path: "/main",
      element: <MainContainer/>
    },
    {
      path: "/second",
      element: <Header/>
    }
  ])
  return (
    <Provider store={appStore}>
       <RouterProvider router={appRouter} />
    </Provider>
    
  );
}

export default App;
