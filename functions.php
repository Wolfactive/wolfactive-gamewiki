<?php
 /*
 *  GLOBAL VARIABLES
 */
define('THEME_DIR', get_stylesheet_directory());
define('THEME_URL', get_stylesheet_directory_uri());

/*
 *  INCLUDED FILES
 */

$file_includes = [
    'includes/custom-field.php', 
    'includes/theme-setup.php',                         // General theme setting
    'includes/acf-options.php',                         // ACF Option page
    'includes/resize.php',
    'includes/customizer.php',
    'includes/api.php',
    'includes/request-app-ranking.php',
    'includes/theme-minis.php'
];

foreach ($file_includes as $file) {
    if (!$filePath = locate_template($file)) {
        trigger_error(sprintf(__('Missing included file'), $file), E_USER_ERROR);
    }
    require_once $filePath;
}

unset($file, $filePath);
add_filter('show_admin_bar', '__return_false');

 // Import feauture images
 function theme_features() {
   register_nav_menus(
 		array(
 			'main_nav' => 'Menu Main',
 			'top_nav' => 'Menu Top',
       'footer_big_nav' => 'Footer Big Menu',
       'footer_small_nav' => 'Footer Small Menu',
      'mobile_nav' => 'Menu Mobile',
 		));
  add_theme_support('title-tag');
}
add_action('after_setup_theme', 'theme_features');
add_filter('jpeg_quality', function($arg){return 70;});
add_filter('png_quality', function($arg){return 70;});
add_image_size('new-img',300, 300 ,TRUE);
add_theme_support( 'custom-logo', array(
  	'height'      => 100,
  	'width'       => 400,
  	'flex-height' => true,
  	'flex-width'  => true,
  	'header-text' => array( 'site-title', 'site-description' ),
  ) );

/* ------------------------------------ */
  //marcus post views
  function gt_get_post_view() {
      $count = get_post_meta( get_the_ID(), 'post_views_count', true );
      return "$count views";
  }
  function gt_set_post_view() {
      $key = 'post_views_count';
      $post_id = get_the_ID();
      $count = (int) get_post_meta( $post_id, $key, true );
      $count++;
      update_post_meta( $post_id, $key, $count );
  }
  function gt_posts_column_views( $columns ) {
      $columns['post_views'] = 'Views';
      return $columns;
  }
  function gt_posts_custom_column_views( $column ) {
      if ( $column === 'post_views') {
          echo gt_get_post_view();
      }
  }
  add_filter( 'manage_posts_columns', 'gt_posts_column_views' );
  add_action( 'manage_posts_custom_column', 'gt_posts_custom_column_views' );
  //marcus post views
  /*
 * Function for post duplication. Dups appear as drafts. User is redirected to the edit screen
 */
function rd_duplicate_post_as_draft(){
  global $wpdb;
  if (! ( isset( $_GET['post']) || isset( $_POST['post'])  || ( isset($_REQUEST['action']) && 'rd_duplicate_post_as_draft' == $_REQUEST['action'] ) ) ) {
    wp_die('No post to duplicate has been supplied!');
  }

  /*
   * Nonce verification
   */
  if ( !isset( $_GET['duplicate_nonce'] ) || !wp_verify_nonce( $_GET['duplicate_nonce'], basename( __FILE__ ) ) )
    return;

  /*
   * get the original post id
   */
  $post_id = (isset($_GET['post']) ? absint( $_GET['post'] ) : absint( $_POST['post'] ) );
  /*
   * and all the original post data then
   */
  $post = get_post( $post_id );

  /*
   * if you don't want current user to be the new post author,
   * then change next couple of lines to this: $new_post_author = $post->post_author;
   */
  $current_user = wp_get_current_user();
  $new_post_author = $current_user->ID;

  /*
   * if post data exists, create the post duplicate
   */
  if (isset( $post ) && $post != null) {

    /*
     * new post data array
     */
    $args = array(
      'comment_status' => $post->comment_status,
      'ping_status'    => $post->ping_status,
      'post_author'    => $new_post_author,
      'post_content'   => $post->post_content,
      'post_excerpt'   => $post->post_excerpt,
      'post_name'      => $post->post_name,
      'post_parent'    => $post->post_parent,
      'post_password'  => $post->post_password,
      'post_status'    => 'draft',
      'post_title'     => $post->post_title,
      'post_type'      => $post->post_type,
      'to_ping'        => $post->to_ping,
      'menu_order'     => $post->menu_order
    );

    /*
     * insert the post by wp_insert_post() function
     */
    $new_post_id = wp_insert_post( $args );

    /*
     * get all current post terms ad set them to the new post draft
     */
    $taxonomies = get_object_taxonomies($post->post_type); // returns array of taxonomy names for post type, ex array("category", "post_tag");
    foreach ($taxonomies as $taxonomy) {
      $post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));
      wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);
    }

    /*
     * duplicate all post meta just in two SQL queries
     */
    $post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");
    if (count($post_meta_infos)!=0) {
      $sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";
      foreach ($post_meta_infos as $meta_info) {
        $meta_key = $meta_info->meta_key;
        if( $meta_key == '_wp_old_slug' ) continue;
        $meta_value = addslashes($meta_info->meta_value);
        $sql_query_sel[]= "SELECT $new_post_id, '$meta_key', '$meta_value'";
      }
      $sql_query.= implode(" UNION ALL ", $sql_query_sel);
      $wpdb->query($sql_query);
    }


    /*
     * finally, redirect to the edit post screen for the new draft
     */
    wp_redirect( admin_url( 'post.php?action=edit&post=' . $new_post_id ) );
    exit;
  } else {
    wp_die('Post creation failed, could not find original post: ' . $post_id);
  }
}
add_action( 'admin_action_rd_duplicate_post_as_draft', 'rd_duplicate_post_as_draft' );

