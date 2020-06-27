<?php
get_header(); ?>
<section class="page-container">
	<?php get_template_part('sections/breadcums'); ?>
    <div class="row-divide">
    <div class="col-divide-2 mc_fix_col">
        <?php get_template_part('sections/left-sidebar')?>
    </div>
    <div class="col-divide-8 col-divide-md-12">
	<?php if (have_posts()){?> 
		<div class="row-divide">
		<?php  while(have_posts()) : the_post(); ?>
		<div class="col-divide-6 col-divide-md-12">
        	<div class="">
            	<img class="d--block" src="<?php echo hk_get_thumb(get_the_id(),600,400) ?>" alt="<?php the_title(); ?>" />
            </div>
            <a href="<?php the_permalink() ?>" class="">
            	<h3 class="title--item"><?php the_title() ?></h3>
            </a>
        </div>
		<?php endwhile; _e('</div>'); }else {
    	_e('<h2 class="headline headline--small-plus">No results match that search.</h2>');
    	} ?>
    </div>
    <div class="col-divide-2 mc_fix_col">
    <?php get_template_part('sections/right-sidebar')?>
    </div>
</div>
</section>
<?php
get_footer();
?>
