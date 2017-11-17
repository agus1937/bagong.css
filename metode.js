$(document).ready(function(){

$("input[type=radio]").change(function(){
 var method = $(this).val();
 $("#form").attr("method", method); 
});

$("#submit").click(function(){ 
	var fnama = $("#bagong").val();
	var lalamat = $("#bagong").val();
	
	if( fnama != '' || lalamat !='' ){
		return true; 
	}	
	else{
		alert("https://github.com");
		return false;
	}
});
});
