<?php
// (c) Vcorp generator 00.80 beta | 2016 | vcorp.ru

// Конфигурационный файл

$pb_crlf=chr(13).chr(10);

$pb_domain='https://elakor.shop';	// Имя домена. Используется при формировании sitemap.xml

$pb_view_info=true; // Показывать при старте админки окно информации

// $pb_sitemap_start - номер элемента-страницы в колонке page_0, начиная с которого сгенерированные php-скрипты считаются только url-страницами и могут включаться в карту сайта sitemap.xml флажками «sitemap».
// Страницы колонок page1_, page2_, page3_, page4_, page5_ всегда считаются php-скриптами страниц и могут быть включены в sitemap.xml с помощью флажков «sitemap» в окне информации админки.
// Набор и значения runtime - переменных различаются для обычных скриптов-страниц и тех, что имеют индекс 0 и номер меньше значения $pb_sitemap_start;
// Если $pb_sitemap_start == 0 - то ВСЕ страницы с индексом 0 (page0_ - первый слева столбец в админке) НЕ считаются url-страницами, а считаются php-скриптами общего назначения.
// Если $pb_sitemap_start > 0 - то url-страницами считаются скрипты, начиная с указанного номера в столбце с индексом 0 (page0_).
$pb_sitemap_start=51; // При изменении перезагрузить админку!!!

// Массивы с логинами-паролями. Может быть сколько угодно пользователей.
$pba_login=false; $pba_pass=false; $pba_name=false;
$pba_login[]='alx2024NVF'; $pba_pass[]='m24VL0O3'; $pba_name[]='Александр';		//	Александр
$pba_login[]='st321'; $pba_pass[]='st321'; $pba_name[]='Stalker321';	//	Алексей
$pba_login[]='a1s2d3'; $pba_pass[]='a1s2d3'; $pba_name[]='Алекс';			//	
//$pba_login[]='elp'; $pba_pass[]='s0901'; $pba_name[]='Общий доступ';	//	Общий доступ

// Пути для файлов и директорий ($pb_path_...) - УСТАНАВЛИВАЮТСЯ ДО ПЕРВОГО ЗАПУСКА АДМИНКИ !!!
// Админка при запуске-авторизации сама проверяет и создает всю структуру директорий, согласно нижеуказанным значениям переменных.
$pb_path_site='/';										// Корневая папка сайта (относительно корня сайта), то-есть для генерируемых страниц. ТРЕБОВАНИЕ: НАЧИНАЕТСЯ И ОКАНЧИВАЕТСЯ НА СЛЕШ /
$pb_path_root=$_SERVER["DOCUMENT_ROOT"].$pb_path_site;	// Корневая папка генерируемого веб-ресурса на сервере
$pb_path_main=$pb_path_root.'ep80/';					// Корневая папка Vcorp generator (VPB - Vcorp pages builder)
$pb_path_sources=$pb_path_main.'sources/';				// Папка с исходниками web-ресурса
// $pb_path_backup - Папка для резервной копии исходников. Для быстрого сохранения и восстановления исходников.
// Может использоваться для импорта файлов с исходниками web-ресурса при переносе сайта на другой хостинг (если существует разделение прав для php-скриптов и пользователя).
$pb_path_backup=$pb_path_main.'sources_backup/';

// Следующие наименования вложенных директорий МЕНЯТЬ НЕЛЬЗЯ : config/, pages/, templates/, blocks/, texts/
$pb_path_config=$pb_path_sources.'config/';				// МЕНЯТЬ НЕЛЬЗЯ! Папка с конфигурационными файлами исходников для генерации всех PHP-файлов WEB-ресурса
$pb_path_pages=$pb_path_sources.'pages/';				// МЕНЯТЬ НЕЛЬЗЯ! Папка исходников, страницы
$pb_path_templates=$pb_path_sources.'templates/';		// МЕНЯТЬ НЕЛЬЗЯ! Папка исходников, шаблоны
$pb_path_blocks=$pb_path_sources.'blocks/';				// МЕНЯТЬ НЕЛЬЗЯ! Папка исходников, блоки
$pb_path_texts=$pb_path_sources.'texts/';				// МЕНЯТЬ НЕЛЬЗЯ! Папка исходников, тексты
$pb_path_files=$pb_path_main.'files/';					// МЕНЯТЬ НЕЛЬЗЯ! Папка с различными файлами для работы Vcorp generator (VPB - Vcorp pages builder)

