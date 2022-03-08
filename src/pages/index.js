import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import { navigation } from '../helpers/constants';
import AboutPage from './AboutPage';
import WorkPage from './WorkPage';

const Pages = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path={navigation.work.path} element={<WorkPage />} />
          <Route path={navigation.about.path} element={<AboutPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default Pages;
