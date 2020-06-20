    <section class="footer">
	    <!----------=========Main==========-------->
	<div class="footerlogo_and_social">
		<div class="footer_logo">
			<img src="<?php echo get_field('footer_logo','option'); ?>" alt="">
		</div>
		<div class="footer_social">
			<div class="ff_socail">
				<a href="<?php echo get_field('footer_logo','option'); ?>">
					<i class="fab fa-facebook-square icon"></i>
				</a>
			</div>
			<div class="ft_socail">
				<a href="<?php echo get_field('footer_logo','option'); ?>">
				<i class="fab fa-twitter icon"></i>
				</a>
			</div>
		</div>
		<div class="footer_big_menu">
			<div class="container">
				<?php 
					wp_nav_menu( array(
						'theme_location' => 'footer_big_nav',
					) );
				?>
			</div>
			
		</div>
		<div class="footer_small_list_menu">
			<div class="container">
				<div class="small_listmenu-contain">
					<h4 class="list_hgm">List of handling games</h4>
					<div class="small_listmenu-content">
						<?php 
						wp_nav_menu( array(
							'theme_location' => 'footer_small_nav',
						) );
						?>
					</div>
				</div>
				
			</div>
			
		</div>
	</div>
	</div>
	<!----------=========Main==========-------->

	<!----------=========Sub==========-------->
	<div class="footer__sub">
		<div class="container"><p class="text--center">Copyright © <a href="https://wolfactive.dev/">WolfActive Solution</a> : Largest in Japan! Game strategy information media , All Rights Reserved.</p></div>
	</div>
	    <!----------=========Sub==========-------->
 </section>
 <?php wp_footer(); ?>
 </body>
</html>
