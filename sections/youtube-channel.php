<section class="youtube_channel" id="youtubeChannel">
    <div class="big_title_youtubevideo">
        <div class="mc-icon"><i class="fab fa-youtube"></i></div>
        <div class="big-title-style">Youtube channel</div>
    </div>
    <div class="youtube_contain">
        <div class="row-divide mc-pd-15">
            <?php while(have_rows('youtube_channel_reapeter','option')) : the_row(); ?>
            <div class="col-divide-4 youtube-col-chanel col-divide-sm-12 col-divide-md-12">
                <div class="thumbnail_image">
                    <img src="<?php echo hk_get_image(get_sub_field('thumbnail_image','option'),200,200)  ?>" alt="<?php echo get_sub_field('title_youtube_channel','option'); ?>">
                </div>
                <div class="name_channel">
                    <?php echo get_sub_field('title_youtube_channel','option'); ?>
                </div>
                <div class="content_channel">
                    <?php echo get_sub_field('content_youtube_channel','option'); ?>
                </div>
                <?php if(get_sub_field('link_twitter','option') || get_sub_field('link_youtube','option')): ?>
                <div class="button_channel">
                    <a class="c_style twitter_style" href="<?php echo get_sub_field('link_twitter','option'); ?>"><i class="fab fa-twitter icon"></i> <span>Twitter</span> </a>
                    <a class="c_style faceb_style" href="<?php echo get_sub_field('link_youtube','option'); ?>"><i class="fab fa-youtube"></i> <span>Youtube</span> </a>
                </div>
                <?php endif; ?>
            </div>
            <?php endwhile; ?>
        </div>
    </div>
</section>
