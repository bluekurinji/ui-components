import type { Link } from "./link"

export interface NavigationSection {
  name: string;
  isMultiColumn?: boolean;
  links: Link[];
}
