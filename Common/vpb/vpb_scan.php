<?php
// (c) Vcorp generator 00.80 beta | 2016 | vcorp.ru

// Операции над исходниками (элементами).
// mode==40 - Проверка и корректировка
// mode==41 - в динамику
// mode==42 - в статику

include "vpb_config.php"; fpb_authorization(3);

$v_mode=(int)$_POST['mode']; $v_index=(int)$_POST['index']; $v_number=(int)$_POST['number'];
if ($v_mode<40 || $v_mode>49 || $v_index<0 || $v_index>19 || $v_number<0 || $v_number>999 || ($v_index==0 && $v_number!=0)) { print 'error_authorization_3'; exit; }

$px5='<div class="px5"></div>'; $px10='<div class="px10"></div>'; $px15='<div class="px15"></div>';
$t3=chr(9).chr(9).chr(9); $name=''; $tx=false; $g_ch=0; $spanr=' <span style="font:bold 13px arial;color:#800000">';
for ($i=0; $i<19; $i++) {
	$tx[$i]=@file_get_contents($pb_path_config.$pba_files[$i].'.php'); if($tx[$i]==false) { exit; }
}

$t1='error¡</span>Нет закрывающих&nbsp;&nbsp;&nbsp;'.$spanr.'*}</span>&nbsp;&nbsp;&nbsp;для&nbsp;&nbsp;&nbsp;'.$spanr; $t4='error¡</span>Неправильное вложение'.$spanr;
$t5='error¡</span>Отсутствует '; $t7='error¡</span>Неправильная ссылка '.$spanr; $tmp0='error¡</span>Отсутствует'.$spanr.'&gt;</span> или завершающий тег'.$spanr.'&lt;/';
$tmp1='error¡</span>Отсутствует кавычка'.$spanr.'&lt;a href='; $tmp2='error¡</span>Отсутствует завершающая кавычка'.$spanr.'&lt;a href='; $tmt1='error¡'.$px15.'Проверьте конфигурационный файл ';

