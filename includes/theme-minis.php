<?php 
    function create_new_page_default(){
        $page = get_page_by_path('trang-tong-hop',OBJECT);
        if(!isset($page))
        wp_insert_post(array(
            'post_type' => 'page',
            'post_title' => 'Trang Tổng Hợp',
            'post_status' => 'publish'
        ),true);
    }
    add_action( 'admin_init','create_new_page_default');
    function create_page_template(){
        foreach (get_posts('post_type=page&posts_per_page=-1') as $post_item) {
            if($post_item->post_name == 'trang-tong-hop'){
                $page_url='page-templates/newpage-default.php';
                update_post_meta($post_item->ID,'_wp_page_template',$page_url);
            }
        }
    }
    add_action( 'admin_init','create_page_template');

    