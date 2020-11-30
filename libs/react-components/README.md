# react-components

This library contains react components from the Government of Alberta.

## Installation

1. Add @abgov/react-components  
````npm add --save @abgov/react-components````
2. OPTIONAL: in package.json specify the allowed versions for installation
3. Add peer dependencies  
4. OPTIONAL: Add to styles to import Alberta fonts and global element styles. 
````import '@abgov/react-components/react-components.esm.css';````

## Documentation

Documentation is being worked on and will be provided soon.

## Usage

```
import '@abgov/react-components/react-components.esm.css';
import { GoACallout } from '@abgov/react-components';
import { GoAButton } from '@abgov/react-components';
import { GoACheckbox } from '@abgov/react-components';
import { GoANotification } from '@abgov/react-components';

function App() {
    return (
        <div>
          <GoACallout type="emergency" title="Covid 19 Emergency" content="please be advised that in-center services are closed" />
          <GoAButton
            buttonType="primary"
            buttonSize="normal"
            content="Click Me!"
            toolTip="Hovering"
            onClick={()=> alert("You have clicked the button")}
          />
          <GoAButton
            buttonType="primary"
            buttonSize="normal"
            toolTip="Hovering"
            onClick={()=> alert("You have clicked the button")}
          >
            <div>Or click me instead</div>
          </GoAButton>
          <GoACheckbox checked={true}>Checkbox 1</GoACheckbox>
          <GoANotification
            type="'important || 'information' || 'event' || 'emergency'",
            title='Notification Title',
            message="Information to the user goes in the message"
            isDismissable: true,
            notificationUrl: 'www.google.com',
            title: 'Hidden Title',
          </>
        </div>
    )
}

```