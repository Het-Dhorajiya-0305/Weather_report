<?php 

$conn = mysqli_connect('localhost', 'root', '', 'itworkshopproject');

if (!$conn) {
    echo "There was an error connecting to the database";
}