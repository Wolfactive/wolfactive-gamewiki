<?php get_header();?>
<section class="page-container">
    <?php get_template_part('sections/breadcums'); ?>
    <div class="row-divide">
        <div class="col-divide-2 mc_fix_col">
            <div class="sidebar__left" id="sideBarLeftScroll">
                <?php if(get_field('banner_left_post_detail','option')): ?>
                <div class="sidebar__left-banner">
                    <a href="<?php the_field('link_banner_left_post_detail','option') ?>" target="_blank">
                        <img src="<?php the_field('banner_left_post_detail','option') ?>" alt="banner-left-ads">
                    </a>
                </div>
                <?php endif; ?>
            </div>
        </div>
        <div class="gamewiki__container col-divide-8 col-divide-md-12">
            <div class="row-divide">
                <div class="col-divide-3 mc-mb-fix dp--none">
                    <div class="menu-cate" id="sidebarMenuLeftcroll">
                        <?php get_template_part('sections/menu-category'); ?>
                    </div>
                </div>
                <div class="gamewiki__container-content col-divide-6 col-divide-md-12">
                    <?php while(have_posts()) : the_post() ;
                        get_template_part('sections/game-trategy-wiki/header-trategy-wiki');
                    ?>
                    <div class="gamewiki__lasted-update">
                        <div class="gamewiki__lasted-update-container">
                            <?php if(get_field('title_new') && get_field('title_new')!=''): ?>
                            <h2 class="title-section"><?php  the_field('title_new'); ?></h2>
                            <?php endif;
                            if(get_field('sub_title_new') && get_field('sub_title_new')!=''):
                            ?>
                            <div class="sub-title-section row-divide">
                                <?php if(get_field('icon_arrow') && get_field('icon_arrow')!=''): ?>
                                    <img src="<?php echo hk_get_image(get_field('icon_arrow'),24,33); ?>" alt="arrow" class="icon-arrow">
                                <?php endif; ?>
                                <?php if(get_field('sub_title_new') && get_field('sub_title_new')!=''): ?>
                                    <h3><?php the_field('sub_title_new'); ?></h3>
                                <?php endif; ?>
                            </div>
                            <?php endif; ?>
                            <div class="gamewiki__lasted-update-features">
                                <a href="<?php the_field('link');?>">
                                    <?php if(get_field('image_features_new') && get_field('image_features_new')!=''): ?>
                                    <img src="<?php echo hk_get_image(get_field('image_features_new'),515,206); ?>"
                                        alt="img features">
                                    <?php endif; ?>
                                </a>
                            </div>
                        </div>
                    </div>
                    <?php endwhile; ?>
                </div>
                <div class="col-divide-3 mc-mb-fix dp--none">
                    <div class="menu-ranking" id="sidebarMenuRankingscroll">
                        <?php get_template_part('sections/menu-ranking'); ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-divide-2 mc_fix_col">
            <div class="sidebar__right" id="sidebarRightscroll">
                <?php if(get_field('banner_right_post_detail','option')): ?>
                <div class="sidebar__right-banner">
                    <a href="<?php the_field('link_banner_right_post_detail','option') ?>" target="_blank">
                        <img src="<?php the_field('banner_right_post_detail','option') ?>" alt="banner-right-ads">
                    </a>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>
<button id="back-to-top-btn"><i class="fas fa-angle-double-up"></i></button>
<?php
 get_footer();
?>