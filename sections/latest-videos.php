<section class="latest_video" id="latestVideo">
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
                <a href="<?php echo get_field('link_video'); ?>" class="d--block" target="_blank">
                    <img class="d--block" src="<?php echo hk_get_thumb(get_the_id(),310,175) ?>" alt="<?php the_title(); ?>" />
                    <i class="far fa-play-circle icon d--block center--position"></i>
                </a>
                <div class="title_latest_video">
                    <a href="<?php echo get_field('link_video'); ?>" target="_blank"><?php the_title();  ?></a>
                </div>
            </div>

        <?php endwhile; wp_reset_postdata();?>
      <?php else : esc_html_e( 'No testimonials in the diving taxonomy!', 'gamewiki' ); endif;?>
    </div>
    <div class="slider_video-dot text--center myt-20"></div>
</section>
