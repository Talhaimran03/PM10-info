<?php
require_once("../view/ViewRilevazioni.php");

if (!isset($_GET["mode"])) die("Missing parameter 'mode'");

switch ($_GET["mode"]) {
  case 'get_all':
    echo ViewRilevazioni::get_all();
    break;
  
  case 'get_by_city':
    if (!isset($_GET["city"])) die("Missing parameter 'city'");
    $comune = $_GET["city"];
    echo ViewRilevazioni::get_by_city($comune);
    break;
  
  case 'get_higher_avg':
    echo ViewRilevazioni::get_higher_avg();
    break;

  case 'get_range_counts':
    echo ViewRilevazioni::get_range_counts();
    break;
  
  case 'get_yearly_average':
    echo ViewRilevazioni::get_yearly_average();
    break;

}
