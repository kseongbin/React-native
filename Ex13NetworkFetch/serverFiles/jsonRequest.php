<?php

    header('Content-Type:application/json; charset=utf-8');

    //슈퍼전역변수 $_POST배열은 json데이터를 받을 수 없음.
    //클라이언트로부터 json으로 요청된 body데이터는 별도의 임시파일에 있음.
    //그래서 그 임시저장소파일을 읽어오기
    $jsonData = file_get_contents('php://input');
    //읽어온 json문자열을 그대로 echo해주기
    echo $jsonData;

?>