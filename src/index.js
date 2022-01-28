import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';

registerPlugin(
  'block-xray-attributes',
  {
    render: () => {
      return <PluginDocumentSettingPanel
        icon="code-standards"
        title="Block X-ray"
      >
        <p>Sidebar content for Block X-ray Attributes plugin</p>
      </PluginDocumentSettingPanel>;
    }
  },
);
