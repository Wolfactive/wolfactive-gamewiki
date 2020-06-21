<?php
function gamewiki_customizer( $wp_customize ) {
            $wp_customize->add_panel(
            // $id
            'theme_option',
            // $args
            array(
              'priority' 			=> 11,
              'capability' 		=> 'edit_theme_options',
              'theme_supports'	=> '',
              'title' 			=> __( 'Theme Opitons', 'gamewiki' ),
              'description' 		=> __( 'Theme option', 'gamewiki' ),
            )
          );
      // Thông tin công ty
      $wp_customize->add_section(
      'title_sub_footer_top_menu',
      array(
          'title' => esc_html__( 'Config title header, social, Copyright', 'gamewiki' ),
          'panel'   =>  'theme_option',
          'priority' => 150
        )
     );

    /*----------------------------------------------------------------------*/
    // Title top menu
      $wp_customize->add_setting(
          // $id
          'title_top_menu',
          // $args
          array(
            'sanitize_callback'	=> 'sanitize_text_field',
            'default'           => 'Largest in Japan! Game strategy information media'
          )
        );


      $wp_customize->add_control(
              'title_top_menu',
              array(
                  'label' => esc_html__( 'Title top menu', 'gamewiki' ),
                  'section' => 'title_sub_footer_top_menu',
                  'type' => 'text'
              )
     );
     // Link facebook
       $wp_customize->add_setting(
           // $id
           'link_face_book',
           // $args
           array(
             'sanitize_callback'	=> 'sanitize_text_field',
             'default'           => 'https://www.facebook.com/'
           )
         );


       $wp_customize->add_control(
               'link_face_book',
               array(
                   'label' => esc_html__( 'Link facebook', 'gamewiki' ),
                   'section' => 'title_sub_footer_top_menu',
                   'type' => 'text'
               )
      );
      // Link facebook
        $wp_customize->add_setting(
            // $id
            'link_twitter',
            // $args
            array(
              'sanitize_callback'	=> 'sanitize_text_field',
              'default'           => 'https://twitter.com/'
            )
          );


        $wp_customize->add_control(
                'link_twitter',
                array(
                    'label' => esc_html__( 'Link twitter', 'gamewiki' ),
                    'section' => 'title_sub_footer_top_menu',
                    'type' => 'text'
                )
       );
       // Copyright
         $wp_customize->add_setting(
             // $id
             'copyright_footer',
             // $args
             array(
               'sanitize_callback'	=> 'sanitize_text_field',
               'default'           => 'Largest in Japan! Game strategy information media'
             )
           );


         $wp_customize->add_control(
                 'copyright_footer',
                 array(
                     'label' => esc_html__( 'Copyright', 'gamewiki' ),
                     'section' => 'title_sub_footer_top_menu',
                     'type' => 'text'
                 )
        );
}
add_action( 'customize_register', 'gamewiki_customizer' );
