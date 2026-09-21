<?php
// (c) Vcorp generator 00.80 beta | 2016 | vcorp.ru

// Стартовый файл

include "vpb_config.php"; fpb_authorization(0);

?>
<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="robots" content="noindex, nofollow"><title>Vcorp generator 00.80 beta 2016</title>
<link rel="stylesheet" href="vpb.css" type="text/css"/><script type="text/javascript" charset="UTF-8" src="vpb.js"></script></head><body><div id="main">
<?php
$a1=array(0,0,85,85,85,85,0,0,0,0,0,0,0,0,0); $a2=array('','Open','Add','Copy','Del','Clear','Generate','Structure of nesting','Check of errors','Links to dynamics (id)','Links to statics (href)','Save to backup','Restore from backup','Other operations',($pb_view_info?'Show info':'Hide info'),'Show windows panel');
$out='<div class="aarea" id="aarea1">'; for ($i=1; $i<=15; $i++) { if ($i==6||$i==9||$i==11||$i==13||$i==14) $out.='<div class="px20"></div>'; $out.='<input id="a1b'.$i.'" class="abut" type="button" value="'.$a2[$i].'" '.(($a1[$i]>0)?'style="width:'.$a1[$i].'px;"':'').' tabIndex="-1" onmouseover="f_hlp(1,'.$i.')" onmouseout="f_hlp()" onclick="f_c_a(1,'.$i.')"/>'; }
$a1=array(0,0,0,0,0,0,0,0); $a2=array('','Save','Cancel','','','','','','','');
$out.='</div><div class="aarea" id="aarea2" style="min-height:410px;display:none;">'; for ($i=1; $i<=2; $i++) { if ($i==2) $out.='<div class="px5"></div>';if ($i==3) $out.='<div class="px20"></div>'; $out.='<input id="a2b'.$i.'" class="abut2" type="button" value="'.$a2[$i].'" '.(($a1[$i]>0)?'style="height:'.$a1[$i].'px;"':'').' tabIndex="-1" onmouseover="f_hlp(2,'.$i.')" onmouseout="f_hlp()" onclick="f_c_a(2,'.$i.')"/>'; }
$a1=array('0','1','2','3','4','5','tpl','0','1','2','3','4','5','0','1','2','3','4','5');
$out.='</div><div id="tarea">';
for ($i=0; $i<19; $i++) {
	if ($i<6) $tmp=' style="width:55px;color:#000080;border:solid 1px #000080;'.(($i==0)?'margin-left:0px;background-color:#c8c8c8':'').'"'; else $tmp=($i==6||$i==7||$i==13)?(' style="margin-left:20px;'.(($i==6)?'width:50px;color:#005093;border:solid 1px #005093;':(($i==13)?'color:#006000;border:solid 1px #006000;border-radius:5px;':'')).'"'):(($i>13)?' style="color:#006000;border:solid 1px #006000;border-radius:5px;"':'');
	$out.='<input id="dta'.$i.'" class="dtarea"'.$tmp.' tabIndex="-1" onmouseover="f_hlp(3,'.$i.')" onmouseout="f_hlp()" onclick="f_c_a(3,'.$i.')" type="button" value="'.$a1[$i].'"/>';
}
$out.='</div>';

