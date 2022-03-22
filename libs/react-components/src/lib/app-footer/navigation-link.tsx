import React, { FC } from 'react';

interface WCProps {
  footerid?: string;
  url: string;
  title: string;
  section?: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'goa-navigation-link': WCProps & React.HTMLAttributes<HTMLElement>
    }
  }
}

interface Props {
  footerid?: string;
  url: string;
  title: string;
  section?: string;
}

export const GoANavigationLink: FC<Props> = ({ footerid, url, title, section, children }) => {
  return (
    <goa-navigation-link
      footerid={footerid}
      url={url}
      title={title}
      section={section}
    >
      { children }
    </goa-navigation-link>
  )
}

export default GoANavigationLink;
