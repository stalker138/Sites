<?php
// (c) Asw pages builder 00.77 beta | asws | 2010-2015 | asws.ru

// Генерация исходников (элементов) с авто-проверкой.

include "config.php"; fpb_authorization(2);

$v_mode=(int)$_POST['mode']; $v_index=(int)$_POST['index']; $v_number=(int)$_POST['number'];
if ($v_mode!=30 || $v_index<0 || $v_index>6 || $v_number<0 || $v_number>999 || ($v_index==0 && $v_number!=0)) { print 'error_authorization_2'; exit; }

$tx=false; $spanr=' <span style="font:bold 13px arial;color:#800000">';
for ($i=0; $i<6; $i++) {
	$tx[$i]=@file_get_contents($pb_path_config.$pba_files[$i].'.php'); if($tx[$i]==false) { exit; }
}
for ($i=6; $i<19; $i++) {
	$tt[$i]=@file_get_contents($pb_path_config.$pba_files[$i].'.php'); if($tt[$i]==false) { exit; }
}

$px5='<div class="px5"></div>'; $px10='<div class="px10"></div>'; $px15='<div class="px15"></div>'; $check_url=strlen(substr($pb_path_main,strlen($pb_path_root)-1));
$t3=chr(9).chr(9).chr(9); $v_name=''; $v_link=''; $v_title=''; $v_keyw=''; $v_desc='';
$t1='error¡</span>Нет закрывающих&nbsp;&nbsp;&nbsp;'.$spanr.'*}</span>&nbsp;&nbsp;&nbsp;для&nbsp;&nbsp;&nbsp;'.$spanr; $t4='error¡</span>Неправильное вложение'.$spanr;
$t5='error¡</span>Отсутствует '; $tmp0='error¡</span>Отсутствует'.$spanr.'&gt;</span> или завершающий тег'.$spanr.'&lt;/';
$tmp1='error¡</span>Отсутствует кавычка'.$spanr.'&lt;a href='; $tmp2='error¡</span>Отсутствует завершающая кавычка'.$spanr.'&lt;a href='; $tmt1='error¡'.$px15.'Проверьте конфигурационный файл ';
$tmp3='error¡</span>Неправильная ссылка'.$spanr;

