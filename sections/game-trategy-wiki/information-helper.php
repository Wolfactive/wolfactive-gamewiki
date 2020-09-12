<div class="gamewiki__infor-helper">
    <div class="gamewiki__infor-helper-container">
        <?php if(get_field('title_section_helper') && get_field('title_section_helper')!=''): ?>
        <h2 class="title-section" id="section3"><?php  the_field('title_section_helper'); ?></h2>
        <?php endif;
                            if(get_field('sub_title_helper_1') && get_field('sub_title_helper_1')!=''):
                            ?>
        <div class="sub-title-section row-divide">
            <?php if(get_field('icon_arrow') && get_field('icon_arrow')!=''): ?>
            <img src="<?php echo hk_get_image(get_field('icon_arrow'),24,33); ?>" alt="arrow" class="icon-arrow">
            <?php endif; ?>
            <h3><?php the_field('sub_title_helper_1'); ?></h3>
        </div>
        <?php endif;
            if(get_field('image_features_helper') && get_field('image_features_helper')):
        ?>
        <div class="gamewiki__infor-helper-features">
            <a
                href="<?php if(get_field('link_readmore_helper') && get_field('link_readmore_helper') != ''): the_field('link_readmore_helper'); else: _e('javascript:void(0)'); endif; ?>">
                <img src="<?php echo hk_get_image(get_field('image_features_helper'),515,206); ?>" alt="img features">
            </a>
            <?php if(get_field('open_button_helper')==1):
                    if(get_field('name_button_helper')!=''):
                ?>
            <div class="gamewiki__infor-helper-features--more">
                <a class="btn"
                    href="<?php if(get_field('link_readmore_helper') && get_field('link_readmore_helper') != ''): the_field('link_readmore_helper'); else: _e('javascript:void(0)'); endif; ?>">
                    <?php the_field('name_button_helper'); ?>
                </a>
            </div>
            <?php endif;
                endif; ?>
        </div>
        <?php endif; ?>
        <?php get_template_part('sections/game-trategy-wiki/basic-information'); ?>
        <?php get_template_part('sections/game-trategy-wiki/help-install');?>
    </div>
</div>
