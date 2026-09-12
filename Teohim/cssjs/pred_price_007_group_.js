var v_storage=0, v_layer=null, v_dialogEsc=0, v_descSH, v_esc=0, v_interval=null, v_mode=0, v_IE18=0, v_queryXHR=0, v_XHR=$.httpNew();
var v_cb='<div class="px', v_cp='"></div>', v_px0=v_cb+'0'+v_cp,v_px0b=v_cb+'0b'+v_cp,v_px1=v_cb+'1'+v_cp,v_px3=v_cb+'3'+v_cp,v_px3b=v_cb+'3b'+v_cp,v_px5=v_cb+'5'+v_cp,v_px5b=v_cb+'5b'+v_cp,v_px10=v_cb+'10'+v_cp,v_px10b=v_cb+'10b'+v_cp,v_px15=v_cb+'15'+v_cp,v_px15b=v_cb+'15b'+v_cp,v_px20=v_cb+'20'+v_cp,v_px20b=v_cb+'20b'+v_cp,v_px25=v_cb+'25'+v_cp,v_px25b=v_cb+'25b'+v_cp,v_px30=v_cb+'30'+v_cp,v_px30b=v_cb+'30b'+v_cp;
var v_wlh=window.location.href, v_hash=0, v_id, v_nid, v_pid=0, v_value;
var v1_item=0, v1_max=100, v1_s, v_tara=0, v_vk=1, v_alist_vk=[0];

function f_show_query(){ /* При AJAX-запросе в процессе получения ответа от сервера добавляет слой поверх страницы.  */
	var l,t; v_layer = $.addLayer(0,'#808080',260,0,0); v_descSH = $.aOpacity(v_layer,1000,100,0,1); $.uEnv();
	l=parseInt($.gCW()/2-150,10); t=parseInt($.gCH()/2-100,10); if(l<0)l=0; if(t<0)t=0; v_queryXHR=1;
	v_layer.innerHTML='<div style="position:fixed;left:'+l+'px;top:'+t+'px;width:300px;height:150px;border:solid 1px #0969a3;"><table class="twajax"><tbody><tr><td>Please wait...'+v_px10+'Пожалуйста, подождите...</td></tr></tbody></table></div>';
}function f_hide_query(){ if(v_interval)clearInterval(v_interval); v_interval=null; v_queryXHR=0; if(v_descSH>=0)$.aClear(v_descSH); $.removeLayer(v_layer); v_layer=null; }

