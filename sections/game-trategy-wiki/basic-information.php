<div class="gamewiki__basic-information">
    <?php if(get_field('sub_title_helper_2') && get_field('sub_title_helper_2')!=''):?>
    <div class="sub-title-section row-divide">
        <?php if(get_field('icon_arrow') && get_field('icon_arrow')!=''): ?>
        <img src="<?php echo hk_get_image(get_field('icon_arrow'),24,33); ?>" alt="arrow" class="icon-arrow">
        <?php endif; ?>
        <h3><?php the_field('sub_title_helper_2'); ?></h3>
    </div>
    <?php endif;?>
    <div class="gamewiki__basic-information-container">
        <?php if(have_rows('list_information_helper')):?>
        <div class="basic__helper-container">
            <?php while(have_rows('list_information_helper')):the_row(); $number_col = get_sub_field('select_number_col')?>
            <div class="basic__helper-item">
                <div class="basic__helper-item-title">
                    <?php if(get_sub_field('title_section_helper') && get_sub_field('title_section_helper')!=''): ?>
                    <h3><?php the_sub_field('title_section_helper'); ?></h3>
                    <?php endif; ?>
                    <div class="row-divide">
                        <?php 
                                    if($number_col==2){
                                        $list_post_helper=get_sub_field('list_post_helper');
                                        if($list_post_helper){
                                            $i=0;
                                            foreach($list_post_helper as $post): setup_postdata($post);?>
                        <div class="col-divide-6 basic__helper-item-col">
                            <div class="basic__helper-post-item eclips-2-line">
                                <i class="fas fa-play"></i>
                                <a href="<?php the_permalink();?>"><?php the_title(); ?></a>
                            </div>
                        </div>
                        <?php
                                            $i++;
                                            endforeach;
                                            wp_reset_postdata();
                                            if($i % $number_col != 0): $item= $number_col - ($i % $number_col);
                                                $j=0;
                                                while($j < $item):
                                            ?>
                        <div class="col-divide-6 basic__helper-item-col"></div>
                        <?php $j++;
                                                endwhile;
                                            endif;    
                                        }
                                    } else{
                                        $list_post_helper=get_sub_field('list_post_helper');
                                        if($list_post_helper){
                                            $i=0;
                                            foreach($list_post_helper as $post): setup_postdata($post);?>
                        <div class="col-divide-4 basic__helper-item-col">
                            <div class="basic__helper-post-item eclips-2-line">
                                <i class="fas fa-play"></i>
                                <a href="<?php the_permalink();?>"><?php the_title(); ?></a>
                            </div>
                        </div>
                        <?php
                                            $i++;
                                            endforeach;
                                            wp_reset_postdata();
                                            if($i % $number_col != 0): $item= $number_col - ($i % $number_col);
                                                $j=0;
                                                while($j < $item):
                                            ?>
                        <div class="col-divide-4 basic__helper-item-col"></div>
                        <?php $j++;
                                                endwhile;
                                            endif;     
                                        }
                                    }
                                ?>
                    </div>
                </div>
            </div>
            <?php endwhile; ?>
        </div>
        <?php endif; ?>
    </div>
</div>