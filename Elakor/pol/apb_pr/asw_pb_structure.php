<?php
// (c) Asw pages builder 00.77 beta | asws | 2010-2015 | asws.ru

// Структура вложенности элемента

include "config.php"; fpb_authorization(4);

$v_index=(int)$_POST['index']; $v_number=(int)$_POST['number'];
if ($v_index<0 || $v_index>18 || $v_number<1 || $v_number>999) { print 'error_authorization_4'; exit; }

$px5='<div class="px5"></div>'; $px10='<div class="px10"></div>'; $px15='<div class="px15"></div>';
$t3=chr(9).chr(9).chr(9); $out==''; $txt=''; $m=$v_index; $name=fpb_0($m,$v_number); $tx=false; $spanr=' <span style="font:bold 14px arial;color:#800000">';
for ($i=0; $i<19; $i++) {
	$tx[$i] = ($i<$m) ? ' ' : @file_get_contents($pb_path_config.$pba_files[$i].'.php'); if($tx[$i]==false) { exit; }
}
$t=@file_get_contents($txt.$name); if ($t==false) $t='';
if ($m<6) $out.=fpb_1(' '.$t); if ($m==6) $out.=fpb_2(' '.$t); if ($m>6 && $m<13) $out.=fpb_3(' '.$t); if ($m>12) $out.=fpb_4((' '.$t),$m);
if ($out=='') $out='ok¡нет вложений в '.$spanr.$name.'</span>'; else {
$file='<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="robots" content="noindex, nofollow"><title>Asw pages builder - Enclosure structure of elements</title>';
$file.='<style type="text/css"> * { margin:0; padding:0; } html,body { width:100%; height:100%; background:#ffffff; } ';
$file.='menu { margin:0; padding:0; width:1000px; overflow:hidden; }';
$file.='menu li { cursor:pointer; position:relative; list-style-type:none; padding:0 0 0 35px; font:normal 13px arial; line-height:20px; vertical-align:baseline; overflow:hidden; }';
$file.='menu li div { position:absolute; left:0; top:2px; width:32px; height:16px; background:url(asw_pb_index_0077.png); }';
$file.='menu li .pb_m1 { background-position:0 -16px; } menu li .pb_m2 { background-position:-32px -16px; } menu li .pb_m3 { background-position:-64px -16px; } menu li .pb_m4 { background-position:-96px -16px; } menu li .pb_m5 { background-position:-128px -16px; }';
$file.='menu li a { font:normal 13px arial; text-decoration:underline; color:#a0a0a0; line-height:19px; vertical-align:baseline; }';
$file.='menu li span { color:inherit; line-height:18px; font-weight:bold; } menu li span:hover { background:#e0e0e0; } menu li a:hover, menu li span:hover { color:#f00000; }';
$file.='.pb_mc { height:20px; } li .pb_ms { font-weight:bold; }';
$file.='.pb_mc > .pb_m1  { background-position:0 0; } .pb_mc > .pb_m2  { background-position:-32px 0; }.pb_mc > .pb_m3  { background-position:-64px 0; } .pb_mc > .pb_m4  { background-position:-96px 0; } .pb_mc > .pb_m5  { background-position:-128px 0; }';
$file.='.pb_mo > .pb_m1  { background-position:0 -32px; } .pb_mo > .pb_m2  { background-position:-32px -32px; } .pb_mo > .pb_m3  { background-position:-64px -32px; } .pb_mo > .pb_m4  { background-position:-96px -32px; } .pb_mo > .pb_m5  { background-position:-128px -32px; }';
$file.='.pb_ms > .pb_m1  { background-position:0 -48px; } .pb_ms > .pb_m2  { background-position:-32px -48px; } .pb_ms > .pb_m3  { background-position:-64px -48px; } .pb_ms > .pb_m4  { background-position:-96px -48px; } .pb_ms > .pb_m5  { background-position:-128px -48px; }';
$file.='</style>';
$file.='<script type="text/javascript" charset="UTF-8" src="apb_pb_library_0077.js"></script></head><body><br><div style="position:relative; width:1000px; margin:0 auto; padding:10px; border:solid 1px #000080; border-radius:10px;">';
$file.='<p style="float:left;width:150px;text-align:center;">'.$spanr.$name.'</span></p><p style="float:left;padding-left:100px;text-align:center;">Структура вложенности элементов.</p>';
$file.='<p style="float:left;padding-left:100px;text-align:center;">Enclosure structure of elements.</p><br>&nbsp;';
$out=$file.'<menu id="enclosureMenu">'.$out.'</menu><br></div><script type="text/javascript">function fpb_onload(){fpb_initMenu(\'enclosureMenu\');fpb_setMenu(140,20);}</script></body></html>';
$file=$pb_path_main.'log.htm'; @chmod($file, $pb_attr_files); $fh=@fopen($file,'w'); if ($fh==false) { @fclose($fh); print 'error¡Не удалось записать файл:'.$px5.'log.htm'; exit; }
@rewind($fh); if (-1==@fwrite($fh,$out)) { @fflush($fh); @fclose($fh); print 'error¡Не удалось записать файл:'.$px5.'log.htm'; exit; }
@ftruncate($fh,ftell($fh)); @fflush($fh); @fclose($fh); @chmod($file, $pb_attr_files);
$out='ok¡<input class="abut" type="button" value="View Посмотреть" onclick="f_wcls();window.open('."'".($pb_path_site.substr($pb_path_main,strlen($pb_path_root))).'log.htm?random='.mt_rand(0,1000000)."'".')"/>';
}
print $out;

