import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M41.1327 39.254L30.5874 28.865C33.3489 25.8612 35.0456 21.8887 35.0456 17.5173C35.0443 8.16608 27.351 0.58651 17.8601 0.58651C8.36922 0.58651 0.675934 8.16608 0.675934 17.5173C0.675934 26.8685 8.36922 34.448 17.8601 34.448C21.9608 34.448 25.7219 33.028 28.6762 30.6672L39.2625 41.0971C39.7783 41.6059 40.6157 41.6059 41.1315 41.0971C41.2542 40.9772 41.3517 40.8339 41.4183 40.6757C41.485 40.5174 41.5193 40.3475 41.5194 40.1758C41.5195 40.0041 41.4854 39.8341 41.419 39.6758C41.3526 39.5175 41.2552 39.3741 41.1327 39.254ZM17.8601 31.8431C9.82979 31.8431 3.31996 25.4292 3.31996 17.5173C3.31996 9.6053 9.82979 3.19141 17.8601 3.19141C25.8905 3.19141 32.4002 9.6053 32.4002 17.5173C32.4002 25.4292 25.8905 31.8431 17.8601 31.8431Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
