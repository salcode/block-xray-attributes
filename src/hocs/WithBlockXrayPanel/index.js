import { PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';

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
