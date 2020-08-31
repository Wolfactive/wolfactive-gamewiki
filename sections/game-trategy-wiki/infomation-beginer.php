<div class="gamewiki__infomation-beginner">
    <div class="gamewiki__infomation-beginner-container">
        <div class="gamewiki__info-beginner-news">
            <div class="gamewiki__info-beginner-news--title">
                <?php if(get_field('feature_main_beginer') &&  get_field('feature_main_beginer') !=''):
                    if(get_field('title_beginner') && get_field('title_beginner') !=''):
                    ?>
                    <div class="gamewiki__info-beginner-feature position--relative">
                        <img src="<?php echo hk_get_image(get_field('feature_main_beginer'),416,49); ?>" alt="img">
                        <div class="gamewiki__info-beginner-title position--absolute">
                            <h2><?php the_field('title_beginner'); ?></h2>
                        </div>
                    </div>
                <?php endif;
            endif; ?>
            </div>
            <div class="gamewiki__info-beginner-news--feature">
                    <?php if(get_field('feature_beginer') && get_field('feature_beginer')!=''): ?>
                        <img src="<?php echo hk_get_image(get_field('feature_beginer'),416,216); ?>" alt="img">
                    <?php endif;
                    if(get_field('des_beginner')&& get_field('des_beginner')!=''):
                    ?>
                        <div class="gamewiki__info-beginner-des">
                            <span><?php the_field('des_beginner'); ?></span>
                        </div>
                    <?php endif; ?>
            </div>
            <div class="gamewiki__info-beginner-news--post">
                <div class="gamewiki__info-beginner-post--title position--relative">
                    <?php if(get_field('feature_sub_beginer') &&  get_field('feature_sub_beginer') !=''):
                        if(get_field('sub_title_beginner') && get_field('sub_title_beginner') !=''):
                        ?>
                            <img src="<?php echo hk_get_image(get_field('feature_sub_beginer'),416,49); ?>" alt="img">
                            <div class="sub-title position--absolute">
                                <h3><?php the_field('sub_title_beginner'); ?></h3>
                            </div>
                    <?php endif; endif; ?>
                </div>
                <div class="gamewiki__info-beginner-post">
                    <div class="for__beginner-post row-divide">
                        <?php 
                            $list_post_item = get_field('post_beginner');
                            $i=0;
                            if($list_post_item):
                                foreach( $list_post_item as $post ): setup_postdata($post);
                        ?>
                            <div class="for__beginner-post-item col-divide-6">
                                <div class="for__beginner-post-item--content">
                                    <a href="<?php the_permalink();?>">
                                        <img src="<?php echo hk_get_thumb(get_the_id(),300,135)?>" alt="img">
                                    </a>
                                    <div class="title-post">
                                        <a href="<?php the_permalink();?>"><?php the_title(); ?></a>
                                    </div>
                                </div>
                            </div>
                        <?php 
                        $i++;
                                endforeach; wp_reset_postdata();
                                if($i % 2 != 0): ?>
                                    <div class="for__beginner-post-item col-divide-6"></div>
                                <?php
                                endif;
                            endif; ?>
                    </div>
                    <?php if(get_field('button_open_list_post')==1):
                        if(get_field('read_more_post_beginner') && get_field('read_more_post_beginner')!='' && get_field('read_more_post_beginner_link') && get_field('read_more_post_beginner_link')!=''):
                        ?>
                    <div class="gamewiki__info-beginner-post--readmore">
                        <a href="<?php the_field('read_more_post_beginner_link')?>" class="btn"><?php the_field('read_more_post_beginner'); ?></a>
                    </div>
                        <?php endif; endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>