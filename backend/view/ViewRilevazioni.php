<?php
require_once("../model/ModelRilevazioni.php");

class ViewRilevazioni {
  static function get_all() {
    $data = ModelRilevazioni::get_all();
    $json = json_encode($data);
    return $json;
  }

  static function get_by_city($comune) {
    $data = ModelRilevazioni::get_by_city($comune);
    $json = json_encode($data);
    return $json;
  }

  static function get_higher_avg() {
    $data = ModelRilevazioni::get_higher_avg();
    $json = json_encode($data);
    return $json;
  }

  static function get_range_counts() {
    $data = ModelRilevazioni::get_range_counts();
    $json = json_encode($data);
    return $json;
  }

  static function get_yearly_average() {
    $data = ModelRilevazioni::get_yearly_average();
    $json = json_encode($data);
    return $json;
  }

}
