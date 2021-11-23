<?php

    header('Content-Type:text/plain; charset=utf-8');

    $title = $_POST['title'];
    $message = $_POST['msg'];

    echo "TITLE : $title \n"
    echo "MESSAGE : $message"; 

?>