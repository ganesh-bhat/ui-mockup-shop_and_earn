$(document).ready(function () {
   init();
});

init = function(){
	
	$("#offers").on("click",hideRibbon);
		
};
hideRibbon = function(){
	
	$("#ribbon").hide();
};