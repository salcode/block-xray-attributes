import { select } from '@wordpress/data';

export default function SelectedBlockAttributes() {
  const selectedBlock = select('core/block-editor').getSelectedBlock();
  console.log(selectedBlock);
  if (! selectedBlock) {
    return <p>No block is selected.</p>;
  }
  return (
    <p>Selected block attributes {selectedBlock?.name}</p>
  );
}
