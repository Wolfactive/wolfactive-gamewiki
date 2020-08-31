<div class="gamewiki__information-item">
    <div class="gamewiki__information-item-container">
        <?php if(get_field('title_section_item_list') && get_field('title_section_item_list')!=''): ?>
            <h2 class="title-section"><?php  the_field('title_section_item_list'); ?></h2>
        <?php endif;?>
        <?php if(have_rows('list_content_item')):
                while(have_rows('list_content_item')):the_row();
                    $col_item_number = get_sub_field('select_number_col_item');
                    if(get_sub_field('sub_title_content') && get_sub_field('sub_title_content')!=''):?>
                        <div class="sub-title-section row-divide">
                            <?php if(get_field('icon_arrow') && get_field('icon_arrow')!=''): ?>
                            <img src="<?php echo hk_get_image(get_field('icon_arrow'),24,33); ?>" alt="arrow" class="icon-arrow">
                            <?php endif; ?>
                            <h3><?php the_sub_field('sub_title_content'); ?></h3>
                        </div>
                    <?php endif;?>
              <div class="information__list-item">
                <div class="information__list-item-content">
                    <?php if(get_sub_field('sub_title_item') && get_sub_field('sub_title_item')!=''): ?>
                        <h3><?php the_sub_field('sub_title_item'); ?></h3>
                    <?php endif; ?>
                    <div class="row-divide">
                        <?php 
                            if(have_rows('list_item_content')): 
                                if($col_item_number==3){
                                    $i=0;
                                    while(have_rows('list_item_content')):the_row();
                                    ?>
                                    <div class="col-divide-4 list__item-content">
                                        <a href="<?php if(get_sub_field('link_item') && get_sub_field('link_item') != ''): the_sub_field('link_item'); else: _e('javascript:void(0)'); endif; ?>">
                                            <img src="<?php echo hk_get_image(get_sub_field('image_item'),50,50); ?>" alt="img">
                                        </a>
                                        <?php if(get_sub_field('item_name') && get_sub_field('item_name')!=''): ?>
                                            <div class="name-item">
                                                <a href="<?php if(get_sub_field('link_item') && get_sub_field('link_item') != ''): the_sub_field('link_item'); else: _e('javascript:void(0)'); endif; ?>">
                                                    <span><?php the_sub_field('item_name') ?></span>
                                                </a>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                    <?php
                                    $i++;
                                    endwhile;
                                    if($i % $col_item_number != 0): $item= $col_item_number - ($i % $col_item_number);
                                        $j=0;
                                        while($j < $item):?>
                                            <div class="col-divide-4 list__item-content"></div>
                                            <?php $j++;
                                        endwhile;
                                    endif;   
                                } else if($col_item_number==4){
                                    $i=0;
                                    while(have_rows('list_item_content')):the_row();
                                    ?>
                                    <div class="col-divide-3 list__item-content">
                                        <a href="<?php if(get_sub_field('link_item') && get_sub_field('link_item') != ''): the_sub_field('link_item'); else: _e('javascript:void(0)'); endif; ?>">
                                            <img src="<?php echo hk_get_image(get_sub_field('image_item'),50,50); ?>" alt="img">
                                        </a>
                                        <?php if(get_sub_field('item_name') && get_sub_field('item_name')!=''): ?>
                                            <div class="name-item">
                                                <a href="<?php if(get_sub_field('link_item') && get_sub_field('link_item') != ''): the_sub_field('link_item'); else: _e('javascript:void(0)'); endif; ?>">
                                                    <span><?php the_sub_field('item_name') ?></span>
                                                </a>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                    <?php
                                    $i++;
                                    endwhile;
                                    if($i % $col_item_number != 0): $item= $col_item_number - ($i % $col_item_number);
                                        $j=0;
                                        while($j < $item):?>
                                            <div class="col-divide-3 list__item-content"></div>
                                            <?php $j++;
                                        endwhile;
                                    endif;   
                                } else{
                                    $i=0;
                                    while(have_rows('list_item_content')):the_row();
                                    ?>
                                    <div class="divide--5-col list__item-content">
                                        <a href="<?php if(get_sub_field('link_item') && get_sub_field('link_item') != ''): the_sub_field('link_item'); else: _e('javascript:void(0)'); endif; ?>">
                                            <img src="<?php echo hk_get_image(get_sub_field('image_item'),50,50); ?>" alt="img">
                                        </a>
                                        <?php if(get_sub_field('item_name') && get_sub_field('item_name')!=''): ?>
                                            <div class="name-item">
                                                <a href="<?php if(get_sub_field('link_item') && get_sub_field('link_item') != ''): the_sub_field('link_item'); else: _e('javascript:void(0)'); endif; ?>">
                                                    <span><?php the_sub_field('item_name') ?></span>
                                                </a>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                    <?php
                                    $i++;
                                    endwhile;
                                    if($i % $col_item_number != 0): $item= $col_item_number - ($i % $col_item_number);
                                        $j=0;
                                        while($j < $item):?>
                                            <div class="divide--5-col list__item-content"></div>
                                            <?php $j++;
                                        endwhile;
                                    endif;   
                                }
                             endif;
                        ?>
                    </div>
                </div>
            </div>
        <?php       
                endwhile;
              endif; ?>
    </div>
</div>