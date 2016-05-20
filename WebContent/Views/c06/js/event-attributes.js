function checkUsername(){									// declare function
	var elMsg = document.getElementById('feedback');		// get feedback element
	var elUsername = document.getElementById('username'); 	// get username feedback
	if(elUsername.value.length<5){							// if username too
															// short
		elMsg.textContent = 'Username must be 5 characters or more'	// set msg
	}else {
		elMsg.textContent='';
	}
}