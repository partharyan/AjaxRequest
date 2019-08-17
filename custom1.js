$(document).ready(function(){
	$("#manager_name").prop("disabled", true);
		$("#email").on("keyup",function(){
			var emailid = $(this).val();
			$.ajax({
				url:'includes/username.php',
				type:'POST',
				cache: false,
				data: { email: emailid},
				success : function(response){
					
					$("#exists").html(response);
					$("#exists").css("color","red");
				}				
			});
		});
		$("#dept").on("change", function(){
		
			var deptName = $(this).val();
			$.ajax({
			url: 'includes/managerList.php',
			type:'POST',
			cache: false,
			data: { dept: deptName },
			success : function(response){
				//var optionList = response;
				//var name = document.getElementById("#manager_name")
				$("#manager_name").html(response);
			}
	});
		});
	
});