<?php get_header();?>
<section class="page-container">
    <?php get_template_part('sections/breadcums'); ?>
    <div class="row-divide">
        <div class="col-divide-2 mc_fix_col .main_menu .main_menu_hide_on_mobile">
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
        <div class="gamewiki__container col-divide-8 col-divide-lg-12">
            <div class="row-divide">
                <div class="col-divide-3 mc-mb-fix dp--none">
                    <div class="menu-cate" id="sidebarMenuLeftcroll">
                        <?php get_template_part('sections/menu-category'); ?>
                    </div>
                </div>
                <div class="gamewiki__container-content col-divide-6 col-divide-lg-12">
                    <?php while(have_posts()) : the_post() ;
                        get_template_part('sections/game-trategy-wiki/header-trategy-wiki');
                        get_template_part('sections/game-trategy-wiki/lasted-update-wiki');
                        get_template_part('sections/game-trategy-wiki/infomation-beginer');
                        get_template_part('sections/game-trategy-wiki/information-helper');
                        get_template_part('sections/game-trategy-wiki/item-list');
                    ?>
                    <?php endwhile; ?>
                </div>
                <div class="col-divide-3 mc-mb-fix dp--none">
                    <div class="menu-ranking" id="sidebarMenuRankingscroll">
                        <?php get_template_part('sections/new-app-ranking'); ?>
                        <?php get_template_part('sections/menu-ranking'); ?>
                    </div>
                </div>
                <?php if(wp_is_mobile()): ?>
                    <div class="col-divide-3 col-divide-lg-12 mc-mb-fix dp--none">
                        <div class="menu-cate" id="sidebarMenuLeftcroll">
                            <?php get_template_part('sections/new-app-ranking'); ?>
                            <?php get_template_part('sections/menu-category'); ?>
                        </div>
                    </div>
                <?php endif ?>
            </div>
        </div>
        <div class="col-divide-2 mc_fix_col .main_menu .main_menu_hide_on_mobile">
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