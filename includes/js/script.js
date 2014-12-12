$(document).ready(function(){
  $("#usernameReg").blur(function(){
    // $(this).hide();
    $.ajax({url:"checkUser.php",type:"POST",data : {
    	'usernameReg' : this.value
    },success:function(result){
    	if (result == "false"){
    		$("#usernameReg").parent().removeClass("has-success");
    		$("#usernameReg").parent().addClass("has-error");
    		$("span").filter(":contains('This username is available!')").remove();
    		$("span").filter(":contains('This username is already taken!')").remove();
    		$("#usernameReg").parent().append ("<span class=\"help-block\">This username is already taken!</span>");
    	}	
    	else if (result == "true"){
    		$("#usernameReg").parent().removeClass("has-error");
    		$("#usernameReg").parent().addClass("has-success");
    		$("span").filter(":contains('This username is available!')").remove();
    		$("span").filter(":contains('This username is already taken!')").remove();
    		$("#usernameReg").parent().append ("<span class=\"help-block\">This username is available!</span>");
    	}
  }});
 })
 $("#emailReg").blur(function(){
    // $(this).hide();
    $.ajax({url:"checkMail.php",type:"POST",data : {
    	'emailReg' : $("emailReg").val()
    },success:function(result){
    	$x = result;
    	if (result == "false"){
    		$("#emailReg").parent().removeClass("has-success");
    		$("#emailReg").parent().addClass("has-error");
    		//$("span").filter(":contains('This email is available')").remove();
    		$("#emailReg").parent().append ("<span class=\"help-block\">This username is already taken!</span>");
    	}	
    	else // if (result == "true")
    	{
    		$("#emailReg").parent().removeClass("has-error");
    		$("#emailReg").parent().addClass("has-success");
    		$("span").filter(":contains('This email is available!')").remove();
    		$("#emailReg").parent().append ("<span class=\"help-block\">This email is available!</span>");
    	}
  }});
 })
 $("#passwordCon").blur(function(){
 	if ($("#passwordReg").val() != $("#passwordCon").val()){
 		
 	    $("#passwordReg").parent().removeClass("has-success");
    	$("#passwordCon").parent().removeClass("has-success");
 		$("#passwordReg").parent().addClass("has-error");
 		$("#passwordCon").parent().addClass("has-error");
 		$("span").filter(":contains('The entered passwords does not match!')").remove();
 		$("span").filter(":contains('The entered passwords match')").remove();
 		$("#passwordCon").parent().append ("<span class=\"help-block\">The entered passwords does not match!</span>");
 	}
 	else {
 		$("#passwordReg").parent().removeClass("has-error");
    	$("#passwordCon").parent().removeClass("has-error");
 		$("#passwordReg").parent().addClass("has-success");
 		$("#passwordCon").parent().addClass("has-success");
 		$("span").filter(":contains('The entered passwords match')").remove();
 		$("span").filter(":contains('The entered passwords does not match!')").remove();
 		$("#passwordCon").parent().append ("<span class=\"help-block\">The entered passwords match</span>");
 	}
 });
 
});