import React from 'react';
import getClassName from '../../../functions/getClassName';
import styles from './buttons.module.css';

type ButtonProps = {
  icon?: React.ReactElement<SVGElement>;
  children: React.ReactNode;
  className?: string;
  notext?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  icon,
  children,
  className,
  notext,
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        className={
          styles.button +
          getClassName(className) +
          getClassName(notext, styles.notext)
        }
      >
        <div className={styles.icon}>{icon}</div>
        <div className={styles.text}>{children}</div>
      </button>
    </>
  );
};

export default Button;
