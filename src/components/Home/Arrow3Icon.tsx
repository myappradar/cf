import { memo, SVGProps } from 'react';

const Arrow3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M23.7071 0.707107C24.0976 0.316582 24.0976 -0.316582 23.7071 -0.707107L17.3431 -7.07107C16.9526 -7.46159 16.3195 -7.46159 15.9289 -7.07107C15.5384 -6.68054 15.5384 -6.04738 15.9289 -5.65685L21.5858 0L15.9289 5.65685C15.5384 6.04738 15.5384 6.68054 15.9289 7.07107C16.3195 7.46159 16.9526 7.46159 17.3431 7.07107L23.7071 0.707107ZM0 1H23V-1H0V1Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(Arrow3Icon);
export { Memo as Arrow3Icon };
