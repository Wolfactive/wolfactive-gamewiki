 <?php get_header();
 gt_set_post_view()
 ?>
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
                         <?php 
                            $cat_related_id = yoast_get_primary_term_id('category', $post->ID);
                            $field = get_field('strategy_id','term_'.$cat_related_id);
                            if($field){
                                foreach( $field as $post ):
                                    setup_postdata($post);
                                        get_template_part('sections/menu-category');
                                endforeach;
                                wp_reset_postdata();
                            }
                            ?>
                     </div>
                 </div>
                 <div class="gamewiki__container-content col-divide-6 col-divide-md-12">
                     <?php while(have_posts()) : the_post() ; ?>
                     <h1 class="single__title title--section"><?php //the_title(); ?></h1>
             <p class="date"><strong><?php the_date(); ?></strong></p>
             <div class="shareon" style="font-size: 25px;">
                 <a class="facebook" style="color:#0f90f3"><i class="fab fa-facebook"></i></a>
                 <a class="messenger" style="color:#0f90f3"><i class="fab fa-facebook-messenger"></i></a>
                 <a class="pinterest" style="color:#e60023"><i class="fab fa-pinterest-square"></i></a>
                 <a class="telegram" style="color:#27a5e7"><i class="fab fa-telegram"></i></a>
                 <a class="twitter" style="color:#1da1f2"><i class="fab fa-twitter"></i></a>
                 <a class="whatsapp" style="color:#0cc143"><i class="fab fa-whatsapp-square"></i></a>
             </div>
                     
                     <div class="single__page-content">
                         <?php if(get_the_content()):the_content();else: _e('Bài viết hiện chưa có nội dung');endif; ?>
                         <?php get_template_part('sections/new-post-ranking'); ?>
                     </div>
                     <?php endwhile; ?>
                 </div>
                 <div class="col-divide-3 mc-mb-fix dp--none">
                     <div class="menu-ranking" id="sidebarMenuRankingscroll">
                        <?php get_template_part('sections/new-app-ranking'); ?>
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