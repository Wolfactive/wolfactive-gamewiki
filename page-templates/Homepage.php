 <?php
 /**
 * template name: Home Page
 */
 get_header(); ?>
 <section class="page-container">
   <div class="row-divide">
     <div class="col-divide-2 mc_fix_col">
       <?php get_template_part('sections/left-sidebar')?>
     </div>
     <div class="col-divide-8">
       <?php get_template_part('sections/carousel') ?>
       <?php get_template_part('sections/game-strategy-wiki') ?>
       <?php get_template_part('sections/latest-videos') ?>
       <?php get_template_part('sections/youtube-channel') ?>
     </div>
     <div class="col-divide-2 mc_fix_col"></div>
   </div>
 </section>
<?php
  get_footer();
?>
