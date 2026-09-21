<?php
// (c) Asw pages builder 00.77 beta | asws | 2010-2015 | asws.ru

// Добавление/ удаление / редактирование исходников (элементов)
// Также авто-проверка и коррекция при необходимости
// Дополнительно - поиск правильности внутренних URL - в зависимости от значения $pb_search_url - в файле config.php

include "config.php"; fpb_authorization(1);

$v_mode=(int)$_POST['mode']; $v_index=(int)$_POST['index']; $number=(int)$_POST['number'];
if ( (($v_mode<11 || $v_mode>15) && $v_mode!=21) || ($v_mode!=12 && $number==0) ) { print 'error_authorization_1'; exit; }

$file=$pb_path_config.$pba_files[$v_index].'.php'; $tx=false; $txt=@file_get_contents($file); if($txt==false) { exit; }
if ($v_mode==21) {
  for ($i=0; $i<6; $i++) {
	$tx[$i]=@file_get_contents($pb_path_config.$pba_files[$i].'.php'); if($tx[$i]==false) { exit; }
  }
}
$name='page'.$v_index.'_'; if ($v_index==6) $name='tpl'; if ($v_index>6 && $v_index<13) $name='block'.($v_index-7).'_'; if ($v_index>12) $name='text'.($v_index-13).'_';
$t3=chr(9).chr(9).chr(9); $v_name='empty'.$number; $v_link='empty'; $v_title='empty'; $v_keyw='empty'; $v_desc='empty'; $v_number=0;
if ($v_index<6) $v_options=($pb_autocheck?'1':'0').($pb_titles?'1':'0').($pb_sitemap?'5':'0').'0000000'; else $v_options=($pb_autocheck?'1':'0').'000000000';
$path=substr($name,0,3); if ($path=='pag') $path=$pb_path_pages; if ($path=='tpl') $path=$pb_path_templates; if ($path=='blo') $path=$pb_path_blocks; if ($path=='tex') $path=$pb_path_texts;
$spanr=' <span style="font:bold 13px arial;color:#800000">'; $px5='<div class="px5"></div>'; $px10='<div class="px10"></div>'; $px15='<div class="px15"></div>';
$err_nosave='error¡Не удалось Добавить запись'.$px5.'в конфигурационный файл '.$pba_files[$v_index];

if ($v_mode==12 || $v_mode==13) { // Добавить || Добавить с копированием элемента $number
	if ($v_mode==13) {
		$pos=strpos($txt,'*number*'.$number.chr(10),0); if ($pos>0) {
			$pos0=strpos($txt,'*options*'.chr(9).chr(9),$pos); if ($pos0>0) { $pos0+=11; $pos1=strpos($txt,chr(10),$pos0); if ($pos1>0) $v_options=substr($txt,$pos0,$pos1-$pos0); }
			$pos0=strpos($txt,'*title*'.$t3,$pos); if ($pos0>0) { $pos0+=10; $pos1=strpos($txt,chr(10),$pos0); if ($pos1>0) $v_title=substr($txt,$pos0,$pos1-$pos0); }
			$pos0=strpos($txt,'*keyw*'.$t3,$pos); if ($pos0>0) { $pos0+=9; $pos1=strpos($txt,chr(10),$pos0); if ($pos1>0) $v_keyw=substr($txt,$pos0,$pos1-$pos0); }
			$pos0=strpos($txt,'*desc*'.$t3,$pos); if ($pos0>0) { $pos0+=9; $pos1=strpos($txt,chr(10),$pos0); if ($pos1>0) $v_desc=substr($txt,$pos0,$pos1-$pos0); }
		}
	}
	$str=''; $pos0=strpos($txt,'[BEGIN LIST]'.chr(10).chr(10)); if ($pos0==false) exit; else $pos0+=14;
	for ($i=1; $i<1000; $i++) {
		$pos=strpos($txt,'*end*'.$i.chr(10).chr(10)); if ($pos>0) { $pos0=$pos+7+(($i<10)?1:(($i<100)?2:3)); continue; }
		$str='*number*'.$i.chr(10).'*options*'.chr(9).chr(9).$v_options.chr(10).'*file*'.$t3.$name.$i.chr(10).'*name*'.$t3.'empty'.$i.chr(10);
		if ($v_index<6) { $str.='*link*'.$t3.$v_link.chr(10).'*title*'.$t3.$v_title.chr(10).'*keyw*'.$t3.$v_keyw.chr(10).'*desc*'.$t3.$v_desc.chr(10); }
		$str.='*end*'.$i.chr(10).chr(10); $v_number=$i; break;
	}
	if ($str=='') { print '000¡no adding'; exit; }
	else {
		$txt=substr($txt,0,$pos0).$str.substr($txt,$pos0);
		$handler=@fopen($file,'w'); if ($handler==false) { print $err_nosave; exit; }
		@rewind($handler); if (-1==@fwrite($handler,$txt)) { print $err_nosave;  exit; }
		@ftruncate($handler,ftell($handler)); @fflush($handler); @fclose($handler);
		if ($v_mode==13) {
			$file=$path.$name; $t=@file_get_contents($file.$number); $file.=$v_number;
			$handler=@fopen($file,'w'); if ($handler) {
				@rewind($handler); if (-1!=@fwrite($handler,$t)) { @ftruncate($handler,ftell($handler)); @fflush($handler); @fclose($handler); }
			}
		}
	}
}

