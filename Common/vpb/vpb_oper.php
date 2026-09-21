<?php
// (c) Vcorp generator 00.80 beta | 2016 | vcorp.ru

// mode==31  - Бэкап исходника (ов)
// mode==32  - Восстановление из бэкапа исходника (ов) 
// mode==33  - Генерация карты сайта sitemap.xml.

include "vpb_config.php"; fpb_authorization(5);

$v_mode=(int)$_POST['mode']; $v_index=(int)$_POST['index']; $v_number=(int)$_POST['number'];
if ($v_mode<31 || $v_mode>38) { print 'error_authorization_5'; exit; }
if ($v_mode<33) {
	if ($v_mode<31 || $v_index<0 || $v_index>19 || $v_number<0 || $v_number>999 || ($v_index==0 && $v_number!=0)) { print 'error_authorization_5'; exit; }
}

$tx=false; $spanr=' <span style="font:bold 13px arial;color:#800000">';
$px5='<div class="px5"></div>'; $px10='<div class="px10"></div>'; $px15='<div class="px15"></div>';
$tmt1='error¡'.$px15.'Проверьте конфигурационный файл ';

if ($v_mode<33) {
for ($j=0; $j<19; $j++) {
	if ($v_index>0) $j=$v_index-1;
	$file=$pb_path_config.$pba_files[$j].'.php'; $fbfile=$pb_path_backup.'config/'.$pba_files[$j].'.php'; if ($v_mode==32) { $tx=$fbfile; $fbfile=$file; $file=$tx; }
	$tx=@file_get_contents($file); if($tx==false) { print $tmt1.$pba_files[$j].'.php'; exit; }
	if ($v_number!=0) {
		$t=$tx; $tx=@file_get_contents($fbfile); if ($tx==false) $tx=$t; else {
			$i=$v_number; $pos=strpos($t,'*number*'.$i,0); if ($pos==false) { print $tmt1.$pba_files[$j].'.php'; exit; }
			$pos1=strpos($t,'*end*'.$i.chr(10).chr(10),$pos); if ($pos1==false) { print $tmt1.$pba_files[$j].'.php'; exit; }
			$pos1+=strlen('*end*'.$i.chr(10).chr(10)); $repl=substr($t,$pos,$pos1-$pos);

			$pos=strpos($tx,'*number*'.$i,0); if ($pos==false) $tx=$t; else {
				$pos1=strpos($tx,'*end*'.$i.chr(10).chr(10),$pos); if ($pos1==false) $tx=$t; else {
					$pos1+=strlen('*end*'.$i.chr(10).chr(10)); $tx=substr($tx,0,$pos).$repl.substr($tx,$pos1);
				}
			}
		}
	} $t=$tx; f_save($fbfile); $pos0=0;
	$name='page'.$j.'_'; if ($j==6) $name='tpl'; if ($j>6 && $j<13) $name='block'.($j-7).'_'; if ($j>12) $name='text'.($j-13).'_';

  for ($i=1; $i<1000; $i++) {
	$v_ch=0; if ($v_number!=0) $i=$v_number; $pos=strpos($tx,'*number*'.$i.chr(10),$pos0); if ($pos==false) {
		if ($v_number!=0) { print 'error¡</span>Отсутствует '.$spanr.$name.$i.'</span>'.$px5.'Перезагрузите админку ( совместный доступ ).'.$spanr; exit; }
		$pos=strpos($tx,'*number*',$pos0); if ($pos!=false && $pos>=$pos0) {
			$pos1=strpos($tx,chr(10),$pos); if ($pos1==false) { print $tmt1.$pba_files[$j].'.php'; exit; }
			$i=(int)substr($tx,$pos+8,$pos1-$pos-8);
		} else { $i=1000; continue; }
	} $pos0=$pos+8; $pos1=strpos($tx,'*end*'.$i.chr(10),$pos); if ($pos1==false) { print $tmt1.$pba_files[$j].'.php'; exit; }

	if ($j<6) { $file=$pb_path_pages.$name.$i; $fbfile=$pb_path_backup.'pages/'.$name.$i; }
	if ($j==6) { $file=$pb_path_templates.$name.$i; $fbfile=$pb_path_backup.'templates/'.$name.$i; }
	if ($j>6 && $j<13) { $file=$pb_path_blocks.$name.$i; $fbfile=$pb_path_backup.'blocks/'.$name.$i; }
	if ($j>12) { $file=$pb_path_texts.$name.$i; $fbfile=$pb_path_backup.'texts/'.$name.$i; }
	if ($v_mode==32) { $t=$fbfile; $fbfile=$file; $file=$t; }
	$t=@file_get_contents($file); $tlen=strlen($t); if($tlen==0) { if($v_number!=0) { print 'ok¡Отсутствует содержимое'.$spanr.$name.$v_number.'</span>'; exit; } else continue; }
	f_save($fbfile);
	if ($v_number!=0) break;
  }
  if ($v_index>0) break;
}
if ($v_index>0) {
	$j=$v_index-1;
	if ($j<6) { $t1='страниц'; $t2='page'.$j; }
	if ($j==6) { $t1='шаблонов'; $t2='tpl'; }
	if ($j>6 && $j<13) { $t1='блоков'; $t2='block'.($j-7); }
	if ($j>12) { $t1='текстов'; $t2='text'.($j-13); }
}
if ($v_mode==31) {
	if ($v_index>0 && $v_number==0) print 'ok¡Скопированы все исходники '.$t1.(($j==6)?($spanr.$t2):(' с индексом'.$spanr.$t2.'_')).'</span>';
	if ($v_index>0 && $v_number>0) print 'ok¡Копирование в резерв '.$spanr.$t2.(($j==6)?'':'_').$v_number.'</span> завершено';
	if ($v_index==0 && $v_number==0) print 'ok¡Скопированы исходники всех элементов';
}
if ($v_mode==32) {
  if ($v_index>0 && $v_number==0) print 'ok¡Восстановлены все исходники '.$t1.(($j==6)?($spanr.$t2):(' с индексом'.$spanr.$t2.'_')).'</span>';
  if ($v_index>0 && $v_number>0) print 'ok¡Восстановление из резерва '.$spanr.$t2.(($j==6)?'':'_').$v_number.'</span> завершено';
  if ($v_index==0 && $v_number==0) print 'ok¡Восстановлены исходники всех элементов.'; else {
	$txh=''; $txt=$tx; $tx=''; $tx1='<tr><td style="color:#800000;font:bold 12px arial;" colspan="'.(($j<6)?'4':'').'">error config file '.$pba_files[$j].' number: '; $tx2='</td></tr>'; $f=0;
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
	if ($f==0) $tx.='<tr id="tr'.$j.'_'.$i.'" onclick="f_c('.$j.','.$i.')"><td style="width:'.(($j==6)?'50':'80').'px;">'.$pos1.'</td><td style="width:'.(($j<6)?'20':'25').'px;">'.((substr($pos2,0,1)>'0')?'a':'').'</td>'.(($j<6)?('<td style="width:20px;">'.((substr($pos2,1,1)>'0')?'u':'').'</td><td style="width:35px;">'.$tm.'</td>'):'').'<td id="d3_'.$j.'_'.$i.'">'.htmlspecialchars($pos3).'</td></tr>';
	else $tx.='<tr id="tr'.$j.'_'.$i.'" onclick="f_c('.$j.','.$i.')"><td>'.$pos1.'</td><td>'.((substr($pos2,0,1)>'0')?'a':'').'</td>'.(($j<6)?('<td>'.((substr($pos2,1,1)>'0')?'u':'').'</td><td>'.$tm.'</td>'):'').'<td id="d3_'.$j.'_'.$i.'">'.htmlspecialchars($pos3).'</td></tr>';
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
		$txh.='<div id="d4_'.$j.'_'.$i.'">'.htmlspecialchars($pos4).'</div><div id="d5_'.$j.'_'.$i.'">'.htmlspecialchars($pos5).'</div><div id="d6_'.$j.'_'.$i.'">'.htmlspecialchars($pos6).'</div><div id="d7_'.$j.'_'.$i.'">'.htmlspecialchars($pos7).'</div>';
	} $f++;
  }
	$txt = ($tx>' ') ? ('<table class="tiarea"><tbody>'.$tx.'</tbody></table><textarea class="trarea" id="trarea'.$j.'" onchange="f_ch()" onkeydown="f_ch(event)" onfocus="v_blur=1" onblur="v_blur=0"></textarea><div class="pb_hidden">'.$txh.'<div id="id_kol'.$j.'">'.$f.'</div></div>') : '';
	print '¡'.$j.'¡'.$txt;
  }
}

}

