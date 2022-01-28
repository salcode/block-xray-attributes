import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

import SelectedBlockAttributes from '../SelectedBlockAttributes';

export default function BlockXrayPanel() {
  return (
    <PluginDocumentSettingPanel
      icon="code-standards"
      title={__( 'Block X-ray', 'block-xray-attributes' )}
    >
      <SelectedBlockAttributes />
    </PluginDocumentSettingPanel>
  );
}
