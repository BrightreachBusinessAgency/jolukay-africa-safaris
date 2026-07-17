<?php
$path = __DIR__ . '/database/database.sqlite';
if (!file_exists($path)) { echo "MISSING DB: $path\n"; exit(1); }
$pdo = new PDO('sqlite:' . $path);
$stmt = $pdo->query('SELECT id, migration, batch FROM migrations ORDER BY id');
foreach ($stmt as $row) {
    echo $row['id'] . '|' . $row['migration'] . '|' . $row['batch'] . "\n";
}
