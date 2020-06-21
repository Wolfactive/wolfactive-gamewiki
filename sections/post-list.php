<div class="postList">
  <div class="postList__contain">
    <!-- get post -->
      <?php $getposts = new WP_query();
      $getposts->query('post_status=publish&showposts=10&post_type=post&order=DESC&order_by=date'); ?>
      <?php global $wp_query; $wp_query->in_the_loop = true; ?>
      <?php while ($getposts->have_posts()) : $getposts->the_post(); ?>
        <div class="postList__item d--block">
          <div class="postList__item-img">
            <img class="d--block" src="<?php echo hk_get_thumb(get_the_id(),230,130) ?>" alt="<?php the_title(); ?>" />
          </div>
          <a href="<?php the_permalink() ?>" class="postList__item-title">
            <h3 class="title--item"><?php the_title() ?></h3>
          </a>
        </div>
      <?php endwhile; wp_reset_postdata(); ?>
  </div>
  <div class="postList__btn"></div>
</div>
