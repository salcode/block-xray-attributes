import PropTypes from 'prop-types';

import { ClipboardButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * This component uses the now deprecated ClipboardButton component
 * but it provides support back to WordPress 5.4.x (Gutenberg 6.7.0).
 */
export default function LegacyCopyButton({
  content,
}) {
  const [ hasCopied, setHasCopied ] = useState( false );
  return (
    <ClipboardButton
      className="is-secondary"
      text={content}
      onCopy={ () => setHasCopied( true ) }
      onFinishCopy={ () => setHasCopied( false ) }
    >
      {
        hasCopied ?
        __( 'Copied!', 'block-xray-attributes' ) :
        __( 'Copy Block Data', 'block-xray-attributes' )
      }
    </ClipboardButton>
  );
}

LegacyCopyButton.propTypes = {
  content: PropTypes.string.isRequired,
};
