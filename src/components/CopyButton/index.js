import PropTypes from 'prop-types';

import { ClipboardButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function CopyButton({
  content,
}) {
  const [ hasCopied, setHasCopied ] = useState( false );
  return (
    <ClipboardButton
    className="is-primary"
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
};

CopyButton.propTypes = {
  content: PropTypes.string.isRequired,
};