/* Замена табуляций и спец-символов в тексте. */
function f_replace(s,f) {
	s=$.trim(s.replace(/\¡/gm,'i').replace(/\'/gm,'’').replace(/\"/gm,'”').replace(new RegExp($.gCC(9),'g'),' ').replace(new RegExp($.gCC(13),'g'),' '));
	f=f||0; if (f) { s=s.replace(new RegExp($.gCC(10),'g'),''); }
	return s;
}

/* Функции вывода окон сообщений */
function f_mesNot() { f_message('<div class="pb_ah0">Message</div>','In developing...',200,100);}
function f_mesErr(ht, bt, w, h, b, s) { ht = '<div class="pb_ahr">'+ht+'</div>'; f_message(ht, bt, w, h, b, s); }
function f_mesXRST(s) { f_mesErr('Ошибка связи. Статус:'+s,'Временные технические проблемы.'+v_px5+'Повторите позже.',320,120); }
function f_message(ht, bt, w, h, b, s) {
	var f = bt.indexOf('<input'); $.wDelete(1); if((!b||b==1))v_esc=1;
	if((f == -1) && (!b || b==1)) { h+=30; bt += v_px15 + '<input type="button" class="pb_buttons" id="idMsgOK" value="Ok" style="width:70px;height:30px;" onclick="$.wDelete(1,1)"/>'; }
	$.wAlert(ht, v_px5+bt, w, h, b, s); if(f == -1 && (!b || b==1)) $.id('idMsgOK').focus();
}

function vcorpJS_onload(v) {
var a,p,i,t=' <'+'a target="_blank" href="http://www.',a=['google.com/chrome','mozilla.org/en-US/firefox/new/','opera.com/download','apple.com/safari/','microsoft.com/downloads'];
v_storage=window.localStorage?window.localStorage:0;
if (!v_storage){f_mesErr('Ограничение','Ваш браузер устарел'+v_px5+'и нуждается в замене.',450,130,3); return; }
if (v!='vcorp_js_00_01') { f_mesErr('Диагностика','Неверная версия JS-библиотеки<br>(необходима сборка vcorp_js_00_01)'+v_px5+'Обновите (перезагрузите) страницу.'+v_px5+'Рекомендуется сбросить кеш браузера.',320,150,3); return false; }

/* По клавише <Esc> убирает окно сообщения или диалоговое окно - Если не было редактирования (v_esc==1 и/или v_dialogEsc==1) */
$.EH.add(document,'keydown',function(e){e=e||window.event; if(v_esc>0&&e.keyCode==27) {if($.id('pb__alert')){$.wDelete(1,1);if(!$.isDialog()||v_dialogEsc==1)v_esc=0;$._(24)(e);return}if($.isDialog()){if(v_dialogEsc==1){v_dialogEsc=0;$.removeDialog();$._(24)(e);}else v_esc=1;}}});

/* Динамическое добавление тега STYLE со стилями - стили в зависимости от устройства и браузера */
t=''; if($.isFF())t+='input::-moz-focus-inner{margin-top:-1px;}';
if($.isOPERA12()||$.isTOUCH())t+='.pb_win_panel,.pb_win,.pb_win_sel,.pb_alert,.pb_dialog{position:absolute;}';
t+=$.isTOUCH()?'':'.pb_ismall { opacity:0.75; transition:border 0.3s ease-out 0s, box-shadow 0.3s ease-out 0s, margin 0.3s ease-out 0s, opacity 0.3s ease-out 0s; } .pb_ismall:hover { opacity:1; }';
if($.isIE()) t+='.div_mo ul,.div_mc ul{font-family:tahoma;}';
if(t)$.addCss(t);

v_alist_vk=($.id('list_vk').innerHTML).split(','); for(i=0;i<v_alist_vk.length;i+=1)v_alist_vk[i]=parseFloat(v_alist_vk[i]);
v_hash=$.id('idhash'); if (!v_hash) { f_message('<div class="pb_ahr">Ошибка</div>',v_px10+'Ошибка авторизации',170,100,3); return; } v_hash=v_hash.innerHTML;
p=$.id('idPrice'); if (p) { p.innerHTML=v_PP; } v_id=parseInt($.trim($.id('idID').innerHTML),10); v_nid=v_pid=v_pid||v_id;
}

function f_change(o) { if (!o) return; o.value=(parseInt($.trim(o.value),10)>=0) ? $.trim(o.value) : $.trim(v_value); o.style.background=(parseInt(o.value,10)>0)?'#eeeeee':'#ffc8c8'; }
function f_focus(o) { if (!o) return; v_value = $.trim(o.value); if (isNaN(v_value)||parseInt(v_value,10)<0) v_value='0'; }
function f_keydown(e,o) {
	var id, i, n=e.keyCode; if (!e||!o||(n!=38&&n!=40)) return; n = (n==38) ? -1 : 1;
	id=o.id; i=id.indexOf('_'); j=parseInt(id.substr(i+1),10); i=parseInt(id.substr(1,i-1),10);
	while (true) { if (n==1) { i+=1; if(i>=350)i=11; } else { i-=1; if(i<=10)i=350; } if ($.id('i'+i+'_'+j)) break; }
	if ($.id('i'+i+'_'+j)) $.id('i'+i+'_'+j).focus();
}

function f_postPred() {
	var i,j,t=$.gCC(9),n=$.gCC(10),s='0123456789';
	for (i=1; i<351; i+=1) {
		if($.id('i'+i+'_3')||$.id('i'+i+'_4')||$.id('i'+i+'_5')||$.id('i'+i+'_6')||$.id('i'+i+'_7')||$.id('i'+i+'_8')) {
			for (j=3; j<9; j+=1) { if($.id('i'+i+'_'+j)) s+=f_replace($.id('i'+i+'_'+j).value,1)+t; else s+='0'+t; }
			for (j=9; j<16; j+=1) { if($.id('src'+i+'_'+j)) s+=f_replace($.id('src'+i+'_'+j).innerHTML,1)+(j<15?t:''); }
		} else s+=' ';
		s+=n;
	}
	f_show_query(); v_mode=1; $.httpPost($.id('iddomain').innerHTML+'/cssjs/price_js_01.php','mfd',['data',s,'hash',v_hash],v_XHR); v_interval=setInterval(function(){f_hRSC()},100);
}
function f_priceDefault() {
	$.id('priceCalc').style.display='block';
}
function f_priceCalc() {
	var i, j, k, z, p=$.id('iPriceK'), c=$.id('iPriceA'); if (!p||!c) return;
	k=parseFloat(f_replace(p.value,1).replace(/\,/gm,'.'))||1; if(k<0)k=0-k; p.value=k.toFixed(2); k=parseFloat(k.toFixed(2));
	p=parseInt(f_replace(c.value,1))||0; c.value=''+p;
	for (i=1; i<351; i+=1) {
		if ($.id('d'+i+'_0')) {
			for(j=3; j<9; j+=1) {
				if ($.id('i'+i+'_'+j) && $.id('src'+i+'_'+j)) {
					c=$.id('src'+i+'_'+j).innerHTML; z=(c.indexOf('*')==-1)?'':'*';
					$.id('i'+i+'_'+j).value = ((parseInt(c,10)||0)*k+p).toFixed(0)+z;
				}
			}
		}
	}
}
function f_priceCalc1() { /* Для пересчёта цен на группе сайтов представитей */
	$.id('priceCalc').style.display='block';
	v1_item=1; v1_s=''; f_priceCalcItem();
}
function f_priceCalcItem() {
	v_vk=parseFloat($.id('iPriceVK').value)||1; v1_item+=1;
	if (v_tara==0) {
		while(v1_item < v1_max && !$.id('pred'+v1_item+'_0')) { v1_item+=1; } console.log(v1_item+' '+v1_max+' '+(v1_item==v1_max));
	}
	if (v_tara==1) {
		while(v1_item < v1_max && !$.id('tara'+v1_item+'_0')) { v1_item+=1; } console.log(v1_item+' '+v1_max+' '+(v1_item==v1_max));
	}
	if (v1_item >= v1_max) { v1_item=0; f_message('Операция завершена','Операция завершена'+v_px10b+v_px10,250,130); return; }
	v1_s+='<br>'+v1_item+' '+$.id((v_tara==0?'pred':'tara')+v1_item+'_0').innerHTML;
	$.id('oPrice').innerHTML = v1_s;
	f_postPred1();
}
function f_postPred1() {
	var i, j, k, z, t=$.gCC(9),n=$.gCC(10), s='0123456789', p=$.id((v_tara==0?'pred':'tara')+v1_item+'_1'), c=$.id((v_tara==0?'pred':'tara')+v1_item+'_2'), p1, c1; if (!p||!c) return;
	p1=p.innerHTML; c1=c.innerHTML;
	if(p1.indexOf(',')==-1 || c1.indexOf(',')==-1) {
		k=parseFloat(f_replace(p.innerHTML,1).replace(/\,/gm,'.'))||1; if(k<0)k=0-k; k=parseFloat(k.toFixed(2));
		p=parseInt(f_replace(c.innerHTML,1))||0; p1=c1=0;
	} else {
		p1=p.innerHTML.split(','); c1=c.innerHTML.split(',');
	}
	for (i=1; i<351; i+=1) {
		if($.id('src'+i+'_3')||$.id('src'+i+'_4')||$.id('src'+i+'_5')||$.id('src'+i+'_6')||$.id('src'+i+'_7')||$.id('src'+i+'_8')) {
			for(j=3; j<9; j+=1) {
				if ($.id('src'+i+'_'+j)) {
					c=$.id('src'+i+'_'+j).innerHTML; z=(c.indexOf('*')==-1)?'':'*';
					if(p1) { k=parseFloat(p1[j-3])||1; p=parseInt(c1[j-3],10)||0; }
					s += (v_alist_vk.indexOf(v1_item)==-1) ? ( ((parseInt(c,10)||0)*k+p).toFixed(0)+z+t ) : ( (((parseInt(c,10)||0)*k+p)*v_vk).toFixed(0)+z+t );
				}
			}
			for (j=9; j<16; j+=1) { if($.id('src'+i+'_'+j)) s+=f_replace($.id('src'+i+'_'+j).innerHTML,1)+(j<15?t:''); }
		} else s+=' ';
		s+=n;
	}
	f_show_query(); v_mode=1; $.httpPost($.id((v_tara==0?'pred':'tara')+v1_item+'_0').innerHTML+'/cssjs/price_js_01.php','mfd',['data',s,'tara',v_tara,'hash',$.id((v_tara==0?'pred':'tara')+v1_item+'_h').innerHTML],v_XHR); v_interval=setInterval(function(){f_hRSC()},100);
}

function f_hRSC(){
	var ret, st;
	if (v_queryXHR>0 && v_mode>0){
		try {
			if (v_XHR.readyState==4){
				st=v_XHR.status; f_hide_query();
				if(st==204) {
					v1_s+=$.id((v_tara==0?'pred':'tara')+v1_item+'_0').innerHTML+' - Ошибка: Соединение или изменился IP-адрес.';
				} else {
				  if(st==200) {
					ret=v_XHR.responseText;
					if (!ret) { v1_s+=' '+$.id((v_tara==0?'pred':'tara')+v1_item+'_0').innerHTML+' Ошибка записи: Цены не обновлены'; }
				}} v_mode=0;
			}
		}catch(e){f_hide_query();v_mode=0;}
	} if (v_XHR.readyState==4) f_priceCalcItem();
}

