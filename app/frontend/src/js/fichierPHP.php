<?php
    $servername = "localhost"; 
    $username = "root";
    $password = "";
    $dbname = "ApplicationDeRecette";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


    $sql = "SELECT id, nom, image_recette, prep_time, cook_time, type_recette, description_recette FROM recettes";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $recettes = [];
        while ($row = $result->fetch_assoc()) {
            $recettes[] = $row;
        }
        echo json_encode($recettes); 
    } else {
        echo "Aucun résultat";
    }

    $conn->close();
?>


