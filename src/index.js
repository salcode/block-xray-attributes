console.log('salcode Hello from src/index.js');
import { registerPlugin } from '@wordpress/plugins';

registerPlugin(
  'block-xray-attributes',
  {
    render: () => {
      console.log('plugin block-xray-attributes render()');
    }
  },
);
