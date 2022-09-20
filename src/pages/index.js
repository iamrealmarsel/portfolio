import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import { navigation } from '../helpers/constants';
import AboutPage from './AboutPage';
import WorkCardPage from './WorkCardPage';
import WorkPage from './WorkPage';

const Pages = () => {
  return (
    <Layout>
      <Routes>
        <Route path={navigation.work.path} element={<WorkPage />} />
        <Route path={navigation.about.path} element={<AboutPage />} />
        <Route path={`${navigation.workCard.path}/:workcard`} element={<WorkCardPage />} />
      </Routes>
    </Layout>
  );
};

export default Pages;
