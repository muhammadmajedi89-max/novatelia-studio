import Link from 'next/link';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-blue text-white shadow-glow hover:bg-blue-600',
  secondary: 'bg-white text-brand-navy border border-brand-border hover:bg-brand-soft',
  ghost: 'border border-white/15 text-white hover:bg-white/10',
  dark: 'bg-brand-navy text-white hover:bg-brand-dark'
};

export function Button({ href, children, variant = 'primary', className = '', ...buttonProps }: ButtonProps) {
  const classes = `focus-ring inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes} {...buttonProps}>{children}</button>;
}
