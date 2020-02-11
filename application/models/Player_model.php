<?php
//Player Model : Interacts with MySQL Database

header('Access-Control-Allow-Origin: *');

class Player_model extends CI_Model
{
    public function __construct()
    {      
      $this->load->database();       
    }

    //Function to get players by id.
    function getplayerbyid($id)
    {
      $query = $this->db->get_where('players', array("id" => $id));
      if ($query)
      {
          return $query->row();
      }
      return NULL;
  }

    //Function to get list of all the players.
    public function getallplayers()
    {   
      $this->db->select('id, Name, Age, City, Province, Country');
      $this->db->from('players');
      $query = $this->db->get();

      if($query->num_rows() > 0)
      {
        return $query->result_array();
      }
      else
      {
          return 0;
      }
    }

    //Function to delete specific player from database by id.
    function delete_player($id)
    {
      $this->db->where('id', $id);
      $this->db->delete('players');
    }
   
    //Function to add new player to the database.
    public function add($data)
    {
        if($this->db->insert('players', $data))
        {
           return true;
        }
        else
        {
           return false;
        }
    }
}