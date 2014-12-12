<?php 
	//alert ("hi");
	$conn=mysql_connect("localhost","root","")
	or die("couldn't connect to the database");
	mysql_select_db("AccountManager",$conn)
	or die("couldn't find the database");
	//return $_POST;
	//echo $_POST['usernameReg'];
	$sql = "SELECT * from User WHERE username = '".$_POST['usernameReg']."'";
	//echo "alert ('I'm in')";
	$result = mysql_query($sql);
	if($result === FALSE) {
    	die(mysql_error()); // TODO: better error handling
	}
	//echo "alert('hi')";
	$query_result = "true";
	while($row = mysql_fetch_array($result))
	{
		$query_result = "false";
// 		break;
	}
	echo $query_result;
?>