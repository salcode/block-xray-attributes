import { registerPlugin } from '@wordpress/plugins';

import BlockXrayPanel from './components/BlockXrayPanel';

registerPlugin(
  'block-xray-attributes',
  {
    render: () => <BlockXrayPanel />
  },
);
