<?php
    $gid = isset($_GET['gid']) ? $_GET['gid'] :'';

    include 'conn.php';

    $sql = "SELECT * FROM goods WHERE gid=$gid";
    // echo $gid;
    $res = $conn->query($sql);
// // var_dump($res);
    $content = $res->fetch_all(MYSQLI_ASSOC);

    echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>