$pb_empty_url=$pb_path_site; // МЕНЯТЬ НЕЛЬЗЯ! Ссылка по-умолчанию для отсутствующего URL страницы (empty) - вставляется ПРИ ГЕНЕРАЦИИ файлов ( вместо href="empty" (или href='empty') вставляется href="$pb_empty_url" (или href='$pb_empty_url') )

// Атрибуты доступа к создаваемым директориям и файлам - УСТАНАВЛИВАЮТСЯ ДО ПЕРВОГО ЗАПУСКА АДМИНКИ !!!
$pb_attr_folders=0700;		// Права доступа к создаваемым папкам (восьмеричное число!)
$pb_attr_files=0600;		// Права доступа к создаваемым php-файлам (восьмеричное число!)

// Конфигурационные файлы в папке $pb_path_config - УСТАНАВЛИВАЮТСЯ ДО ПЕРВОГО ЗАПУСКА АДМИНКИ !!!
// При импорте и восстановлении из бекапа имена конф.файлов должны совпадать с текущими, иначе не будут найдены!!!
$pba_files=array('p0','p1','p2','p3','p4','p5','tpl','b0','b1','b2','b3','b4','b5','t0','t1','t2','t3','t4','t5');

$pb_autocheck=false;	// Если true, то по-умолчанию исходный код элементов проверяется на недопустимые включения и ссылки
$pb_titles=false;		// Если true, то по-умолчанию страницы проверяются на совпадение title
$pb_sitemap=false;		// Если true, то по-умолчанию страницы входят в карту сайта с приоритетом 0.5
$pb_search_url=true;	// Если true, то по-умолчанию проверяются существующие URL для внутренних статических ссылок <a href="">...</a>
$pb_replace_tab='    ';	// Чем заменять символ табуляции ( chr(9) )

// $pb_main_file - имя генерируемого файла по-умолчанию для URL, оканчивающегося на слеш / (например, "/contacts/"). ТРЕБОВАНИЕ: ИМЯ ФАЙЛА ДОЛЖНО БЫТЬ БЕЗ СЛЕШЕЙ.
// При изменении значения очистить сгенерированные папки и файлы и провести перегенерацию!!!
$pb_main_file='index.php';

$pb_hash=false; // Хеш авторизации. Используется в index.php

