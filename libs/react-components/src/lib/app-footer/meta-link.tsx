import React, { FC } from 'react';

interface WCProps {
  footerid?: string;
  url: string;
  title: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'goa-meta-link': WCProps & React.HTMLAttributes<HTMLElement>
    }
  }
}

interface Props {
  footerid?: string;
  url: string;
  title: string;
}

export const GoAMetaLink: FC<Props> = ({ footerid, url, title, children }) => {
  return (
    <goa-meta-link
      footerid={footerid}
      url={url}
      title={title}
    >
      { children }
    </goa-meta-link>
  )
}

export default GoAMetaLink;
