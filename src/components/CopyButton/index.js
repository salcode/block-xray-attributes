import PropTypes from 'prop-types';

import LegacyCopyButton from './LegacyCopyButton';

export default function CopyButton({
  content,
}) {
  return (
    <LegacyCopyButton
      content={content}
    />
  );
};

CopyButton.propTypes = {
  content: PropTypes.string.isRequired,
};
