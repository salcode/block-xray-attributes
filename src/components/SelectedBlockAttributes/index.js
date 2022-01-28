import { select } from '@wordpress/data';

export default function SelectedBlockAttributes() {
  const selectedBlock = select('core/block-editor').getSelectedBlock();
  console.log(selectedBlock);
  return (
    <p>Selected block attributes {selectedBlock?.name}</p>
  );
}
