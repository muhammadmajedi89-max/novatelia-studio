import { type ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-3xl border border-brand-border bg-white p-6 shadow-card ${className}`}>
      {children}
    </div>
  );
}

export function DarkCard({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/5 p-6 text-white ${className}`}>
      {children}
    </div>
  );
}
