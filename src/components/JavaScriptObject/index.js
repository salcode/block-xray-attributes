import PropTypes from 'prop-types';

import CopyButton from '../CopyButton';

const pretty = (object) => {
  return JSON.stringify(object, null, 2);
};

const codeStyles = {
  display: 'block',
  overflow: 'auto',
};

export default function JavaScriptObject({ object }) {
  const prettyCode = pretty(object);
  return (
    <>
      <pre>
        <code style={codeStyles}>
          {prettyCode}
        </code>
      </pre>
      <CopyButton
        content={prettyCode}
      />
    </>
  );
}

JavaScriptObject.propTypes = {
  object: PropTypes.object.isRequired,
};
