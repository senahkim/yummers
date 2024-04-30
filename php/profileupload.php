
<?php
    $images = glob("../img/food/"."*.jpg");
    foreach ($images as $img){
        echo "<div><img src= '$img'></div>";
    }
?>



