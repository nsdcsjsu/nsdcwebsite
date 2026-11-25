import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
  const isHttp = href.startsWith('http://') || href.startsWith('https://');
  return (
    <a
      href={href}
      {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
