<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Form_model extends CI_Model {

    function add_form($name, $number, $email, $address, $city) {
            $query="insert into testreact values('$name','$number','$email','$address','$city')";
	        $this->db->query($query);
        }
    }