<div class="gamewiki__infomation-beginner">
    <div class="gamewiki__infomation-beginner-container">
        <div class="gamewiki__info-beginner-news">
            <div class="gamewiki__info-beginner-news--title">
                <?php 
                    if(get_field('title_beginner') && get_field('title_beginner') !=''):
                    ?>
                    <div class="gamewiki__info-beginner-feature">                      
                            <h2 class="title-section" id="section2"><?php the_field('title_beginner'); ?></h2>
                    </div>
                <?php endif; ?>
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
                    <div class="sub-title-section row-divide">
                        <?php if(get_field('icon_arrow') && get_field('icon_arrow')!=''): ?>
                        <img src="<?php echo hk_get_image(get_field('icon_arrow'),24,33); ?>" alt="arrow" class="icon-arrow">
                        <?php endif; ?>
                        <h3><?php the_field('sub_title_beginner'); ?></h3>
                    </div>
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