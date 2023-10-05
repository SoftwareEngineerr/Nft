import logo from './logo.svg';
import './App.css';
import { router } from './routes/routes';
import { useRoutes } from 'react-router'

// Importing Scss
import './theme/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

// importing slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import './theme/main.css'


function App() {
  const routing = useRoutes(router);
  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
