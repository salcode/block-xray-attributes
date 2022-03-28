import PropTypes from 'prop-types';

import { useCopyToClipboard } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

export default function ModernCopyButton({
  content,
}) {
  const ref = useCopyToClipboard(content);
  return (
    <button
      ref={ref}
    >
      {__( 'Copy Block Data', 'block-xray-attributes' )}
    </button>
  );
}

ModernCopyButton.propTypes = {
  content: PropTypes.string.isRequired,
};
