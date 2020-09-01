<?php 
    $category = get_field('bai_viet_lien_quan');
    if($category):
?>
    <div class="gamewiki__post-related">
        <div class="gamewiki__post-related-container">
            <div class="row-divide">
                <div class="gamewiki__post-popular col-divide--6">
                    <span>Bài viết phổ biến</span>
                </div>
                <div class="gamewiki__post-new col-divide--6">
                    <span>Bài viết Mới</span>
                </div>
            </div>
            <div class="gamewiki__post-container">
                
            </div>
            <a href="<?php echo site_url('trang-tong-hop'); ?>/?tab=pho-bien&cat=<?php echo $category; ?>">xem thêm bài viết phổ biến</a>
            <a href="<?php echo site_url('trang-tong-hop'); ?>/?tab=new&cat=<?php echo $category; ?>">xem thêm bài viết mới</a>
        </div>
    </div>
<?php endif; ?>