<div class="menuCategory">
  <div class="menuCategory__contain">
    <h3 class="title--section">
      <?php echo get_theme_mod('menu_post_title_detail',__('Menu post')) ?>
    </h3>
    <div class="menuCategory__list">
      <?php $list_post = get_field('menu_post_detail');?>
      <?php  foreach ($list_post as $post) { ?>
         <a href="<?php the_permalink($post) ?>" class="menuCategory__item">
           <?php the_title($post) ?>
         </a>
     <?php }?>
    </div>
  </div>
</div>
