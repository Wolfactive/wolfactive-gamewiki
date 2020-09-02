<?php
/**
 * template name: Page Template Default
 */
$tab = $_GET['tab'];
$cat = $_GET['cat'];
  get_header(); ?>
  <section class="page-container">
      <div class="gamewiki__trang-tong-hop">
          <div class="container">
            <div class="gamewiki__post-tong-hop">
            <?php if($tab == 'pho-bien'): ?>
            <h2 class="gamewiki__post-tong-hop--title">Bài viết phổ biến</h2>
            <?php elseif($tab=='new'): ?>
            <h2 class="gamewiki__post-tong-hop--title">Bài viết mới</h2>
            <?php endif; ?>
          <?php 
            if($tab && $cat):
                if($tab=='pho-bien'):
                    $trang_tong_hop_post = array(
                        'post_type' => 'post',
                        'post_status' => 'publish',
                        'meta_key' => 'post_views_count',
                        'order' => 'DESC',
                        'cat' => (int)$cat,
                        'showposts' => 10
                    );
                elseif($tab=='new'):
                    $trang_tong_hop_post = array(
                        'post_type' => 'post',
                        'post_status' => 'publish',
                        'cat' => (int)$cat,
                        'showposts' => 10
                    );
                else:
                    _e('Bài viết đang được cập nhật');
                endif;
                $query_post_tong_hop = new WP_Query( $trang_tong_hop_post );
                $i=1;
                while($query_post_tong_hop->have_posts()):$query_post_tong_hop->the_post();
                ?>
                    <div class="gamewiki__post-tong-hop-item">
                        <div class="row-divide">
                            <div class="col-divide-2 gamewiki__tong-hop-item--feature position--relative">
                                <div class="ranking-post position--absolute">
                                    <span class="ranking-post-item ranking-post-item-<?php _e($i);?>"><?php _e($i) ?></span>
                                </div>
                                <a href="<?php the_permalink();?>">
                                    <img src="<?php echo hk_get_thumb(get_the_id(),150,75)?>" alt="img">
                                </a>
                            </div>
                            <div class="col-divide-10 gamewiki__tong-hop-item--content">
                                <a href="<?php the_permalink()?>">
                                    <?php the_title()?>
                                </a>
                            </div>
                        </div>
                    </div>
                <?php
                $i++;
                endwhile;
            else:
                echo "Bài viết đang được cập nhât";
            endif;
        ?>
            </div>
          </div>
      </div>
  </div>
</section>
<?php
  get_footer();
?>
