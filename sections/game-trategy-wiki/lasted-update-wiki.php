<div class="gamewiki__lasted-update">
    <div class="gamewiki__lasted-update-container">
        <?php if(get_field('title_new') && get_field('title_new')!=''): ?>
        <h2 class="title-section" id="section1"><?php  the_field('title_new'); ?></h2>
        <?php endif;
                            if(get_field('sub_title_new') && get_field('sub_title_new')!=''):
                            ?>
        <div class="sub-title-section row-divide">
            <?php if(get_field('icon_arrow') && get_field('icon_arrow')!=''): ?>
            <img src="<?php echo hk_get_image(get_field('icon_arrow'),24,33); ?>" alt="arrow" class="icon-arrow">
            <?php endif; ?>
            <h3><?php the_field('sub_title_new'); ?></h3>
        </div>
        <?php endif; ?>
        <div class="gamewiki__lasted-update-features">
            <a
                href="<?php if(get_field('link') && get_field('link') != ''): the_field('link'); else: _e('javascript:void(0)'); endif; ?>">
                <?php if(get_field('image_features_new') && get_field('image_features_new')!=''): ?>
                <img src="<?php echo hk_get_image(get_field('image_features_new'),515,206); ?>" alt="img features">
                <?php endif; ?>
            </a>
            <?php if(get_field('description_new') && get_field('description_new')!=''): ?>
            <div class="gamewiki__lasted-update-features--des">
                <span><?php the_field('description_new'); ?></span>
            </div>
            <?php endif;
                                if(get_field('button')==1):
                                ?>
            <a class="btn"
                href="<?php if(get_field('link') && get_field('link') != ''): the_field('link'); else: _e('javascript:void(0)'); endif; ?>">
                <?php if(get_field('title__button') && get_field('title__button')!=''): the_field('title__button'); endif;?>
            </a>
            <?php endif; ?>
        </div>
        <?php if(get_field('sub_title_new_2') && get_field('sub_title_new_2')!=''):
                            ?>
        <div class="sub-title-section row-divide">
            <?php if(get_field('icon_arrow') && get_field('icon_arrow')!=''): ?>
            <img src="<?php echo hk_get_image(get_field('icon_arrow'),24,33); ?>" alt="arrow" class="icon-arrow">
            <?php endif; ?>
            <h3><?php the_field('sub_title_new_2'); ?></h3>
        </div>
        <?php endif; ?>
        <div class="gamewiki__list-post-news">
            <div class="gamewiki__list-post-news--container">
                <?php
                                $choice_post = get_field('choice_post');
                                if( $choice_post ):
                foreach( $choice_post as $post ): 
                                    setup_postdata($post); ?>
                <div class="gamewiki__news-item row-divide">
                    <div class="gamewiki__news-item-feature col-divide-3 col-divide-lg-3 col-divide-sm-4">
                        <a href=<?php the_permalink(); ?>">
                            <img src="<?php echo hk_get_thumb(get_the_id(),134,67)?>" alt="img">
                        </a>
                    </div>
                    <div class="gamewiki__news-item-title col-divide-9 col-divide-lg-5 col-divide-sm-8">
                        <a href="<?php the_permalink(); ?>"><?php echo wp_trim_words(get_the_title(),10); ?></a>
                        <div class="description">
                            <?php echo wp_trim_words(get_the_excerpt(get_the_ID()),12); ?>
                        </div>
                    </div>
                </div>
                <?php endforeach; endif; wp_reset_postdata(); ?>
            </div>
        </div>
    </div>
</div>