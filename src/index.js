import WithBlockXrayPanel from './hocs/WithBlockXrayPanel';

wp.hooks.addFilter(
  'editor.BlockEdit',
  'block-xray-attributes',
  WithBlockXrayPanel
);