function fpb_0($m,$n) { // Возвращает имя элемента-файла, а также записывает путь к нему в $txt
global $txt,$pb_path_pages,$pb_path_templates,$pb_path_blocks,$pb_path_texts;
if ($m<6) { $txt=$pb_path_pages; $name='page'.$m.'_'; }
if ($m==6) { $txt=$pb_path_templates; $name='tpl'; }
if ($m>6 && $m<13) { $txt=$pb_path_blocks; $name='block'.($m-7).'_'; }
if ($m>12) { $txt=$pb_path_texts; $name='text'.($m-13).'_'; }
return $name.$n;
}

function fpb_1($t) { // Уровень страниц page
global $tx,$pb_path_templates,$pb_path_blocks,$pb_path_texts,$t3,$pba_files,$pb_main_file,$v_index,$v_number; if ($t==' ') return ''; $out=''; $pos=0; $c=' style="color:#a00000"'; $liR='<li><div class="pb_m4"></div><span'.$c.'>';
$t=preg_replace('/\t/','    ',$t); $t=preg_replace('/\r/','',$t); $t=preg_replace('/{\*page/i','{*page',$t); $t=preg_replace('/{\*tpl/i','{*tpl',$t); $t=preg_replace('/{\*block/i','{*block',$t); $t=preg_replace('/{\*text/i','{*text',$t);
while (true) {
	$pos=strpos($t,'{*',$pos); if ($pos===false) break; $posE=strpos($t,'*}',$pos); if ($posE===false) break; $posN=strpos($t,'{*',$pos+2); if ($posN!==false && $posE>$posN) { $pos=$posN; continue; }
	$pos1=strpos($t,'{*page',$pos); $pos2=strpos($t,'{*tpl',$pos); $pos3=strpos($t,'{*block',$pos); $pos4=strpos($t,'{*text',$pos);
	if ($pos!=$pos1 && $pos!=$pos2 && $pos!=$pos3 && $pos!=$pos4) { $pos+=2; continue; }
	$l=$posE-$pos; $li=htmlspecialchars(substr($t,$pos,$l+2));
	if ($pos==$pos1) { $li=$liR.(($l>11)?(htmlspecialchars(substr($t,$pos,11)).'…*}'):$li).'</span></li>'; }
	if ($pos==$pos2) {
		if ($l>8) $li=$liR.htmlspecialchars(substr($t,$pos,8)).'…*}</span></li>'; else {
			if ($li=='{*tpl0*}') {
				$pos1=strpos($tx[$v_index],chr(10).'*number*'.$v_number.chr(10),0); $pos2=strpos($tx[$v_index],chr(10).'*end*'.$v_number.chr(10));
				if ($pos1>$pos2) { print 'error¡Проверьте конфигурационный файл: '.$pba_files[$v_index].'.php'; exit; }
				$pos1=strpos($tx[$v_index],'*link*'.$t3,$pos1); if ($pos1==false || $pos1>$pos2) { print 'error¡Проверьте конфигурационный файл: '.$pba_files[$v_index].'.php'; exit; }
				$pos2=strpos($tx[$v_index],chr(10),$pos1); $pos1=substr($tx[$v_index],$pos1+9,$pos2-$pos1-9); if (substr($pos1,-1)=='/') $pos1.=$pb_main_file;
				if (substr($pos1,-4)=='.php') $li='<li><div class="pb_m3"></div><span>'.$li.'</span> &nbsp;&nbsp;<span style="font-weight:normal;">Подключение title, keywords, description</span></li>';
				else $li='<li><div class="pb_m3"></div><span style="color:#800000">'.$li.' - Подключение title, keywords, description в файл с расширением НЕ php! - «'.htmlspecialchars($pos1).'»</span></li>';
			} else {
				$n=(int)substr($li,5,3); $pos1=strpos($tx[6],chr(10).'*number*'.$n.chr(10),0); if ($n==0 || $pos1==false) $li=$liR.$li.'</span></li>'; else {
					$pos1=strpos($tx[6],'*name*'.$t3,$pos1); $pos1+=9; $pos2=strpos($tx[6],chr(10),$pos1); $pos1=' &nbsp;&nbsp;<span style="font-weight:normal;">'.substr($tx[6],$pos1,$pos2-$pos1).'</span>';
					$txt=@file_get_contents($pb_path_templates.'tpl'.$n); if ($txt==false) $txt=''; $txt=fpb_2(' '.$txt);
					$li = ($txt=='') ? ('<li><div class="pb_m3"></div><span>'.$li.'</span>'.$pos1.'</li>') : ('<li class="pb_mc"><div class="pb_m2"></div><span'.((strpos($txt,$c)==false)?'':$c).'>'.$li.'</span>'.$pos1.'<menu>'.$txt.'</menu></li>');
				}
			}
		}
	}
	if ($pos==$pos3) {
		if ($l>12) $li=$liR.htmlspecialchars(substr($t,$pos,12)).'…*}</span></li>'; else {
			$l=substr($li,8,1); $m=(int)substr($li,7,1); $n=(int)substr($li,9,3); if ($l!='_' || $m<0 || $m>5 || $n<1) $li=$liR.$li.'</span></li>'; else {
				$m+=7; $pos1=strpos($tx[$m],chr(10).'*number*'.$n.chr(10),0); if ($pos1==false) $li=$liR.$li.'</span></li>'; else {
					$pos1=strpos($tx[$m],'*name*'.$t3,$pos1); $pos1+=9; $pos2=strpos($tx[$m],chr(10),$pos1); $pos1=' &nbsp;&nbsp;<span style="font-weight:normal;">'.substr($tx[$m],$pos1,$pos2-$pos1).'</span>';
					$txt=@file_get_contents($pb_path_blocks.'block'.($m-7).'_'.$n); if ($txt==false) $txt=''; $txt=fpb_3(' '.$txt);
					$li = ($txt=='') ? ('<li><div class="pb_m3"></div><span>'.$li.'</span>'.$pos1.'</li>') : ('<li class="pb_mc"><div class="pb_m2"></div><span'.((strpos($txt,$c)==false)?'':$c).'>'.$li.'</span>'.$pos1.'<menu>'.$txt.'</menu></li>');
				}
			}
		}
	}
	if ($pos==$pos4) {
		if ($l>11) $li=$liR.htmlspecialchars(substr($t,$pos,11)).'…*}</span></li>'; else {
			$l=substr($li,7,1); $m=(int)substr($li,6,1); $n=(int)substr($li,8,3); if ($l!='_' || $m<0 || $m>5 || $n<1) $li=$liR.$li.'</span></li>'; else {
				$m+=13; $pos1=strpos($tx[$m],chr(10).'*number*'.$n.chr(10),0); if ($pos1==false) $li=$liR.$li.'</span></li>'; else {
					$pos1=strpos($tx[$m],'*name*'.$t3,$pos1); $pos1+=9; $pos2=strpos($tx[$m],chr(10),$pos1); $pos1=' &nbsp;&nbsp;<span style="font-weight:normal;">'.substr($tx[$m],$pos1,$pos2-$pos1).'</span>';
					$txt=@file_get_contents($pb_path_texts.'text'.($m-13).'_'.$n); if ($txt==false) $txt=''; $txt=fpb_4((' '.$txt),$m);
					$li = ($txt=='') ? ('<li><div class="pb_m3"></div><span>'.$li.'</span>'.$pos1.'</li>') : ('<li class="pb_mc"><div class="pb_m2"></div><span'.((strpos($txt,$c)==false)?'':$c).'>'.$li.'</span>'.$pos1.'<menu>'.$txt.'</menu></li>');
				}
			}
		}
	}
	$out.=$li; $pos+=2;
}
return $out;
}

