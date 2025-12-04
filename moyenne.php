<?php
$n1=17;
$n2=10;
$n3=7;
$n4=15;
$m=($n1+$n2+$n3+$n4)/4;
$mention=" ";
if ($m<10)
    $mention="Redoubler";
else if ($m<12)
    $mention="Passable";
else if ($m<14)
    $mention="A.Bien";
else if ($m<16)
    $mention="Bien";
else if ($m<18)
    $mention="T.Bien";
else ($m>=18)
    $mention="Exelent";
echo"votre moyenne est $m ,avec une motion $mention ";
?>
