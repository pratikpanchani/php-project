<?php

//Player Controller : To handle interaction with the Model

require(APPPATH.'/libraries/REST_Controller.php');

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS')
{
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Content-Type');
	exit;
}
 
class API extends REST_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('player_model');
    }

    // GET Request to get player information by Id
    // /api/playerbyid?id=id
    function playerbyid_get() 
    {
        if (!$this->get('id')) 
        {
            $this->response(NULL, 400);
        }
        $result = $this->player_model->getplayerbyid($this->get('id'));

        if ($result) 
        {
            $this->response($result, 200);
        } else {
            $this->response(array(), 500);
        }
    }

    // GET Request to get list of all the players
    // /api/players/
    function players_get()
    {
        $result = $this->player_model->getallplayers();
        if($result)
        {
            $this->response($result, 200); 
        } 
        else
        {
            $this->response("No record found", 404);
        }
    }
     
    // POST Request to add new player to the database
    // /api/addplayer/
    function addPlayer_post()
    {
         $name    = $this->post('Name');
         $age     = $this->post('Age');
         $city    = $this->post('City');
         $province  = $this->post('Province');
         $country  = $this->post('Country');
        
         if(!$name || !$age || !$city || !$province || !$country )
         {
                $this->response("Enter complete player information to save", 400);
         }
         else
         {
            $result = $this->player_model->add(array("Name"=>$name, "Age"=>$age, "City"=>$city, "Province"=>$province, "Country"=>$country));
            if($result === 0)
            {
                $this->response("Player information could not be saved. Try again.", 404);
            }
            else
            {
                $this->response("success", 200);            
            }
        }
    }
    
    // DELETE Request to delete specific player by id.
    // /api/deleteplayer/id
    function deletePlayer_delete($id)
    {
        $result = $this->player_model->delete_player($id);

        if ($result === FALSE) 
        {
            $this->response(array('status' => 'failed'));
        }
        else 
        {
            $this->response(array('status' => 'success'));
        }
    }
}