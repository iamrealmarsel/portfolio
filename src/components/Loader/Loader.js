import cn from './Loader.module.scss';

const Loader = () => {
  return (
    <svg
      className={cn.loader}
      xmlns='http://www.w3.org/2000/svg'
      width='100px'
      height='100px'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <defs>
        <mask id='ldio-xdhaj09ykm-mask'>
          <circle
            cx='50'
            cy='50'
            r='20'
            stroke='#fff'
            strokeLinecap='round'
            strokeDasharray='94.24777960769379 31.41592653589793'
            strokeWidth='9'
          >
            <animateTransform
              attributeName='transform'
              type='rotate'
              values='0 50 50;360 50 50'
              times='0;1'
              dur='1s'
              repeatCount='indefinite'
            ></animateTransform>
          </circle>
        </mask>
      </defs>
      <g mask='url(#ldio-xdhaj09ykm-mask)'>
        <rect x='20.5' y='0' width='12.6' height='100' fill='#153141'>
          <animate
            attributeName='fill'
            values='#153141;#1f4561;#e0a05c;#ffa600;#ffc61a'
            times='0;0.25;0.5;0.75;1'
            dur='1s'
            repeatCount='indefinite'
            begin='-0.8s'
          ></animate>
        </rect>
        <rect x='32.1' y='0' width='12.6' height='100' fill='#1f4561'>
          <animate
            attributeName='fill'
            values='#153141;#1f4561;#e0a05c;#ffa600;#ffc61a'
            times='0;0.25;0.5;0.75;1'
            dur='1s'
            repeatCount='indefinite'
            begin='-0.6s'
          ></animate>
        </rect>
        <rect x='43.7' y='0' width='12.6' height='100' fill='#e0a05c'>
          <animate
            attributeName='fill'
            values='#153141;#1f4561;#e0a05c;#ffa600;#ffc61a'
            times='0;0.25;0.5;0.75;1'
            dur='1s'
            repeatCount='indefinite'
            begin='-0.4s'
          ></animate>
        </rect>
        <rect x='55.3' y='0' width='12.6' height='100' fill='#ffa600'>
          <animate
            attributeName='fill'
            values='#153141;#1f4561;#e0a05c;#ffa600;#ffc61a'
            times='0;0.25;0.5;0.75;1'
            dur='1s'
            repeatCount='indefinite'
            begin='-0.2s'
          ></animate>
        </rect>
        <rect x='66.9' y='0' width='12.6' height='100' fill='#ffc61a'>
          <animate
            attributeName='fill'
            values='#153141;#1f4561;#e0a05c;#ffa600;#ffc61a'
            times='0;0.25;0.5;0.75;1'
            dur='1s'
            repeatCount='indefinite'
            begin='0s'
          ></animate>
        </rect>
      </g>
    </svg>
  );
};

export default Loader;
