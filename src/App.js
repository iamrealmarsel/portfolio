import { HashRouter } from 'react-router-dom';
import Pages from './pages';
import './styles/app.scss';

const App = () => {
  return (
    <HashRouter>
      <Pages />
    </HashRouter>
  );
};

export default App;
