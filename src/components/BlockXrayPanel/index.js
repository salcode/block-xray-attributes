import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

export default function BlockXrayPanel() {
  return (
    <PluginDocumentSettingPanel
      icon="code-standards"
      title="Block X-ray"
    >
      <p>Sidebar content for Block X-ray Attributes plugin</p>
    </PluginDocumentSettingPanel>
  );
}
