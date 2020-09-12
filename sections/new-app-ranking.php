<?php 
    if(is_singular('post')):
        $category = yoast_get_primary_term_id('category', $post->ID);
        else :
        $category = get_field('bai_viet_lien_quan'); 
    endif;
    if($category):
?>
<div class="gamewiki__post-related">
    <div class="gamewiki__post-related-container">
        <div class="row-divide">
            <div class="gamewiki__post-popular col-divide--6">
                <span class="tab-item active" id="popularTab">Bài viết phổ biến</span>
            </div>
            <div class="gamewiki__post-new col-divide--6">
                <span class="tab-item" id="newTab">Bài viết Mới</span>
            </div>
        </div>
        <div class="gamewiki__post-container">
            <div class="gamewiki__tab-popular tab-content" id="popularTabContent">
                <?php   $i=1;
                        $pho_bien_query = array(
                            'post_type' => 'post',
                            'post_status' => 'publish',
                            'meta_key' => 'post_views_count',
                            'order' => 'DESC',
                            'cat' => (int)$category,
                            'showposts' => 5
                            
                        );
                        $query = new WP_Query( $pho_bien_query );
                        while( $query->have_posts()):$query->the_post();?>
                <div class="gamewiki__post-tong-hop-item">
                    <div class="row-divide">
                        <div class="col-divide-4 gamewiki__tong-hop-item--feature position--relative">
                        <div class="ranking-post position--absolute"> 
                                <div class="ranking-post-item ranking-post-item-<?php _e($i);?>">
                                    <?php echo $i ?>
                                </div> 
                            </div>
                            <a href="<?php the_permalink();?>">
                                <img src="<?php echo hk_get_thumb(get_the_id(),150,75)?>" alt="img">
                            </a>
                        </div>
                        <div class="col-divide-8 gamewiki__tong-hop-item--content">
                            <a href="<?php the_permalink()?>" class="eclips-2-line">
                                <?php the_title()?>
                            </a>
                        </div>
                    </div>
                </div>
                <?php
                $i++;
                        endwhile; //wp_reset_postdata();
                    ?>
                <div class="gamewiki__post-tong-hop-item">
                    <a href="<?php echo site_url('trang-tong-hop'); ?>/?tab=pho-bien&cat=<?php echo $category; ?>">Xem
                        thêm
                        bài viết phổ biến</a>
                </div>
            </div>
            <div class="gamewiki__tab-new tab-content d--none" id="newTabContent">
                <?php
                $i=1;
                        $new_query = array(
                            'post_type' => 'post',
                            'post_status' => 'publish',
                            'showposts'     => 5,
                            'order' => 'DESC',
                            'cat' => (int)$category,
                        );
                        $query = new WP_Query( $new_query );
                        while( $query->have_posts()):$query->the_post();?>
                <div class="gamewiki__post-tong-hop-item">
                    <div class="row-divide">
                        <div class="col-divide-4 gamewiki__tong-hop-item--feature position--relative">
                            <div class="ranking-post position--absolute">
                            </div>
                            <a href="<?php the_permalink();?>">
                                <img src="<?php echo hk_get_thumb(get_the_id(),150,75)?>" alt="img">
                            </a>
                        </div>
                        <div class="col-divide-8 gamewiki__tong-hop-item--content">
                            <a href="<?php the_permalink()?>" class="eclips-2-line">
                                <?php the_title()?>
                            </a>
                        </div>
                    </div>
                </div>
                <?php
                $i++;
                        endwhile; //wp_reset_postdata();
                    ?>
                <div class="gamewiki__post-tong-hop-item">
                    <a href="<?php echo site_url('trang-tong-hop'); ?>/?tab=new&cat=<?php echo $category; ?>">Xem thêm bài viết mới</a>
                </div>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>