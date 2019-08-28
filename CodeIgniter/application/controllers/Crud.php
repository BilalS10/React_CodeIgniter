<?php 
class Crud extends CI_Controller 
{
	public function __construct()
	{
	/*call CodeIgniter's default Constructor*/
	parent::__construct();
	
	/*load database libray manually*/
	$this->load->database();
	
	/*load Model*/
	$this->load->model('Crud_model');
	}
        /*Insert*/
	public function savedata()
	{
		/*load registration view form*/
		$this->load->view('insert');
	
		/*Check submit button */
		if($this->input->post('save'))
		{
		
		$name=$this->input->post('name');
		$address=$this->input->post('address');
        $email=$this->input->post('email');
        $city=$this->input->post('city');
        $number=$this->input->post('number');
		
		$this->Crud_model->saverecords($name,$number,$address,$email,$city);	
		echo "Records Saved Successfully";
		}
	}
	
}
?>