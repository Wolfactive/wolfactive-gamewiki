<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
     <meta charset="<?php bloginfo('charset'); ?>" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="author" content="Wolfactive - HuyNguyen - PhuongNam">
  	 <link rel="profile" href="https://wolfactive.net/">
     <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
     <link rel="preload" href="<?php echo get_theme_file_uri('dist/css/webfonts/fa-brands-400.woff2') ?>" as="font" type="font/woff2" crossorigin>
     <link rel="preload" href="<?php echo get_theme_file_uri('dist/css/webfonts/fa-regular-400.woff2') ?>" as="font" type="font/woff2" crossorigin>
     <link rel="preload" href="<?php echo get_theme_file_uri('dist/css/webfonts/fa-solid-900.woff2') ?>" as="font" type="font/woff2" crossorigin>
     <link rel="preload" href="<?php echo get_theme_file_uri('dist/fonts/Rokkitt-VariableFont_wght.ttf') ?>" as="font" type="font/ttf" crossorigin>
     <link rel="stylesheet" href="<?php echo get_theme_file_uri('dist/css/main.css') ?>">
     <script defer type='text/javascript' src="<?php echo get_theme_file_uri('dist/js/root.js') ?>"></script>
     <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<section class="header">
  <div class="main--background">
    <div class="header__contain container">
  	   <div class="header__item">
  	      <a href="<?php echo site_url(); ?>" class="d--block logo mr-auto">
            <?php
             $custom_logo_id = get_theme_mod( 'custom_logo' );
             $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
                ?>
  	        <img src="<?php echo $image[0]; ?>" alt="logo-gamewiki">
  	      </a>
          <span class="text--light">
            <?php echo get_theme_mod('title_top_menu',__('Largest in Japan! Game strategy information media')) ?>
          </span>
  	   </div>
       <div class="header__item">
         <form class="header__form-item" action="<?php bloginfo('url')?>" method="get">
           <div class="header__search">
              <label for="inputHeaderSearch"><i class="fas fa-search" class="icon--text"></i></label>
              <input class="input" type="search" id="inputHeaderSearch" name="s" value="" placeholder="Tìm kiếm">
              <input type="hidden" value="1" name="sentence" />
              <input type="hidden" value="post" name="post_type" />
          </div>
          <div class="header__search">
            <button type="submit" aria-label="search-header-button" name="button-search">Search</button>
          </div>
         </form>
         <div class="header__item-social">
           <a href="<?php echo get_theme_mod('link_face_book',__('https://www.facebook.com/')) ?>" target="_blank">
             <i class="fab fa-facebook-square icon"></i>
              <span>facebook</span>
           </a>
         </div>
         <div class="header__item-social">
           <a  href="<?php echo get_theme_mod('link_twitter',__('https://twitter.com/')) ?>" target="_blank">
             <i class="fab fa-twitter icon"></i>
             <span>twitter</span>
           </a>
         </div>
       </div>
  	</div>
  </div>
</section>
