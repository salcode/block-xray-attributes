import { __ } from '@wordpress/i18n';

export default function CopyButton() {
  return (
    <button>
      {__( 'Copy Block Data', 'block-xray-attributes' )}
    </button>
  );
}
