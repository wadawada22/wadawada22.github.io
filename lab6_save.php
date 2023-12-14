<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    $data = $_POST;
    $json_data = json_encode($data);
    file_put_contents('accordion_data.json', $json_data);
?>