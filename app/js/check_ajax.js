$(document).ready(function() {

	$('#feedback-valid-1').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-1')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";

					}
				}  
			}); 
		}
	});







	$('#feedback-valid-pr').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-pr')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";

					}
				}  
			}); 
		}
	});

$('#feedback-valid-info').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-info')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";

					}
				}  
			}); 
		}
	});

$('#feedback-valid-question').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-question')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";

					}
				}  
			}); 
		}
	});


$('#feedback-valid-call').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-call')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";

					}
				}  
			}); 
		}
	});



$('#feedback-valid-count').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-count')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";

					}
				}  
			}); 
		}
	});

$('#feedback-valid-catalog').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-catalog')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";

					}
				}  
			}); 
		}
	});


});
