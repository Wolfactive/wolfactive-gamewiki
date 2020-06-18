<section class="container latest_video" id="latestVideo">
    <div class="big_title_latestvideo">
        <div class="mc-icon"><i class="fab fa-youtube"></i></div>
        <div class="big-title-style">List of latest videos</div>
    </div>
    <div class="slider_video">
    <?php
        $args = array(
            'post_type' => 'latest_videos',
            'post_status' => 'publish',
            'posts_per_page' =>  10,
        );
        $list_videoLatest = new WP_Query( $args );
        if($list_videoLatest->have_posts()) :
        ?>
        <?php while($list_videoLatest->have_posts()) : $list_videoLatest->the_post(); ?>
        <div class="images_latest_video">
            <a href="<?php echo get_field('link_video'); ?>"><?php the_post_thumbnail('medium')  ?></a>
        </div>
        <div class="title_latest_video">
            <a href="<?php echo get_field('link_video'); ?>"><?php the_title();  ?></a>
        </div>
    <?php endwhile; wp_reset_postdata();?>
    <?php else : esc_html_e( 'No testimonials in the diving taxonomy!', 'text-domain' ); endif;?>
    </div>
    
    <script>
        // new Splide( '.slider_video', {
        //     perPage: 3,
        //     rewind : true,
        // } ).mount();
        // new Splide( '.slider_video' ).mount();
    </script>
</section>