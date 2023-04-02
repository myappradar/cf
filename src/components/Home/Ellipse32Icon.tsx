import { memo, SVGProps } from 'react';

const Ellipse32Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={12.5} cy={12.5} r={12.5} stroke='#3C3C3C' strokeWidth={2} />
  </svg>
);
const Memo = memo(Ellipse32Icon);
export { Memo as Ellipse32Icon };
