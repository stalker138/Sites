// Представители teohim.ru | 2022 * КАЛЬКУЛЯТОР * ФОРМА ОБР.СВЯЗИ
var v_storage=0, v_layer=null, v_dialogEsc=0, v_descSH, v_esc=0, v_interval=null, v_intvl = null, v_int_cap=null, v_mode=0, v_setsb=0, v_IE18=0, v_queryHttp=0, v_queryXHR=0, v_sessionID, v_cap='', v_capID, v_XHRC=$.httpNew(), v_XHR=$.httpNew();
var v_cb='<div class="px', v_cp='"></div>', v_px0=v_cb+'0'+v_cp,v_px0b=v_cb+'0b'+v_cp,v_px1=v_cb+'1'+v_cp,v_px3=v_cb+'3'+v_cp,v_px3b=v_cb+'3b'+v_cp,v_px5=v_cb+'5'+v_cp,v_px5b=v_cb+'5b'+v_cp,v_px10=v_cb+'10'+v_cp,v_px10b=v_cb+'10b'+v_cp,v_px15=v_cb+'15'+v_cp,v_px15b=v_cb+'15b'+v_cp,v_px20=v_cb+'20'+v_cp,v_px20b=v_cb+'20b'+v_cp,v_px25=v_cb+'25'+v_cp,v_px25b=v_cb+'25b'+v_cp,v_px30=v_cb+'30'+v_cp,v_px30b=v_cb+'30b'+v_cp;
var v_wlh=window.location.href,o_pageToUp=null,v_page=0,v_zlist,v_fields;
var v_aPages,v_smls_txt = '<div style="cursor:pointer;float:left;width:105px;margin:0;padding:5px 0;text-align:center;font-size:11px;text-decoration:underline;" onclick="f_smiles(0)">Cмотреть отзывы</div>';

function ff_show_query(){ /* При AJAX-запросе в процессе получения ответа от сервера добавляет слой поверх страницы.  */
	var l,t; v_layer = $.addLayer(0,'#808080',260,0,0); v_descSH = $.aOpacity(v_layer,1000,100,0,1); $.uEnv();
	l=parseInt($.gCW()/2-150,10); t=parseInt($.gCH()/2-100,10); if(l<0)l=0; if(t<0)t=0; v_queryXHR=1;
	v_layer.innerHTML='<div style="position:fixed;left:'+l+'px;top:'+t+'px;width:300px;height:150px;border:solid 1px #0969a3;"><table class="twajax"><tbody><tr><td>Please wait...'+v_px10+'Пожалуйста, подождите...</td></tr></tbody></table></div>';
}function ff_hide_query(){ if(v_interval)clearInterval(v_interval); v_interval=null; v_queryXHR=0; if(v_descSH>=0)$.aClear(v_descSH); $.removeLayer(v_layer); v_layer=null; }

