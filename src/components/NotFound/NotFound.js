import cn from './NotFound.module.scss';

const NotFound = ({ text }) => {
  return (
    <div className={cn.container}>
      <p className={cn.error}>
        {text ||
          'Failed to load the page, possibly an invalid url or some problems with my website...'}
      </p>
      <img className={cn.cryImg} src='img/cry.gif' alt='not found' />
    </div>
  );
};

export default NotFound;