// Генерация
for ($j=0; $j<6; $j++) {
  if ($v_index>0) $j=$v_index-1; $txt=$tx[$j]; $pos0=0;
  for ($i=1; $i<1000; $i++) {
	if ($v_number!=0) $i=$v_number; $pos=strpos($txt,'*number*'.$i.chr(10),$pos0); if ($pos==false) {
		if ($v_number!=0) { print 'error¡</span>'.$px5.'Отсутствует страница'.$spanr.'page'.$j.'_'.$i.'</span>'.$px5.'Перезагрузите админку ( совместный доступ ).'.$spanr; exit; }
		$pos=strpos($txt,'*number*',$pos0); if ($pos!=false && $pos>=$pos0) {
			$pos1=strpos($txt,chr(10),$pos); if ($pos1==false) { print $tmt1.$pba_files[$j].'.php'; exit; }
			$i=(int)substr($txt,$pos+8,$pos1-$pos-8); 
		} else { $i=1000; continue; }
	} $pos0=$pos+8; $pos1=strpos($txt,'*end*'.$i.chr(10),$pos); $v_link=strpos($txt,'*link*'.$t3,$pos);
	if ($pos1==false || $v_link==false || $v_link>$pos1) { print $tmt1.$pba_files[$j].'.php'; exit; }
	$t=@file_get_contents($pb_path_pages.'page'.$j.'_'.$i); if($t==false) { if($v_number!=0) { print 'ok¡Отсутствует содержимое страницы'.$spanr.'page'.$j.'_'.$v_number.'</span>'; exit; } else continue; }
	$pos2=strpos($txt,chr(10),$v_link); $v_link=substr($txt,$v_link+9,$pos2-$v_link-9); // $v_link - URL страницы для генерации.
	if ($v_link=='empty') { if ($v_number==0) continue; else { print 'ok¡Пустой URL страницы'.$spanr.'page'.($v_index-1).'_'.$v_number.'</span>'; exit; } }
	$t7='</span>'.$px5.'Страница '.$spanr.'page'.$j.'_'.$i;
	if (strpos($v_link,'//',0)!==false) { print 'error¡</span>Двойной слеш'.$spanr.'//</span> в URL'.$t7; exit; }
	if (strpos($v_link,' ',0)!==false) { print 'error¡</span>Неправильный URL ( есть '.$spanr.'пробелы</span> )'.$t7; exit; }
	if (strpos($v_link,'#',0)!==false) { print 'error¡</span>Неправильный URL ( недопустимый символ '.$spanr.'#</span> )'.$t7; exit; }
	if (strpos($v_link,'\\',0)!==false) { print 'error¡</span>Неправильный URL ( присутствует обратный слеш '.$spanr.'\</span> )'.$t7; exit; }
	if (strpos($v_link,'./',0)!==false) { print 'error¡</span>Неправильный URL ( относительный '.$spanr.'./</span> )'.$t7; exit; }
    if ($v_link!=='/' && strpos($v_link,'/',1)==false && strpos($v_link,'.',0)==false) { print 'error¡</span>Неправильный URL<br>Не указано расширение файла '.$spanr.'.</span> или слеш '.$spanr.'/</span> в конце - для папки'.$t7; exit; }
	if (substr($v_link,0,$check_url)==substr($pb_path_main,-$check_url)) { print 'error¡</span>Неправильный URL ( директория '.$spanr.'Asw pages builder</span> )'.$t7; exit; }

	$pos2=strpos($txt,'*title*'.$t3,$pos); $pos2+=10; $pos3=strpos($txt,chr(10),$pos2); if ($pos2==false || $pos3==false || $pos2<$pos || $pos3<$pos2) { print $tmt1.$pba_files[$j].'.php'; exit; }
	$v_title=trim(substr($txt,$pos2,$pos3-$pos2)); $v_title = (empty($v_title)||$v_title=='empty') ? ' ' : htmlspecialchars($v_title);
	$pos2=strpos($txt,'*keyw*'.$t3,$pos); $pos2+=9; $pos3=strpos($txt,chr(10),$pos2); if ($pos2==false || $pos3==false || $pos2<$pos || $pos3<$pos2) { print $tmt1.$pba_files[$j].'.php'; exit; }
	$v_keyw=trim(substr($txt,$pos2,$pos3-$pos2)); $v_keyw = (empty($v_keyw)||$v_keyw=='empty') ? ' ' : htmlspecialchars($v_keyw);
	$pos2=strpos($txt,'*desc*'.$t3,$pos); $pos2+=9; $pos3=strpos($txt,chr(10),$pos2); if ($pos2==false || $pos3==false || $pos2<$pos || $pos3<$pos2) { print $tmt1.$pba_files[$j].'.php'; exit; }
	$v_desc=trim(substr($txt,$pos2,$pos3-$pos2)); $v_desc = (empty($v_desc)||$v_desc=='empty') ? ' ' : htmlspecialchars($v_desc);

		$t=preg_replace('/\t/',$pb_replace_tab,$t);
		$t=preg_replace('/\r/','',$t);
		$t=preg_replace('/{\*page/i','{*page',$t); f_cl('page');
		// Перевод в нижний регистр
		$t=preg_replace('/{\*tpl/i','{*tpl',$t);
		$t=preg_replace('/{\*block/i','{*block',$t);
		$t=preg_replace('/{\*text/i','{*text',$t);

	$t2='</span>'.$px5.'Страница '.$spanr.'page'.$j.'_'.$i;
	//  Проверка и вставка системного шаблона {*tpl0*} - если он указан
	$pos2=strpos($t,'{*tpl0*}',0); if ($pos2!=false) { // Если вставлять title,keywords,description необходимо ТОЛЬКО php-файлам, то раскомментировать 1 и 3 строки ниже.
	  // $file=$v_link; if (substr($file,-1)=='/') $file.=$pb_main_file; if (substr($file,-4)=='.php') {
		$t=substr($t,0,$pos2).'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><title>'.$v_title.'</title><meta name="keywords" content="'.$v_keyw.'"/><meta name="description" content="'.$v_desc.'"/><meta name="generator" content="Asw_pages_builder_0077" />'.substr($t,$pos2+8);
	  // }
	} $t=preg_replace('/{\*tpl0\*}/i','',$t);
	$pos2=0; // Замена {*tplN*} на содержимое
	while (true) {
		$pos2=strpos($t,'{*tpl',$pos2); if ($pos2===false) break;
		$n=(int)substr($t,$pos2+5,4); if ($n<0 || $n>999) { print $t4.substr($t,$pos2,10).$t2; exit; }
		$pos3=strpos($t,'*}',$pos2); $pos4=strpos($t,'{*',$pos2+2);
		if ($pos3==false || ($pos3>0 && $pos4>0 && $pos3>$pos4)) { if ($n>0) { print $t1.'{*tpl'.$n.$t2; exit; } }
		if ($n==0) $pos2+=2; else {
			$repl=@file_get_contents($pb_path_templates.'tpl'.$n); if ($repl==false) $repl=''; $t=substr($t,0,$pos2).$repl.substr($t,$pos3+2);
			$pos2+=strlen($repl);
		}
	}

	// Замена {*block0_N*}, {*block1_N*}, ... , {*block5_N*} на содержимое
	for ($k=0; $k<10; $k++) {
		$pos2=0; $b='{*block'.$k.'_'; while (true) {
			$pos2=strpos($t,$b,$pos2); if ($pos2===false) break; if ($k>5) { print $t4.substr($t,$pos2,10).$t2; exit; }
			$n=(int)substr($t,$pos2+9,4); if ($n<1 || $n>999) { print $t4.substr($t,$pos2,13).$t2; exit; }
			$pos3=strpos($t,'*}',$pos2); $pos4=strpos($t,'{*',$pos2+2);
			if ($pos3==false || ($pos3>0 && $pos4>0 && $pos3>$pos4)) { print $t1.$b.$n.$t2; exit; }
			$repl=@file_get_contents($pb_path_blocks.substr($b,2).$n); if ($repl==false) $repl=''; $t=substr($t,0,$pos2).$repl.substr($t,$pos3+2);
			$pos2+=strlen($repl);
		}
	} // $pos2=strpos($t,'{*block',0); if ($pos2!=false) { print $t4.substr($t,$pos2,10).$t2; exit; }

	// Замена {*text0_N*}, ... , {*text5_N*} на содержимое
	for ($k=0; $k<10; $k++) {
		$pos2=0; $b='{*text'.$k.'_'; while (true) {
			$pos2=strpos($t,$b,$pos2); if ($pos2===false) break; if ($k>5) { print $t4.substr($t,$pos2,10).$t2; exit; }
			$n=(int)substr($t,$pos2+8,4); if ($n<1 || $n>999) { print $t4.substr($t,$pos2,12).$t2; exit; }
			$pos3=strpos($t,'*}',$pos2); $pos4=strpos($t,'{*',$pos2+2);
			if ($pos3==false || ($pos3>0 && $pos4>0 && $pos3>$pos4)) { print $t1.$b.$n.$t2; exit; }
			$repl=@file_get_contents($pb_path_texts.substr($b,2).$n); if ($repl==false) $repl=''; $t=substr($t,0,$pos2).$repl.substr($t,$pos3+2);
			$pos2+=strlen($repl);
		}
	} // $pos2=strpos($t,'{*text',0); if ($pos2!=false) { print $t4.substr($t,$pos2,10).$t2; exit; }
	f_cl('tpl'); f_cl('block'); f_cl('text');

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

	$pos=0; $t6='</span>&nbsp;&nbsp;&nbsp;- Страница'.$spanr.'page'.$j.'_'.$i;
	while (true) { $pos2=$pos; $pos=strpos($t,'<a ',$pos2); if ($pos===false) break; $pos1=strpos($t,'</a>',$pos); $pos3=strpos($t,'>',$pos); $pos4=strpos($t,'<a ',$pos+1); $pos5=strpos($t,'<l',$pos);
	if ($pos1==false || $pos3>$pos1 || ($pos4!=false && $pos1>$pos4) || ($pos5!=false && $pos1>$pos5)) { print $tmp0.'a&gt;'.$px5.htmlspecialchars(substr($t,$pos,30)).'…'.$t6; exit; } $pos=$pos+2; }
	// Проверка ссылок <a href=
	$pos=0; while (true) {
		$pos2=$pos; $pos=strpos($t,'<a href=',$pos2); if ($pos===false) break; $pq=substr($t,$pos+8,1); if ($pq!='"' && $pq!="'") { print $tmp1.'?'.$px5.htmlspecialchars(substr($t,$pos,30)).'…'.$t6; exit; }
		$pos+=9; $pos1=strpos($t,$pq,$pos); $pos3=strpos($t,'>',$pos); if ($pos1==false || $pos3==false || $pos3<$pos1) { print $tmp2.$pq.'…?'.$px5.htmlspecialchars(substr($t,$pos-9,30)).'…'.$t6; exit; }
		$link=substr($t,$pos,$pos1-$pos); $pos3=strpos($link,'//'); if ($pos3!==false && $pos3>0) $pos3=!(($pos3-1)==strpos($link,'://'));
		if ($pos3!==false || strpos($link,'\\')!=false) { print $tmp3.'&lt;a href='.$pq.'…'.$px5.htmlspecialchars(substr($t,$pos-9,30)).'…'.$t6; exit; }
		if ($link=='empty') { $link=$pb_empty_url; $t=substr($t,0,$pos).str_replace('//','/',$link).substr($t,$pos1); }
		if ($pb_search_url) { // Проверка существующих внутренних URL
			$pos3=strpos($link,'#'); $pos3 = ($pos3==false) ? $link : substr($link,0,$pos3);
			if ($link!=$pb_empty_url && (substr($link,0,1)!='#') && (substr($link,0,10)!='javascript') && (substr($link,0,7)!='mailto:') && (substr($link,0,7)!='http://') && (substr($link,0,8)!='https://')) for ($k=0; $k<6; $k++) { $pos1=strpos($tx[$k],('*link*'.$t3.$pos3.chr(10)),0); if($pos1>0) break; }
			if($pos1==false) { print 'error¡Отсутствует URL</span> - ссылка со страницы: '.$spanr.'page'.$j.'_'.$i.$px5.$spanr.htmlspecialchars('"'.$pos3.'"'); exit; }
		}
	}
	// Проверка и генерация для ссылок <l0 id=, <l1 id=, <l2 id=, <l3 id=, <l4 id=, <l5 id=
	for ($k=0; $k<6; $k++) {
	  $pos2=0; $b='<l'.$k.' id='; while (true) {
		$pos4=$pos2; $pq='"'; $pos7=strpos($t,$b,$pos4); if ($pos7===false) break; $pos2=strpos($t,$b.$pq,$pos4); if ($pos2===false) { $pq="'"; $pos2=strpos($t,$b."'",$pos4); }
		if ($pos2===false) { print $t5.'кавычка '.$spanr.htmlspecialchars($b.'?').'</span>'.$px5.htmlspecialchars(substr($t,$pos7,30)).'… '.$t6; exit; }
		$pos3=strpos($t,$pq,$pos2+8); if ($pos3==false) { print $t5.'завершающая кавычка '.$spanr.htmlspecialchars($b.$pq.'...?').'</span>'.$px5.htmlspecialchars(substr($t,$pos7,30)).'…'.$t6; exit; }
		$repl=substr($t,$pos2+8,$pos3-$pos2-8);  if (strpos($repl,' ')!=false) { print $tmp3.htmlspecialchars($b.$pq.'...').'</span>'.$px5.htmlspecialchars(substr($t,$pos7,30)).'…'.$t6; exit; }
		$pos4=strpos($repl,'#'); $replAdd = ($pos4==false) ? '' : substr($repl,$pos4);
		$n=(int)substr($t,$pos2+8,3); if ($n<=0) { print 'error¡</span>Неправильный'.$spanr.'id'.$px5.htmlspecialchars(substr($t,$pos7,11)).'…'.$t6; exit; }

		$pos4=strpos($tx[$k],'*number*'.$n.chr(10)); if ($pos4==false) { print 'error¡</span>Неправильный'.$spanr.'id'.$px5.htmlspecialchars(substr($t,$pos7,11)).'…'.$t6; exit; }
		$pos5=strpos($tx[$k],'*link*'.$t3,$pos4); if ($pos5==false) { print $tmt1.$pba_files[$k].'.php'; exit; }
		$pos4=strpos($tx[$k],'*end*'.$n.chr(10)); if ($pos5>$pos4) { print $tmt1.$pba_files[$k].'.php'; exit; }
		$pos6=strpos($tx[$k],chr(10),$pos5); if ($pos6==false) { print $tmt1.$pba_files[$k].'.php'; exit; }

		$repl=substr($tx[$k],$pos5+9,$pos6-$pos5-9); if ($repl=='empty') $repl='<a href='.$pq.$pb_empty_url.$replAdd.$pq; else {
			if ($repl==('/'.$pb_main_file)) $repl='/'; if (substr($repl,0,1)=='/') $repl=substr($repl,1); $repl='<a href='.$pq.$pb_path_site.$repl.$replAdd.$pq;
		} $t=substr($t,0,$pos2).$repl.substr($t,$pos3+1);
		$pos4=strpos($t,'</l'.$k.'>',$pos2); $pos5=strpos($t,'>',$pos2); if ($pos4==false || $pos4<$pos5) { print $t5.$spanr.'&gt;</span> или завершающий тег'.$spanr.'&lt;/l'.$k.'></span>'.$px5.'для тега'.$spanr.htmlspecialchars($b.$pq.$n.$replAdd.$pq).'</span>'.$t6; exit; }
		$t=substr($t,0,$pos4).'</a>'.substr($t,$pos4+5);
		$pos2+=strlen($repl); $repl='';
	  }
	}

	// Запись сгенерированного php - файла по указанному URL
	if ($v_mode==30) {
		$file=$v_link; if (substr($file,-1)=='/') $file.=$pb_main_file; @chmod($pb_path_root.substr($v_link,0,strlen($v_link)-1),$pb_attr_folders);
		if (substr($file,-4)=='.php') { // Если php-файл, то первой строкой генерируются RunTime - переменные:
		  $repl='<?php $pb_root="'.$pb_path_root.'"; $pb_start_site="'.$pb_path_site.'"; '; // Текущая папка корня веб-ресурса (например для возможности делать include независимо от реального местоположения скриптов).
		  if ($j==0 && ($pb_sitemap_start==0 || $pb_sitemap_start>=$i)) { // Если php-скрипт общего назначения (не только url-страница). ВСЕГДА в колонке page0_ !!!
			$repl.='$pb_php'.$i.'=true;'; // Наличие переменной $pb_phpN (где N - номер в колонке page0_) говорит о включении этого php-скрипта в конечный php-скрипт.
		  } else { // Остальные php-скрипты (url - страницы).
			$repl.='$pb_page="'.($j*1000+$i).'"; $pb_page_index='.$j.'; $pb_page_number='.$i.'; $pb_short_url="'.$v_link.'"; $pb_full_url="'.str_replace('//','/',($pb_path_site.$v_link)).'"; $pb_full_path="'.str_replace('//','/',($pb_path_root.$v_link)).'";';
		  } $t=$repl.' ?>'.chr(10).$t;
		}
		if (substr($file,0,1)=='/') $file=substr($file,1);
		$file=$pb_path_root.$file;
		// Следующую одну строку можно закомментировать, если в директории рядом с php-файлом /index.php  МОЖЕТ находиться не связанный с ним html-выдачей файл /index.html
		if ($pb_main_file=='index.php' && substr($file,-10)==('/'.$pb_main_file)) { $fh=substr($file,0,strlen($file)-3).'html'; if (file_exists($fh)) @unlink($fh); } // Удаление кеша (файла /index.html)
		@chmod($file, $pb_attr_files); $fh=@fopen($file,'w');
		if ($fh==false) {
			$ar=explode('/',$v_link); $r=$pb_path_root; $r=substr($r,0,strlen($r)-1); $cnt=count($ar); $c=0;
			if ($cnt>0) {
			  $cnt-=1; foreach ($ar as $af) {
				if ($af!=trim($af)) { print 'error¡</span>Неправильный URL (есть пробелы)'.$t7; exit; }
				if (!empty($af)) {
					$r.='/'.$af;
					if (is_dir($r)==false && $c<$cnt) { @mkdir($r,$pb_attr_folders); @chmod($r,$pb_attr_folders); }
				} $c+=1;
			  }
			  @chmod($file, $pb_attr_files); $fh=@fopen($file,'w');
			}
		}
		if ($fh==false) { @fclose($fh); print 'error¡Не удалось записать файл:'.$px5.$file; exit; }
		@rewind($fh); if (-1==@fwrite($fh,$t)) { @fflush($fh); @fclose($fh); print 'error¡Не удалось записать файл:'.$px5.$file; exit; }
		else { @ftruncate($fh,ftell($fh)); }
		@fflush($fh); @fclose($fh); @chmod($file, $pb_attr_files);
	}

	if ($v_number!=0) break;
  }
  if ($v_index>0) break;
}
if ($v_index>0 && $v_number==0) print 'ok¡Генерация страниц с индексом'.$spanr.'page'.($v_index-1).'_</span> завершена';
if ($v_index>0 && $v_number>0) print 'ok¡Генерация страницы'.$spanr.'page'.($v_index-1).'_'.$v_number.'</span> завершена';
if ($v_index==0 && $v_number==0) print 'ok¡Генерация всех страниц завершена';
?>