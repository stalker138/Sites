var v_storage=0, v_layer=null, v_dialogEsc=0, v_descSH, v_esc=0, v_interval=null, v_intvl = null, v_int_cap=null, v_mode=0, v_setsb=0, v_IE18=0, v_queryHttp=0, v_queryXHR=0, v_sessionID, v_cap='', v_capID, v_XHRC=$.httpNew(), v_XHR=$.httpNew();
var v_cb='<div class="px', v_cp='"></div>', v_px0=v_cb+'0'+v_cp,v_px0b=v_cb+'0b'+v_cp,v_px1=v_cb+'1'+v_cp,v_px3=v_cb+'3'+v_cp,v_px3b=v_cb+'3b'+v_cp,v_px5=v_cb+'5'+v_cp,v_px5b=v_cb+'5b'+v_cp,v_px10=v_cb+'10'+v_cp,v_px10b=v_cb+'10b'+v_cp,v_px15=v_cb+'15'+v_cp,v_px15b=v_cb+'15b'+v_cp,v_px20=v_cb+'20'+v_cp,v_px20b=v_cb+'20b'+v_cp,v_px25=v_cb+'25'+v_cp,v_px25b=v_cb+'25b'+v_cp,v_px30=v_cb+'30'+v_cp,v_px30b=v_cb+'30b'+v_cp;
var v_wlh=window.location.href,o_pageToUp=null,v_page=0,v_zlist,v_fields,v_spIDmail='im.ruteohim@teoh';
var v_aPages,v_smls_txt = '<div style="cursor:pointer;float:left;width:105px;margin:0;padding:5px 0;text-align:center;font-size:11px;text-decoration:underline;" onclick="f_smiles(0)">Cмотреть отзывы</div>';

function f_show_query(){ /* При AJAX-запросе в процессе получения ответа от сервера добавляет слой поверх страницы.  */
	var l,t; v_layer = $.addLayer(0,'#808080',260,0,0); v_descSH = $.aOpacity(v_layer,1000,100,0,1); $.uEnv();
	l=parseInt($.gCW()/2-150,10); t=parseInt($.gCH()/2-100,10); if(l<0)l=0; if(t<0)t=0; v_queryXHR=1;
	v_layer.innerHTML='<div style="position:fixed;left:'+l+'px;top:'+t+'px;width:300px;height:150px;border:solid 1px #0969a3;"><table class="twajax"><tbody><tr><td>Please wait...'+v_px10+'Пожалуйста, подождите...</td></tr></tbody></table></div>';
}function f_hide_query(){ if(v_interval)clearInterval(v_interval); v_interval=null; v_queryXHR=0; if(v_descSH>=0)$.aClear(v_descSH); $.removeLayer(v_layer); v_layer=null; }

