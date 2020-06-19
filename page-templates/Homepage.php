 <?php
 /**
 * template name: Home Page
 */
 get_header(); ?>
 <section class="page-container">
   <div class="row-divide">
     <div class="col-divide-2"></div>
     <div class="col-divide-8">
       <?php get_template_part('sections/carousel') ?>
       <?php get_template_part('sections/game-strategy-wiki') ?>
       <?php get_template_part('sections/latest-videos') ?>
     </div>
     <div class="col-divide-2"></div>
   </div>
 </section>
<?php
  get_footer();
?>
