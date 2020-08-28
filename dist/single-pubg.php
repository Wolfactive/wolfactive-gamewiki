?php get_header();?>
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
                     <?php while(have_posts()) : the_post() ; ?>
                     <div class="gamewiki__title-table">
                         <div class="gamewiki__title-table-content position--relative">
                            <div class="gamewiki__title-table-feature">
                              <?php 
                              if(get_field('image_features') && get_field('image_features')!=null): ?>
                                <img src="<?php echo hk_get_image(get_field('image_features'),515,290); ?>" alt="img features">
                              <?php endif; ?>
                            </div>
                            <div class="gamewiki__title position--absolute">
                                <div class="gamewiki__title-item">
                                  <?php if(get_field('title') && get_field('title')!=null): ?>
                                    <h2><?php the_field('title'); ?></h2>
                                  <?php endif; ?>
                                </div>
                            </div>
                            <div class="gamewiki__des">
                              <div class="gamewiki__des-content">
                                <?php if(the_content()):the_content();endif; ?>
                              </div>
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