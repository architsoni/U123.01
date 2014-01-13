$( document ).ready(function() {
 

// SCRIPT FOR ACTIVE FUNCTIONALITY
  $('.navbar-default .navbar-nav>li>a').click(function() {
			 $('.navbar-default .navbar-nav>li').removeClass('active'); 	 
			$(this).parent().addClass('active');           		
	});
});