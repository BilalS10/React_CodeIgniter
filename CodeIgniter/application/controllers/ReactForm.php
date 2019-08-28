<?php
use Restserver\Libraries\REST_Controller;

defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Content-Type');
	exit;
}

require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';

class ReactForm extends CI_Controller {
	
	use REST_Controller {
		REST_Controller::__construct as private __resTraitConstruct;
	}
	
	function __construct() {
        parent::__construct();
        $this->__resTraitConstruct();
        $this->load->database();
		$this->load->model('Form_model', 'fm');
    }
    
    function saveFormdata_post() {
        $name = $this->post('name');
        $number = $this->post('number');
        $email = $this->post('email');
        $address = $this->post('address');
        $city = $this->post('city');
        $formsresult = $this->fm->add_form($name, $number, $email, $address, $city);
        if ($formsresult === FALSE) {
            $this->response(array('status' => 'failed'));
        } else {
            $this->response(array('status' => 'success'));
        }
    }
	
}