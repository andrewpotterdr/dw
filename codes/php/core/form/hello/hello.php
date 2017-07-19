<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <form action="hello.php">
    <input type="text" name="name">
    <input type="submit" value="Olá...">
  </form>
  <div class="">
    <?php
      $name = $_GET['name'] ?? '';
      echo "Olá $name";
    ?>
  </div>
</body>
</html>
