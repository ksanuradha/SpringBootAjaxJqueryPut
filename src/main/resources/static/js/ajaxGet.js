$(document).ready(function() {
	
	ajaxGet();
	
	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : window.location + "api/customer/all",
			success: function(result){
				$.each(result, function(i, customer){
					
					var updateUrl=window.location + "api/customer/update/" + customer.id;
					
					// render a customer data form
					var customerInfo = '<form id=custform_' + customer.id + ' class="form-inline" style="margin-top:20px;margin-bottom:20px">' +
											'<div class="form-group">'	+
										 		'<label style="margin-left:10px; margin-right:5px">Id: </label>'	+
										 		'<input name="customerId" type="text" class="form-control" value=' + customer.id  + ' disabled >' +
										 	'</div>' +
										 	'<div class="form-group">'	+
										 		'<label style="margin-left:10px; margin-right:5px">Name: </label>'	+
										 		'<input name="name" type="text" class="form-control"  value=' + customer.name + ' disabled >' +
										 	'</div>' +
										 	'<div class="form-group" style="display: none;">' +
										  		'<label style="margin-left:5px; margin-right:5px">lastname: </label>' +
										  		'<input name="age" type="number" min="10" max="100" class="form-control"  value=' + customer.age +'>' +
										  	'</div>' +
										  	'<div class="form-group" style="display: none;">' +
										  		'<label style="margin-left:5px; margin-right:5px">street: </label>' +
										  		'<input name="street" type="text" class="form-control"  value=' + customer.address.street +'>' +
									  		'</div>' +
									  		'<div class="form-group" style="display: none;">' +
										  		'<label style="margin-left:5px; margin-right:5px">postcode: </label>' +
										  		'<input name="postcode" type="text" class="form-control"  value=' + customer.address.postcode +'>' +
									  		'</div>' +
										  	'<button type="submit" class="btn btn-default" style="margin-left:10px">Select</button>'
										'</form>';
					
					$('#customerlist .list-group').append(customerInfo)
					
					// default fill data of the first customer to update-form
					if(i==0){
						$("#updateFormCustId").val(customer.id);
						$("#updateFormName").val(customer.name);
						$("#updateFormAge").val(customer.age);
						$("#updateFormStreet").val(customer.address.street);
						$("#updateFormPostcode").val(customer.address.postcode);
					}
					
		        });
				console.log("Success: ", result);
			},
			error : function(e) {
				$("#customerlist").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}
})