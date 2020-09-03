<?php 
    function wa_get_app_ranking_data($type_app){
        $result = '';
        $Authorization = 'ImHy0jDS1cN8kx7YntHdxZLa6Rg';
        $Content_Type = 'application/json';
        $type = $type_app;
        $get_api = new WP_Http();
        $url_api = "https://api.apptweak.com/ios/categories/6014/top.json?country=vn&type=$type";
        $api_response = $get_api -> request( $url_api, array(
            'method' => 'GET',
            'headers' => array(
                'X-Apptweak-Key' => $Authorization,
                'Content-Type'  => $Content_Type,
            )
        ));
        $json_body = json_decode($api_response['body'],true);
        $result = $json_body['content'];
        return $result;
    }

    function wa_save_app_ranking_to_database(){
        $types = array('free','grossing');
        foreach($types as $type):
        $data = wa_get_app_ranking_data($type);
        $old_data = get_posts('post_type=app_ranking&posts_per_page=-1&meta_key=type&meta_value='.$type);
        foreach($old_data as $old){
            wp_delete_post( $old->ID, true);
        }
        for($i = 0; $i <5; $i++){
            $app_id = wp_insert_post(array(
                'post_type' => 'app_ranking',
                'post_title' => $data[$i]['title'],
                'post_status' => 'publish'
            ),true);
            
            update_post_meta($app_id,'type',$type);
            update_post_meta($app_id,'star', $data[$i]['rating']);
            update_post_meta($app_id,'image', $data[$i]['icon']);
            update_post_meta($app_id,'link', 'https://apps.apple.com/vn/app/'.$data[$i]['slug'].'/id'.$data[$i]['id']);
            var_dump(update_post_meta($app_id,'link', 'https://apps.apple.com/vn/app/'.$data[$i]['slug'].'/id'.$data[$i]['id']));
        }
        endforeach;
    }
    add_action('rest_api_init','wa_create_api_app_ranking');
    function wa_create_api_app_ranking(){
        register_rest_route('ranking-api/v1','free',array(
            'methods'   =>  WP_REST_SERVER::READABLE,
            'callback'  =>  'wa_create_api_app_ranking_free_query'
        ));
        register_rest_route('ranking-api/v1','grossing',array(
            'methods' => WP_REST_SERVER::READABLE,
            'callback' => 'wa_create_api_app_ranking_grossing_query'
        ));
    }
    function wa_create_api_app_ranking_free_query(){
        $result = [];
        $query_data = get_posts('post_type=app_ranking&posts_per_page=-1&meta_key=type&meta_value=free');
        foreach ($query_data as $data):
            $result[] = array(
                'title' => get_the_title($data->ID),
                'star'  => get_post_meta($data->ID,'star',true),
                'image' => get_post_meta($data->ID,'image',true),
                'url' => get_post_meta($data->ID,'link',true),
            );
        endforeach;
        return $result;
    }
    function wa_create_api_app_ranking_grossing_query(){
        $result = [];
        $query_data = get_posts('post_type=app_ranking&posts_per_page=-1&meta_key=type&meta_value=grossing');
        foreach ($query_data as $data):
            $result[] = array(
                'title' => get_the_title($data->ID),
                'star'  => get_post_meta($data->ID,'star',true),
                'image' => get_post_meta($data->ID,'image',true),
                'url' => get_post_meta($data->ID,'link',true),
            );
        endforeach;
        return $result;
    }