/* Замена табуляций и спец-символов в тексте. */
function f_replace(s,f) {
	s=$.trim(s.replace(/\¡/gm,'i').replace(/\'/gm,'’').replace(/\"/gm,'”').replace(new RegExp($.gCC(9),'g'),' '));
	f=f||0; if (f) { s=s.replace(new RegExp($.gCC(10),'g'),''); s=s.replace(new RegExp($.gCC(13),'g'),''); }
	return s;
}

/* check E-mail */
function f_checkEmail(s){ var em=new RegExp("[^@]+@[^@]+\.[a-zA-Z]{2,6}"); return (s.indexOf('.')>0 && em.test(s)); }

/* Функции вывода окон сообщений */
function f_mesNot() { f_message('<div class="pb_ah0">Message</div>','In developing...',200,100);}
function f_mesErr(ht, bt, w, h, b, s) { ht = '<div class="pb_ahr">'+ht+'</div>'; f_message(ht, bt, w, h, b, s); }
function f_mesXRST(s) { f_mesErr('Ошибка связи. Статус:'+s,'Временные технические проблемы.'+v_px5+'Повторите позже.',320,120); }
function f_message(ht, bt, w, h, b, s) {
	var f = bt.indexOf('<input'); $.wDelete(1); if((!b||b==1))v_esc=1;
	if((f == -1) && (!b || b==1)) { h+=30; bt += v_px15 + '<input type="button" class="pb_buttons" id="idMsgOK" value="Ok" style="width:70px;height:30px;" onclick="$.wDelete(1,1)"/>'; }
	$.wAlert(ht, v_px5+bt, w, h, b, s); if(f == -1 && (!b || b==1)) $.id('idMsgOK').focus();
}

/* Открыть / закрыть мобильное меню слева */
function f_ltblock(e) {
	var t, b=$.B, p=$.id('mlblock'), l=$.id('ltblock'), f0=$.id('ya-site-form0'), f1=$.id('ya-site-form1'), w=parseInt($.gStyle(p,'width'),10); e=e||window.event;
	t = e.target||e.srcElement; while (t!=b&&t!=l&&t!=p&&t!=f0&&t!=f1)t=t.parentNode; if((w>100&&t==p)||t==f0||t==f1)return; $._(24)(e);
	p.style.width = (w<100?310:50)+'px'; p.style.height = (w<100?'auto':'40px');
	$.id('ltblock').style.height = w<100?'50px':'auto';
	$.id('mmenu').style.visibility = w<100?'visible':'hidden';
	$.id('melakor').style.display = w<100?'block':'none';
	/* $.id('m_teohim').style.display = w<100?'block':'none'; */
}

/* Инициаллизация массива заказанных материалов */
function f_init_zlist() { v_zlist=[[0,'']]; /* [общ.кол-во, общ.сумма] */ for(i=1; i<351; i+=1) { v_zlist[i] = [i,0,'','']; /* [код, кол-во, цена, сумма] */ } }
/* Проверка на страницу ЗАКАЗ и заполнение полей с текущим количеством заказанных материалов. */
function f_set_zlist() { if (v_page==221) { for (i = 11; i < 351; i+=1) { p=$.id('idInp' + i); if(p) p.value = v_zlist[i][1]; } } }

/* Печать страницы - открытие страницы с контентом для печати */
function f_print() {
	var p, u=v_wlh, i=u.indexOf('.ru/'); if (v_page>202 && v_page<207) u+='print.php'; else u='/print/'+u.substr(i+4);
	p=window.open(u,'','left='+(($.uEnv()?0:0)+$.gCW()/2-425)+',top=50,height='+($.gCH()-100)+',width=850,resizable=yes,scrollbars=yes,status=yes,location=no,directories=no,menubar=no');
	p.focus();
}
/* Плавная прокрутка страницы до верха или низа */
function f_bup(e) { var p=window.pageYOffset||document.documentElement.scrollTop; $._(24)(e); if(p>0&&o_pageToUp==null) { o_pageToUp=setInterval(function(){var t, p=window.pageYOffset||document.documentElement.scrollTop; if (p>200) t=v_IE18?(p/4):(p/2+p/4); else t=((v_IE18&&p<40)||(!v_IE18&&p<20))?0:(v_IE18?(p/10):(p/2)); window.scrollTo(0,t); if (p<20){clearInterval(o_pageToUp);o_pageToUp=null;}},30) } }
/*
function f_down(e) { var pH,sT,cH; $.uEnv(); pH=$.gPH(); sT=$.gPST(); cH=$.gCH(); if(sT<(pH-cH-20)&&o_pageToUp==null) { o_pageToUp=setInterval(function(){var pH,sT,cH; $.uEnv(); pH=$.gPH(); sT=$.gPST(); cH=$.gCH(); if(sT<(pH-cH-20)) { window.scrollTo(0,Math.round(sT+(pH/(v_IE18?4:15)))); } else {window.scrollTo(0,pH);clearInterval(o_pageToUp);o_pageToUp=null;}},30) } }
*/

/* ***************************************************************************************************************************************** */
/* СТАРТОВАЯ ФУНКЦИЯ (Авто-вызов с параметром v - версия VcorpJS). Стартует по событию DOMContentLoaded - готовности страницы к отображению. */
function vcorpJS_onload(v) {
var a,p,i,t=' <'+'a target="_blank" href="http://www.',a=['google.com/chrome','mozilla.org/en-US/firefox/new/','opera.com/download','apple.com/safari/','microsoft.com/downloads'];
v_storage=window.localStorage?window.localStorage:0;
if (!v_storage){f_mesErr('Ограничение','Ваш браузер устарел'+v_px5+'и нуждается в замене.',450,130,3); return; }
if (v!='vcorp_js_00_01') { f_mesErr('Диагностика','Неверная версия JS-библиотеки<br>(необходима сборка vcorp_js_00_01)'+v_px5+'Обновите (перезагрузите) страницу.'+v_px5+'Рекомендуется сбросить кеш браузера.',320,150,3); return false; }

v_cb='/auto/cb.php'; v_cp='/auto/get_cnew.php';
v_sessionID='00000'+Math.round(Math.random()*90000); v_sessionID=parseInt(v_sessionID.substr(v_sessionID.length-5,5),10)||0;
v_capID='0'+Math.round(Math.random()*9); v_capID=parseInt(v_capID.substr(v_capID.length-1,1),10)||0; if(v_capID<1||v_capID>9) v_capID=1;

p=$.id('datePrice'); if(p) { t=new Date(); i=(t.getMonth()+1).toString(); if(i.length==1) i='0'+i; p.innerHTML='Дата '+(t.getDate().toString()+'.'+i+'.'+t.getFullYear().toString()); }
$.uCheckeds("if(!this.id)return;if(this.id=='idpc'){$.id(idText).innerHTML='&nbsp;';return;}");

p=$.id('mmenu'); if (p) {
  $.iMenu('mmenu'); p.style.visibility='hidden'; /* Инициализация мобильного меню слева */
  $.EH.add('ltblock','click',f_ltblock); $.EH.add('mlblock','click',f_ltblock); /* Установка обработчика клика по полосе слева, для экранов менее 1000 точек */
  $.EH.add($.B,'click',function(e){ /* При любом клике по странице, проверка - не открыто-ли мобильное меню слева, и авто-закрытие если открыто. */
    var p,l=$.id('mlblock'),b=$.B,w=parseInt($.gStyle(l,'width'),10);
    if(w<100)return; e=e||window.event; p=e.target||e.srcElement;
    while (p!=b&&p!=l)p=p.parentNode; if(p!=l)f_ltblock(e);
  });
} else {
	if($.id('ltblock')) f_predAuth(0);
}
/* По клавише <Esc> убирает окно сообщения или диалоговое окно - Если не было редактирования (v_esc==1 и/или v_dialogEsc==1) */
$.EH.add(document,'keydown',function(e){e=e||window.event; if(v_esc>0&&e.keyCode==27) {if($.id('pb__alert')){$.wDelete(1,1);if(!$.isDialog()||v_dialogEsc==1)v_esc=0;$._(24)(e);return}if($.isDialog()){if(v_dialogEsc==1){v_dialogEsc=0;$.removeDialog();$._(24)(e);}else v_esc=1;}}});
p=$.id('scrltop'); if(p) {
	$.EH.add(p,'click',f_bup);
	a=window.pageYOffset||document.documentElement.scrollTop; p.style.visibility=a>300?'visible':'hidden';
}
/* $.EH.add(window,'scroll',function(e){var p=window.pageYOffset||document.documentElement.scrollTop; $.id('scrltop').style.visibility=p>300?'visible':'hidden'}); */

/* Динамическое добавление тега STYLE со стилями - стили в зависимости от устройства и браузера */
t=''; if($.isFF())t+='input::-moz-focus-inner{margin-top:-1px;}';
if($.id('desktop') && $.gStyle('desktop','display').toLowerCase()=='block') {
	t+='#mobile,#mlblock { display:none; } @media screen and '+'(max-width:999px) { #mobile,#mlblock { display:block; } }';
} else {
	t+='@media screen and '+'(min-width:1000px) { #mobile { display:none; } }';
}
if($.isOPERA12()||$.isTOUCH())t+='.pb_win_panel,.pb_win,.pb_win_sel,.pb_alert,.pb_dialog{position:absolute;}';
t+=$.isTOUCH()?'':'.pb_ismall { opacity:1; transition:border 0.3s ease-out 0s, box-shadow 0.3s ease-out 0s, margin 0.3s ease-out 0s, opacity 0.3s ease-out 0s; } .pb_ismall:hover { opacity:1; }';
v_page=$.id('pb_page').innerHTML-0; if($.isIE()&&v_page==1014) t+='.div_mo ul,.div_mc ul{font-family:tahoma;}';
if(t)$.addCss(t);

p=$.qSA('.callback'); if (p) { for (i=p.length; i>=0; i-=1) { $.EH.add(p[i],'click',f_callback); } }

v_spIDmail=v_spIDmail.substr(5)+v_spIDmail.substr(0,5); p=$.id('swtch3'); if(p) p.href='mailto:'+v_spIDmail;
/* Вставка корректного E-Mail из скрытого блока */
p=$.id('spIDmail'); a=$.id('dpIDmail'); if (a&&p) { p=p.innerHTML; t=p.length||0; if(t>6) { t=p.substr(5)+p.substr(0,5); a.innerHTML = '<a href="mailto:'+t+'">'+t+'</a>'; } }
/* p=$.id('spIDmail2'); a=$.id('dpIDmail2'); if (a&&p) { p=p.innerHTML; t=p.length||0; if(t>6) { t=p.substr(5)+p.substr(0,5); a.innerHTML = '<a href="mailto:'+t+'">'+t+'</a>'; } } */
for (i=0; i<10; i+=1) {
   p=$.id('spIDmail'+i);
   if(p) {
	   t=p.innerHTML; t=t.substr(5)+t.substr(0,5);t='<a href="mailto:'+t+'">'+t+'</a>';
       p=$.id('dpIDmail'+i); if(p)p.innerHTML=t;
   }
}


if (v_page==1010 && $.qS('.mtrls')) f_mtrls_set(); /* ПРАЙС-ЛИСТ - Выделение строк и столбцов (таблицы с CSS-классом mtrls)*/
if (v_page==1057 && $.id('IDtblOver')) f_tblOver_set(); /* Для таблицы "Точка росы" - ВЫДЕЛЕНИЕ СТРОК И СТОЛБЦОВ серым фоном */
if (v_page==1015 && $.id('divotz')) f_otz_view(); /* Наши Работы ОТЗЫВЫ - главная страница - Сортировка */

/* Проверка на страницу с вкладками (материалы) - и установка обработчика смены активной вкладки */
if ($.id('mtr_tabs')) {
	$.addEH('click', function(e) { /* Функция $.addEH() - установки одного обработчика function(e) на несколько объектов */
		var i, p, obj = e.target || e.srcElement; while (!obj.id) obj = obj.parentNode; /* Получение ссылки obj на <div id="mtr_tabs_N"> */
		for (i=1; i<=4; i+=1) {
			p=$.id('mtr_tabs_'+i); if(p) p.className=''; /* Снятие класса active со всех заголовков вкладок */
			p=$.id('mtr_body_'+i); if(p) p.className=''; /* Снятие класса active со всех вкладок */
		}
		obj.className='active'; /* Установка класса active на заголовок выбранной вкладки */
		p=$.id('mtr_body_'+obj.id.substr(9,1)); if(p) p.className='active'; /* Установка класса active на выбранную вкладку */
	},['mtr_tabs_1','mtr_tabs_2','mtr_tabs_3','mtr_tabs_4']); /* Массив с перечислением ID объектов */
}

if ($.gLS('teo_version')||$.gLS('setmain')) { window.localStorage.clear(); }
/* Подготовка массива со списком заказанных материалов, 0 элемент массива == [общее кол-во, общая сумма] */
f_init_zlist(); p = $.gLS('zlist') || JSON.stringify(v_zlist); v_zlist = JSON.parse(p);
if (v_zlist.length != 351 || v_zlist[0].length != 2) f_init_zlist();
if (v_page==221) { f_set_zlist(); f_z_ch(11); } else $.sLS('zlist',JSON.stringify(v_zlist));

/* Блок Смайликов: "Понравилась страница?" */
p=$.id('id_smiles'); if (p && $.gLS('smls' + v_wlh)) p.innerHTML=v_smls_txt; /* перезапись содержимого блока, если уже ранее оценка была сделана. */

/* Функция автоматического запоминания и авто-открытия блоков .div_mo / .div_mc, а так-же страниц с URL .../#blockN */
v_aPages=$.gLS('blocks_of_pages')||'[0]'; v_aPages = JSON.parse(v_aPages); /* Сохранённый в LocalStorage массив [URL страницы, номер_последнего_активного_блока, id] - пример: [0,['url1',v_page,3],['url2',v_page,0],['url3',v_page,1],...]*/
setTimeout(function(e){
  var a,p,p1,p2,p3,i,j;
  a=$.qSA('.divh3'); if (a) {
	for (i=0; i<a.length; i+=1) {
		$.EH.add(a[i],'click',function(e){
			var p,a,i,l,f=0; e=e||window.event; if (!e.target) e.target = e.srcElement; 
			if(e.target.parentNode.className == 'div_mc' || e.target.parentNode.className == 'div_mo') p=e.target.parentNode; else p=e.target.parentNode.parentNode;
			p.className=(parseInt($.gStyle(p,'height'))==40)?'div_mo':'div_mc'; $.aHeight(p,200,25,p.scrollHeight,40);
			if (p.id) { /* Страницы без #block - последний открытый пункт запоминается в v_aPages */
				a=v_aPages; l=a.length;
				for (i=1; i<l; i+=1) { /* Поиск в массиве c URL текущей страницы v_page */
					if (a[i][1]==v_page) { a[i] = [v_wlh, v_page, ((p.className=='div_mc') ? 0 : (p.id.substr(3)-0)) ]; f=1; }
				}
				if (!f) v_aPages[l]=[v_wlh, v_page, ((p.className=='div_mc') ? 0 : (p.id.substr(3)-0)) ];
				$.sLS('blocks_of_pages',JSON.stringify(v_aPages)); /* Запоминаем массив в LocalStorage */
			}
		});
	}
	/* '#block1' (p) - для страниц без #block (запоминание последнего активного пункта); '.dblock' (p1) и '.mobile' (p2) - для astyle; '#mobile' (p3) - для style;  */
	p=$.qS('#block1'); p1=$.qS('.dblock'); p2=$.qS('.mobile'); p3=$.qS('#mobile');
	/* Проверка URL на #blockN и раскрытие блока при необходимости */
	s=v_wlh; j=s.indexOf('#block'); s=parseInt((j>0 ? s.substr(j+6,1) : '0'),10)||0;
	if(s>0) {
		if (p && ((p1 && $.gStyle(p1,'display').toLowerCase()=='block') || (p2 && $.gStyle(p2,'display').toLowerCase()=='none'))) {
			a=a[s-1].parentNode; a.className='div_mo'; $.aHeight(a,200,25,a.scrollHeight,40);
		}
	} else { /* Страницы без #block (но с id) - последний открытый пункт запоминается в v_aPages */
		if (!p && (!p1 || (p1 && $.gStyle(p1,'display').toLowerCase()=='block')) && (!p2 || (p2 && $.gStyle(p2,'display').toLowerCase()=='none')) && (!p3 || (p3 && $.gStyle(p3,'display').toLowerCase()=='none'))) {
			/* Поиск в массиве c URL текущей страницы v_page */
			a=v_aPages; j=0; for(i=a.length-1; i>0; i-=1) { if(a[i][1]==v_page) j=i; }
			if(j>0 && a[j][2]>0) {
				p=$.id('pbm'+a[j][2]); window.scrollTo(0,$.gOffset(p).top-300); p.className='div_mo'; $.aHeight(p,200,25,p.scrollHeight,40); /* раскрыть, пролистать экран до начала блока */
			}
		}
	}
  }
  a=$.qSA('.divh4'); if (a) {
	for (i=0; i<a.length; i+=1) {
		$.EH.add(a[i],'click',function(e){
			var p,a,i,l,f=0; e=e||window.event; if (!e.target) e.target = e.srcElement; 
			if(e.target.parentNode.className == 'div_mc' || e.target.parentNode.className == 'div_mo') p=e.target.parentNode; else p=e.target.parentNode.parentNode;
			p.className=(parseInt($.gStyle(p,'height'))==25)?'div_mo':'div_mc'; $.aHeight(p,200,25,p.scrollHeight,25);
			if (p.id) { /* Страницы без #block - последний открытый пункт запоминается в v_aPages */
				a=v_aPages; l=a.length;
				for (i=1; i<l; i+=1) { /* Поиск в массиве c URL текущей страницы v_page */
					if (a[i][1]==v_page) { a[i] = [v_wlh, v_page, ((p.className=='div_mc') ? 0 : (p.id.substr(3)-0)) ]; f=1; }
				}
				if (!f) v_aPages[l]=[v_wlh, v_page, ((p.className=='div_mc') ? 0 : (p.id.substr(3)-0)) ];
				$.sLS('blocks_of_pages',JSON.stringify(v_aPages)); /* Запоминаем массив в LocalStorage */
			}
		});
	}
	/* '#block1' (p) - для страниц без #block (запоминание последнего активного пункта); '.dblock' (p1) и '.mobile' (p2) - для astyle; '#mobile' (p3) - для style;  */
	p=$.qS('#block1'); p1=$.qS('.dblock'); p2=$.qS('.mobile'); p3=$.qS('#mobile');
	/* Проверка URL на #blockN и раскрытие блока при необходимости */
	s=v_wlh; j=s.indexOf('#block'); s=parseInt((j>0 ? s.substr(j+6,1) : '0'),10)||0;
	if(s>0) {
		if (p && ((p1 && $.gStyle(p1,'display').toLowerCase()=='block') || (p2 && $.gStyle(p2,'display').toLowerCase()=='none'))) {
			a=a[s-1].parentNode; a.className='div_mo'; $.aHeight(a,200,25,a.scrollHeight,25);
		}
	} else { /* Страницы без #block (но с id) - последний открытый пункт запоминается в v_aPages */
		if (!p && (!p1 || (p1 && $.gStyle(p1,'display').toLowerCase()=='block')) && (!p2 || (p2 && $.gStyle(p2,'display').toLowerCase()=='none')) && (!p3 || (p3 && $.gStyle(p3,'display').toLowerCase()=='none'))) {
			/* Поиск в массиве c URL текущей страницы v_page */
			a=v_aPages; j=0; for(i=a.length-1; i>0; i-=1) { if(a[i][1]==v_page) j=i; }
			if(j>0 && a[j][2]>0) {
				p=$.id('pbm'+a[j][2]); window.scrollTo(0,$.gOffset(p).top-300); p.className='div_mo'; $.aHeight(p,200,25,p.scrollHeight,25); /* раскрыть, пролистать экран до начала блока */
			}
		}
	}
  }
},10);

if(v_page==1023 || v_page==5002) {
	 window.addEventListener("orientationchange", function() {
		 f_message('Калькулятор - смена формата', 'Просьба обновить страницу<br>(смена формата альбомный/книжный).<div class="px10"></div><input type="button" class="pb_buttons" value="Обновить" style="width:100px;height:30px;" onclick="window.location.reload()"/>', 300, 150);
	 }, false);
}

if($.id('id_auth_pred')) f_predAuth(1);

}
/* КОНЕЦ СТАРТОВОЙ ФУНКЦИИ*/
/* ***************************************************************************************************************************************** */


/* *********************************************** НАЧАЛО БЛОКА */
/* AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX */

/* Смайлики "Понравилась страница?", а так же счётчик просмотров демо-ролика видео в баннере. */
function f_smiles(k) {
	var i, p = $.id('id_smiles');
	k = k || 0; if (k < 0 || k > 3 || v_mode > 0 || !p || v_queryXHR > 0) return;
	v_mode = k; f_show_query(); $.httpPost('/auto/smiles.php','mfd',['mode', v_mode, 'number', k, 'page', v_wlh],v_XHR); v_interval=setInterval(function(){f_hRqStChSmiles()},100);
}
function f_hRqStChSmiles() {
var ret, st;
try { if (v_XHR.readyState == 4) {
	st=v_XHR.status; f_hide_query();
    if (st == 200) {
        ret = v_XHR.responseText;
        if (ret == 'error') f_mesErr('Ошибка', 'Пожалуйста повторите выбор.', 350, 120);
        else {
            f_message('Отзывы по этой странице', ret, 500, ((v_mode == 0) ? 220 : 260));
            $.sLS('smls' + v_wlh, 'ok');
            $.id('id_smiles').innerHTML = v_smls_txt;
        }
    } else {
        f_mesXRST(st);
    }
    v_mode = 0;
}} catch(e) { f_hide_query(); v_mode = 0; }
}

/* ********************************** */
/* Авторизация представителя */
function f_predAuth(f) {
	var t=v_px5+'<div style="width:100px;float:left;padding-top:2px;text-align:right;">Пароль:</div>'; if($.isDialog() || v_queryXHR>0 || v_mode>0) return; f=f||0;
	t+='<input id="IDpass" class="inpbox" type="text" style="float:left;margin-left:10px;padding:0 2px;width:100px;" value="" placeholder="введите пароль" onkeypress="f_predEnter(event,0)"/>'+v_px20;
	t+='<input type="button" class="pb_buttons" id="idcapOK" style="margin:0 0 0 90px; width:80px;" value="Войти" onclick="f_predEnter(event,1)"/>';
    $.createDialog('<div class="pb_ah0">Авторизация представителя</div>',t, 270, 130); v_esc=v_dialogEsc=1;
	$.id('IDpass').focus();
}
function f_predEnter(e,m) {
	var p=$.id('IDpass')||null; e=e||window.event; if(!p || v_queryXHR>0 || v_mode>0) return; v_esc=v_dialogEsc=0;
	p.style.border='solid 1px #808080'; p.style.background='#ffffff';
	if(e.type=='keypress' && e.keyCode!=13) return;
	if(m==1 && $.trim(p.value).length<3) { p.style.border='solid 1px #ff0000'; p.style.background='#fff0f0'; return; }
	v_mode=1; f_show_query(); $.httpPost('/setpred01/gethash.php','mfd',['mode', v_mode, 'pass', f_replace(p.value,1)],v_XHR); v_interval=setInterval(function(){f_hRqStChHash()},100);
}
function f_hRqStChHash() {
    var ret, st;
    try {
        if (v_XHR.readyState == 4) {
            st = v_XHR.status; f_hide_query();
            if (st == 200 && v_mode==1) {
                ret = v_XHR.responseText;
                if (!ret || ret == 'error') { f_mesErr('Ошибка', 'Неверный пароль или код', 300, 100); } else { if(v_wlh.indexOf('/pred-info')==-1 && v_page!=210) window.location.reload(); else window.location.href='/pred-info/'; }
            } else {
				if (st == 204) {
					$.id('IDpass').style.border='solid 1px #800000'; f_mesErr('Ошибка', 'Неправильно введён пароль', 300, 120);
				} else { f_mesXRST(st); }
			}
			v_mode = 0;
        }
    } catch (e) { f_hide_query(); v_mode = 0; }
}

/* ********************************** */
/* Для приёма и показа капчи */
function f_hRSCCap(){
var st,i,j,r='',o=$.id('idSend')||null,p=$.id('idcapImg')||null;
try {if(v_XHRC.readyState==4){
	if(v_int_cap)clearInterval(v_int_cap); v_cap=''; v_queryHttp=0; if(o)o.disabled=false; st=v_XHRC.status;
	if(p&&st==200){
		r=v_XHRC.responseText;i=r.indexOf('?t=');if(i>0){i=r.substr(i+3);j=i.indexOf('&');if(j>0)v_cap=i.substr(0,j)}
	}if(p){p.innerHTML=(st==200&&v_cap>'')?('<img src="'+r+'" alt="" style="padding:0;margin:0;border:none" />'):'Error'}
}}catch(e){if(v_int_cap)clearInterval(v_int_cap);if(p)p.innerHTML='Error';if(o)o.disabled=false;v_queryHttp=0;}
}function f_postCap(c){var o=$.id('idSend'),p=$.id('idcapImg'); if(p&&o&&v_XHRC&&v_queryHttp==0){v_queryHttp=1;o.disabled=true;p.innerHTML='Loading...';$.httpPost(v_cp,'mfd',['c_new',v_sessionID,'ncap',v_capID],v_XHRC);v_int_cap=setInterval(function(){f_hRSCCap()},100);}}

/* ********************************** */
/* callback form */
function f_callback() { gtag('event', 'click', {'event_category': 'button'}); f_post(2); /* Запрос на обратный звонок */ }
function f_post(n, sum) {
var i, t='', w=500, h=150, a, dr, s, ss='</div><div onclick="f_cb2click(this)" class="cb2',
al=['','Пожелания, замечания, сообщение об ошибке','Запрос на обратный звонок','Оформление заказа на материалы','Заказ выполнения работ','Заказ расчитанных материалов','Заказ выполнения работ «под ключ»'],
on=' onkeypress="f_changePost(this)" onchange="f_changePost(this)"',
dl='<div class="fleft mt3 fwb" style="width:'+((n==3||n==5)?'220px;':'150px;');

sum=sum||''; n=n||0; if(n<1 || n>6 || ((n==5||n==6)&&!$.id('id_calcHead')) || $.isDialog() || v_queryXHR>0 || v_mode>0 || !v_storage)return false;
a=$.gLS('fields') || {source:'', sity:'', person:'', tel:'', email:'', reqs:'', other:'', pl:'', amount:''};
if(typeof a=='string') a=JSON.parse(a); if(!a.pl)a.pl=''; v_fields=a;
$.uEnv(); s=$.gCH(); if(s<540)h=s-340; if(h<20)h=20; s=$.gCW(); w=s-210; if(w>500)w=500; if(w<270)w=270; s=h-(s<640?65:45);
dr=' :</div><div class="fleft"><input type="text" class="inpbox" maxlength="70" style="width:'+((n==3||n==5)?(w-55):(w+15))+'px;';

if (n==1) { /* Пожелания, замечания, сообщение об ошибке */
	t+=v_px5+'<div class="fwb tac">Ваше имя/телефон/e-mail</div>'+v_px5+'<input type="text" class="inpbox" maxlength="70" style="width:'+(w+165)+'px;" id="idText1" value=\''+(a.source||a.person||a.tel||a.email)+'\''+on+'/>';
	t+=v_px10+'<div class="fwb tac">'+al[1]+'</div>'+v_px5;
	t+='<textarea id="idArea1" class="inparea" style="width:'+(w+165)+'px;max-width:'+(w+165)+'px;min-width:'+(w+165)+'px;height:'+h+'px;min-height:'+h+'px;max-height:'+h+'px;"'+on+'>'+a.other+'</textarea>';
	h=80;
}
if (n==2) { /* Запрос на обратный звонок */
	t+=v_px5+dl+'">Контактное лицо'+dr+'" id="idText1" value=\''+(a.person||a.source)+'\''+on+'/></div>';
	t+=v_px5+dl+'">Телефон'+dr+'" id="idText2" value=\''+a.tel+'\''+on+'/></div>';
	t+=v_px5+dl+'">Почта (e-mail)'+dr+'" id="idText3" value=\''+a.email+'\''+on+'/></div>';
	t+=v_px5+dl+'">Вы хотите :'+ss+'">Купить Материалы'+ss+' ml10">Заказать Работы'+ss+' ml10">Получить Консультацию</div>';
	t+=v_px10+'<div class="fwb tac">Мы перезвоним максимально быстро!<br>Если хотите, кратко опишите Ваш «вопрос»,<br>тогда с Вами свяжется «нужный» специалист.</div>'+v_px5;
	t+=v_px5+dl+'">Площадь объекта, м²'+dr.substr(2)+'" id="idText4" value=\''+a.pl+'\''+on+'/></div>';
	t+=v_px5+'<textarea id="idArea1" class="inparea" style="width:'+(w+165)+'px;max-width:'+(w+165)+'px;min-width:'+(w+165)+'px;height:'+s+'px;min-height:'+s+'px;max-height:'+s+'px;"'+on+'>'+a.other+'</textarea>';
	h=160;
}
if (n==3 || n==5) { /* Оформление заказа на материалы || Заказ расчитанных материалов */
	if(n==3) t+='<div class="fleft fwb">На основании этого заказа Вам будет выставлен счет на оплату.</div><div class="fright">Материалов на сумму: <span>'+sum+'</span></div>'+v_px10;
	t+=dl+'">1. Город'+dr+'" id="idText0" value=\''+a.sity+'\''+on+'/></div>';
	t+=v_px3+'<div class="fs11">Поля <span class="c1">2, 3, 4</span> - обязательны для заполнения.</div>';
	t+=v_px5+dl+'"><span class="c1">2.</span> Заказчик, контактное лицо'+dr+'" id="idText1" value=\''+(a.person||a.source)+'\''+on+'/></div>';
	t+=v_px5+dl+'"><span class="c1">3.</span> Телефон'+dr+'" id="idText2" value=\''+a.tel+'\''+on+'/></div>';
	t+=v_px5+dl+'"><span class="c1">4.</span> Почта (e-mail)'+dr+'" id="idText3" value=\''+a.email+'\''+on+'/></div>';
	t+=v_px3+'<div class="fs11 ml15">Мы ГАРАНТИРУЕМ, что никогда НЕ будем присылать на Ваш телефон и почту рекламу или другой СПАМ.</div>';
	t+=v_px10+dl+'">5. Реквизиты, примечания.'+v_px10+'<div class="fs11">- Если Вы частное лицо:<br>напишите фамилию и инициалы.'+v_px10+'- Если Вы юридическое лицо:<br>скопируйте сюда Ваши реквизиты.'+v_px10+'- Если требуется ДОСТАВКА:<br>напишите адрес доставки</div></div>';
	t+='<textarea id="idArea1" class="inparea" style="float:left;width:'+(w-55)+'px;max-width:'+(w-55)+'px;min-width:'+(w-55)+'px;height:'+(h-30)+'px;min-height:'+(h-30)+'px;max-height:'+(h-30)+'px;"'+on+'>'+a.reqs+'</textarea>';
	t+=v_px10b; h=n==3?160:130;
}
if (n==4 || n==6) { /* Заказ выполнения работ || Заказ выполнения работ «под ключ» */
	if(n==6) t+='<div class="tac">ООО «ТэоХим» выполняет работы в Москве и Московской области.<br>Если Ваш объект находится в другом регионе, обратитесь к нашим <a class="fwb" href="/pred/" target="_blank">Представителям</a></div>';
	t+=(n==6?v_px5:'')+'<div class="fs11">Поля <span class="c1">1, 2, 3</span> - обязательны для заполнения.</div>';
	t+=(n==6?v_px5:v_px10)+dl+'"><span class="c1">1.</span> Контактное лицо'+dr+'" id="idText1" value=\''+(a.person||a.source)+'\''+on+'/></div>';
	t+=v_px5+dl+'"><span class="c1">2.</span> Телефон'+dr+'" id="idText2" value=\''+a.tel+'\''+on+'/></div>';
	t+=v_px5+dl+'"><span class="c1">3.</span> Почта (e-mail)'+dr+'" id="idText3" value=\''+a.email+'\''+on+'/></div>';
	if(n==6) {
		t+=v_px3+'<div class="fs11 ml15">Мы ГАРАНТИРУЕМ, что никогда НЕ будем присылать на Ваш телефон и почту рекламу или другой СПАМ.</div>';
		t+=v_px10+'<span>4. Дополнительные данные:</span><br>- назначение Вашего объекта (гараж, склад, цех или др.)<br>- адрес (можно примерно).';
	} else {
		t+=v_px10+'<div class="tac">Пожалуйста, укажите основные характеристики Вашего объекта.<br>Площадь. Назначение (гараж, склад, цех или др. ).<br>Какое хотите покрытие? Если не знаете – посоветуем.</div>';
	}
	t+=(n==6?'':v_px5)+'<div class="fwb tac">Мы ответим максимально быстро. Спасибо.</div>'+v_px5;
	t+='<textarea id="idArea1" class="inparea" style="width:'+(w+165)+'px;max-width:'+(w+165)+'px;min-width:'+(w+165)+'px;height:'+(h-30)+'px;min-height:'+(h-30)+'px;max-height:'+(h-30)+'px;"'+on+'>'+a.other+'</textarea>';
	h=n==4?155:200;
}
t+=v_px10+'<div id="idcapImg"></div><div id="idRefresh" title="обновить рисунок" onclick="f_postCap()"></div>';
t+='<input id="idInpC" class="inpbox" type="text" value="" maxlength="3" placeholder="код"/><span class="fwn c8">введите 3 цифры с картинки</span>';
t+='<input type="button" class="pb_buttons" value="Отправить" id="idSend" onclick="f_postGo('+n+')" />';
t+=v_px0+'<div id="idText"></div><div class="pb_hidden" id="idCop">'+n+'</div>'+v_px5+'<div class="pb_checked_false" id="idpc" style="padding:2px 5px 0 20px;width:auto;height:20px;font:inherit;"><div class="pb_ch1"></div><span class="pb_chs1">Я согласен (согласна)</span></div><div class="fleft" style="margin:3px 0 0 5px;"><a href="javascript:void(0)" onclick="f_pprivacy()">с политикой конфиденциальности</a></div>';
$.createDialog('<div class="pb_ah0">'+al[n]+'</div>',t,w+200,h+315); v_esc=v_dialogEsc=1; $.id('idText1').focus(); f_postCap(); $.uCheckeds(); f_cb2click();
}function f_cb2click(p) { var i, a=$.qSA('.cb2'); if(a) { for (i=0; i<a.length; i+=1) { a[i].style.color='inherit'; a[i].style.borderColor='#c8c8c8'; } if(p) { p.style.color='#c80000'; p.style.borderColor='#c80000'; } } }
function f_changePost(obj) {
	var p=$.id('idText'), a=v_fields, n=$.id('idCop'); if(!n)return; n=parseInt(n.innerHTML,10)||0; if(n<1||n>6)return; v_dialogEsc=0; if(p)p.innerHTML='&nbsp;';
	if(obj.id=='idText3') $.id('idText3').style.background='#ffffff';
	if(n==1) { if(obj.id=='idText1') a.source=f_replace(obj.value,1); } else { if(obj.id=='idText1') a.person=f_replace(obj.value,1); if(obj.id=='idText2') a.tel=f_replace(obj.value,1); if(obj.id=='idText3') a.email=f_replace(obj.value,1); if(obj.id=='idText4') a.pl=f_replace(obj.value,1); }
	if(n==3 || n==5) { if(obj.id=='idText0') a.sity=f_replace(obj.value,1); if(obj.id=='idArea1') a.reqs=f_replace(obj.value); } else { if(obj.id=='idArea1') a.other=f_replace(obj.value); }
	if(obj.id=='idText5') a.amount=''+parseInt(f_replace(obj.value,1),10);
	$.sLS('fields',JSON.stringify(a));
}
function f_postGo(n) {
var i,j,m,s,v, htm='empty', cc=$.id('idInpC'), a=[$.id('idText0'),$.id('idText1'),$.id('idText2'),$.id('idText3'),$.id('idText4'),$.id('idText5'),$.id('idText6'),$.id('idArea1')],
al=['Не все поля заполнены. Можно указать Телефон или E-mail','Не все обязательные поля заполнены','Введён неверный E-mail','Необходимо ввести 3 цифры с рисунка','Пожалуста, напишите подробности'];
$.id('idText').innerHTML='&nbsp;';
for (i=0;i<=8;i+=1) { if (a[i]) a[i] = f_replace(a[i].value,(i==7?0:1)); else a[i]=''; }
/* Проверки введённых полей */
if (n==1 && (!a[1] || !a[7])) { $.id('idText').innerHTML = al[0]; return; } /* Пожелания, замечания, сообщение об ошибке */
if (n==2 && (!a[1] || (!a[2] && !a[3]))) { $.id('idText').innerHTML = al[0]; return; } /* Запрос на обратный звонок */
if (n>2 && (!a[1] || !a[2] || !a[3])) { $.id('idText').innerHTML = al[1]; return; } /* Обязательные для заполнения поля */
if (a[3] && !f_checkEmail(a[3])) { $.id('idText').innerHTML = al[2]; return; } /* Если введён E-mail и он некорректен */
for (i=0;i<=7;i+=1) { if (!a[i]) a[i] = 'empty'; }
cc=cc.value=f_replace(cc.value,1); if (cc.length!=3) { $.id('idText').innerHTML = al[3]; return; }
if($.id('idpc').className=='pb_checked_false') { $.id('idText').innerHTML = 'Вы должны согласиться с политикой конфиденциальности'; return; }
if(n==3) { /* Составление списка материалов */
	m=v_zlist; htm=''; for (i=11;i<351;i+=1) { /* Наименование, кол-во, цена, сумма */
		if (m[i][1]>0) htm += '<tr><td style="text-align:left">'+ $.id('idName' + i).innerHTML + '</td><td>' + $.id('idtdK' + i).innerHTML + '</td><td>' + $.id('idtdC' + i).innerHTML + '</td><td>' + $.id('idtdS' + i).innerHTML + '</td></tr>';
	} htm += '<tr><td colspan="3" style="text-align:right">ИТОГО:</td><td>' + m[0][1] + '</td></tr>';
}
if(n==5||n==6) {/* Составление HTML заказа расчитанных материалов или работ «под ключ» */
	s = v_px10 + '<div id="id_calcHead">' + $.id('id_calcHead').innerHTML + '</div>' + v_px10 + '<div id="id_calcBody">' + $.id('id_calcBody').innerHTML + '</div>' + v_px10;
	if(n==6) s += '<div id="table2">' + $.id('table2').innerHTML + '</div>' + v_px10;
	i=s.indexOf('i_so_td'); if (i>0) { i=s.indexOf('>',i)+1; j=s.indexOf('</td>',i); s = s.substr(0,i) + $.id('i_so').value + s.substr(j); }
	i=s.indexOf('i_mb_td'); if (i>0) { v=$.id('i_mb').value; if (v=='100')v='М100 (В7,5)'; if (v=='150')v='М150 (В12,5)'; if (v=='200')v='М200 (В15)'; if (v=='250')v='М250 (В20)'; if (v=='300')v='М300 (В22,5)'; if (v=='350')v='М350 (В25)'; i=s.indexOf('>',i)+1; j=s.indexOf('</td>',i); s=s.substr(0,i)+v+s.substr(j); }
	i=s.indexOf('i_se_td'); if (i>0) { i=s.indexOf('>',i)+1; j=s.indexOf('</td>',i); s = s.substr(0,i) + $.id('i_se').value + s.substr(j); }
	i=s.indexOf('i_sep_td'); if (i>0) { v=$.id('i_np').value; if(v=='0')v='1,0 - 1,5'; if(v=='1')v='2,0 - 2,5'; if(v=='2')v='3,0 - 3,5'; if(v=='3')v='4,0 - 4,5'; i=s.indexOf('>',i)+1; j=s.indexOf('</td>',i); s = s.substr(0,i) + v + s.substr(j); }
	i=s.indexOf('i_sen_td'); if (i>0) {
		v=$.id('i_np').value;
		if(v_page==2223) { if(v=='0')v='1,1 - 1,2'; if(v=='1')v='1,6 - 1,7'; if(v=='2')v='2,0 - 2,2'; }
		if(v_page==2224) { if(v=='0')v='1,2 - 1,3'; if(v=='1')v='1,6 - 1,7'; if(v=='2')v='2,0 - 2,2'; }
		if(v=='0')v='2,0 - 2,5'; if(v=='1')v='3,0 - 3,5'; if(v=='2')v='4,0 - 4,5'; if(v=='3')v='5,0 - 5,5';
		i=s.indexOf('>',i)+1; j=s.indexOf('</td>',i); s = s.substr(0,i) + v + s.substr(j);
	}
	i=s.indexOf('i_sh_td'); if (i>0) { i=s.indexOf('>',i)+1; j=s.indexOf('</td>',i); s = s.substr(0,i) + ($.id('i_sh').value=='1'?'Да':'Нет') + s.substr(j); }
	i=s.indexOf('i_shp_td'); if (i>0) { i=s.indexOf('>',i)+1; j=s.indexOf('</td>',i); s = s.substr(0,i) + ($.id('i_sh').value=='1'?'Фактурная':'Шероховатая') + s.substr(j); }
	i=s.indexOf('i_fl_td'); if (i>0) { v=$.id('i_fl').value; i=s.indexOf('>',i)+1; j=s.indexOf('</td>',i); s = s.substr(0,i) + (v=='1'?'матовый':(v=='2'?'полуматовый':(v=='3'?'глянцевый':'НЕТ'))) + s.substr(j); }
	htm=v_px10+'<h1>'+document.querySelector('#dcontent h1').innerHTML+'</h1>'+s;
	i=$.id('dscr'); if(i && (!i.style.height || i.style.height=='0px')) {
		i=htm.indexOf('<div id="dscr"'); j=htm.indexOf('</div><div class="pb_hidden"></div>',i)+35; if(i>0 && j>0) { htm = htm.substr(0,i) + htm.substr(j); }
	}
}
j=0; if(n==2) { m=$.qSA('.cb2'); if(m) { for (i=0; i<m.length; i+=1) { if (m[i].style.color!='inherit')j=i+1; } } }
v_mode = n; m = ['mode',n, 'idText0',a[0], 'idText1',a[1], 'idText2',a[2], 'idText3',a[3], 'idText4',a[4], 'idText5',a[5], 'idText6',a[6], 'idArea1',a[7], 'cb2',j, 'mlist',htm, 'url',v_wlh, 'cap',cc, 'hcap',v_cap, 'ncap',v_capID];
f_show_query(); gtag('event', 'click', {'event_category': 'button-send'});
$.httpPost(v_cb,'mfd',m,v_XHR);v_interval=setInterval(function(){f_hRSCR()},100);
}

/* Получение ответа сервера */
function f_hRSCR(){
var ret,st,p=$.id('idText'),
al=['Ошибка','Ваше сообщение принято','Ваш запрос принят','Ваш <span>заказ на материалы</span> принят','Ваш <span>заказ на выполнение работ</span> принят','Ваш <span>заказ расчитанных материалов</span> принят','Ваш <span>заказ выполнения работ «под ключ»</span> принят','Введён неверный код с картинки.'+v_px5+'Проверьте правильность кода.','Неверно указан почтовый ящик.'+v_px5+'Проверьте правильность E-mail'];
try { if(v_XHR.readyState==4) {
	st=v_XHR.status; f_hide_query();
	if(st==200){
		ret=v_XHR.responseText;
		if(ret=='1'||ret=='2') {
			if (ret=='1') f_mesErr(al[0],al[7],350,120);
			if (ret=='2') { f_mesErr(al[0],al[8],350,120); $.id('idText3').style.background='#fff0f0'; if(p)p.innerHTML='Введён неверный E-mail'; }
		} else {
		  if (ret=='ok') {
			al[0] = v_mode<3 ? al[v_mode] : 'Ваш заказ принят';
			$.removeDialog(); v_esc=v_dialogEsc=0;
			f_message('<div class="pb_ahb">'+al[0]+'</div>',al[v_mode]+'.'+v_px10+'Спасибо.'+v_px5,300,130);
		  } else {
			f_mesErr(al[0],'Произошла ошибка.'+v_px10+'Приносим извинения.'+v_px5,200,130);
		  }
		}
	} else { f_mesXRST(st); } v_mode=0;
}} catch(e) { v_mode=0; f_hide_query(); }
}
/* AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX */
/* *********************************************** КОНЕЦ БЛОКА */

/* Окно сообщения Политика конфиденциальности ООО «ТэоХим» и сайта teohim.ru */
function f_pprivacy() {
	var w, h, t=''; $.uEnv(); w=$.gCW()-50; h=$.gCH()-100; if (w>1200) w=1200; if (w<800) w=800; if(h<350)h=350; if(h>650)h=650;
	t+='<div class="tal"><div class="h160">Политика конфиденциальности ООО «ТэоХим» и сайта teohim.ru</div>';
	t+='<p>Настоящая Политика конфиденциальности персональных данных действует в отношении всей информации, которую сайт <span>teohim.ru</span> может получить о любом посетителе / пользователе.</p>';
	t+='<p>Сайт <span>teohim.ru</span> создан на современных открытых технологиях и разработках, имеет следующие характеристики:</p>';
	t+='<ul>';
	t+='<li>не имеет связи с социальными сетями;</li>';
	t+='<li>не использует геопозиционирование;</li>';
	t+='<li>не использует и не хранит cookies (куки), IP-адреса посетителей<br>(за исключением анонимной авторизации по паролю для официальных представителей);</li>';
	t+='<li>не собирает и не хранит информацию о браузерах, в том числе передаваемые браузерами реферреры;</li>';
	t+='<li>не использует SQL и какие-либо базы данных для своей работы.</li>';
	t+='<li>не имеет сторонних рекламных баннеров и подключенных служб (кроме сервисов Google и Яндекс);</li>';
	t+='</ul>';
	t+='<div class="px10b"></div>';
	t+='<p>Работа форм обратной связи сайта <span>teohim.ru</span> основывается на данных LocalStorage - <span>локального хранилища данных браузера посетителя</span>, плюс локального уникального идентификатора текущей открытой страницы - этот идентификатор генерируется рандомно (случайным образом) в браузере посетителя при каждом открытии любой страницы и используется для привязки рисунка капчи на форме к текущей странице.</p>';
	t+='<p>Вся информация, которая может быть указана при заполнении формы обратной связи, хранится в LocalStorage - локальном хранилище данных браузера посетителя, а так-же <span>в почтовой переписке</span> (пока владелец почтового ящика не удалит старую переписку).</p>';
	t+='<p>За корректную работу почтовых ящиков, которые используются для хранения переписки из форм обратной связи сайта <span>teohim.ru</span>, отвечает хостинг-компания, на площадке которой располагается сайт.</p>';
	t+='<p>При использовании форм обратной связи <span>указывайте только общедоступные персональные данные</span>.</p>';
	t+='<p>Не забывайте, что любой компьютер может быть заражён вирусом или трояном (в том числе и Ваш - иногда для этого достаточно установить плагин / панель к браузеру и прочее ПО любого вида и назначения) - в случае заражения или установки легальных программ, собирающих информацию, никакие меры безопасности не помогут (кроме отключения интернета до решения проблемы несанкционированного сбора и утечки информации).</p>';
	t+='<div class="px10b"></div>';
	t+='<p>Если Вы не согласны (или сомневаетесь) с вышеизложенными рекомендациями, правилами и особенностями сайта <span>teohim.ru</span>, с вышеизложенной Политикой конфиденциальности, то не используйте формы обратной связи (не устанавливайте соответствующую галочку внизу форм).</p>';
	t+='<p>Вы можете <a href="/policies-privacy/" target="_blank" tabindex="0">открыть политику конфиденциальности</a> в отдельной вкладке/окне браузера.</p>';
	t+='<p class="fleft">Спасибо за внимание.</p>';
	t+='<p class="fright">30.06.2017г.</p></div>';
	t+=v_px10b+v_px20 + '<input type="button" class="pb_buttons" id="idMsgOK" value="Ok" style="width:70px;height:30px;" onclick="$.wDelete(1,1)"/>'+v_px20;
	f_message('<div class="pb_ahb">Политика конфиденциальности ООО «ТэоХим» и сайта teohim.ru</div>',t,w,h);
	$.id('pb__win_body_1').style.overflowY='scroll'; $.id('idMsgOK').focus();
}

/* ************************************* */
/* Для таблиц со списком материалов (с классом mtrls) - ВЫДЕЛЕНИЕ СТРОК И СТОЛБЦОВ серым фоном */
function f_mtrls_set(){ /* Установка id */
 var j,y,i,t,tr,td,t=$.qSA('.mtrls')||[];
 for (j=0; j<t.length; j+=1) {
  tr=$.qSA('tr',t[j])||[];
  for(y=1; y<tr.length; y+=1) {
    td=$.qSA('td',tr[y])||[];
    for(i=0;i<7;i+=1) {
      td[i].id='aT'+(j+1)+'_'+y+'_'+i;
	}
  }
  $.EH.add(t[j],'mouseover',function(e){f_mtrls_sel(e.target.id,1)})
  $.EH.add(t[j],'mouseout',function(e){f_mtrls_sel(e.target.id,0)})
 }
} function f_mtrls_sel(p,f) { /* Смена класса */
 var i,t,tr,td; f=f?'tdOver':'';
 p=p.substr(2); t=parseInt(p,10)||0; tr=p.indexOf('_')||0; if(t<1||tr<1)return;
 p=p.substr(tr+1); tr=parseInt(p,10)||0; td=p.indexOf('_')||0; if(tr<1||td<1)return; td=parseInt(p.substr(td+1),10)||0; if(td<1)return;
 for(i=1; i<tr; i+=1) {$.id('aT'+t+'_'+i+'_'+td).className=f+(td==0?((f?' ':'')+'tmdl'):'');} for(i=0; i<td; i+=1) {$.id('aT'+t+'_'+tr+'_'+i).className=f+(i==0?((f?' ':'')+'tmdl'):'');}
}
/* Для таблицы "Точка росы" - ВЫДЕЛЕНИЕ СТРОК И СТОЛБЦОВ серым фоном */
function f_tblOver_set(){ /* Установка id */
  var i,j,k=0,p=$.id('IDtblOver')||0; if(!p)return; p=p.getElementsByTagName('td'); if (!p||p.length!=504)return;
  for(j=0;j<36;j+=1) { for(i=0;i<14;i+=1) {p[k].id='aT'+j+'_'+i; k+=1} } p=$.id('IDtblOver').getElementsByTagName('th'); for(j=2;j<52; j+=1) p[j].id='aT'+j;
  $.EH.add('IDtblOver','mouseover',function(e){f_tblOver_sel(e.target.id,1)}); $.EH.add('IDtblOver','mouseout',function(e){f_tblOver_sel(e.target.id,0)});
} function f_tblOver_sel(p,f) { /* Смена класса */
  var i,j,it,jt; p=p.substr(2); jt=parseInt(p,10)||0; it=p.indexOf('_')||0; if(it<1)return; f=f?'tdOver':''; it=parseInt(p.substr(it+1),10)||0;
  for(j=0;j<jt;j+=1){$.id('aT'+j+'_'+it).className=f} for(i=0;i<it;i+=1){$.id('aT'+jt+'_'+i).className=f} $.id('aT'+(jt+16)).className=f; $.id('aT'+(it+2)).className=f;
}

/* ************************************************** */
/* Наши Работы ОТЗЫВЫ - главная страница - Сортировка */
function f_otz_view() { var n=null; $.id('divotz').style.visibility='visible'; $.animate('divotz', 200, 50, n, n, n, n, n, n, 0, 1, n, n, n, n, f_otz_view0); }
function f_otz_view0(v) {
    var i, j, l, a, s, n = null, o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], e1 = [0, 0], e2 = [0, 0];
    if (v!='end' || (!$.id('sel1')) || (!$.id('sel2'))) return;
	/* Тип Объекта */
    o[0] = [0, 0]; // все
    o[1] = [1, 5, 42, 46, 57, 62, 70, 104]; // Пищевое Производство
    o[2] = [1, 15, 23, 34, 46, 54]; // СельХоз. объекты
    o[3] = [2, 9, 19, 20, 21, 25, 32, 36, 38, 39, 50, 52, 56, 71, 76, 91, 100, 105, 106, 109, 115]; // Гаражи/Паркинги
    o[4] = [3, 8, 40, 51, 81, 82, 83]; // Резервуары
    o[5] = [4, 26, 30, 48, 52, 58, 63, 65, 76, 77, 78, 79, 84, 85, 92, 93, 95, 98, 112]; // Склады
    o[6] = [6, 7, 10, 13, 16, 17, 18, 22, 27, 30, 31, 35, 37, 41, 43, 44, 49, 52, 53, 55, 59, 60, 66, 67, 68, 72, 73, 74, 75, 78, 79, 80, 82, 84, 85, 86, 87, 88, 89, 90, 94, 101, 108, 114]; // Цеха
    o[7] = [11, 24, 33, 45, 47, 64, 77, 96, 99, 103, 107, 110, 111, 112]; // Прочее
    o[8] = [12, 29, 102, 111, 113]; // Жилищное строительство
    o[9] = [13, 16, 18, 85]; // Объекты РосАтом
    o[10]= [14]; // Медицинские учреждения
    o[11]= [28, 97]; // Учебные заведения
    o[12]= [61, 69, 78]; // Магазины

	/* Тип Покрытия */
    p[0] = [0, 0]; // все
    p[1] = [1, 5, 13, 15, 17, 19, 23, 35, 36, 37, 48, 50, 54, 66, 68, 69, 73, 74, 90, 94, 100, 101, 104, 109]; // Пропитка бетона
    p[2] = [2, 4, 5, 7, 9, 10, 11, 12, 13, 15, 16, 18, 20, 21, 22, 27, 29, 30, 31, 32, 34, 35, 38, 41, 44, 45, 46, 49, 54, 55, 56, 57, 59, 60, 61, 62, 64, 65, 67, 75, 76, 77, 78, 79, 80, 82, 84, 85, 86, 88, 89, 92, 103, 106, 107, 112, 114]; // Покрытие бетона
    p[3] = [2, 4, 5, 9, 10, 13, 22, 25, 26, 39, 58, 63, 70, 71, 72, 105, 108]; // Кварцнаполненное покрытие
    p[4] = [3, 8, 33, 40, 51, 81, 82, 83]; // Защита металла
    p[5] = [24]; // Защита дерева
    p[6] = [18, 23]; // Флюатирование
    p[7] = [6, 17, 37, 42, 43, 44, 48, 52, 53, 69, 73]; // Полимерцементные полы
    p[8] = [14, 28, 47, 77, 87, 93, 95, 96, 97, 98, 99, 102, 110, 111, 112, 115]; // Наливной пол
    p[9] = [80, 85, 91, 92]; // Бетонные полы Эластобетон
    p[10]= [0,0]; // Покрытие для асфальта

    a = o[0]; s = p[0];
    for (i=1; i<=120; i+=1) { e1[i]=0; e2[i]=0; a[i-1]=i; s[i-1]=i; }
    s=parseInt($.id('sel1').value,10)||0; a=o[s]; l=a.length||0;
    for (i=0; i<l; i+=1) e1[a[i]]=1;
    s=parseInt($.id('sel2').value, 10)||0; a=p[s]; l=a.length||0;
    for (i=0; i<l; i+=1) e2[a[i]]=1;
    for (i=1; i<=120; i+=1) { if ($.id('dotz' + i)) { $.id('dotz' + i).style.display = (e1[i]==0 || e2[i]==0) ? 'none' : 'block'; } }
    setTimeout(function () {var n = null; $.animate('divotz', 200, 50, n, n, n, n, n, n, 1, 0, n, n, n, n, function () { $.id('divotz').style.visibility='hidden'; }); }, 100);
}


/* ************************************* */
/* РАБОТА С ЗАКАЗОМ МАТЕРИАЛОВ */

function f_clz(n) {
	if (n==4 || v_zlist[0][0]) f_post(n,v_zlist[0][1]); else f_message('Оформление заказа','<span class="fwn fs15">Заказ пустой</span>',200,100);
}
function f_clc(n) {
	var f = v_zlist[0][0] ? 1 : 0, t='ВНИМАНИЕ!'+v_px10+'Очистка списка заказанных материалов!'+v_px10+'После очистки восстановить информацию невозможно'+v_px20;
	t+='<input type="button" class="pb_buttons fleft ml20 fwb c8" style="width:100px;" value="Очистить" onclick="f_init_zlist();f_set_zlist();f_z_ch(11);$.wDelete(1,1);"/>';
	t+='<input type="button" class="pb_buttons fright mr20" style="width:100px;" value="Отменить" onclick="$.wDelete(1,1);"/>';
	if (!f) t='<span class="fwn fs15">Заказ пустой</span>';
	f_message('<div class="pb_ahr">Полная очистка заказа</div>',t,f?400:220,f?185:100);
}
function f_b(n, name) { /* Диалог-форма заказа материала, или измеения его кол-ва */
	var t, s='', h = 190, a = v_zlist; n=n||0; if(!name||!v_storage||n<11||n>300)return;
	if(a[n][1]>0) { s = v_px10+'<span class="c9">Уже есть в заказе</span>!'; h = 220; }
	t = '<div class="tac"><span>'+name+'</span>' + s + v_px10 + 'Количество, '+(n==227?'л':'кг')+':&nbsp;<input class="inpbox" id="IDiadd" type="text" style="width:100px;text-align:right;" value="' + a[n][1] + '"/>&nbsp; (округляется до тарного места)' + v_px10;
	t += '<input type="button" class="pb_buttons" style="width:70px;height:30px;" value="Ok" onclick="f_b_iadd(' + n + ",parseInt($.id('IDiadd').value,10)||0" + ')"/>' + v_px10b+v_px10;
	t += '<span class="c9">Чтобы посмотреть весь Ваш заказ, выберите пункт меню «<a style="text-decoration:underline;font:inherit;color:inherit" href="/order/">ЗАКАЗ</a>»</span></div>';
	$.createDialog('<div class="pb_ah0">'+(h==190?'Добавить в заказ':'Изменить количество в заказе')+'</div>', t, 470, h); v_esc=v_dialogEsc=1; $.id('IDiadd').focus();
}
function f_b_iadd(n, k) { /* Изменение заказанного материала в localStorage */
    var t, j, i = 0; k=k||0; if (k<0) return;
	v_zlist[n][1] = k; $.sLS('zlist',JSON.stringify(v_zlist)); $.removeDialog(); v_esc = v_dialogEsc = 0;
	if(k>0) window.location.href='/order/';
}

/* Для страницы ЗАКАЗ - Перерасчёт сумм, кол-ва по тарным местам */
function f_z_ch(f, ff) {
	var i, s, c, m, m1, m2, v = 0, a=v_zlist, p = $.id('idCen' + f);
	if(!p) return; ff = ff || 0;
	for (i = 11; i < 351; i+=1) {
      s = $.id('idInp' + i);
	  if (s) {
        c = parseFloat($.trim(s.value.replace(/\,/g,"."))) || 0; // введённое кол-во
        if(c<0)c=0; s.value = c.toFixed(2) || '0';
		m = $.id('idSKM'+i+'_0') ? (parseFloat($.trim($.id('idSKM'+i+'_0').innerHTML))||0) : 0; // кол-во КГ между тарным количеством
		if (m > 0) {
			m1 = parseFloat($.id('idSKM'+i+'_1').innerHTML)||0; // тара макс.
			m2 = parseFloat($.id('idSKM'+i+'_2').innerHTML)||0; // тара мин.
			m = (c > m) ? m1 : m2;
			c = Math.ceil(c / m) * m; // округление до тарного места
		}
		m = c.toFixed(2) || '0'; if (m.indexOf('.00')!=-1) m=m.substr(0,m.length-3);
		$.id('idtdK' + i).innerHTML = m; a[i][1] = parseFloat(m);
        v += a[i][1]; // Общее кол-во КГ, включая округление до тарнного места.
	  } else a[i] = [i,0,'','']; /* [код, кол-во, цена, сумма] */
	}
    m = 3;
    if (v >= 40 && v < 200) m = 4;
    if (v >= 200 && v < 500) m = 5;
    if (v >= 500 && v < 1000) m = 6;
    if (v >= 1000 && v < 3000) m = 7;
    if (v >= 3000) m = 8;
	a[0][0] = v; v = 0;
    for (i = 11; i < 351; i+=1) {
		c = $.id('idSCen' + i + '_' + m); p = $.id('idtdC' + i);
		if (c && p) {
			s = a[i][1]; // Кол-во
			c = parseInt(c.innerHTML, 10);
			p.innerHTML = a[i][2] = (s == 0) ? '0' : c.toString();
			p = (c * s).toFixed(2) || '0'; if (p.indexOf('.00')!=-1) p=p.substr(0,p.length-3);
			v += parseFloat(p); $.id('idtdS' + i).innerHTML = a[i][3] = p;
		}
    }
	v = v.toFixed(2) || '0'; if (v.indexOf('.00')!=-1) v=v.substr(0,v.length-3);
	a[0][1] = v;
    if (ff == 0) {
		$.sLS('zlist', JSON.stringify(a));
		$.id('idSumMatUp').innerHTML = v;
		$.id('idSumMatDown').innerHTML = v;
	}
}