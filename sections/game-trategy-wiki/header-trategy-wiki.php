<div class="gamewiki__title-table">
                        <div class="gamewiki__title-table-content">
                            <div class="gamewiki__title-table-feature position--relative">
                                <?php 
                              if(get_field('image_features') && get_field('image_features')!=null): ?>
                                <img src="<?php echo hk_get_image(get_field('image_features'),515,290); ?>"
                                    alt="img features">
                                <?php endif; ?>
                                <div class="gamewiki__title position--absolute">
                                    <div class="gamewiki__title-item">
                                        <?php if(get_field('title') && get_field('title')!=null): ?>
                                        <h2><?php the_field('title'); ?></h2>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <div class="gamewiki__table position--absolute">
                                    <?php if(have_rows('table')):
                                ?>
                                    <div class="gamewiki__table-content row-divide">
                                        <?php
                                    while(have_rows('table')):the_row();
                                        if(get_sub_field('ten_table') && get_sub_field('ten_table')!=null):
                                    ?>
                                        <div class="gamewiki__table-content-item col-divide-3">
                                            <div class="gamewiki__table-title">
                                                <a href="#"><?php the_sub_field('ten_table'); ?></a>
                                            </div>
                                        </div>
                                        <?php
                                        endif;
                                    endwhile;
                                    ?>
                                    </div>
                                    <?php
                                endif; ?>
                                </div>
                            </div>
                            <div class="gamewiki__des">
                                <div class="gamewiki__des-content">
                                    <?php if(get_field('content') && get_field('content') != ''):the_field('content');endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>