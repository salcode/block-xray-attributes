import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import JavaScriptObject from '../JavaScriptObject';

export default function SelectedBlockAttributes() {
  const selectedBlock = useSelect(
    (select) => select('core/block-editor').getSelectedBlock()
  );
  if (! selectedBlock) {
    return <p>{__( 'No block is selected.', 'block-xray-attributes' )}</p>;
  }
  return (
    <JavaScriptObject
      object={selectedBlock}
    />
  );
}