/*
 * Add the duplicate link to action list for post_row_actions
 */
function rd_duplicate_post_link( $actions, $post ) {
  if (current_user_can('edit_posts')) {
    $actions['duplicate'] = '<a href="' . wp_nonce_url('admin.php?action=rd_duplicate_post_as_draft&post=' . $post->ID, basename(__FILE__), 'duplicate_nonce' ) . '" title="Duplicate this item" rel="permalink">Duplicate</a>';
  }
  return $actions;
}

add_filter( 'post_row_actions', 'rd_duplicate_post_link', 10, 2 );

function check_homepage(){
  if(is_front_page()) : echo 'homepage'; endif;
}
function title_check(){
  if(is_page()):
  the_title();
  elseif (is_tax()):
  single_term_title();
  elseif (is_category()) :
  single_cat_title();
  endif;
}
function get_term_list($term_name){
  $terms =  get_terms([ 'taxonomy' => $term_name,'hide_empty' => false,]);
  if ( $terms && ! is_wp_error( $terms ) ){
    foreach ($terms as $term ) {
      $slugcat = esc_html($term->slug);
      echo '<button class="term__link btn d--inline--block text--center" style="background:'.get_field('background_category',$term).';color:'.get_field('color_category',$term).';" data-show="'.$slugcat.'">'.esc_html($term->name).'</button>';
    }
  }
}
function teaser($string,$limit) {
  $excerpt = explode(' ', $string, $limit);
  if (count($excerpt)>=$limit) {
    array_pop($excerpt);
    $excerpt = implode(" ",$excerpt).'[...]';
  } else {
    $excerpt = implode(" ",$excerpt);
  }
  $excerpt = preg_replace('`\[[^\]]*\]`','',$excerpt);
  return $excerpt.'...';
}
// remove block-style
add_filter('use_block_editor_for_post', '__return_false');
function atulhost_optimize_scripts() {
	wp_deregister_script('jquery');
	wp_deregister_script('jquery-migrate');
  wp_dequeue_style( 'wp-block-library' );
 wp_dequeue_style( 'wp-block-library-theme' );
}
add_action('wp_enqueue_scripts', 'atulhost_optimize_scripts');
// config language
// function get_lang(){
//   global $wp;
//   $url=add_query_arg( $wp->query_vars, home_url( $wp->request ));
//   $lang=substr($url,25,2);
//   if($lang == ""||$lang != "vi" || $lang!="ja"){$lang="en";}
//   echo $lang;
// }
function disable_emojis_tinymce($plugins) {
	if(is_array($plugins)){
	    return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
	   	return array();
	}
}
function disable_emojis() {
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
}
add_action( 'init', 'disable_emojis' );
add_action('admin_init', 'rw_remove_dashboard_widgets');
  function rw_remove_dashboard_widgets() {
      remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal'); // recent comments
      remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal'); // incoming links
      remove_meta_box('dashboard_plugins', 'dashboard', 'normal'); // plugins
      remove_meta_box('dashboard_quick_press', 'dashboard', 'normal'); // quick press
      remove_meta_box('dashboard_recent_drafts', 'dashboard', 'normal'); // recent drafts
      remove_meta_box('dashboard_primary', 'dashboard', 'normal'); // wordpress blog
      remove_meta_box('dashboard_secondary', 'dashboard', 'normal'); // other wordpress news
}
function remove_admin_bar_links() {
  global $wp_admin_bar;
    $wp_admin_bar->remove_menu('wp-logo');          /** Remove the WordPress logo **/
    $wp_admin_bar->remove_menu('wporg');            /** Remove the WordPress.org link **/
    $wp_admin_bar->remove_menu('documentation');    /** Remove the WordPress documentation link **/
    $wp_admin_bar->remove_menu('support-forums');   /** Remove the support forums link **/
    $wp_admin_bar->remove_menu('feedback');         /** Remove the feedback link **/
    //$wp_admin_bar->remove_menu('view-site');        /** Remove the view site link **/
    //$wp_admin_bar->remove_menu('wpseo-menu');        /** Remove the view site link **/
  //  $wp_admin_bar->remove_menu('updates');          /** Remove the updates link **/
    $wp_admin_bar->remove_menu('comments');         /** Remove the comments link **/
    //$wp_admin_bar->remove_menu('new-content');      /** Remove the content link **/
}
add_action( 'wp_before_admin_bar_render', 'remove_admin_bar_links' );
// add_action( 'admin_menu', 'my_remove_menus', 999 );
// function my_remove_menus() {
//    //remove_menu_page( 'upload.php');
//    remove_menu_page( 'edit-comments.php' );
//   //remove_menu_page( 'themes.php');
//    //remove_menu_page( 'plugins.php');
//    //remove_menu_page( 'users.php');
//   remove_menu_page( 'tools.php');
//   remove_menu_page( 'options-general.php');
//   // remove_menu_page( 'wpseo_dashboard');
//   //  remove_menu_page( 'wpcf-cpt');
//   remove_submenu_page( 'themes.php', 'theme-editor.php');
//   remove_submenu_page( 'plugins.php', 'plugin-editor.php');
// }
add_action( 'widgets_init', 'my_unregister_widgets' );
//if( !defined('ACF_LITE') ) define('ACF_LITE',true);
function my_unregister_widgets() {
    unregister_widget('WP_Widget_Pages');
    unregister_widget('WP_Widget_Calendar');
    unregister_widget('WP_Widget_Archives');
    unregister_widget('WP_Widget_Links');
    unregister_widget('WP_Widget_Meta');
    unregister_widget('WP_Widget_Search');
    unregister_widget('WP_Widget_Categories');
    unregister_widget('WP_Widget_Recent_Posts');
    unregister_widget('WP_Widget_Recent_Comments');
    unregister_widget('WP_Widget_RSS');
    unregister_widget('WP_Widget_Tag_Cloud');
    unregister_widget('WP_Nav_Menu_Widget');
}
function my_deregister_scripts(){
 wp_dequeue_script( 'wp-embed' );
}
add_action( 'wp_footer', 'my_deregister_scripts' );

  // Setting hình crop hình đại diện
  function hk_get_thumb($id, $w, $h){
  	if(get_post_thumbnail_id($id)){
  		$url = wp_get_attachment_url( get_post_thumbnail_id($id));
  	} else {
  		$url = get_bloginfo('template_directory').'/no-thumb.jpg';
  	}
  	$image = huykira_image_resize($url, $w, $h, true, false);
  	return $image['url'];
  }
  function hk_get_image($url, $w, $h){
  	$image = huykira_image_resize($url, $w, $h, true, false);
  	return $image['url'];
  } 
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
add_filter('xmlrpc_enabled', '__return_false');
remove_action( 'wp_head', 'wp_generator' );
add_action( 'init', 'stop_heartbeat', 1 );
function stop_heartbeat() {
wp_deregister_script('heartbeat');
}

