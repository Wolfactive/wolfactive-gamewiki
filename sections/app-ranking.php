<div class="app-ranking">
    <div class="app-ranking__title">
        <h3><i class="fas fa-crown"></i> App ranking</h3>
    </div>
    <div class="row-divide">
        <div class="<?php if(is_home()|| is_front_page()): echo"col-divide-6 col-divide-md-12";else: echo"col-divide-12";endif;?>">
            <div class="app-ranking__list">
                <div class="app-ranking__list-title">
                    <h4 class="title--item">Free Game Ranking</h4>
                </div>
                <div class="app-ranking__list-contain" id="freeGameRanking">                
                </div>
            </div>
        </div>
        <div class="<?php if(is_home() || is_front_page()): echo"col-divide-6 col-divide-md-12";else: echo"col-divide-12";endif;?>">
            <div class="app-ranking__list">
                <div class="app-ranking__list-title">
                    <h4 class="title--item">Grossing Game Ranking</h4>
                </div>
                <div class="app-ranking__list-contain" id="grossingGameRanking">                
                </div>
            </div>
        </div>
    </div>
</div>