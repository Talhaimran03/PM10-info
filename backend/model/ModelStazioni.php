<?php
require_once("../connect.php");

class ModelStazioni {
  static function get_all() {
    require("../connect.php");
    $query = "SELECT * FROM Stazioni";
    $result = mysqli_query($conn, $query);
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    return $data;
  }

  static function get_city() {
    global $conn;
    $query1 = "SELECT DISTINCT S.nome
              FROM Stazioni AS S, Rilevazioni AS R
              WHERE S.codseqst=R.codseqst AND tipoInquinante='PM10'";
    $result1 = mysqli_query($conn, $query1);
    $data1 = mysqli_fetch_all($result1, MYSQLI_ASSOC);

    $query2 = "SELECT DISTINCT CONCAT(S.nome, ' PM2,5') AS nome
              FROM Stazioni AS S, Rilevazioni AS R
              WHERE S.codseqst=R.codseqst AND tipoInquinante='PM2,5'";
    $result2 = mysqli_query($conn, $query2);
    $data2 = mysqli_fetch_all($result2, MYSQLI_ASSOC);


    $data = array_merge($data1, $data2);
    $data = array_unique($data, SORT_REGULAR);

    return $data;
  }

  static function get_stations_coordinates() {
    global $conn;
    $query = "SELECT DISTINCT S.nome, S.lat, S.lon
              FROM Stazioni AS S, Rilevazioni AS R 
              WHERE S.codseqst = R.codseqst;";
    $result = mysqli_query($conn, $query);
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    return $data;
  }
}