/* Замена табуляций и спец-символов в тексте. */
function f_replace(s,f) {
	s=$.trim(s.replace(/\¡/gm,'i').replace(/\'/gm,'’').replace(/\"/gm,'”').replace(new RegExp($.gCC(9),'g'),' '));
	f=f||0; if (f) { s=s.replace(new RegExp($.gCC(10),'g'),''); s=s.replace(new RegExp($.gCC(13),'g'),''); }
	return s;
}

/* check E-mail */
function f_checkEmail(s){ var em=new RegExp("[^@]+@[^@]+\.[a-zA-Z]{2,6}"); return (s.indexOf('.')>0 && em.test(s)); }

/* Функции вывода окон сообщений */
function f_mesNot() { ff_message('<div class="pb_ah0">Message</div>','In developing...',200,100);}
function f_mesErr(ht, bt, w, h, b, s) { ht = '<div class="pb_ahr">'+ht+'</div>'; ff_message(ht, bt, w, h, b, s); }
function f_mesXRST(s) { f_mesErr('Ошибка связи. Статус:'+s,'Временные технические проблемы.'+v_px5+'Повторите позже.',320,120); }
function ff_message(ht, bt, w, h, b, s) {
	var f = bt.indexOf('<input'); $.wDelete(1); if((!b||b==1))v_esc=1;
	if((f == -1) && (!b || b==1)) { h+=30; bt += v_px15 + '<input type="button" class="pb_buttons" id="idMsgOK" value="Ok" style="width:70px;height:30px;" onclick="$.wDelete(1,1)"/>'; }
	$.wAlert(ht, v_px5+bt, w, h, b, s); if(f == -1 && (!b || b==1)) $.id('idMsgOK').focus();
}

/* ***************************************************************************************************************************************** */
/* СТАРТОВАЯ ФУНКЦИЯ (Авто-вызов с параметром v - версия VcorpJS). Стартует по событию DOMContentLoaded - готовности страницы к отображению. */
function vcorpJS_onload(v) {
var a,p,i,t;
/*if (v!='vcorp_js_00_01') { f_mesErr('Диагностика','Неверная версия JS-библиотеки<br>(необходима сборка vcorp_js_00_01)'+v_px5+'Обновите (перезагрузите) страницу.'+v_px5+'Рекомендуется сбросить кеш браузера.',320,150,3); return false; }*/
v_cb='/auto/cb.php'; v_cp='/auto/get_cnew.php';
v_sessionID='00000'+Math.round(Math.random()*90000); v_sessionID=parseInt(v_sessionID.substr(v_sessionID.length-5,5),10)||0;
v_capID='0'+Math.round(Math.random()*9); v_capID=parseInt(v_capID.substr(v_capID.length-1,1),10)||0; if(v_capID<1||v_capID>9) v_capID=1;

/* По клавише <Esc> убирает окно сообщения или диалоговое окно - Если не было редактирования (v_esc==1 и/или v_dialogEsc==1) */
$.EH.add(document,'keydown',function(e){e=e||window.event; if(v_esc>0&&e.keyCode==27) {if($.id('pb__alert')){$.wDelete(1,1);if(!$.isDialog()||v_dialogEsc==1)v_esc=0;$._(24)(e);return}if($.isDialog()){if(v_dialogEsc==1){v_dialogEsc=0;$.removeDialog();$._(24)(e);}else v_esc=1;}}});
}
/* КОНЕЦ СТАРТОВОЙ ФУНКЦИИ*/
/* ***************************************************************************************************************************************** */


/* *********************************************** НАЧАЛО БЛОКА */
/* AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX */

/* ********************************** */
/* Для приёма и показа капчи */
function f_hRSCCaps(){
var st,i,j,r='',o=$.id('idSend')||null,p=$.id('idcapImg')||null;
try {if(v_XHRC.readyState==4){
	if(v_int_cap)clearInterval(v_int_cap); v_cap=''; v_queryHttp=0; if(o)o.disabled=false; st=v_XHRC.status;
	if(p&&st==200){
		r=v_XHRC.responseText;i=r.indexOf('?t=');if(i>0){i=r.substr(i+3);j=i.indexOf('&');if(j>0)v_cap=i.substr(0,j)}
	}if(p){p.innerHTML=(st==200&&v_cap>'')?('<img src="'+r+'" alt="" style="padding:0;margin:0;border:none" />'):'Error'}
}}catch(e){if(v_int_cap)clearInterval(v_int_cap);if(p)p.innerHTML='Error';if(o)o.disabled=false;v_queryHttp=0;}
}function f_postCaps(c){var o=$.id('idSend'),p=$.id('idcapImg'); if(p&&o&&v_XHRC&&v_queryHttp==0){v_queryHttp=1;o.disabled=true;p.innerHTML='Loading...';$.httpPost(v_cp,'mfd',['c_new',v_sessionID,'ncap',v_capID],v_XHRC);v_int_cap=setInterval(function(){f_hRSCCaps()},100);}}

/* ********************************** */
/* callback form */
function f_post(n) {
var i, t='', w=500, h=150, a, dr, s, ss='</div><div onclick="f_cb2click(this)" class="cb2',
al=['','Пожелания, замечания, сообщение об ошибке','Запрос на обратный звонок','Оформление заказа на материалы','Заказ выполнения работ','Заказ расчитанных материалов','Заказ выполнения работ «под ключ»'],
on=' onkeypress="f_changePost(this)" onchange="f_changePost(this)"',
dl='<div class="fleft mt3 fwb" style="width:'+((n==5)?'220px;':'150px;');

n=n||0; if((n!=5 && n!=6) || !$.id('id_calcHead') || $.isDialog() || v_queryXHR>0 || v_mode>0)return false;
a=$.gLS('fields') || {source:'', sity:'', person:'', tel:'', email:'', reqs:'', other:'', pl:'', amount:''};
if(typeof a=='string') a=JSON.parse(a); if(!a.pl)a.pl=''; v_fields=a;
$.uEnv(); s=$.gCH(); if(s<540)h=s-340; if(h<20)h=20; s=$.gCW(); w=s-210; if(w>500)w=500; if(w<270)w=270; s=h-(s<640?65:45);
dr=' :</div><div class="fleft"><input type="text" class="inpbox" maxlength="70" style="width:'+((n==3||n==5)?(w-55):(w+15))+'px;';

if (n==5) { /* Заказ расчитанных материалов */
	t+=dl+'">1. Город'+dr+'" id="idText0" value=\''+a.sity+'\''+on+'/></div>';
	t+=v_px3+'<div class="fs11">Поля <span class="c1">2, 3, 4</span> - обязательны для заполнения.</div>';
	t+=v_px5+dl+'"><span class="c1">2.</span> Заказчик, контактное лицо'+dr+'" id="idText1" value=\''+(a.person||a.source)+'\''+on+'/></div>';
	t+=v_px5+dl+'"><span class="c1">3.</span> Телефон'+dr+'" id="idText2" value=\''+a.tel+'\''+on+'/></div>';
	t+=v_px5+dl+'"><span class="c1">4.</span> Почта (e-mail)'+dr+'" id="idText3" value=\''+a.email+'\''+on+'/></div>';
	t+=v_px3+'<div class="fs11 ml15">Мы ГАРАНТИРУЕМ, что никогда НЕ будем присылать на Ваш телефон и почту рекламу или другой СПАМ.</div>';
	t+=v_px10+dl+'">5. Реквизиты, примечания.'+v_px10+'<div class="fs11">- Если Вы частное лицо:<br>напишите фамилию и инициалы.'+v_px10+'- Если Вы юридическое лицо:<br>скопируйте сюда Ваши реквизиты.'+v_px10+'- Если требуется ДОСТАВКА:<br>напишите адрес доставки</div></div>';
	t+='<textarea id="idArea1" class="inparea" style="float:left;width:'+(w-55)+'px;max-width:'+(w-55)+'px;min-width:'+(w-55)+'px;height:'+(h-30)+'px;min-height:'+(h-30)+'px;max-height:'+(h-30)+'px;"'+on+'>'+a.reqs+'</textarea>';
	t+=v_px10b; h=130;
}
if (n==6) { /* Заказ выполнения работ || Заказ выполнения работ «под ключ» */
	t+=v_px5+'<div class="fs11">Поля <span class="c1">1, 2, 3</span> - обязательны для заполнения.</div>';
	t+=v_px5+dl+'"><span class="c1">1.</span> Контактное лицо'+dr+'" id="idText1" value=\''+(a.person||a.source)+'\''+on+'/></div>';
	t+=v_px5+dl+'"><span class="c1">2.</span> Телефон'+dr+'" id="idText2" value=\''+a.tel+'\''+on+'/></div>';
	t+=v_px5+dl+'"><span class="c1">3.</span> Почта (e-mail)'+dr+'" id="idText3" value=\''+a.email+'\''+on+'/></div>';
	t+=v_px3+'<div class="fs11 ml15">Мы ГАРАНТИРУЕМ, что никогда НЕ будем присылать на Ваш телефон и почту рекламу или другой СПАМ.</div>';
	t+=v_px10+'<span>4. Дополнительные данные:</span><br>- назначение Вашего объекта (гараж, склад, цех или др.)<br>- адрес (можно примерно).';
	t+='<div class="fwb tac">Мы ответим максимально быстро. Спасибо.</div>'+v_px5;
	t+='<textarea id="idArea1" class="inparea" style="width:'+(w+165)+'px;max-width:'+(w+165)+'px;min-width:'+(w+165)+'px;height:'+(h-30)+'px;min-height:'+(h-30)+'px;max-height:'+(h-30)+'px;"'+on+'>'+a.other+'</textarea>';
	h=200;
}
t+=v_px10+'<div id="idcapImg"></div><div id="idRefresh" title="обновить рисунок" onclick="f_postCaps()"></div>';
t+='<input id="idInpC" class="inpbox" type="text" value="" maxlength="3" placeholder="код"/><span class="fwn c8">введите 3 цифры с картинки</span>';
t+='<input type="button" class="pb_buttons" value="Отправить" id="idSend" onclick="f_postGo('+n+')" />';
t+=v_px0+'<div id="idText"></div><div class="pb_hidden" id="idCop">'+n+'</div>'+v_px5+'<div class="pb_checked_false" id="idpc" style="float:left;padding:2px 5px 0 20px;width:auto;height:20px;font:inherit;"><div class="pb_ch1"></div><span class="pb_chs1">Я согласен (согласна)</span></div><div class="fleft" style="margin:3px 0 0 5px;"><a href="/policies-privacy/" target="_blank">с политикой конфиденциальности</a></div>';
if(f_ym && typeof(f_ym)=='function') f_ym('ClickForm'); $.createDialog('<div class="pb_ah0">'+al[n]+'</div>',t,w+200,h+315); v_esc=v_dialogEsc=1; $.id('idText1').focus(); f_postCaps(); $.uCheckeds(); f_cb2click();
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
al=['Не все поля заполнены. Можно указать Телефон или E-mail','Не все обязательные поля заполнены','Введён неверный E-mail','Необходимо ввести 3 цифры с рисунка','Пожалуста, напишите подробности'],
as=['','','CallBack','OrderGoods','OrderWork','OrderGoodsCvr','OrderGoodsWorkCvr','ClickForm','ClickOrd'];
;
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
	htm=v_px10+'<h1>'+document.querySelector('#content h1').innerHTML+'</h1>'+s;
	i=$.id('dscr'); if(i && (!i.style.height || i.style.height=='0px')) {
		i=htm.indexOf('<div id="dscr"'); j=htm.indexOf('</div><div class="pb_hidden"></div>',i)+35; if(i>0 && j>0) { htm = htm.substr(0,i) + htm.substr(j); }
	}
}
j=0; if(n==2) { m=$.qSA('.cb2'); if(m) { for (i=0; i<m.length; i+=1) { if (m[i].style.color!='inherit')j=i+1; } } }
v_mode = n; m = ['mode',n, 'idText0',a[0], 'idText1',a[1], 'idText2',a[2], 'idText3',a[3], 'idText4',a[4], 'idText5',a[5], 'idText6',a[6], 'idArea1',a[7], 'cb2',j, 'mlist',htm, 'url',v_wlh, 'cap',cc, 'hcap',v_cap, 'ncap',v_capID];
ff_show_query(); if(f_ym && typeof(f_ym)=='function') f_ym(as[n]); $.httpPost(v_cb,'mfd',m,v_XHR);v_interval=setInterval(function(){f_hRSCR()},100);
}

/* Получение ответа сервера */
function f_hRSCR(){
var ret,st,p=$.id('idText'),
al=['Ошибка','Ваше сообщение принято','Ваш запрос принят','Ваш <span>заказ на материалы</span> принят','Ваш <span>заказ на выполнение работ</span> принят','Ваш <span>заказ расчитанных материалов</span> принят','Ваш <span>заказ выполнения работ «под ключ»</span> принят','Введён неверный код с картинки.'+v_px5+'Проверьте правильность кода.','Неверно указан почтовый ящик.'+v_px5+'Проверьте правильность E-mail'];
try { if(v_XHR.readyState==4) {
	st=v_XHR.status; ff_hide_query();
	if(st==200){
		ret=v_XHR.responseText;
		if(ret=='1'||ret=='2') {
			if (ret=='1') f_mesErr(al[0],al[7],350,120);
			if (ret=='2') { f_mesErr(al[0],al[8],350,120); $.id('idText3').style.background='#fff0f0'; if(p)p.innerHTML='Введён неверный E-mail'; }
		} else {
		  if (ret=='ok') {
			al[0] = v_mode<3 ? al[v_mode] : 'Ваш заказ принят';
			$.removeDialog(); v_esc=v_dialogEsc=0;
			ff_message('<div class="pb_ahb">'+al[0]+'</div>',al[v_mode]+'.'+v_px10+'Спасибо.'+v_px5,300,130);
		  } else {
			f_mesErr(al[0],'Произошла ошибка.'+v_px10+'Приносим извинения.'+v_px5,200,130);
		  }
		}
	} else { f_mesXRST(st); } v_mode=0;
}} catch(e) { v_mode=0; ff_hide_query(); }
}
/* AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX */
/* *********************************************** КОНЕЦ БЛОКА */
