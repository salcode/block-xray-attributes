import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';

import JavaScriptObject from '../JavaScriptObject';

export default function SelectedBlockAttributes({
  block = {},
}) {
  if (! block) {
    return <p>{__( 'No block is selected.', 'block-xray-attributes' )}</p>;
  }
  return (
    <JavaScriptObject
      object={block}
    />
  );
}

SelectedBlockAttributes.propTypes = {
  object: PropTypes.object,
};
