
$(document).ready( function(){
$('#bs_button').click( bs_call );
});
function bs_call()
{	
var search_params = $('#bs_bar').val();
	//Initiallizing the AJAX request.
	$.ajax({
		url: 'http://localhost:3000/profiles.json?search=' + search_params,
		type: "GET",
		dataType: 'jsonp',
		callbackParameter: "jsoncallback",
		timeout: 2500,
		success: function(result, textStatus, jqXHR)
		{
			console.log('Success!');
			var array = new Array();
			array = result;
			for(var i = 0; i < array.length; i++)
			{
				console.log(array[i].name);
			}
		},
		error: function(result, status, errorThrown) 
		{ 
			console.log('Failure...');
			var result = {
				data: [ 
				/*
					{image: "http://www.glogster.com/media/3/11/33/74/11337457.jpg"}, 
					{image: "http://moviesmedia.ign.com/movies/image/johnnybravo.jpg"},
					{image: "http://www.picaclicks.com/images/Nature/old-cartoons.jpg"}, 
					{image: "http://www.hilariouspetvideos.com/funny-cat.jpg"}, 
					{image: "http://www.coolstore888.com/communities/2/004/007/974/212/images/4549879802.jpg"}
				*/
				]

			}; 
		}
	});
}
