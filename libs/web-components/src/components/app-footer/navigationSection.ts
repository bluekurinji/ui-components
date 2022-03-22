import type { Link } from "./link"

export interface NavigationSection {
  name: string | null;
  links: Link[];
}
