import { GoABadge, GoAButton, GoAContainer } from '@abgov/react-components';
import * as React from 'react';

export default function Container() {
  return (
    <>
      <h3>Basic</h3>
      <GoAContainer headingSize="large">
        <h2>Detach to use</h2>
        + Add things inside me
      </GoAContainer>

      <br />
      <h3>Large accent bar</h3>
      <GoAContainer headingSize="large">
        <h2>Heading</h2>
        Content
      </GoAContainer>

      <br />
      <h3>Small accent bar</h3>
      <GoAContainer headingSize="small">
        <h2>Heading</h2>
        Content
      </GoAContainer>

      <br />
      <h3>Accent bar with text</h3>
      <GoAContainer headingSize="large" title="Heading" actions={<GoAButton type="secondary" onClick={() => void 0} size="compact">Edit</GoAButton>}>
        <h2>Heading</h2>
        Content
      </GoAContainer>

      <br />
      <h3>Heading with text only</h3>
      <GoAContainer headingSize="large" title="Heading" actions={<GoABadge type="success" content="Badge Text" />}>
        <h2>Heading</h2>
        Content
      </GoAContainer>

      <br />
      <h3>Nested</h3>
      <GoAContainer
        headingSize="large"
        title="The container title"
        actions={<GoAButton type="primary" size="compact" onClick={() => void 0}>Assign to me</GoAButton>}
      >
        <h2>Custom H2</h2>
        <GoAContainer headingSize="small">
          <div>This is a sub container </div>
        </GoAContainer>
      </GoAContainer>

      <br />
      <h3>Interactive</h3>
      <GoAContainer
        title="The container title"
        headingSize="large"
        variant="primary"
        actions={<GoAButton type="secondary" onClick={() => void 0} size="compact">Assign to me</GoAButton>}>
        <h2>Heading</h2>Content
      </GoAContainer>

      <br />
      <h3>Non-interactive</h3>
      <GoAContainer headingSize="large">
        <h2>Heading</h2>
        Content
      </GoAContainer>
    </>
  );
}

