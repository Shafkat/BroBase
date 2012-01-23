$(document).ready( function(){
	$('#bs').click( bs_call );

	$('#bs').mouseenter( function(){
		$('#bs').html('BroSearch');
	});

	$('#bs').mouseleave( function(){
		$('#bs').html('BS');
	});
	
});
	
function bs_call(word)
{	
//var search_params = word;
var search_params = $('#bs_bar').val();
	//Initiallizing the AJAX request.
//window.location="results.html?"+$('#bs_bar').val();	
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
			popBros(result);
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
			//console.log(result);

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
		bro.innerHTML = broArray[i].name + "   ";

		list.appendChild(bro);
		bro.appendChild(shout);
            
           	 $(bro).click( function() {
				alert("Alpha Version Bro! Not that Awesome Yet!");
			});
    }
}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}	
