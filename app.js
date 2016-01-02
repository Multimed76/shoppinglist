$(document).ready(function(){
	//add an item
	$('#Btn').on('click', function(){
	//$('ul').on('click', 'li', function(event){
		var inputVal = document.getElementById("addtolist").value;//store the input text from user into inputVal variable
		//logic for the respond for the user
		if(inputVal == ""){
			//show error div
			$('#error').show();
		} else {
			//hide error div
			$('#error').hide();
			//add an item to the shopping list
			$("<li class = 'item'>"+inputVal+ "&nbsp;<button class='delete'>X</button>"+"</li>").appendTo('#list'); 
			document.getElementById('addtolist').value = '';//clear the input box after item has been added to the shopping list
	
		}
	});
	//delete list items
	$('#list').on('click', '.delete',function(){
		$(this).parent().remove();
	});
});
