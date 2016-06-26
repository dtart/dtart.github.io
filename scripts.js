$().ready(function()
{
	$("#projects").mouseover(function(){
		$("#desc").hide();
		$("#desc").text("projektowanie instalacji elektrycznych");
		$("#desc").fadeIn();
    }).mouseout(function(){
		$("#desc").fadeOut();
    });

	$("#foto").mouseover(function(){
		$("#desc").hide();
		$("#desc").text("fotografia").fadeIn();
    }).mouseout(function(){
		$("#desc").fadeOut();
    });

	$("#video").mouseover(function(){
		$("#desc").hide();
		$("#desc").text("wideofilmowanie").fadeIn();
    }).mouseout(function(){
		$("#desc").fadeOut();
    });

});