function fpb_2($t) { // Уровень шаблонов tpl
global $tx,$pb_path_blocks,$pb_path_texts,$t3; if ($t==' ') return ''; $out=''; $pos=0; $c=' style="color:#a00000"'; $liR='<li><div class="pb_m4"></div><span'.$c.'>';
$t=preg_replace('/\t/','    ',$t); $t=preg_replace('/\r/','',$t); $t=preg_replace('/{\*page/i','{*page',$t); $t=preg_replace('/{\*tpl/i','{*tpl',$t); $t=preg_replace('/{\*block/i','{*block',$t); $t=preg_replace('/{\*text/i','{*text',$t);
while (true) {
	$pos=strpos($t,'{*',$pos); if ($pos===false) break; $posE=strpos($t,'*}',$pos); if ($posE===false) break; $posN=strpos($t,'{*',$pos+2); if ($posN!==false && $posE>$posN) { $pos=$posN; continue; }
	$pos1=strpos($t,'{*page',$pos); $pos2=strpos($t,'{*tpl',$pos); $pos3=strpos($t,'{*block',$pos); $pos4=strpos($t,'{*text',$pos);
	if ($pos!=$pos1 && $pos!=$pos2 && $pos!=$pos3 && $pos!=$pos4) { $pos+=2; continue; }
	$l=$posE-$pos; $li=htmlspecialchars(substr($t,$pos,$l+2));
	if ($pos==$pos1) { $li=$liR.(($l>11)?(htmlspecialchars(substr($t,$pos,11)).'…*}'):$li).'</span></li>'; }
	if ($pos==$pos2) { $li=$liR.(($l>8)?(htmlspecialchars(substr($t,$pos,8)).'…*}'):$li).'</span></li>'; }
	if ($pos==$pos3) {
		if ($l>12) $li=$liR.htmlspecialchars(substr($t,$pos,12)).'…*}</span></li>'; else {
			$l=substr($li,8,1); $m=(int)substr($li,7,1); $n=(int)substr($li,9,3); if ($l!='_' || $m<0 || $m>5 || $n<1) $li=$liR.$li.'</span></li>'; else {
				$m+=7; $pos1=strpos($tx[$m],chr(10).'*number*'.$n.chr(10),0); if ($pos1==false) $li=$liR.$li.'</span></li>'; else {
					$pos1=strpos($tx[$m],'*name*'.$t3,$pos1); $pos1+=9; $pos2=strpos($tx[$m],chr(10),$pos1); $pos1='  &nbsp;&nbsp;<span style="font-weight:normal;">'.substr($tx[$m],$pos1,$pos2-$pos1).'</span>';
					$txt=@file_get_contents($pb_path_blocks.'block'.($m-7).'_'.$n); if ($txt==false) $txt=''; $txt=fpb_3(' '.$txt);
					$li = ($txt=='') ? ('<li><div class="pb_m3"></div><span>'.$li.'</span>'.$pos1.'</li>') : ('<li class="pb_mc"><div class="pb_m2"></div><span'.((strpos($txt,$c)==false)?'':$c).'>'.$li.'</span>'.$pos1.'<menu>'.$txt.'</menu></li>');
				}
			}
		}
	}
	if ($pos==$pos4) {
		if ($l>11) $li=$liR.htmlspecialchars(substr($t,$pos,11)).'…*}</span></li>'; else {
			$l=substr($li,7,1); $m=(int)substr($li,6,1); $n=(int)substr($li,8,3); if ($l!='_' || $m<0 || $m>5 || $n<1) $li=$liR.$li.'</span></li>'; else {
				$m+=13; $pos1=strpos($tx[$m],chr(10).'*number*'.$n.chr(10),0); if ($pos1==false) $li=$liR.$li.'</span></li>'; else {
					$pos1=strpos($tx[$m],'*name*'.$t3,$pos1); $pos1+=9; $pos2=strpos($tx[$m],chr(10),$pos1); $pos1='  &nbsp;&nbsp;<span style="font-weight:normal;">'.substr($tx[$m],$pos1,$pos2-$pos1).'</span>';
					$txt=@file_get_contents($pb_path_texts.'text'.($m-13).'_'.$n); if ($txt==false) $txt=''; $txt=fpb_4((' '.$txt),$m);
					$li = ($txt=='') ? ('<li><div class="pb_m3"></div><span>'.$li.'</span>'.$pos1.'</li>') : ('<li class="pb_mc"><div class="pb_m2"></div><span'.((strpos($txt,$c)==false)?'':$c).'>'.$li.'</span>'.$pos1.'<menu>'.$txt.'</menu></li>');
				}
			}
		}
	}
	$out.=$li; $pos+=2;
}
return $out;
}

