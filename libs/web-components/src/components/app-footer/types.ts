import type { Message } from "../../common/context-store"

export const META_LINK = "meta-link";
export const NAVIGATION_LINK = "navigation-link";

export interface MetaLinkRegisterMessage extends Message {
  type: "meta-link" | "navigation-link";
  url: string;
  title: string;
}

export interface NavigationLinkRegisterMessage extends Message {
  type: "meta-link" | "navigation-link";
  url: string;
  title: string;
  section?: string;
}
