import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

import SelectedBlockAttributes from '../SelectedBlockAttributes';

export default function BlockXrayPanel() {
  return (
    <PluginDocumentSettingPanel
      icon="code-standards"
      title="Block X-ray"
    >
      <SelectedBlockAttributes />
    </PluginDocumentSettingPanel>
  );
}
