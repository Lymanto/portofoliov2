import * as React from 'react';

export type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  openInNewTab?: boolean;
};

export default function Link({
  children,
  href,
  className,
  openInNewTab = false,
}: LinkProps) {
  return openInNewTab ? (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={className}
    >
      {children}
    </a>
  ) : (
    <a href={href}>{children}</a>
  );
}
