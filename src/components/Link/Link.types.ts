import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
  Ref,
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
  ref?: Ref<HTMLAnchorElement>;
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
  ref?: Ref<HTMLAnchorElement>;
}

export interface ButtonLinkProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  as: "button";
  changed: string;
  children: LinkChild;
  ref?: Ref<HTMLButtonElement>;
}

export type LinkProps = InternalLinkProps | ExternalLinkProps | ButtonLinkProps;
