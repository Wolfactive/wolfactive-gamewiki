<?php
/**
 * template name: Home Page
 */
<<<<<<< HEAD
  get_header(); ?>
  <section class="page-container">
    <div class="row-divide">
      <div class="col-divide-2 mc_fix_col">
        <?php get_template_part('sections/left-sidebar')?>
    </div>
      <div class="col-divide-8 col-divide-md-12">
        <?php get_template_part('sections/carousel') ?>
        <?php get_template_part('sections/category-list') ?>
        <?php get_template_part('sections/post-list') ?>
        <?php get_template_part('sections/app-ranking') ?>
        <?php get_template_part('sections/game-strategy-wiki') ?>
        <?php get_template_part('sections/latest-videos') ?>
        <?php get_template_part('sections/youtube-channel') ?>
      </div>
    <div class="col-divide-2 mc_fix_col">
      <?php get_template_part('sections/right-sidebar')?>
    </div>
  </div>
</section>
=======
 get_header(); ?>
 <section class="page-container">
   <div class="row-divide">
     <div class="col-divide-2 mc_fix_col">
       <?php get_template_part('sections/left-sidebar')?>
     </div>
     <div class="col-divide-8 col-divide-sm-12 col-divide-md-8">
       <?php get_template_part('sections/carousel') ?>
       <?php get_template_part('sections/category-list') ?>
       <?php get_template_part('sections/post-list') ?>
       <?php get_template_part('sections/game-strategy-wiki') ?>
       <?php get_template_part('sections/latest-videos') ?>
       <?php get_template_part('sections/youtube-channel') ?>
     </div>
     <div class="col-divide-2 mc_fix_col">
       <?php get_template_part('sections/right-sidebar')?>
     </div>
   </div>
 </section>
>>>>>>> fa6e9b948ad7bbefbc2dcf8497ae9948754bc805
<?php
  get_footer();
?>
