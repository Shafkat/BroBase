$(document).ready( function(){
	$('#bs_button').click( bs_call );

	$('#bs').mouseenter( function(){
		$('#bs').html('BroSearch');
	});

	$('#bs').mouseleave( function(){
		$('#bs').html('BS');
	});
	
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
			popBros(array);
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
					{bro: "Shafkat"},
					{bro: "Tahbit"},
				]
			console.log(result);

			}; 
		}
	});
}

function popBros(bros)
{
	broArray = new Array();
	broArray = bros;
	
	for(var i = 0; i< broArray.length; i++)
	{
		var list = document.getElementById('broList');
		var bro = document.createElement("li");
		var shout = document.createElement("button");
		shout.innerHTML = "ShoutOut";
		bro.innerHTML = broArray[i].name;
		list.appendChild(bro);
		bro.appendChild(shout);
            
            $(bro).click( function() {
				alert("Alpha Version Bro! Not that Awesome Yet!");
			});
			
		//bro.setAttribute('id', 700+id);
		//$(img).hide();
		//bro.appendChild(img);
		//$(img).fadeIn(2000).delay(500);
    }
}