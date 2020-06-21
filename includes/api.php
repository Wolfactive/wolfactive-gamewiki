<?php
/*create search api for blog*/
add_action('rest_api_init','blogRegisterApiSearch');
function blogRegisterApiSearch(){
  register_rest_route('blog-api/v1','/blog/offset=(?P<offset>\d+)&category=(?P<category>[a-z]+[[:punct:]]+[a-z]+[[:punct:]]+[a-z]+|[a-z]+[[:punct:]]+[a-z]+|[a-z]+)',array(
    'methods'   =>  WP_REST_SERVER::READABLE,
    'callback'  =>  'blogApiQuery',
    'args' => [
        'offset',
        'category'
    ],
  ));
}
function blogApiQuery( $request ) {
    // Here we are accessing the path variable 'id' from the $request.
    $blog = prefix_blogApiQuery( $request['offset'],$request['category'] );
    return rest_ensure_response( $blog );
}

// A simple function that grabs a book title from our blogsby ID.
function prefix_blogApiQuery( $offset,$category) {
    $blogList = new WP_Query(array(
      'post_status'   => 'publish',
      'post_type'     => 'post',
      'posts_per_page'=> '10',
      'showposts'     =>  10,
      'offset'        => $offset,
      'order'         => 'DESC',
      'order_by'      =>  'date',
      'tax_query'     =>  array(
        array(
          'taxonomy'      => 'category',
          'field'         => 'slug',
          'terms'         =>  $category
        )
      )

    ));
    $blogResult = array();
    if($blogList->have_posts()):
    while($blogList->have_posts()){
    $blogList->the_post();
      array_push($blogResult,
      array(
        'title'             => get_the_title(),
        'thumbnail'         => '<img class="d--block" src="'.hk_get_thumb(get_the_id(),230,130).'" alt="'.get_the_title().'" />',
        'url'               => get_permalink(),
        )
      );
    };
    else:
      if($offset === 0):
       return new WP_Error( 'rest_not_found', esc_html__( 'Hiện đang cập nhật bài viết cho mục này', 'gamewiki' ), array( 'status' => 200 ) );
      elseif($offset > 0):
      return new WP_Error( 'rest_empty_found', esc_html__( '', 'gamewiki' ), array( 'status' => 200 ) );
      endif;
    endif;
    return $blogResult;
}
/*create infinity scroll api*/
add_action('rest_api_init','WikiRegisterApiSearch');
function WikiRegisterApiSearch(){
  register_rest_route('gamewiki-api/v1','/gamewiki/offset=(?P<offset>\d+)',array(
    'methods'   =>  WP_REST_SERVER::READABLE,
    'callback'  =>  'WikiApiQuery',
    'args' => [
        'offset',
    ],
  ));
}
function WikiApiQuery( $request ) {
    // Here we are accessing the path variable 'id' from the $request.
    $Wiki = prefix_WikiApiQuery( $request['offset']);
    return rest_ensure_response( $Wiki );
}

// A simple function that grabs a book title from our blogsby ID.
function prefix_WikiApiQuery( $offset) {
    $WikiList = new WP_Query(array(
      'post_status'   => 'publish',
      'post_type'     => 'strategy_wiki',
      'posts_per_page'=> '1000000000000',
      'showposts'     =>  12,
      'offset'        => $offset,
      'order'         => 'DESC',
      'order_by'      =>  'date',
    ));
    $WikiResult = array();
    if($WikiList->have_posts()):
    while($WikiList->have_posts()){
    $WikiList->the_post();
      array_push($WikiResult,
      array(
        'title'             => get_the_title(),
        'thumbnail'         => '<img src="'.hk_get_thumb(get_the_id(),150,150).'" alt="'.get_the_title().'" />',
        'url'               => get_permalink(),
        )
      );
    };
    else:
      if($offset === 0):
       return new WP_Error( 'rest_not_found', esc_html__( 'Hiện đang cập nhật bài viết cho mục này', 'gamewiki' ), array( 'status' => 200 ) );
      elseif($offset > 0):
      return new WP_Error( 'rest_empty_found', esc_html__( '', 'gamewiki' ), array( 'status' => 200 ) );
      endif;
    endif;
    return $WikiResult;
}
