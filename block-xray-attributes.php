<?php
/**
 * Plugin Name:       Block X-ray Attributes
 * Plugin URI:        https://github.com/salcode/block-xray-attributes
 * Description:       Shows the attributes of the current Gutenberg block in the Document sidebar.
 * Version:           1.2.1
 * Requires at least: 5.5
 * Requires PHP:      7.2
 * Author:            Sal Ferrarello
 * Author URI:        https://salferrarello.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-xray-attributes
 * Domain Path:       /languages
 */

namespace salcode\BlockXrayAttributes;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

function register_assets() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'block-xray-attributes',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
}

function enqueue_editor_assets() {
	wp_enqueue_script( 'block-xray-attributes' );
}

add_action('plugins_loaded', function() {
    load_plugin_textdomain( 'block-xray-attributes', false, __DIR__ );
});

add_action( 'init', __NAMESPACE__ . '\register_assets' );
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor_assets' );
