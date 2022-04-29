import PropTypes from 'prop-types';

import { useCopyToClipboard } from '@wordpress/compose';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const onCopySuccess = () => dispatch('core/notices').createSuccessNotice(
  __('Block Data copied!', 'block-xray-attributes'),
  {
    id: 'block-xray-attributes-block-data-copied',
    isDismissible: true,
    type: 'snackbar',
  }
);

export default function ModernCopyButton({
  content,
}) {
  const ref = useCopyToClipboard(content, onCopySuccess);
  return (
    <button
      className="components-button is-secondary"
      ref={ref}
    >
      {__( 'Copy Block Data', 'block-xray-attributes' )}
    </button>
  );
}

ModernCopyButton.propTypes = {
  content: PropTypes.string.isRequired,
};