if ($v_mode==14 || $v_mode==15) { // Удалить || Очистить элемент
	f_str(($v_mode==15)?0:1);
	// Для удаления файла при очистке элемента - Раскомментировать 1 строку ниже и Закомментировать 2 и 3 строки ниже.
	// @unlink($path.$name.$number); if ($v_mode==14) $number='0';
	$file=$path.$name.$number; if ($v_mode==14) { @unlink($file); $number='0'; }
	else if (file_exists($file)) { $handler=@fopen($file,'w'); if ($handler) { @rewind($handler); if (-1!=@fwrite($handler,'')) { @ftruncate($handler,ftell($handler)); @fflush($handler); @fclose($handler); } } }
}

if ($v_mode==21) {
	$v_options=trim(fpb_post('options')); $v_name=trim(fpb_post('name')); $v_link=trim(fpb_post('link')); $v_title=trim(fpb_post('title')); $v_keyw=trim(fpb_post('keyw')); $v_desc=trim(fpb_post('desc'));
	if ($v_index<6) {
	  $tmp=substr($v_options,1,1); if($v_link==false) $v_link='empty'; if($v_link!='empty' && substr($v_link,0,1)!='/') $v_link='/'.$v_link; if($v_title==false) $v_title='empty';
	  if (strpos($v_link,'//',0)!==false) { print 'error¡</span>'.$px15.'Двойной слеш'.$spanr.'//</span> в URL'.$px10.$spanr; exit; }
	  if (strpos($v_link,' ',0)!==false) { print 'error¡</span>Неправильный URL'.$px5.'( есть '.$spanr.'пробелы</span> )'.$spanr; exit; }
	  if (strpos($v_link,'#',0)!==false) { print 'error¡</span>Неправильный URL'.$px5.'( недопустимый символ '.$spanr.'#</span> )'.$spanr; exit; }
	  if (strpos($v_link,'\\',0)!==false) { print 'error¡</span>Неправильный URL'.$px5.'( присутствует обратный слеш '.$spanr.'\</span> )'.$spanr; exit; }
	  if (strpos($v_link,'./',0)!==false) { print 'error¡</span>Неправильный URL'.$px5.'( относительный '.$spanr.'./</span> )'.$spanr; exit; }
	  if ($v_link!='empty' && $v_link!=='/' && strpos($v_link,'/',1)==false && strpos($v_link,'.',0)==false) { print 'error¡</span>Неправильный URL'.$px5.'Не указано расширение файла '.$spanr.'.</span> или слеш '.$spanr.'/</span> в конце - для папки'.$spanr; exit; }
	  $pos=strlen(substr($pb_path_main,strlen($pb_path_root)-1)); if (substr($v_link,0,$pos)==substr($pb_path_main,-$pos)) { print 'error¡</span>Неправильный URL'.$px5.'( директория '.$spanr.'Asw pages builder</span> )'.$spanr; exit; }
	  for ($i=0; $i<6; $i++) {
		if ($v_link!='empty') {
		  $str=0; $pos=0;
		  while ($str==0) { $pos=strpos($tx[$i],'*link*'.$t3.$v_link.chr(10),$pos); if ($pos==false) break; $pos=strpos($tx[$i],'*end*',$pos); $pos+=5; $str=(int)substr($tx[$i],$pos,(strpos($tx[$i],chr(10),$pos)-$pos)); if ($i==$v_index && $str==$number) $str=0; }
		  if ($str>0) { print 'error¡</span>Такой'.$spanr.'URL</span> уже закреплен'.$px5.'за страницей'.$spanr.'page'.$i.'_'.$str; exit; }
		}
		if ($v_title!='empty' && $tmp!='0') {
		  $str=0; $pos=0;
		  while ($str==0) { $pos=strpos($tx[$i],'*title*'.$t3.$v_title.chr(10),$pos); if ($pos==false) break; $pos=strpos($tx[$i],'*end*',$pos); $pos+=5; $str=(int)substr($tx[$i],$pos,(strpos($tx[$i],chr(10),$pos)-$pos)); if ($i==$v_index && $str==$number) $str=0; }
		  if ($str>0) { print 'error¡</span>Такой'.$spanr.'TITLE</span> уже закреплен'.$px5.'за страницей'.$spanr.'page'.$i.'_'.$str; exit; }
		}
	  }
	}
	$t=fpb_post('body');
	$t=preg_replace('/\t/',$pb_replace_tab,$t);
	$t=preg_replace('/\r/','',$t);
	$t=preg_replace('/{\*page/i','{*page',$t); f_cl('page');
	// Перевод в нижний регистр
	$t=preg_replace('/{\*tpl/i','{*tpl',$t);
	$t=preg_replace('/{\*block/i','{*block',$t);
	$t=preg_replace('/{\*text/i','{*text',$t);

	if (substr($v_options,0,1)!='0') { // Авто - проверка исходного кода (auto-check)
		// Блок проверки и удаления недопустимых включений {*...*}
		if ($v_index>5) f_cl('tpl');
		if ($v_index>6) f_cl('block');
		if ($v_index>12) f_cl('text0');
		if ($v_index>13) f_cl('text1');
		if ($v_index>14) f_cl('text2');
		if ($v_index>15) f_cl('text3');
		if ($v_index>16) f_cl('text4');
		if ($v_index>17) f_cl('text5');
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

		$t1='error¡</span>'.$px10.'Нет закрывающих&nbsp;&nbsp;&nbsp;'.$spanr.'*}</span>&nbsp;&nbsp;&nbsp;для&nbsp;&nbsp;&nbsp;'.$spanr; $t4='error¡</span>'.$px10.'Неправильное вложение'.$spanr;
		$pos2=0; // Проверка {*tplN*}
		while (true) {
			$pos2=strpos($t,'{*tpl',$pos2); if ($pos2===false) break;
			$n=(int)substr($t,$pos2+5,4); if ($n<0 || $n>999) { print $t4.substr($t,$pos2,10); exit; }
			$pos3=strpos($t,'*}',$pos2); $pos4=strpos($t,'{*',$pos2+2);
			if ($pos3==false || ($pos3>0 && $pos4>0 && $pos3>$pos4)) { if ($n==0) $pos3=$pos2; else { print $t1.'{*tpl'.$n; exit; } }
			$pos2=$pos3+2;
		}

		// Проверка {*block0_N*}, ... , {*block5_N*} на правильность вложения
		for ($k=0; $k<10; $k++) {
			$pos2=0; $b='{*block'.$k.'_'; while (true) {
				$pos2=strpos($t,$b,$pos2); if ($pos2===false) break; if ($k>5) { print $t4.substr($t,$pos2,10); exit; }
				$n=(int)substr($t,$pos2+9,4); if ($n<1 || $n>999) { print $t4.substr($t,$pos2,13); exit; }
				$pos3=strpos($t,'*}',$pos2); $pos4=strpos($t,'{*',$pos2+2);
				if ($pos3==false || ($pos3>0 && $pos4>0 && $pos3>$pos4)) { print $t1.$b.$n; exit; }
				$pos2=$pos3+2;
			}
		}

		// Проверка {*text0_N*}, ... , {*text5_N*} на правильность вложения
		for ($k=0; $k<10; $k++) {
			$pos2=0; $b='{*text'.$k.'_'; while (true) {
				$pos2=strpos($t,$b,$pos2); if ($pos2===false) break; if ($k>5) { print $t4.substr($t,$pos2,10); exit; }
				$n=(int)substr($t,$pos2+8,4); if ($n<1 || $n>999) { print $t4.substr($t,$pos2,12); exit; }
				$pos3=strpos($t,'*}',$pos2); $pos4=strpos($t,'{*',$pos2+2);
				if ($pos3==false || ($pos3>0 && $pos4>0 && $pos3>$pos4)) { print $t1.$b.$n; exit; }
				$pos2=$pos3+2;
			}
		}

		$tmp='error¡</span>Отсутствует'.$spanr.'&gt;</span> или завершающий тег'.$spanr.'&lt;/';
		$pos=0;	while (true) { $pos2=$pos; $pos=strpos($t,'<a ',$pos2); if ($pos===false) break; $pos1=strpos($t,'</a>',$pos); $pos3=strpos($t,'>',$pos); if ($pos1==false || $pos3>$pos1) { print $tmp.'a&gt; :'.$px5.htmlspecialchars(substr($t,$pos,30)).'…'; exit; } $pos=$pos+2; }
		for ($i=0; $i<6; $i++) {
			$pos=0;	while (true) {
				$pos2=$pos; $bb='<l'.$i.' '; $be='</l'.$i.'>'; $pos=strpos($t,$bb,$pos2); if ($pos===false) break; $pos1=strpos($t,$be,$pos); $pos3=strpos($t,'>',$pos);
				if ($pos1==false || $pos3>$pos1) { print $tmp.'l'.$i.'&gt; :'.$px5.htmlspecialchars(substr($t,$pos,30)).'…'; exit; }
				$pos=$pos+2;
			}
		}

		$tmp='error¡</span>Отсутствует кавычка'.$spanr; $tmp1='error¡</span>Отсутствует завершающая кавычка'.$spanr; $tmp2='error¡</span>Неправильная ссылка'.$spanr;
		$pos=0; while (true) {
			$pos2=$pos; $pos=strpos($t,'<a href=',$pos2); if ($pos===false) break; $pq=substr($t,$pos+8,1); if ($pq!='"' && $pq!="'") { print $tmp.'&lt;a href='.'?'.$px5.htmlspecialchars(substr($t,$pos,30)).'…'; exit; }
			$pos+=9; $pos1=strpos($t,$pq,$pos); $pos3=strpos($t,'>',$pos); if ($pos1==false || $pos3==false || $pos3<$pos1) { print $tmp1.'&lt;a href='.$pq.'…?'.$px5.htmlspecialchars(substr($t,$pos-9,30)).'…'; exit; }
			$link=substr($t,$pos,$pos1-$pos); $pos3=strpos($link,'//'); if ($pos3!==false && $pos3>0) $pos3=!(($pos3-1)==strpos($link,'://'));
			if ($pos3!==false || strpos($link,'\\')!=false) { print $tmp2.'&lt;a href='.$pq.'…'.$px5.htmlspecialchars(substr($t,$pos-9,30)).'…'; exit; }
			if ($pb_search_url) { // Проверка существующих внутренних URL
				$pos3=strpos($link,'#'); $pos3 = ($pos3==false) ? $link : substr($link,0,$pos3);
				if ($link!='empty' && (substr($link,0,1)!='#') && (substr($link,0,10)!='javascript') && (substr($link,0,7)!='mailto:') && (substr($link,0,7)!='http://') && (substr($link,0,8)!='https://')) for ($i=0; $i<6; $i++) { $pos1=strpos($tx[$i],('*link*'.$t3.$pos3.chr(10)),0); if($pos1>0) break; }
				if($pos1==false) { print 'error¡</span>Отсутствует URL'.$px5.$spanr.htmlspecialchars('"'.$pos3.'"'); exit; }
			}
		}
		for ($i=0; $i<6; $i++) {
		  $pos=0; $bb='<l'.$i.' id='; while (true) {
			$pos2=$pos; $pos=strpos($t,$bb,$pos2); if ($pos===false) break; $pq=substr($t,$pos+7,1); if ($pq!='"' && $pq!="'") { print $tmp.htmlspecialchars('<l'.$i.' id=?').''.$px5.htmlspecialchars(substr($t,$pos,30)).'…'; exit; }
			$pos+=8; $pos1=strpos($t,$pq,$pos); $pos3=strpos($t,'>',$pos); if ($pos1==false || $pos3==false|| $pos3<$pos1) { print $tmp1.htmlspecialchars($bb.$pq.'…?').''.$px5.htmlspecialchars(substr($t,$pos-8,30)).'…'; exit; }
			$link=substr($t,$pos,$pos1-$pos); if (strpos($link,' ')!=false) { print $tmp2.htmlspecialchars($bb.$pq.'…').''.$px5.htmlspecialchars(substr($t,$pos-8,30)).'…'; exit; }
			$pos3=strpos($link,'#'); if ($pos3!=false) $link=substr($link,0,$pos3);
			if (strpos($tx[$i],('*number*'.$link.chr(10)),0)==false) { print 'error¡</span>Отсутствует страница'.$spanr.'page'.$i.'_'.$link.$px5.htmlspecialchars($bb.$pq.$link.$pq.'>…'); exit; }
		  }
		}
	}
	f_str(0); $file=$path.$name.$number; $err_nosave='error¡Записана только служебная информация.'.$px5.'Содержимое НЕ записано в файл '.$name.$number;
	$handler=@fopen($file,'w'); if ($handler==false) { print $err_nosave; exit; }
	@rewind($handler); if (-1==@fwrite($handler,$t)) { print $err_nosave; exit; }
	else @ftruncate($handler,ftell($handler));
	@fflush($handler); @fclose($handler);
}

