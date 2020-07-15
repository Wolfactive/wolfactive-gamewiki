<div class="menuCategory">
  <div class="menuCategory__contain">
    <?php $checkPostList = get_field('menu_post_detail') ?>
    <?php if(isset($checkPostList) || $checkPostList):?>
      <?php while(have_rows('menu_post_detail')) : the_row(); ?>
      <div class="menuCategory__content">
        <h3 class="title--section">
          <?php the_sub_field('title_item_menu') ?>
        </h3>
        <div class="menuCategory__list">
          <?php $list_post = get_sub_field('post_item_menu');?>
          <?php if($list_post): foreach ($list_post as $post) { ?>
            <a href="<?php the_permalink($post) ?>" class="menuCategory__item">
              <?php the_title($post) ?>
            </a>
        <?php }else: _e('Chưa có bài viết liên quan');endif;?>
        </div>
      </div>
      <?php endwhile; ?>
    <?php endif;?>
  </div>
</div>
