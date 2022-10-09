import { NavLink } from 'react-router-dom';
import { navigation } from '../../helpers/constants';
import cn from './Footer.module.scss';

const setActive = ({ isActive }) => (isActive ? `${cn.link} ${cn.active}` : cn.link);

function Footer() {
  return (
    <footer className={cn.footer}>
      <NavLink className={setActive} to={navigation.root.path} key={navigation.root.path}>
        {navigation.root.name}
      </NavLink>
      <NavLink className={setActive} to={navigation.about.path} key={navigation.about.path}>
        {navigation.about.name}
      </NavLink>
      <a
        href='https://github.com/iamrealmarsel/portfolio'
        className={cn.logoGithub}
        target='_blank'
        rel='noreferrer'
      >
        <img src='img/icons/logo-github.svg' alt='' />
      </a>
    </footer>
  );
}

export default Footer;
