export default function WithBlockXrayPanel(WrappedComponent) {
  return props => {
    return (
      <WrappedComponent
        {...props}
      />
    );
  };
}
