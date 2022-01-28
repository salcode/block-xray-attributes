import PropTypes from 'prop-types';

export default function JavaScriptObject() {
  return <h5>JavaScript Object</h5>;
}

JavaScriptObject.propTypes = {
  object: PropTypes.object.isRequired,
};
