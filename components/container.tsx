import React from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = React.PropsWithChildren<{
  children: React.ReactNode;
  className?: string;
}>;

const Container = ({ children, className }: ContainerProps) => {
  return <section className={twMerge(className, 'container mx-auto')}>{children}</section>;
};

export default Container;
