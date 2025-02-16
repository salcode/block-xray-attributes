import { PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';

import BlockXray from '../../components/BlockXray';
import WithSelectedBlock from '../WithSelectedBlock';

const BlockXrayWithSelectedBlock = WithSelectedBlock(
  BlockXray,
);

export default function WithBlockXrayPanel(WrappedComponent) {
  return props => {
    return (
      <>
        <WrappedComponent
          {...props}
        />
        <InspectorControls>
          <PanelBody
            icon="code-standards"
            title={__('Block X-ray', 'block-xray-attributes')}
          >
            <BlockXrayWithSelectedBlock />
          </PanelBody>
        </InspectorControls>
      </>
    );
  };
}
