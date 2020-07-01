<section class="right_sidebar" id="rightSideBAt">
<?php if(get_field('banner_right_sidebar','option')): ?>
    <div class="banner_right_sidebar">
        <a href="<?php echo get_field('link_banner_right_sidebar','option'); ?>" class="d--block" target="_blank">
          <img src="<?php echo get_field('banner_right_sidebar','option'); ?>" alt="Banner-right">
        </a>
    </div>
<?php endif; ?>
</section>
