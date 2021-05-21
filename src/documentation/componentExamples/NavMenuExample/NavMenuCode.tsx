import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { NavMenu } from 'quark-components';

<NavMenu
  menuTitle="NavMenu Items"
  linkColor="rgb(33, 150, 243)"
  linkType="anchorLink"
  data={[
    { name: 'NavMenu Item 1' },
    { name: 'NavMenu Item 2' },
    { name: 'NavMenu Item 3' },
    { name: 'NavMenu Item 4' },
    { name: 'NavMenu Item 5' }
  ]}
/>
`;

export const NavMenuCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);