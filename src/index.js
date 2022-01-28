import { registerPlugin } from '@wordpress/plugins';

registerPlugin(
  'block-xray-attributes',
  {
    render: () => {
      console.log('plugin block-xray-attributes render()');
    }
  },
);
