$(document).ready(function() {
    $(".card").on("click", function(){
    	$(this).toggleClass("card--open");
    })
    $(".card__like").on("click", function(event){
    	$(this).toggleClass("card__like--red");
    	event.stopPropagation();
    })
});