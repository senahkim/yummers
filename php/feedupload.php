<?php

if(isset($_FILES["uploadfile"])) {
    $filename = "avatar.jpg";

    $filedir = "../uploads/";
    $target_file = $filedir.basename($_FILES["uploadfile"]["name"]);
    move_uploaded_file($_FILES["uploadfile"]["tmp_name"], $target_file);


    if (exif_imagetype($target_file) == IMAGETYPE_JPEG) {
        $image = imagecreatefromjpeg($target_file);  
    }
    else if (exif_imagetype($target_file) == IMAGETYPE_PNG) {
        $image = imagecreatefrompng($target_file);  
    }
    else if (exif_imagetype($target_file) == IMAGETYPE_GIF) {
        $image = imagecreatefromgif($target_file);  
    }

    $avatar = $filedir . $filename;

    $im = imagescale($image,100);
    imagejpeg($im, $avatar);

    unlink($target_file);
    imagedestroy($image);
    imagedestroy($im);

}
?>