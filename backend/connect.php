<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ARPAVGruppon";

// Connection to mysql server
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn, "utf8");

if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}
