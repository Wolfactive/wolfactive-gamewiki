<div class="menuCategory">
  <div class="menuCategory__contain">
    <div class="menuCategory__content">
      <h3 class="title--section">
        <?php echo get_theme_mod('menu_post_title_detail',__('Menu post')) ?>
      </h3>
      <div class="menuCategory__list">
        <?php $list_post = get_field('menu_post_detail');?>
        <?php if($list_post): foreach ($list_post as $post) { ?>
           <a href="<?php the_permalink($post) ?>" class="menuCategory__item">
             <?php the_title($post) ?>
           </a>
       <?php }else: _e('Chưa có bài viết liên quan');endif;?>
      </div>
    </div>
    <div class="menuCategory__video">
      <h3 class="title--section">
        <?php echo get_theme_mod('menu_video_title_detail',__('Menu video')) ?>
      </h3>
      <div class="menuCategory__list">
        <?php $list_video = get_field('menu_video');?>
        <?php if($list_video): foreach ($list_video as $video) { ?>
           <a href="<?php the_permalink($video) ?>" class="menuCategory__item">
             <i class="fab fa-youtube text--dark"></i> <?php the_title($video) ?>
           </a>
       <?php }else: _e('Chưa có bài viết liên quan');endif;?>
      </div>
    </div>
  </div>
</div>
