import PropTypes from 'prop-types';

const pretty = (object) => {
  return JSON.stringify(object, null, 2);
};

export default function JavaScriptObject({ object }) {
  return (
    <pre>
      <code>
        {pretty(object)}
      </code>
    </pre>
  );
}

JavaScriptObject.propTypes = {
  object: PropTypes.object.isRequired,
};