//CPT List of latest videos
function cpts_latest_videos()
{

    $label = array(
        'name' => 'Latest Videos',
        'singular_name' => 'Latest Videos'
    );

    $args = array(
        'labels' => $label,
        'description' => 'Latest Videos',
        'supports' => array(
            'title',
            'author',
            'thumbnail',
            'custom-fields'
        ),
        'hierarchical' => true,
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'show_in_nav_menus' => true,
        'show_in_admin_bar' => true,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-playlist-video',
        'can_export' => true,
        'has_archive' => true,
        'exclude_from_search' => false,
        'publicly_queryable' => true,
        'capability_type' => 'post'
    );

    register_post_type('latest_videos', $args);

}
add_action('init', 'cpts_latest_videos');

//CPT Game Strategy
function cpts_strategy_wiki()
{

    $label = array(
        'name' => 'Game Strategy Wiki',
        'singular_name' => 'Game Strategy Wiki'
    );

    $args = array(
        'labels' => $label,
        'description' => 'Game Strategy Wiki',
        'supports' => array(
            'title',
            'thumbnail',
            'custom-fields'
        ),
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'show_in_nav_menus' => true,
        'show_in_admin_bar' => true,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-smiley',
        'can_export' => true,
        'has_archive' => true,
        'exclude_from_search' => false,
        'publicly_queryable' => true,
        'capability_type' => 'post'
    );

    register_post_type('strategy_wiki', $args);

}
add_action('init', 'cpts_strategy_wiki');
//End CPT Game Strategy

  
    if( !function_exists('redirect_404_to_homepage') ){
  
      add_action( 'template_redirect', 'redirect_404_to_homepage' );
  
      function redirect_404_to_homepage(){
         if(is_404()):
              wp_safe_redirect( site_url('trang-404') );
              exit;
          endif;
      }
  }
  /**
   * custom_login_logo
   *
   * @return void
   */
  function custom_login_logo() {
    echo '<style type="text/css">
    body{
      background: #f0ebeb2e;
      color:#2288a1;
    }
    #login{
      width:450px;
    }
    .login form{
    padding: 60px 50px;
    background: #4fb4c624;
      border: 1px solid #e3f1f4;
      box-shadow: 0 1px 15px 10px rgba(158, 158, 158, 0.27);
    }
    .login label{
    font-weight: 600;
    font-size: 16px;
    }
    .login h1 a {
    background-image: url('.get_bloginfo('template_directory').'/thumb.jpg);
    background-size: cover;
    height:250px;
    width:80%;
    }
    .wp-core-ui .button, .wp-core-ui .button-secondary{
      color:#267f97;
    }
    .wp-core-ui .button-primary{
    background: #1b6081;
      border-color: #1f738e;
    font-size: 18px;
      font-weight: 600;
    color: #fff;
    }
    .login .wp-pwd{
    margin-bottom: 20px;
    }
    .login #backtoblog a, .login #nav a{
      display:none;
    }
  </style>';
  }
  add_action('login_head', 'custom_login_logo');
  
  /**
   * change_wp_login_url
   *
   * @return void
   */
  function change_wp_login_url() {
    return "http://wolfactive.net/";
  }
  add_filter('login_headerurl', 'change_wp_login_url');
  function remove_footer_admin () {
  
  echo '<p>Designed by <a href="http://wolfactive.net/" target="_blank" style="font-weight:600">Wolfactive</a></p>';
  
  }
  
  add_filter('admin_footer_text', 'remove_footer_admin');
  
  // Stop Login by email
  remove_filter( 'authenticate', 'wp_authenticate_email_password', 20 );
  // Remove Welcome Panel
  remove_action('welcome_panel', 'wp_welcome_panel');
  
  /**
   * remove_dashboard_widgets
   *
   * @return void
   */
  function remove_dashboard_widgets() {
  
    remove_meta_box( 'dashboard_right_now', 'dashboard', 'normal' );
    remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
    remove_meta_box( 'dashboard_incoming_links', 'dashboard', 'normal' );
    remove_meta_box( 'dashboard_plugins', 'dashboard', 'normal' );
    remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
    remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'side' );
    remove_meta_box( 'dashboard_primary', 'dashboard', 'side' );
    remove_meta_box( 'dashboard_secondary', 'dashboard', 'side' );
  
  }
  //
  add_action( 'wp_dashboard_setup', 'remove_dashboard_widgets' );
  
  // Add a new widget to the dashboard using a custom function
  /**
   * wpmudev_add_dashboard_widgets
   *
   * @return void
   */
  function wpmudev_add_dashboard_widgets() {
  wp_add_dashboard_widget(
    'wpmudev_dashboard_widget', // Widget slug
    'Welcome', // Widget title
    'wpmudev_new_dashboard_widget_function' // Function name to display the widget
  );
  }
  // Register the new dashboard widget with the 'wp_dashboard_setup' action
  add_action( 'wp_dashboard_setup', 'wpmudev_add_dashboard_widgets' );
  
  // Initialize the function to output the contents of your new dashboard widget
  /**
   * wpmudev_new_dashboard_widget_function
   *
   * @return void
   */
  function wpmudev_new_dashboard_widget_function() {
  $link =get_bloginfo('template_directory');
  echo '
  <h1>Chào mừng đến với Admin Dashboard của Wolfactive</h1>
  <p>
    <img src="'.$link.'/thumb.jpg" style="max-width:100%" />
  </p>
  ';
  }
  add_filter( 'wpseo_sitemap_post_single_change_freq', 'my_custom_post_freq', 10, 2 );
  /**
   * my_custom_post_freq
   *
   * @param  mixed $default
   * @param  mixed $url
   * @return void
   */
  function my_custom_post_freq( $default, $url ) {
  return hourly;
  }
  remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
  add_filter('xmlrpc_enabled', '__return_false');
  remove_action( 'wp_head', 'wp_generator' );
  add_action( 'init', 'stop_heartbeat', 1 );