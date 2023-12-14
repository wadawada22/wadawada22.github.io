<?php
    $data = $_POST;
    $json_data = json_encode($data);
    file_put_contents('accordion_data.json', $json_data);
?>