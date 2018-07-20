$(document).ready(function() {
    $(".card").on("click", function(){
    	$(this).toggleClass("card--open");
    })
    $(".card__like").on("click", function(event){
    	$(this).toggleClass("card__like--red");
    	event.stopPropagation();
    	//$(this).attr("href", " ")
    })
    $(".card__follow-btn").on("click", function(e){
    	$(this).toggleClass("card__follow-btn--following");
    	e.preventDefault();
    	e.stopPropagation();
    })
    $("#image").change(function(){
    	var valor = $("#image option:selected").val()
    	$(".create__image").children().attr("src", "assets/images/squared/" + valor)
    })
    $("#author").change(function(){
    	var valores = $("#author option:selected").val()
    	$(".create__profile").children().attr("src", "assets/images/profiles/" + valores)
    })
});