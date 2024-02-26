<?php
require_once("../view/ViewStazioni.php");

if (!isset($_GET["mode"])) die("Invalid access!");

switch ($_GET["mode"]) {
  case 'get_all':
    echo ViewStazioni::get_all();
    break;
  
  case 'get_city':
    echo ViewStazioni::get_city();
    break;

  case 'get_stations_coordinates':
    echo ViewStazioni::get_stations_coordinates();
    break;
}
