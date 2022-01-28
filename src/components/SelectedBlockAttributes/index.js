import { useSelect } from '@wordpress/data';

import JavaScriptObject from '../JavaScriptObject';

export default function SelectedBlockAttributes() {
  const selectedBlock = useSelect(
    (select) => select('core/block-editor').getSelectedBlock()
  );
  if (! selectedBlock) {
    return <p>No block is selected.</p>;
  }
  return (
    <JavaScriptObject
      object={selectedBlock}
    />
  );
}
