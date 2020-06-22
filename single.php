 <?php get_header();?>
 <section class="page-container">
   <?php get_template_part('sections/breadcums'); ?>
   <div class="row-divide">
     <div class="col-divide-2 mc_fix_col">
       <div class="sidebar__left">
         <div class="sidebar__left-banner">
           <a href="<?php the_field('link_banner_left_post_detail','option') ?>" target="_blank">
             <img src="<?php the_field('banner_left_post_detail','option') ?>" alt="banner-left-ads">
           </a>
         </div>
       </div>
     </div>
     <div class="col-divide-8">
      <div class="row-divide">
        <div class="col-divide-3">
          <?php get_template_part('sections/menu-category'); ?>
        </div>
        <div class="col-divide-6">
          <?php while(have_posts()) : the_post() ; ?>
             <h1 class="single__title title--section"><?php the_title(); ?></h1>
             <p class="date"><strong><?php the_date(); ?></strong></p>
             <div class="single__page-content">
                 <?php the_content(); ?>
             </div>
           <?php endwhile; ?>
        </div>
        <div class="col-divide-3"></div>
      </div>
     </div>
     <div class="col-divide-2 mc_fix_col">
       <div class="sidebar__right">
         <div class="sidebar__right-banner">
           <a href="<?php the_field('link_banner_right_post_detail','option') ?>" target="_blank">
             <img src="<?php the_field('banner_right_post_detail','option') ?>" alt="banner-right-ads">
           </a>
         </div>
         <div class="twitter_embedded">
             <?php echo get_field('link_twitter_embedded','option'); ?>
         </div>
       </div>
     </div>
   </div>
 </section>
<?php
 get_footer();
?>
