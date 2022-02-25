import PropTypes from 'prop-types';

const pretty = (object) => {
  return JSON.stringify(object, null, 2);
};

const codeStyles = {
  display: 'block',
  overflow: 'auto',
};

export default function JavaScriptObject({ object }) {
  return (
    <>
      <pre>
        <code style={codeStyles}>
          {pretty(object)}
        </code>
      </pre>
    </>
  );
}

JavaScriptObject.propTypes = {
  object: PropTypes.object.isRequired,
};
