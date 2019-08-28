<?php
class Crud_model extends CI_Model 
{
	/*Insert*/
	function saverecords($name,$number,$address,$email,$city)
	{
	$query="insert into testreact values('$name','$number','$email','$address','$city')";
	$this->db->query($query);
	}
	
}