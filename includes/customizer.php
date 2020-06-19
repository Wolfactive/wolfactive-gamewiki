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
          'title' => esc_html__( 'Config title header and social', 'gamewiki' ),
          'panel'   =>  'theme_option',
          'priority' => 150
        )
     );

    /*----------------------------------------------------------------------*/
    // Company Name
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

}
add_action( 'customize_register', 'gamewiki_customizer' );