if ($v_mode==11) {
	$pos=strpos($txt,'*number*'.$number.chr(10),0); if ($pos==false) { print 'error¡</span>Отсутствует'.$spanr.$name.$number.'</span>'.$px5.'Перезагрузите админку ( совместный доступ ).'.$spanr; exit; }
	$txt=@file_get_contents($path.$name.$number);
} else {
  $j=$v_index; $txh=''; $tx='';
  $tx1='<tr><td style="color:#800000;font:bold 12px arial;" colspan="'.(($j<6)?'4':'').'">error config file '.$pba_files[$j].' number: '; $tx2='</td></tr>'; $f=0;
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
}
print ''.(($v_mode==12 || $v_mode==13) ? $v_number : $number).'¡'.$txt;

function f_str($f) {
	global $v_index,$number,$file,$t3,$txt,$v_options,$name,$v_name,$v_link,$v_title,$v_keyw,$v_desc,$err_nosave,$spanr;
	$pos=strpos($txt,'*number*'.$number.chr(10),0); $pos0=strpos($txt,'*end*'.$number.chr(10).chr(10),0);
	if ($pos==0 || $pos0==0 || $pos>=$pos0) return;
	if ($f==0) {
		$str='*number*'.$number.chr(10).'*options*'.chr(9).chr(9).$v_options.chr(10).'*file*'.$t3.$name.$number.chr(10).'*name*'.$t3.$v_name.chr(10);
		if ($v_index<6) { $str.='*link*'.$t3.$v_link.chr(10).'*title*'.$t3.$v_title.chr(10).'*keyw*'.$t3.$v_keyw.chr(10).'*desc*'.$t3.$v_desc.chr(10); }
		$str.='*end*'.$number.chr(10).chr(10);
	} else $str='';
	$txt=substr($txt,0,$pos).$str.substr($txt,$pos0+7+(($number<10)?1:(($number<100)?2:3)));
	$handler=@fopen($file,'w'); if ($handler==false) { print $err_nosave; exit; }
	@rewind($handler); if (-1==@fwrite($handler,$txt)) { print $err_nosave;  exit; }
	@ftruncate($handler,ftell($handler)); @fflush($handler); @fclose($handler);
	return;
}
?>
