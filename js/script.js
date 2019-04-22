$(document).ready(function(){
    
    $('.mobile_menu').hide();

    $('.menu_burger').click(function($e){
        
        $e.preventDefault();
        $('.mobile_menu').slideToggle();

    })

    $('a[href^="#"]').click(function(){

		let target=$(this).attr('href');
		$('html,body').animate(
		{
			scrollTop:$(target).offset().top
		},
		800
		);
		
	});

    var offset=$('.navbar').offset();
	
	$(window).scroll(function(){

		if($(window).scrollTop()>offset.top){
			$('.navbar').addClass('fixedNav');

		} else {
			$('.navbar').removeClass('fixedNav');
		}
	});
 
    


})