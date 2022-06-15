$(function(){
$(".design-slider").slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true
    responsive: [
        {
            breakpoint: 361,
            settings: {
                variableWidth: false,
                slideToShow: 1,
            }
        }
    ]
   
});
});