import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

export type LinkChild = ReactElement<{
  children?: ReactNode;
}>;

export interface InternalLinkProps {
  as?: "a";
  to: string;
  isExternal: false;
  changed: string;
  children: LinkChild;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface ExternalLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href"
> {
  as?: "a";
  href: string;
  isExternal: true;
  changed: string;
  children: LinkChild;
}

export interface ButtonLinkProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  as: "button";
  changed: string;
  children: LinkChild;
}

export type LinkProps = InternalLinkProps | ExternalLinkProps | ButtonLinkProps;
