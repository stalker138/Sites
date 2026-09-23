<?php exit; ?>

[BEGIN LIST]

*number*1
*options*		0000000000
*file*			tpl1
*name*			Шаблон 1 (пустой - зарезервированный)
*end*1

*number*2
*options*		1000000000
*file*			tpl2
*name*			Шаблон 2 - для html-раздела HEAD - meta-теги, внешние CSS и JS-файлы.
*end*2

*number*3
*options*		0000000000
*file*			tpl3
*name*			Шаблон 3 - для html-раздела HEAD (зарезервированный)
*end*3

*number*4
*options*		1000000000
*file*			tpl4
*name*			Шаблон 4 - для html-раздела BODY  (зарезервированный)
*end*4

*number*5
*options*		0000000000
*file*			tpl5
*name*			Шаблон 5 - для html-раздела BODY - его содержимое вставляется перед завершающим тегом BODY
*end*5

*number*6
*options*		0000000000
*file*			tpl6
*name*			Шаблон 6 (пустой - зарезервированный)
*end*6

*number*7
*options*		1190000000
*file*			tpl7
*name*			Шаблон 7 - HEADER
*end*7

*number*8
*options*		1190000000
*file*			tpl8
*name*			Шаблон 8 - FOOTER
*end*8

*number*9
*options*		1150000000
*file*			tpl9
*name*			СТАТИКА - Редирект на "/" если есть файл /index.html - или ob_start() если нет файла /index.html (нужно настроить в .htaccess "DirectoryIndex")
*end*9

*number*10
*options*		1000000000
*file*			tpl10
*name*			СТАТИКА - Преобразование выдачи в одну строку и запись в файл /index.html (рядом с /index.php). Нужно настроить в .htaccess "DirectoryIndex"
*end*10

*number*11
*options*		1000000000
*file*			tpl11
*name*			Автоматизация - Подключение на страницу /inc/fns.php
*end*11

[END LIST]