function fpb_3($t) { // Уровень блоков block
global $tx,$pb_path_texts,$t3; if ($t==' ') return ''; $out=''; $pos=0; $c=' style="color:#a00000"'; $liR='<li><div class="pb_m4"></div><span'.$c.'>';
$t=preg_replace('/\t/','    ',$t); $t=preg_replace('/\r/','',$t); $t=preg_replace('/{\*page/i','{*page',$t); $t=preg_replace('/{\*tpl/i','{*tpl',$t); $t=preg_replace('/{\*block/i','{*block',$t); $t=preg_replace('/{\*text/i','{*text',$t);
while (true) {
	$pos=strpos($t,'{*',$pos); if ($pos===false) break; $posE=strpos($t,'*}',$pos); if ($posE===false) break; $posN=strpos($t,'{*',$pos+2); if ($posN!==false && $posE>$posN) { $pos=$posN; continue; }
	$pos1=strpos($t,'{*page',$pos); $pos2=strpos($t,'{*tpl',$pos); $pos3=strpos($t,'{*block',$pos); $pos4=strpos($t,'{*text',$pos);
	if ($pos!=$pos1 && $pos!=$pos2 && $pos!=$pos3 && $pos!=$pos4) { $pos+=2; continue; }
	$l=$posE-$pos; $li=htmlspecialchars(substr($t,$pos,$l+2));
	if ($pos==$pos1) { $li=$liR.(($l>11)?(htmlspecialchars(substr($t,$pos,11)).'…*}'):$li).'</span></li>'; }
	if ($pos==$pos2) { $li=$liR.(($l>8)?(htmlspecialchars(substr($t,$pos,8)).'…*}'):$li).'</span></li>'; }
	if ($pos==$pos3) { $li=$liR.(($l>12)?(htmlspecialchars(substr($t,$pos,12)).'…*}'):$li).'</span></li>'; }
	if ($pos==$pos4) {
		if ($l>11) $li=$liR.htmlspecialchars(substr($t,$pos,11)).'…*}</span></li>'; else {
			$l=substr($li,7,1); $m=(int)substr($li,6,1); $n=(int)substr($li,8,3); if ($l!='_' || $m<0 || $m>5 || $n<1) $li=$liR.$li.'</span></li>'; else {
				$m+=13; $pos1=strpos($tx[$m],chr(10).'*number*'.$n.chr(10),0); if ($pos1==false) $li=$liR.$li.'</span></li>'; else {
					$pos1=strpos($tx[$m],'*name*'.$t3,$pos1); $pos1+=9; $pos2=strpos($tx[$m],chr(10),$pos1); $pos1='  &nbsp;&nbsp;<span style="font-weight:normal;">'.substr($tx[$m],$pos1,$pos2-$pos1).'</span>';
					$txt=@file_get_contents($pb_path_texts.'text'.($m-13).'_'.$n); if ($txt==false) $txt=''; $txt=fpb_4((' '.$txt),$m);
					$li = ($txt=='') ? ('<li><div class="pb_m3"></div><span>'.$li.'</span>'.$pos1.'</li>') : ('<li class="pb_mc"><div class="pb_m2"></div><span'.((strpos($txt,$c)==false)?'':$c).'>'.$li.'</span>'.$pos1.'<menu>'.$txt.'</menu></li>');
				}
			}
		}
	}
	$out.=$li; $pos+=2;
}
return $out;
}

