<?php
    $sort = isset($_GET['sort']) ? $_GET['sort'] : '';
    $page = isset($_GET['page']) ? $_GET['page'] : '';
    $num = isset($_GET['num']) ? $_GET['num'] : '';

    include 'conn.php';

    $index = ($page - 1) * $num;

    $sql = "SELECT * FROM goods ORDER BY price $sort LIMIT $index,$num";
    
    $res = $conn->query($sql);
    // var_dump($res);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    // // var_dump($res);
    $sql2 = "SELECT * FROM goods";

    $res2 = $conn->query($sql2);
    // // var_dump($res2);

    $data = array(
        'data' =>$content,//前20条数据
        'pages' => $res2->num_rows,//总条数
        'page' => $page,//
        'num' => $num,
        'sort'=> $sort
    );
    
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>