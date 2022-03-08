import cn from './AboutText.module.scss';

const AboutText = () => {
  return (
    <div className={cn.container}>
      <p className={cn.text}>Hello, world! 👋</p>
      <p className={cn.text}>
        I&apos;m Marsel and I love to study front-end development, design,
        marketing and also English 😅
      </p>
      <p className={cn.text}>
        I had experience with HTML, CSS, Sass, BEM, Javascript, React, React
        Router, Redux, Canvas, GSAP, Email coding, Webpack, Gulp, Git, Figma,
        Photoshop.
      </p>
      <p className={cn.text}>Get in touch 👇</p>
      <a
        className={cn.link}
        href='https://t.me/iamrealmarsel'
        target='_blank'
        rel='noreferrer'
      >
        <img src='img/icons/logo-telegram.svg' alt='' />
        @iamrealmarsel
      </a>
      <a className={cn.link} href='mailto:iamrealmarsel@gmail.com'>
        <img src='img/icons/logo-gmail.svg' alt='' />
        iamrealmarsel@gmail.com
      </a>
    </div>
  );
};

export default AboutText;
