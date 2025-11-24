import { FC, SVGProps } from 'react';
export const SvgChevronRight: FC<SVGProps<SVGSVGElement>> = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={14} fill="none" viewBox="0 0 9 14" {...props}>
    <path stroke="#42567A" strokeWidth={2} d="m.707.707 6.25 6.25-6.25 6.25" />
  </svg>
);
