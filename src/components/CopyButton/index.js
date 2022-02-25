import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';

export default function CopyButton({
  content,
}) {
  return (
    <button>
      {__( 'Copy Block Data', 'block-xray-attributes' )}
    </button>
  );
}

CopyButton.propTypes = {
  content: PropTypes.string.isRequired,
};
