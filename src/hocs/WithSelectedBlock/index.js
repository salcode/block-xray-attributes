import { useSelect } from '@wordpress/data';

export default function WithSelectedBlock(WrappedComponent) {
  return props => {
    const selectedBlock = useSelect(
      (select) => select('core/block-editor').getSelectedBlock()
    );
    return (
      <WrappedComponent
        {...props}
        block={selectedBlock}
      />
    );
  };
}