if ($v_mode==33) { // Генерация sitemap.xml
$out=''; $cnt=0; $t3=chr(9).chr(9).chr(9); $v_link=''; $v_priority='';
for ($j=0; $j<6; $j++) {
  $txt=@file_get_contents($pb_path_config.$pba_files[$j].'.php'); if($txt==false) continue;
  $pos0 = ($j==0) ? $pb_sitemap_start : 0; if($j==0 && $pos0==0) continue; // Если php-скрипт общего назначения (специальный, а не только url-страница) - ВСЕГДА в колонке page0_ !!!
  while (true) {
	$pos=strpos($txt,'*number*',$pos0); if ($pos==false) break; $pos+=8; $pos1=strpos($txt,chr(10),$pos); if ($pos1==false || ($pos1-$pos)>3) { print $tmt1.$pba_files[$j].'.php'; exit; }
	$n=(int)substr($txt,$pos,$pos1-$pos); $pos1=strpos($txt,'*end*'.$n.chr(10),$pos); $pos2=strpos($txt,'*link*'.$t3,$pos); $pos3=strpos($txt,'*options*'.chr(9).chr(9),$pos);
	if ($pos1==false || $pos2==false || $pos3==false || $pos1<$pos || $pos2>$pos1 || $pos3>$pos1 || $pos3>$pos2) { print $tmt1.$pba_files[$j].'.php'; exit; }
	$pos0=$pos+9; $v_priority='0.'.substr($txt,$pos3+13,1); if ($v_priority=='0.0') continue;
	$pos2+=9; $pos1=strpos($txt,chr(10),$pos2); $v_link=substr($txt,$pos2,$pos1-$pos2); if ($v_link=='empty') continue;
	$v_link=str_replace('//','/',$pb_domain.$pb_path_site.$v_link); $v_link=str_replace('//','/',$v_link); $v_link=str_replace('http:/','http://',$v_link); $v_link=str_replace('https:/','https://',$v_link);
	$cnt+=1; $out.='<url>'.chr(10).'  <loc>'.$v_link.'</loc>'.chr(10).'    <priority>'.$v_priority.'</priority>'.chr(10).'</url>'.chr(10);
  }
}
if ($cnt==0) { print 'error¡'.$px15.'Нет ни одной страницы для sitemap.xml'; }
else {
	$out='<?xml version="1.0" encoding="UTF-8"?>'.chr(10).'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'.chr(10).$out.'</urlset>'.chr(10);
	$file=$pb_path_root.'sitemap.xml'; @chmod($file, $pb_attr_files); $fh=@fopen($file,'w');
	if ($fh==false) { @fclose($fh); print 'error¡Не удалось записать файл:'.$px5.$file; exit; }
	@rewind($fh); if (-1==@fwrite($fh,$out)) { @fflush($fh); @fclose($fh); print 'error¡Не удалось записать файл:'.$px5.$file; exit; }
	@ftruncate($fh,ftell($fh)); @fflush($fh); @fclose($fh); @chmod($file, $pb_attr_files);
	print 'ok¡sitemap.xml содержит страниц: '.$cnt;
}
}

function f_save($f) {
	global $pb_attr_files,$px5,$t; @chmod($f, $pb_attr_files); $fh=@fopen($f,'w');
	if ($fh==false) { @fclose($fh); print 'error¡Не удалось записать файл:'.$px5.$f; exit; }
	@rewind($fh); if (-1==@fwrite($fh,$t)) { @fflush($fh); @fclose($fh); print 'error¡Не удалось записать файл:'.$px5.$f; exit; }
	@ftruncate($fh,ftell($fh)); @fflush($fh); @fclose($fh); @chmod($f, $pb_attr_files);
}
?>
