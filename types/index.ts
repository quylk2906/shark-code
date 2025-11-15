import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// Extend HeroUI Button color prop to include "white"
declare module '@heroui/button' {
  interface ButtonProps {
    color?:
      | 'default'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning'
      | 'danger'
      | 'white';
  }
}
