<?php
$host='127.0.0.1';
$port=3306;
$user='root';
$pass='';
$db='jolukay_safaris';
try{
    $pdo=new PDO("mysql:host={$host};port={$port}",$user,$pass,[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `{$db}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;");
    echo "DB_OK";
}catch(Exception $e){
    echo 'DB_ERR:'.$e->getMessage();
    exit(1);
}