for ($j=0; $j<19; $j++) {
  if ($v_index>0) $j=$v_index-1; $txt=$tx[$j]; $pos0=0;
  $name='page'.$j.'_'; if ($j==6) $name='tpl'; if ($j>6 && $j<13) $name='block'.($j-7).'_'; if ($j>12) $name='text'.($j-13).'_';
  for ($i=1; $i<1000; $i++) {
	$v_ch=0; if ($v_number!=0) $i=$v_number; $pos=strpos($txt,'*number*'.$i.chr(10),$pos0); if ($pos==false) {
		if ($v_number!=0) { print 'error¡</span>Отсутствует '.$spanr.$name.$i.'</span>'.$px5.'Перезагрузите админку ( совместный доступ ).'.$spanr; exit; }
		$pos=strpos($txt,'*number*',$pos0); if ($pos!=false && $pos>=$pos0) {
			$pos1=strpos($txt,chr(10),$pos); if ($pos1==false) { print $tmt1.$pba_files[$j].'.php'; exit; }
			$i=(int)substr($txt,$pos+8,$pos1-$pos-8); 
		} else { $i=1000; continue; }
	} $pos0=$pos+8; $pos1=strpos($txt,'*end*'.$i.chr(10),$pos); if ($pos1==false) { print $tmt1.$pba_files[$j].'.php'; exit; }
	if ($j<6) $file=$pb_path_pages.$name.$i; if ($j==6) $file=$pb_path_templates.$name.$i; if ($j>6 && $j<13) $file=$pb_path_blocks.$name.$i; if ($j>12) $file=$pb_path_texts.$name.$i;
	$t=@file_get_contents($file); $tlen=strlen($t); if($tlen==0) { if($v_number!=0) { print 'ok¡Отсутствует содержимое'.$spanr.$name.$v_number.'</span>'; exit; } else continue; }

		$t=preg_replace('/\t/',$pb_replace_tab,$t);
		$t=preg_replace('/\r/','',$t);
		$t=preg_replace('/{\*page/i','{*page',$t); f_cl('page');
		// Перевод в нижний регистр
		$t=preg_replace('/{\*tpl/i','{*tpl',$t);
		$t=preg_replace('/{\*block/i','{*block',$t);
		$t=preg_replace('/{\*text/i','{*text',$t);
		// Блок проверки и удаления недопустимых включений {*...*}
		if ($j>5) f_cl('tpl');
		if ($j>6) f_cl('block');
		if ($j>12) f_cl('text0');
		if ($j>13) f_cl('text1');
		if ($j>14) f_cl('text2');
		if ($j>15) f_cl('text3');
		if ($j>16) f_cl('text4');
		if ($j>17) f_cl('text5');
		// Блок проверки и перевода ссылок в строчный формат
		$t=preg_replace('/\<a\s+/i','<a ',$t);
		$t=preg_replace('/\<l0\s+/i','<l0 ',$t);
		$t=preg_replace('/\<l1\s+/i','<l1 ',$t);
		$t=preg_replace('/\<l2\s+/i','<l2 ',$t);
		$t=preg_replace('/\<l3\s+/i','<l3 ',$t);
		$t=preg_replace('/\<l4\s+/i','<l4 ',$t);
		$t=preg_replace('/\<l5\s+/i','<l5 ',$t);
		$t=preg_replace('/\<a href\*=\s*/i','<a href=',$t);
		$t=preg_replace('/\<l0 id\s*=\s*/i','<l0 id=',$t);
		$t=preg_replace('/\<l1 id\s*=\s*/i','<l1 id=',$t);
		$t=preg_replace('/\<l2 id\s*=\s*/i','<l2 id=',$t);
		$t=preg_replace('/\<l3 id\s*=\s*/i','<l3 id=',$t);
		$t=preg_replace('/\<l4 id\s*=\s*/i','<l4 id=',$t);
		$t=preg_replace('/\<l5 id\s*=\s*/i','<l5 id=',$t);
		$t=preg_replace('/ +title *=/i',' title=',$t);
		$t=preg_replace('/ +alt *=/i',' alt=',$t);
		$t=preg_replace('/\n*\< *\/ *a *\>/i','</a>',$t);
		$t=preg_replace('/\n*\< *\/ *l0 *\>/i','</l0>',$t);
		$t=preg_replace('/\n*\< *\/ *l1 *\>/i','</l1>',$t);
		$t=preg_replace('/\n*\< *\/ *l2 *\>/i','</l2>',$t);
		$t=preg_replace('/\n*\< *\/ *l3 *\>/i','</l3>',$t);
		$t=preg_replace('/\n*\< *\/ *l4 *\>/i','</l4>',$t);
		$t=preg_replace('/\n*\< *\/ *l5 *\>/i','</l5>',$t);

	if ($v_mode==40) {
		$t2='</span>'.$px5.(($j<6)?'Страница ':(($j==6)?'Шаблон ':(($j>12)?'Текст ':'Блок '))).$spanr.$name.$i;
		$pos2=0; // Проверка {*tplN*}
		while (true) {
			$pos2=strpos($t,'{*tpl',$pos2); if ($pos2===false) break;
			$n=(int)substr($t,$pos2+5,4); if ($n<0 || $n>999) { print $t4.substr($t,$pos2,10).$t2; exit; }
			$b='{*tpl'.$n; $pos3=strpos($t,'*}',$pos2); $pos4=strpos($t,'{*',$pos2+2);
			if ($pos3==false || ($pos3>0 && $pos4>0 && $pos3>$pos4)) { if ($n==0) $pos3=$pos2; else { print $t1.$b.$t2; exit; } }
			if ($n!=0) { $pos4=strpos($tx[6],('*file*'.$t3.substr($b,2).chr(10)),0); if ($pos4==false) { print $t4.$b.'*}'.$t2; exit; } }
			$pos2=$pos3+2;
		}
		// Проверка {*block0_N*}, ... , {*block5_N*} на правильность вложения
		for ($k=0; $k<10; $k++) {
			$pos2=0; $b='{*block'.$k.'_'; while (true) {
				$pos2=strpos($t,$b,$pos2); if ($pos2===false) break; if ($k>5) { print $t4.substr($t,$pos2,10).$t2; exit; }
				$n=(int)substr($t,$pos2+9,4); if ($n<1 || $n>999) { print $t4.substr($t,$pos2,13).$t2; exit; }
				$pos3=strpos($t,'*}',$pos2); $pos4=strpos($t,'{*',$pos2+2);
				if ($pos3==false || ($pos3>0 && $pos4>0 && $pos3>$pos4)) { print $t1.$b.$n.$t2; exit; }
				$pos4=strpos($tx[$k+7],('*file*'.$t3.substr($b,2).$n.chr(10)),0); if ($pos4==false) { print $t4.$b.$n.'*}'.$t2; exit; }
				$pos2=$pos3+2;
			}
		}
		// Проверка {*text0_N*}, ... , {*text5_N*} на правильность вложения
		for ($k=0; $k<10; $k++) {
			$pos2=0; $b='{*text'.$k.'_'; while (true) {
				$pos2=strpos($t,$b,$pos2); if ($pos2===false) break; if ($k>5) { print $t4.substr($t,$pos2,10).$t2; exit; }
				$n=(int)substr($t,$pos2+8,4); if ($n<1 || $n>999) { print $t4.substr($t,$pos2,12).$t2; exit; }
				$pos3=strpos($t,'*}',$pos2); $pos4=strpos($t,'{*',$pos2+2);
				if ($pos3==false || ($pos3>0 && $pos4>0 && $pos3>$pos4)) { print $t1.$b.$n.$t2; exit; }
				$pos4=strpos($tx[$k+13],('*file*'.$t3.substr($b,2).$n.chr(10)),0); if ($pos4==false) { print $t4.$b.$n.'*}'.$t2; exit; }
				$pos2=$pos3+2;
			}
		}
	}
	
	$pos=0; $t6='</span>&nbsp;&nbsp;&nbsp;- '.(($j<6)?'Страница ':(($j==6)?'Шаблон ':(($j>12)?'Текст ':'Блок '))).$spanr.$name.$i;
	while (true) { $pos2=$pos; $pos=strpos($t,'<a ',$pos2); if ($pos===false) break; $pos1=strpos($t,'</a>',$pos); $pos3=strpos($t,'>',$pos); if ($pos1==false || $pos3>$pos1) { print $tmp0.'a&gt;'.$px5.htmlspecialchars(substr($t,$pos,30)).'…'.$t6; exit; } $pos=$pos+2; }
	// Проверка ссылок <a href=
	$pos=0; while (true) {
		$pos2=$pos; $pos=strpos($t,'<a href=',$pos2); if ($pos===false) break; $pq=substr($t,$pos+8,1); if ($pq!='"' && $pq!="'") { print $tmp1.'?'.$px5.htmlspecialchars(substr($t,$pos,30)).'…'.$t6; exit; }
		$pos+=9; $pos1=strpos($t,$pq,$pos); $pos3=strpos($t,'>',$pos); if ($pos1==false || $pos3==false || $pos3<$pos1) { print $tmp2.$pq.'…?'.$px5.htmlspecialchars(substr($t,$pos-9,30)).'…'.$t6; exit; }
		if ($pb_search_url || $v_mode==41) { // Проверка существующих внутренних URL
			$link=substr($t,$pos,$pos1-$pos); $pos3=strpos($link,'//'); if ($pos3!==false && $pos3>0) $pos3=!(($pos3-1)==strpos($link,'://'));
			if ($pos3!==false || strpos($link,'\\')!=false) { print $t7.'&lt;a href='.$pq.'…'.$px5.htmlspecialchars(substr($t,$pos-9,30)).'…'.$t6; exit; }
			$pos3=strpos($link,'#'); $pos4 = ($pos3==false) ? $link : substr($link,0,$pos3);
			if ($link!='empty' && (substr($link,0,1)!='#') && (substr($link,0,10)!='javascript') && (substr($link,0,7)!='mailto:') && (substr($link,0,7)!='http://') && (substr($link,0,8)!='https://')) for ($k=0; $k<6; $k++) {
				$pos2=strpos($tx[$k],('*link*'.$t3.$pos4.chr(10)),0); if($pos2>0) {
					if ($v_mode==41) {	// Преобразование ссылок в динамику
						$pos3 = ($pos4==$link) ? '' : substr($link,$pos3);
						$pos4=strpos($tx[$k],chr(10).'*end*',$pos2); if ($pos4==false || $pos4<$pos2) { print $tmt1.$pba_files[$k].'.php'; exit; }
						$pos4+=6; $pos5=strpos($tx[$k],chr(10),$pos4); if ($pos5==false || $pos4==$pos5) { print $tmt1.$pba_files[$k].'.php'; exit; }
						$pos4=(int)substr($tx[$k],$pos4,$pos5-$pos4); $t=substr($t,0,$pos-9).'<l'.$k.' id="'.$pos4.$pos3.'"'.substr($t,$pos1+1);
						$pos4=strpos($t,'</a>',$pos); $t=substr($t,0,$pos4).'</l'.$k.'>'.substr($t,$pos4+4); $v_ch+=1;
					} break;
				}
			}
			if($pos2==false && $link!='empty' && (substr($link,0,1)!='#') && (substr($link,0,10)!='javascript') && (substr($link,0,7)!='mailto:') && (substr($link,0,7)!='http://') && (substr($link,0,8)!='https://')) { print 'error¡Отсутствует URL</span> по ссылке.'.substr($t6,26).$px5.$spanr.htmlspecialchars('"'.$link.'"'); exit; }
		}
	}
	// Проверка и генерация для ссылок <l0 id=, ... , <l5 id=
	for ($k=0; $k<6; $k++) {
	  $pos2=0; $b='<l'.$k.' id='; while (true) {
		$pos4=$pos2; $pq='"'; $pos7=strpos($t,$b,$pos4); if ($pos7===false) break; $pos2=strpos($t,$b.$pq,$pos4); if ($pos2===false) { $pq="'"; $pos2=strpos($t,$b."'",$pos4); }
		if ($pos2===false) { print $t5.'кавычка '.$spanr.htmlspecialchars($b.'?').'</span>'.$px5.htmlspecialchars(substr($t,$pos7,30)).'… '.$t6; exit; }
		$pos3=strpos($t,$pq,$pos2+8); if ($pos3==false) { print $t5.'завершающая кавычка '.$spanr.htmlspecialchars($b.$pq.'...?').'</span>'.$px5.htmlspecialchars(substr($t,$pos7,30)).'…'.$t6; exit; }
		$repl=substr($t,$pos2+8,$pos3-$pos2-8);  if (strpos($repl,' ')!=false) { print $t7.htmlspecialchars($b.$pq.'...').'</span>'.$px5.htmlspecialchars(substr($t,$pos7,30)).'…'.$t6; exit; }
		$pos4=strpos($repl,'#'); $replAdd = ($pos4==false) ? '' : substr($repl,$pos4);
		$n=(int)substr($t,$pos2+8,3); if ($n<=0) { print 'error¡</span>Неправильный'.$spanr.'id'.$px5.htmlspecialchars(substr($t,$pos7,11)).'…'.$t6; exit; }

		$pos4=strpos($tx[$k],'*number*'.$n.chr(10)); if ($pos4==false) { print 'error¡</span>Неправильный'.$spanr.'id'.$px5.htmlspecialchars(substr($t,$pos7,11)).'…'.$t6; exit; }
		$pos5=strpos($tx[$k],'*link*'.$t3,$pos4); if ($pos5==false) { print $tmt1.$pba_files[$k].'.php'; exit; }
		$pos4=strpos($tx[$k],'*end*'.$n.chr(10)); if ($pos5>$pos4) { print $tmt1.$pba_files[$k].'.php'; exit; }
		$pos6=strpos($tx[$k],chr(10),$pos5); if ($pos6==false) { print $tmt1.$pba_files[$k].'.php'; exit; }

		$pos=strpos($t,'</l'.$k.'>',$pos2); $pos4=strpos($t,'>',$pos2); if ($pos==false || $pos<$pos4) { print $t5.$spanr.'&gt;</span> или завершающий тег'.$spanr.'&lt;/l'.$k.'></span>'.$px5.'для тега'.$spanr.htmlspecialchars($b.$pq.$n.$replAdd.$pq).'</span>'.$t6; exit; }

		if ($v_mode==42) {	// Преобразование ссылок в статику
			$repl=substr($tx[$k],$pos5+9,$pos6-$pos5-9); if ($repl!='empty') {
				if ($repl==('/'.$pb_main_file)) $repl='/'; $v_ch+=1; $repl='<a href='.$pq.$repl.$replAdd.$pq; $t=substr($t,0,$pos2).$repl.substr($t,$pos3+1);
				$pos4=strpos($t,'</l'.$k.'>',$pos2); $t=substr($t,0,$pos4).'</a>'.substr($t,$pos4+5); $pos2+=(strlen($repl)-8);
			}
		}
		$pos2+=8;
	  }
	}

	// Запись измененного исходника ($file - адрес)
	if (($v_ch>0 || $tlen!=strlen($t)) && $v_mode<43) {
		@chmod($file, $pb_attr_files); $fh=@fopen($file,'w'); if ($fh==false) { @fclose($fh); print 'error¡Не удалось записать файл:'.$px5.$name.$i; exit; }
		@rewind($fh); if (-1==@fwrite($fh,$t)) { @fflush($fh); @fclose($fh); print 'error¡Не удалось записать файл:'.$px5.$name.$i; exit; }
		$g_ch+=1; @ftruncate($fh,ftell($fh)); @fflush($fh); @fclose($fh); @chmod($file, $pb_attr_files);
	}

	if ($v_number!=0) break;
  }
  if ($v_index>0) break;
}

