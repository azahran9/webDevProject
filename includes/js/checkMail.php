<?php 
	$conn=mysql_connect("localhost","root","")
	or die("couldn't connect to the database");
	mysql_select_db("AccountManager",$conn)
	or die("couldn't find the database");
	$sql = "SELECT * from User WHERE email = '".$_POST['emailReg']."'";
	$result = mysql_query($sql);
	if($result === FALSE) {
    	die(mysql_error()); // TODO: better error handling
	}
	$query_result = "true";
	while($row = mysql_fetch_array($result))
	{
		$query_result = "false";
// 		break;
	}
	echo $query_result;
?>