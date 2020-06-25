<section class="game_strategy" id="gameStrategy">
    <div class="title_game_strategy">
        <div class="mc-ic"><i class="fas fa-book-open"></i></div>
        <div class="name_ct">Game Strategy Wiki</div>
    </div>
    <div class="row-divide game_strategy-list">
    <?php
        $args = array(
            'post_type' => 'strategy_wiki',
            'post_status' => 'publish',
            'showposts'      =>  12,
            'order'              => 'DESC',
            'orderby'            => 'date'
        );
        $list_gameStrategy = new WP_Query( $args );
        if($list_gameStrategy->have_posts()) :
    ?>
    <?php while($list_gameStrategy->have_posts()) : $list_gameStrategy->the_post(); ?>
        <div class="col-divide-2 mc-mg col-divide-sm-6 col-divide-md-3 ">
            <div class="images_game_str">
                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('thumbnail')  ?></a>
            </div>
            <div class="title_game_str">
                <a href="<?php the_permalink(); ?>"><?php the_title();  ?></a>
            </div>
        </div>
    <?php endwhile; wp_reset_postdata();?>
  <?php else : esc_html_e( 'No testimonials in the diving taxonomy!', 'gamewiki' ); endif;?>
    </div>
    <div class="gtr_see_more">
       <div class="mc-ic"><i class="fas fa-arrow-circle-right"></i></div><div>See more</div>
    </div>
</section>