function fpb_4($t, $j=0) { // Уровень текстов text
global $tx,$pb_path_texts,$t3; if ($t==' ' || $j<13) return ''; $j-=13; $out=''; $pos=0; $c=' style="color:#a00000"'; $liR='<li><div class="pb_m4"></div><span'.$c.'>';
$t=preg_replace('/\t/','    ',$t); $t=preg_replace('/\r/','',$t); $t=preg_replace('/{\*page/i','{*page',$t); $t=preg_replace('/{\*tpl/i','{*tpl',$t); $t=preg_replace('/{\*block/i','{*block',$t); $t=preg_replace('/{\*text/i','{*text',$t);
while (true) {
	$pos=strpos($t,'{*',$pos); if ($pos===false) break; $posE=strpos($t,'*}',$pos); if ($posE===false) break; $posN=strpos($t,'{*',$pos+2); if ($posN!==false && $posE>$posN) { $pos=$posN; continue; }
	$pos1=strpos($t,'{*page',$pos); $pos2=strpos($t,'{*tpl',$pos); $pos3=strpos($t,'{*block',$pos); $pos4=strpos($t,'{*text',$pos);
	if ($pos!=$pos1 && $pos!=$pos2 && $pos!=$pos3 && $pos!=$pos4) { $pos+=2; continue; }
	$l=$posE-$pos; $li=htmlspecialchars(substr($t,$pos,$l+2));
	if ($pos==$pos1) { $li=$liR.(($l>11)?(htmlspecialchars(substr($t,$pos,11)).'…*}'):$li).'</span></li>'; }
	if ($pos==$pos2) { $li=$liR.(($l>8)?(htmlspecialchars(substr($t,$pos,8)).'…*}'):$li).'</span></li>'; }
	if ($pos==$pos3) { $li=$liR.(($l>12)?(htmlspecialchars(substr($t,$pos,12)).'…*}'):$li).'</span></li>'; }
//	if ($pos==$pos4) { $li=$liR.(($l>11)?(htmlspecialchars(substr($t,$pos,11)).'…*}'):$li).'</span></li>'; }
	if ($pos==$pos4) {
		if ($l>11) $li=$liR.htmlspecialchars(substr($t,$pos,11)).'…*}</span></li>'; else {
			$l=substr($li,7,1); $m=(int)substr($li,6,1); $n=(int)substr($li,8,3); if ($l!='_' || $m<=$j || $m>5 || $n<1) $li=$liR.$li.'</span></li>'; else {
				$m+=13; $pos1=strpos($tx[$m],chr(10).'*number*'.$n.chr(10),0); if ($pos1==false) $li=$liR.$li.'</span></li>'; else {
					$pos1=strpos($tx[$m],'*name*'.$t3,$pos1); $pos1+=9; $pos2=strpos($tx[$m],chr(10),$pos1); $pos1='  &nbsp;&nbsp;<span style="font-weight:normal;">'.substr($tx[$m],$pos1,$pos2-$pos1).'</span>';
					$txt=@file_get_contents($pb_path_texts.'text'.($m-13).'_'.$n); if ($txt==false) $txt=''; $txt=fpb_4((' '.$txt),$m);
					$li = ($txt=='') ? ('<li><div class="pb_m3"></div><span>'.$li.'</span>'.$pos1.'</li>') : ('<li class="pb_mc"><div class="pb_m2"></div><span'.((strpos($txt,$c)==false)?'':$c).'>'.$li.'</span>'.$pos1.'<menu>'.$txt.'</menu></li>');
				}
			}
		}
	}
	$out.=$li; $pos+=2;
}
return $out;
}
?>