// Вывод 19-ти блоков области iarea с содержимым
$out.='<div id="iarea">';
for ($j=0; $j<19; $j++) {
  $txh=''; $tx=''; $txt=@file_get_contents($pb_path_config.$pba_files[$j].'.php');
  if($txt==false) $txt=''; $pos=(strpos($txt,chr(10).chr(10).'[BEGIN LIST]'.chr(10).chr(10))); $pos0=(strpos($txt,chr(10).chr(10).'[END LIST]'.chr(10))); $out.='<div id="dia'.$j.'" class="diarea">';
  if ($pos==false || $pos0==false) { $out.='</div>'; continue; }
  $tx1='<tr><td style="color:#800000;font:bold 12px arial;" colspan="'.(($j<6)?'6':'').'">error config file '.$pba_files[$j].' number: '; $tx2='</td></tr>'; $f=0;
  for ($i=1;$i<1000; $i++) {
	$tmp=$tx1.$i.$tx2; $pos=strpos($txt,'*number*'.$i.chr(10)); if ($pos==false) continue;
	$pos0=strpos($txt,'*end*'.$i.chr(10).chr(10)); if ($pos0==false || $pos0<$pos) { $tx.=$tmp; continue; }
	$pos1=strpos($txt,'*file*'.chr(9).chr(9).chr(9),$pos); $pos2=strpos($txt,'*options*'.chr(9).chr(9),$pos); $pos3=strpos($txt,'*name*'.chr(9).chr(9).chr(9),$pos);
	if ($pos1<$pos || $pos2<$pos || $pos3<$pos || $pos1>$pos0 || $pos2>$pos0 || $pos3>$pos0) { $tx.=$tmp; continue; }
	$pos1+=9; $pos8=strpos($txt,chr(10),$pos1); if ($pos8==false || $pos8<$pos || $pos8>$pos0) { $tx.=$tmp; continue; }
	$pos1=substr($txt,$pos1,$pos8-$pos1);
	$pos2+=11; $pos8=strpos($txt,chr(10),$pos2); if ($pos8==false || $pos8<$pos || $pos8>$pos0) { $tx.=$tmp; continue; }
	$pos2=substr($txt,$pos2,$pos8-$pos2);
	$pos3+=9; $pos8=strpos($txt,chr(10),$pos3); if ($pos8==false || $pos8<$pos || $pos8>$pos0) { $tx.=$tmp; continue; }
	$pos3=substr($txt,$pos3,$pos8-$pos3);
	$tm=substr($pos2,2,1); $tm=($tm>'0')?('0.'.$tm):'';
	if ($f==0) $tx.='<tr id="tr'.$j.'_'.$i.'" onclick="f_c('.$j.','.$i.')"><td style="width:'.(($j==6)?'50':'80').'px;">'.$pos1.'</td><td style="width:'.(($j<6)?'20':'25').'px;">'.((substr($pos2,0,1)>'0')?'a':'').'</td>'.(($j<6)?('<td style="width:20px;">'.((substr($pos2,1,1)>'0')?'u':'').'</td><td style="width:35px;">'.$tm.'</td>'):'').'<td id="d3_'.$j.'_'.$i.'">'.$pos3.'</td></tr>';
	else $tx.='<tr id="tr'.$j.'_'.$i.'" onclick="f_c('.$j.','.$i.')"><td>'.$pos1.'</td><td>'.((substr($pos2,0,1)>'0')?'a':'').'</td>'.(($j<6)?('<td>'.((substr($pos2,1,1)>'0')?'u':'').'</td><td>'.$tm.'</td>'):'').'<td id="d3_'.$j.'_'.$i.'">'.$pos3.'</td></tr>';
	$txh.='<div id="d2_'.$j.'_'.$i.'">'.$pos2.'</div>';
	if ($j<6) {
		$pos4=strpos($txt,'*link*'.chr(9).chr(9).chr(9),$pos); $pos5=strpos($txt,'*title*'.chr(9).chr(9).chr(9),$pos); $pos6=strpos($txt,'*keyw*'.chr(9).chr(9).chr(9),$pos); $pos7=strpos($txt,'*desc*'.chr(9).chr(9).chr(9),$pos);
		if ($pos4<$pos || $pos5<$pos || $pos6<$pos || $pos7<$pos || $pos4>$pos0 || $pos5>$pos0 || $pos6>$pos0 || $pos7>$pos0) { $tx.=$tmp; continue; }
		$pos4+=9; $pos8=strpos($txt,chr(10),$pos4); if ($pos8==false || $pos8<$pos || $pos8>$pos0) { $tx.=$tmp; continue; }
		$pos4=substr($txt,$pos4,$pos8-$pos4);
		$pos5+=10; $pos8=strpos($txt,chr(10),$pos5); if ($pos8==false || $pos8<$pos || $pos8>$pos0) { $tx.=$tmp; continue; }
		$pos5=substr($txt,$pos5,$pos8-$pos5);
		$pos6+=9; $pos8=strpos($txt,chr(10),$pos6); if ($pos8==false || $pos8<$pos || $pos8>$pos0) { $tx.=$tmp; continue; }
		$pos6=substr($txt,$pos6,$pos8-$pos6);
		$pos7+=9; $pos8=strpos($txt,chr(10),$pos7); if ($pos8==false || $pos8<$pos || $pos8>$pos0) { $tx.=$tmp; continue; }
		$pos7=substr($txt,$pos7,$pos8-$pos7);
		$txh.='<div id="d4_'.$j.'_'.$i.'">'.$pos4.'</div><div id="d5_'.$j.'_'.$i.'">'.$pos5.'</div><div id="d6_'.$j.'_'.$i.'">'.$pos6.'</div><div id="d7_'.$j.'_'.$i.'">'.$pos7.'</div>';
	} $f++;
  } $out.=(($tx>' ')?('<table class="tiarea"><tbody>'.$tx.'</tbody></table><textarea class="trarea" id="trarea'.$j.'" onchange="f_ch()" onkeydown="f_ch(event)" onfocus="v_blur=1" onblur="v_blur=0"></textarea><div class="pb_hidden">'.$txh.'<div id="id_kol'.$j.'">'.$f.'</div></div>'):'').'</div>'; 
}
$out.='</div><div class="pb_hidden"><div id="id_hash">'.$pb_hash.'</div><div id="id_site">'.$pb_path_site.'</div></div>';

// Вывод областей Групповых операций и Настроек

print $out;
?>
</div><div id="hlp"></div>
<?php
$a1=array('','Create sitemap.xml','reserved','reserved','reserved','reserved','reserved','Close other operations');
$a2=array('','<strong>Создание карты сайта для поисковиков.</strong> Директория для карты сайта:','','','','','','<div class="px10"></div><strong>Вернуться к редактированию</strong> (закрыть дополнительные операции).');
$a3=array('',$pb_path_root,'','','','','','');
$out='<div id="id_group">';
$out.='<div class="px20"></div><div style="width:600px;font:bold 14px arial;text-align:center;">Other operations</div><div class="px20"></div>';
for ($i=1; $i<=7; $i++) {
	$out.='<div style="float:left;width:300px;"><input id="a4b'.$i.'" class="abut" type="button" value="'.$a1[$i].'" style="width:250px;"'.(($a1[$i]=='reserved')?'':(' onclick="f_c_a(4,'.$i.')"')).'/></div><div style="float:left;width:900px;font:12px arial;">'.$a2[$i].'<br><span style="color:#000080">'.htmlspecialchars($a3[$i]).'</span></div><div class="px20"></div>'.(($i==6)?'<div class="px20"></div>':'');
}
$out.='</div>';
print $out;

?>
</body></html>