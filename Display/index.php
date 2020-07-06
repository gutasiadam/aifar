<body><?php 
  error_reporting(E_ALL ^ E_NOTICE);
  $idokoz=1;
  include("./popups/modals.php"); // Conatins the modals for specific categories.
  
?>
<!DOCTYPE html>

<head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js">  </script>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>AIFAR</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<h1>Automatikus Időzített Felugró Ablak Rendszer</h1>
<div>Jelenleg a felugró ablak <strong><span id="idokoz"></span></strong> perc időközönként jelenhet csak meg.</div>
<div>
<div>ms <span id="dateObj">XX</span></div>
<div>Új popup ms: <div id="allapot">XX</div></div>
<div>Következő megjelenő kategória:  <div id="Reklamkat"> XX</div></div>
</div>
<script src="modal_control.js">//JS code for managing and displaying modals .</script>
</body>