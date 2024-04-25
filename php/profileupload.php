<script>

<?php
    $images = glob("img/food/"."*.jpg");
    $img_paths =implode("','", $images);
    echo "let images = ['".$img_paths."'];";
?>

</script>