/*
	Функция авторизации (проверка правильности логина-пароля).
	Принимает параметр $flag (числовое значение).
	При успешной авторизации устанавливает глобальные переменные :
		$pb_login - Логин
		$pb_pass - Пароль
		$pb_name - Имя
	В случае неверной авторизации сеанс работы завершается, НО перед завершением :
		- если $flaf равен 0 или false или НЕ число или POST-данных нет - выдает форму авторизации
		- если $flaf > 0 - выдает строку 'error_authorization_'.$flag
	Функция создает вложенные директории и файлы для работы Vcorp generator - если они не существуют и была успешная авторизация.
*/
function fpb_authorization($flag) {
	global $pba_login,$pba_pass,$pba_name,$pb_hash,$pb_path_config,$pb_path_pages,$pb_path_templates,$pb_path_blocks,$pb_path_texts,$pb_path_files,$pb_attr_folders,$pb_attr_files,$pb_path_sources,$pb_path_backup,$pba_files,$pb_path_site,$pb_path_main,$pb_path_root;
	$txt=''; $cnt=count($pba_login); if ($flag==false) $flag=0; $flag=(int)$flag; $pb_ip=strrev($_SERVER['REMOTE_ADDR']); $pb_ua=substr($_SERVER['HTTP_USER_AGENT'],0,20); $pb_add=''; // $pb_add - может передаваться из userjs клиента
	$pb_login=false; $pb_pass=false; $pb_name=false; $pb_hash=false; // false МЕНЯТЬ НЕЛЬЗЯ! Логин-пароль и имя пользователя админки, хеш авторизации.
	if ($flag==0) {
		if (!empty($_POST['login']) && !empty($_POST['pass'])) { $pb_login=$_POST['login']; $pb_pass=$_POST['pass']; for ($i=0; $i<$cnt; $i++) { if ($pb_login==$pba_login[$i] && $pb_pass==$pba_pass[$i]) { $pb_name=$pba_name[$i]; break; } } }
	} else {
		if (!empty($_POST['hash'])) {
			$pb_hash=$_POST['hash']; for ($i=0; $i<$cnt; $i++) { $pb_login=$pba_login[$i]; $pb_pass=$pba_pass[$i]; $txt=md5('default'.$pb_pass.$pb_login.$pb_ip); if ($pb_hash==(md5($txt.$pb_login.$pb_ip).md5($txt.$pb_pass.$pb_ua).$pb_add)) { $pb_name=$pba_name[$i]; break; } }
		}
	}
	if ($pb_name!=false) { $txt=md5('default'.$pb_pass.$pb_login.$pb_ip); $pb_hash=md5($txt.$pb_login.$pb_ip).md5($txt.$pb_pass.$pb_ua); }
	if ($pb_name!=false && $flag==0) {	// Проверка и создание вложенных папок и файлов для работы

		$arr=array($pb_path_sources,$pb_path_backup);
		for ($i=0; $i<2; $i++) {
			$txt=substr($arr[$i],0,strlen($arr[$i])-1); if (is_dir($txt)==false) { @mkdir($txt,$pb_attr_folders); @chmod($txt,$pb_attr_folders); }	// Папка для исходников web-ресурса
			$txt=$arr[$i].'config'; if (is_dir($txt)==false) { @mkdir($txt,$pb_attr_folders); @chmod($txt,$pb_attr_folders); }	// Папка для конфигурационных файлов
			$txt=$arr[$i].'pages'; if (is_dir($txt)==false) { @mkdir($txt,$pb_attr_folders); @chmod($txt,$pb_attr_folders); }	// Папка для страниц
			$txt=$arr[$i].'templates'; if (is_dir($txt)==false) { @mkdir($txt,$pb_attr_folders); @chmod($txt,$pb_attr_folders); }	// Папка для шаблонов
			$txt=$arr[$i].'blocks'; if (is_dir($txt)==false) { @mkdir($txt,$pb_attr_folders); @chmod($txt,$pb_attr_folders); }	// Папка для блоков
			$txt=$arr[$i].'texts'; if (is_dir($txt)==false) { @mkdir($txt,$pb_attr_folders); @chmod($txt,$pb_attr_folders); }	// Папка для текстов
		}
		$txt=substr($pb_path_files,0,strlen($pb_path_files)-1); if (is_dir($txt)==false) { @mkdir($txt,$pb_attr_folders); @chmod($txt,$pb_attr_folders); }	// Папка для служебных файлов
		
		$arr=array($pb_path_config,$pb_path_pages,$pb_path_templates,$pb_path_blocks,$pb_path_texts,$pb_path_files,$pb_path_sources,
					$pb_path_backup,$pb_path_backup.'config/',$pb_path_backup.'pages/',$pb_path_backup.'templates/',$pb_path_backup.'blocks/',$pb_path_backup.'texts/');
		$cnt=count($arr);
		for ($i=0; $i<$cnt; $i++) {	// Создание файлов .htaccess с запретом HTTP-доступа к исходникам.
			$txt=$arr[$i].'.htaccess';
			if (@file_exists($txt)==false) {
				$h=fopen($txt,'w'); if ($h==false) { print 'не удалось открыть файл<br>'.$txt.'<br>для записи.'; @fclose($h); exit; }
				@rewind($h); if (-1==@fwrite($h,'Order allow,deny'.chr(10).'deny from all'.chr(10).'AddDefaultCharset utf-8'.chr(10))) { print 'Не удалось записать в файл '.$txt; @fflush($h); @fclose($h); exit; }
				@ftruncate($h,ftell($h)); @fflush($h); @fclose($h); @chmod($txt,$pb_attr_files);
			}
		}
		$cnt=count($pba_files);
		for ($i=0; $i<$cnt; $i++) {	// Создание конфигурационных файлов в папке $pb_path_config
			$txt=$pb_path_config.$pba_files[$i].'.php';
			if (@file_exists($txt)==false) {
				$h=fopen($txt,'w'); if ($h==false) { print 'не удалось открыть файл<br>'.$txt.'<br>для записи.'; @fclose($h); exit; }
				@rewind($h); if (-1==@fwrite($h,'<?php exit; ?>'.chr(10).chr(10).'[BEGIN LIST]'.chr(10).chr(10).'[END LIST]'.chr(10))) { print 'Не удалось записать в файл '.$txt; @fflush($h); @fclose($h); exit; }
				@ftruncate($h,ftell($h)); @fflush($h); @fclose($h); @chmod($txt,$pb_attr_files);
			}
		}
	}
	$txt='error_authorization_'.$flag;
	if ($pb_name==false && $flag==0) {
		$txt='<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
		$txt.='<title>Vcorp generator</title><meta name="robots" content="noindex, nofollow"></head><body><form id="form1" action="';
		$txt.=$pb_path_site.substr($pb_path_main,strlen($pb_path_root)).'" method="POST" enctype="application/x-www-form-urlencoded">';
		$txt.='<table style="margin:auto;text-align:center;position:relative;top:200px;letter-spacing:1px;"><tr><td colspan="2" style="text-align:center;color:#800000;">Vcorp generator 00.80 beta 2016</td></tr>';
		$txt.='<tr><td><table style="text-align:center;letter-spacing:1px;"><tr><td>login</td><td><input id="idlog" type="text" name="login" value="" maxlength="10"></td></tr>';
		$txt.='<tr><td>pass</td><td><input type="password" name="pass" value="" maxlength="10"></td></tr></table></td><td style="text-align:center;"><input type="submit" value="enter" style="height:40px;"></td></tr>';
		$txt.='</table></form><script type="text/javascript">document.getElementById("idlog").focus()</script></body></html>';
	}
	if ($flag==0 && $pb_login!=false && $pb_pass!=false) {
		if ($pb_name==false) $pb_name='error: login='.$pb_login.' pass='.$pb_pass; else $txt='';
		$h=@fopen($pb_path_files.'connect_log','a+');
		if ($h) {
			@fwrite($h,date("Y-m-d").' '.date("H:i:s").chr(9).chr(9).$_SERVER['REMOTE_ADDR'].chr(9).chr(9).$_SERVER['HTTP_USER_AGENT'].chr(9).$pb_name.chr(10));
			@fclose($h);
		}
	}
	if ($flag>0 && $pb_name!=false) $txt='';
	if ($txt) { print $txt; exit; }
}

/*
	Функция для удаления экранирующих символов "\" из содержимого POST-параметра
	Параметры: $name - имя принимаемого POST-параметра
	Возвращает содержимое без экранирующих слешей или false, если такого POST-параметра нет
*/
function fpb_post($name) {
	$ret=$_POST[$name]; if ($ret==false) return false;
	return (get_magic_quotes_gpc() ? stripslashes($ret) : $ret);
}

function f_cl($txt) {
global $t; $t1='{*'.$txt;
while (true) {
	$pos1=strpos($t,$t1); if ($pos1===false) break; $pos2=strpos($t,'*}',$pos1); $pos3=strpos($t,'{*',$pos1+1); if ($pos2===false || ($pos3!=false && $pos2>$pos3)) break;
	$t=substr($t,0,$pos1).substr($t,$pos2+2);
}
}
?>