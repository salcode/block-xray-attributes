/* global */

import PropTypes from 'prop-types';

import LegacyCopyButton from './LegacyCopyButton';
import ModernCopyButton from './ModernCopyButton';

export default function CopyButton({
  content,
}) {
  if ( wp?.compose?.useCopyToClipboard ) {
    // useCopyToClipboard is supported.
    return (
      <ModernCopyButton
        content={content}
      />
    );
  }
  // Use legacy CopyButton since useCopyToClipboard is not supported.
  return (
    <LegacyCopyButton
      content={content}
    />
  );
};

CopyButton.propTypes = {
  content: PropTypes.string.isRequired,
};
