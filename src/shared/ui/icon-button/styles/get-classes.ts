import classNames from 'classnames/bind';

import { IconButtonProps } from '../icon-button';
import classes from './icon-button.module.scss';

const cn = classNames.bind(classes);

type PickedIconButtonProps = Pick<
  IconButtonProps,
  'size' |
  'variant' |
  'className'
>;

export const getClasses = ({
  size,
  variant,
  className
}: PickedIconButtonProps) => {
  const cnRoot = cn(
    'icon-button',
    `icon-button--${size}`,
    `icon-button--${variant}`,
    className,
  );


  return {
    cnRoot,
  };
};
