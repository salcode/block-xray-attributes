import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

import SelectedBlockAttributes from '../SelectedBlockAttributes';
import WithSelectedBlock from '../../hocs/WithSelectedBlock';

export default function BlockXrayPanel() {
  const SelectedBlockAttributesWithBlock = WithSelectedBlock(
    SelectedBlockAttributes,
  );
  return (
    <PluginDocumentSettingPanel
      icon="code-standards"
      title={__( 'Block X-ray', 'block-xray-attributes' )}
    >
      <SelectedBlockAttributesWithBlock />
    </PluginDocumentSettingPanel>
  );
}
