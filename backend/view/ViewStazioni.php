<?php
require_once("../model/ModelStazioni.php");

class ViewStazioni {
  static function get_all() {
    $data = ModelStazioni::get_all();
    $json = json_encode($data);
    return $json;
  }

  static function get_city() {
    $data = ModelStazioni::get_city();
    $json = json_encode($data);
    return $json;
  }

  static function get_stations_coordinates() {
    $data = ModelStazioni::get_stations_coordinates();
    $json = json_encode($data);
    return $json;
  }
}