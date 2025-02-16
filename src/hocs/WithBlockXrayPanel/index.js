/* global wp */

const {
  components: {
    PanelBody,
  },
  editor: {
    InspectorControls,
  },
  i18n: {
    __,
  },
} = wp;

export default function WithBlockXrayPanel(WrappedComponent) {
  return props => {
    return (
      <>
        <WrappedComponent
          {...props}
        />
        <InspectorControls>
          <PanelBody title={__('Xray', 'example')}>
            <h2>salcode</h2>
          </PanelBody>
        </InspectorControls>
      </>
    );
  };
}
