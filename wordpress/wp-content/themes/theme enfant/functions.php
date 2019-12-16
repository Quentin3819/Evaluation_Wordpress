<?php

function theme() {
    wp_enqueue_style( 'parent', get_template_directory_uri().'style.css');
}

add_action('wp_enqueue_scripts',' theme');
?>