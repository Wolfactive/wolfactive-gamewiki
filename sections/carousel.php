<div class="carousel">
  <div class="carousel__contain row-divide">
  <div class="carousel__big col-divide-8 col-divide-md-12">
    <div class="carousel__contain-big" id="carouselContainBig">
          <!-- get post -->
            <?php $getposts = new WP_query();
            $getposts->query('post_status=publish&showposts=3&post_type=post&order=DESC&order_by=date'); ?>
            <?php global $wp_query; $wp_query->in_the_loop = true; ?>
            <?php while ($getposts->have_posts()) : $getposts->the_post(); ?>
              <div class="carousel__item d--block">
                <div class="carousel__item-img">
                  <img class="d--block" src="<?php echo hk_get_thumb(get_the_id(),610,320) ?>" alt="<?php the_title(); ?>" />
                </div>
                <a href="<?php the_permalink() ?>" class="carousel__item-title">
                  <h3 class="title--item"><?php the_title() ?></h3>
                </a>
              </div>
            <?php endwhile; wp_reset_postdata(); ?>
    </div>
    <div class="carousel__big-btn"></div>
  </div>
    <div class="carousel__contain-small col-divide-4 col-divide-md-12">
          <!-- get post -->
            <?php $getposts = new WP_query();
            $getposts->query('post_status=publish&showposts=2&post_type=post&order=DESC&order_by=date&offset=2'); ?>
            <?php global $wp_query; $wp_query->in_the_loop = true; ?>
            <?php while ($getposts->have_posts()) : $getposts->the_post(); ?>
              <a href="<?php the_permalink() ?>" class="carousel__item d--block">
                <div class="carousel__item-img">
                  <img class="d--block" src="<?php echo hk_get_thumb(get_the_id(),610,320) ?>" alt="<?php the_title(); ?>" />
                </div>
                <div class="carousel__item-title">
                  <h3 class="title--item"><?php the_title() ?></h3>
                </div>
              </a>
            <?php endwhile; wp_reset_postdata(); ?>
  </div>
</div>
</div>
