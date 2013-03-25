<?php
/*
Plugin Name: GAeventTrack
Plugin URI: http://workbold.com/GAeventTrack
Description: Creates various types of on-page event tracking in Google Analytics to provide insight to how visitors interact with page elements.
Version: v1.0
Author: Nolan Dempster
Author URI: http://www.workbold.com
License: GPL2
*/
?>
<?php
//Enqueue Script to Page (Load JS without crashing/glitching out WP)
function write_GAevent_Script() {
wp_register_script( 'write_GAevent_Script', plugins_url('GAevent_track.js', __FILE__) );

wp_enqueue_script("write_GAevent_Script", WP_PLUGIN_DIR . '/GAeventTrack/GAevent_track.js', false, false, true);
}
add_action('wp_enqueue_scripts', 'write_GAevent_Script');
?>