if ($v_index>0) {
	$j=$v_index-1;
	if ($j<6) { $t1='страницы'; $t2='page'.$j; }
	if ($j==6) { $t1='шаблоны'; $t2='tpl'; }
	if ($j>6 && $j<13) { $t1='блоки'; $t2='block'.($j-7); }
	if ($j>12) { $t1='тексты'; $t2='text'.($j-13); }
}
if ($v_mode==40) {
	if ($v_index>0 && $v_number==0) print 'ok¡Просканированы все '.$t1.(($j==6)?($spanr.$t2):(' с индексом'.$spanr.$t2.'_')).'</span>';
	if ($v_index>0 && $v_number>0) print 'ok¡Сканирование '.$spanr.$t2.(($j==6)?'':'_').$v_number.'</span> завершено';
	if ($v_index==0 && $v_number==0) print 'ok¡Просканированы все элементы';
}
if ($v_mode==41||$v_mode==42) {
	if ($v_index>0 && $v_number==0) print 'ok¡Преобразованы все '.$t1.(($j==6)?($spanr.$t2):(' с индексом'.$spanr.$t2.'_')).'</span>';
	if ($v_index>0 && $v_number>0) print 'ok¡Преобразование для '.$spanr.$t2.(($j==6)?'':'_').$v_number.'</span> завершено';
	if ($v_index==0 && $v_number==0) print 'ok¡Преобразованы ссылки всех элементов';
}

?>