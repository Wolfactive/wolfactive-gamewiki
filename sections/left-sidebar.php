<section class="left_sidebar" id="leftSideBAt">
<?php if(get_field('link_banner_left_sidebar','option')): ?>
  <div class="banner_left_sidebar">
      <a href="<?php echo get_field('link_banner_left_sidebar','option'); ?>" class="d--block" target="_blank">
        <img src="<?php echo get_field('banner_left_sidebar','option'); ?>" alt="Banner-left">
      </a>
  </div>
<?php endif; ?>
<?php if(get_field('link_twitter_embedded','option')): ?>
    <div class="twitter_embedded">
        <?php echo get_field('link_twitter_embedded','option'); ?>
    </div>
    <?php endif; ?>
</section>
