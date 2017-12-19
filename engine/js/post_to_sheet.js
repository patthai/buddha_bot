function post_sheet(event,msg,ai_response,feedback){
		
		//empty the field
		document.getElementById("conversation_id").value = conversation_id_init;
		document.getElementById("user_content").value = "";
		document.getElementById("buddha_content").value = "";
		document.getElementById("feedback_content").value = "";
		
		
		//empty the field
		document.getElementById("user_content").value = msg;
		document.getElementById("buddha_content").value = ai_response;
		document.getElementById("feedback_content").value = feedback;
		
		
		
		// abort any pending request
		var request;
		if (request) {
			request.abort();
		}
		// setup some local variables
		var $form = $("#post_data");
		// let's select and cache all the fields
		var $inputs = $form.find("input, select, textarea");
		// serialize the data in the form
		var serializedData = $form.serialize();
	
		// let's disable the inputs for the duration of the ajax request
		// Note: we disable elements AFTER the form data has been serialized.
		// Disabled form elements will not be serialized.
		$inputs.prop("disabled", true);
		
	
		// fire off the request to /form.php
		request = $.ajax({
			url: "https://script.google.com/a/asu.edu/macros/s/AKfycbzFk1jCyVW5O8Jog8mYxXfc0pMHPfmZ2XT2FX7F-z33C67hABDQ/exec",
			type: "post",
			data: serializedData
		});
	
		// callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
			// log a message to the console
			
		});
	
		// callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
			// log the error to the console
			console.error(
				"The following error occured: "+
				textStatus, errorThrown
			);
		});
	
		// callback handler that will be called regardless
		// if the request failed or succeeded
		request.always(function () {
			// reenable the inputs
			$inputs.prop("disabled", false);
		});
	
		// prevent default posting of form
		//event.preventDefault();
	}
	
	
