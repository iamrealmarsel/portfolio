import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';
import { navigation } from '../helpers/constants';
import AboutPage from './AboutPage';
import WorkCardPage from './WorkCardPage';
import WorkPage from './WorkPage';

const Pages = () => {
  return (
    <Layout>
      <Routes>
        <Route path={navigation.root.path} element={<WorkPage />} />
        <Route path={navigation.about.path} element={<AboutPage />} />
        <Route path={navigation.work.path} element={<Navigate to='/' replace />} />
        <Route path={`${navigation.work.path}/:param`} element={<WorkCardPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Pages;
