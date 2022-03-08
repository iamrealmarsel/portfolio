import Footer from './Footer';
import Header from './Header';
import cn from './Layout.module.scss';

function Layout({ children }) {
  return (
    <div className={cn.wrapper}>
      <Header />
      <main className={`${cn.main} ${cn.container}`}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
