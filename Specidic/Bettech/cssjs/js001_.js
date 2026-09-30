// bettech.kz | 2014-2018
var v_mode=0,v_counter=0,v_layer=null,v_desc,v_esc=0,v_intvl=null,v_interval=null,v_sea,v_temp,v_aid,v_cdiv,v_aic,v_hdiv,v_ap,v_az,v_pb_tt,v_azn,v_sum,v_href=window.location.href,v_mail='im.rukazakhstan@teoh',p_spIDmail='im.rukazakhstan@teoh';
var v_cb='<div class="px',v_cp='get_cnew',v_cs='f',v_cap='',v_caphtml='',v_int_cap=null,v_cabch_int=null,v_queryHttp=0,v_sessionID=0,v_cabChange=0,v_xmlHttp=fpb_createXmlHttp(),v_descIDc=0,v_descIDs=0;
var v_px0=v_cb+'0"></div>',v_px0b=v_cb+'0b"></div>',v_px3=v_cb+'3"></div>',v_px3b=v_cb+'3b"></div>',v_px5=v_cb+'5"></div>',v_px5b=v_cb+'5b"></div>',v_px10=v_cb+'10"></div>',v_px10b=v_cb+'10b"></div>',v_px15=v_cb+'15"></div>',v_px15b=v_cb+'15b"></div>',v_px15=v_cb+'15"></div>',v_px20b=v_cb+'20b"></div>',v_px20=v_cb+'20"></div>',v_px25b=v_cb+'25b"></div>',v_px25=v_cb+'25"></div>',v_px30b=v_cb+'30b"></div>',v_px30=v_cb+'30"></div>',v_alert_tbeg='<table style="width:100%;height:100%"><tbody><tr><td style="font:normal 13px arial">',v_alert_tend='</td></tr></tbody></table>',v_IEold="filter: progid:DXImageTransform.Microsoft.Shadow(color='#888888',Direction=145,Strength=5);";
var p_atm=[0,0,0,0,0],o_pageToUp=null;
function f_show_query(f){ // Если f==1, то полупрозрачный слой, если f==0, то непрозрачный для AJAX
var l,t; f=f||0;v_layer=fpb_addLayer(0,pb_IE18?0:'#808080',250,0,((f==0)?0:0.5));v_desc=(f==0)?fpb_a_opacity(v_layer,1000,100,0,1):-1;if(pb_IE18)setTimeout(function(){v_layer.style.background='#808080'},50);if(f)return; l=parseInt(pb_clientWidth/2-250,10);t=parseInt(pb_clientHeight/2-100,10);if(l<0)l=0;if(t<0)t=0;
v_layer.innerHTML='<div style="position:absolute;left:'+l+'px;top:'+t+'px;width:500px; height:150px; border:solid 1px #0969a3;"><table style="width:100%;height:100%;border:none;text-align:center;background:#f0f0f0;"><tbody><tr><td>Please wait...'+v_px10+'Пожалуйста, подождите...</td></tr></tbody></table></div>';
}function f_hide_query(){if(v_interval)clearInterval(v_interval);v_interval=null;pb_queryHttp=0;if(v_desc>=0)fpb_clearAnimate(v_desc);fpb_removeLayer(v_layer);v_layer=null;}
function f_message(ht,bt,w,h,b,s) { var f=bt.indexOf('<input'); v_esc=1; if(f==-1){if(h>0)h+=30;bt+=v_px15+'<input type="button" class="pb_buttons" id="idMsgOK" value="Ok" onclick="fpb_win_del(1,1)"/>';} fpb_alert('<div class="pb_ahb">'+ht+'</div>',v_alert_tbeg+bt+v_alert_tend,w,h,b,s); if(f==-1) fpb_BI('idMsgOK').focus(); }
function f_mesXRST(s,f) { v_esc=1; f=f||0; fpb_alert('<div class="pb_ahr">'+((f==0)?('Ошибка связи. status:'+s.toString()):s)+'</div>','<div class="px20"></div>Временная техническая проблема.'+v_px10+'Попробуйте повторить позже.',300,110); }
/* support_block */
function f_sys_setmain() { var p; if(pb_storage>0) { p=new Date(); p=Math.round(p.getTime()/60000);localStorage.setItem('setmain',p.toString()); } }
/* check E-mail */
function f_checkEmail(s){ var em=new RegExp("[^@]+@[^@]+\.[a-zA-Z]{2,6}"); return em.test(s); }
function f_sys_001() {
var f=1,p=fpb_BI('id_pb_tt'); p=p?p.innerHTML:'11111'; v_pb_tt=p; v_azn=3;
if(pb_storage>0) {
  t='v_ap=['; if (p[0]=='1') t+='[0,"s",200,"l",0,0,0,0],'; else v_azn-=1; t+='[0,"s",0,"l",0,0,0,0],'; if (p[2]=='1') t+='[0,"s",50,"",0,0,0,0],'; else v_azn-=1; t+='[1,"n",100,"r",0,9999999999,0,0],';
  if (p[3]=='1') t+='[0,"n",100,"r",0,9999999999,0,0],[0,"n",100,"r",0,9999999999,0,0],'; t+='[1,"del",20,0,0,0,0,0]]'; eval(t);
  v_az=fpb_getLSa2('aorder')||null; if(!v_az)f=0; if(!v_az||v_az[0].length!=v_ap.length) {
	t='v_az=[['+(p[0]=='1'?'"Номер / артикул",':'')+'"Наименование",'+(p[2]=='1'?'"Ед.изм.",':'')+'"Количество",'+(p[3]=='1'?'"Цена","Сумма",':'')+'" "]]'; eval(t);
	fpb_setLSa2('aorder',v_az); if(f)f_message('Смена формата',v_px10+'Изменился формат прай-листа.'+v_px10+'Ваш заказ очищен',250,100);
  }
} else { v_az=v_ap=null; }
}
function f_sys_002(s) { return s.replace(/<span class="find">/g,'').replace(/<\/span>/g,'').replace(/<SPAN class="find">/g,'').replace(/<\/SPAN>/g,'')}
function f_sys_010() { return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; }
function f_sys_011() { if(v_cdiv)v_cdiv.style.top=f_sys_010()+'px'; if(v_hdiv)v_hdiv.style.top=f_sys_010()+'px'; }
function f_sys_012(s,f) { f=f||0; if(typeof(s)!='string')s=s.toString();s=fpb_trim(s.replace(/\t/g,' ').replace(/\¡/g,'')); if(f==0)s=s.replace(/\n/g,' '); return s; }
function f_sys_013() { if(pb_isMOBILE){fpb_BI('topmenu').style.display='none'; if(fpb_BI('leftmenu')) fpb_BI('leftmenu').style.display='none'; setTimeout(function(){fpb_BI('topmenu').style.display='block';if(fpb_BI('leftmenu'))fpb_BI('leftmenu').style.display='block'},100);} }
function f_sys_016(f,n) { var i,p=v_aid||0; n=n||0; if(n)p=v_aic||0; f=f?true:false; if(p){for (i=p.length-1; i>=0; i--){if(f){p[i].oldTabIndex=p[i].tabIndex;p[i].tabIndex="-1"}else{p[i].tabIndex=p[i].oldTabIndex;}} } } // input tabIndex (f) document or cabinet (n)
function f_sys_017(n) { // NodeList input, select, textarea
var t=[],p,i,j,a=['input','select','textarea','a','iframe']; n=fpb_BI(n); if(typeof(n)!='object') return 0;
for(j=a.length-1; j>=0; j-=1) { p=n.getElementsByTagName(a[j])||0; if(p) { for (i=p.length-1;i>=0;i-=1){t.push(p[i])} } } return t;
}function f_sys_018(h) { var hh; if(typeof(h)!='number') return 0; fpb_getAllCurrent(); hh=(pb_clientHeight-50)||0; if (hh<h) f_message('Малый размер окна','Пожалуйста,<br>увеличьте размер окна браузера',200,100); return hh; }
// При загрузке страницы
function fpb_onload(v,d) {
var p,i,l,t; v_cb='cb';
if (v!='00.71'||d!='131101') { f_message('Диагностика','Неверная версия JS-библиотеки<br>(необходима сборка 131101)<br><br>Обновите (перезагрузите) страницу.<br>Рекомендуется сбросить кеш браузера.',320,130,3);v_esc=0;return false; }
if(pb_isFF)fpb_addCss('.abut,.abutn,.pb_cbutton {padding-bottom:2px;}');
//p=(parseInt(fpb_getStyle('main','height'),10)||670)-270; if(p<400)p=400; fpb_BI('content').style.minHeight=p+'px';
p='/inc/';t='.php'; v_cp=p+v_cp+t; v_cb=p+v_cb+t; v_cs=p+v_cs+t; // Инициализация адресов php-скриптов для AJAX

p_spIDmail=p_spIDmail.substr(5)+p_spIDmail.substr(0,5); p=fpb_ById('swtch3'); if(p) p.href='mailto:'+p_spIDmail;
p_spIDmail='<a href="mailto:'+p_spIDmail+'">'+p_spIDmail+'</a>'; p=fpb_ById('dpIDmail0');if(p)p.innerHTML=p_spIDmail;
p=fpb_ById('spIDmail'); if(p) { p_spIDmail=p.innerHTML; p_spIDmail=p_spIDmail.substr(5)+p_spIDmail.substr(0,5);p_spIDmail='<a href="mailto:'+p_spIDmail+'">'+p_spIDmail+'</a>'; }
p=fpb_ById('dpIDmail');if(p)p.innerHTML=p_spIDmail;
for (i=0; i<10; i+=1) {
   p=fpb_ById('spIDmail'+i);
   if(p) {
	   p_spIDmail=p.innerHTML; p_spIDmail=p_spIDmail.substr(5)+p_spIDmail.substr(0,5);p_spIDmail='<a href="mailto:'+p_spIDmail+'">'+p_spIDmail+'</a>';
       p=fpb_ById('dpIDmail'+i); if(p)p.innerHTML=p_spIDmail;
   }
}

if (pb_IE18) fpb_setOpacity('topmenub',0.5);
p=fpb_getEBCN('mnbdiv','topmenu'); for (i=p.length-1; i>=0; i--) {
	a=p[i].parentNode; a=(a.offsetHeight>a.scrollHeight)?a.offsetHeight:a.scrollHeight; p_atm[parseInt(p[i].parentNode.id.substr(5),10)]=a+22; /*console.log(a);*/
    pb_event.add(p[i],'click',function(){var n=parseInt(this.parentNode.style.height,10)||0,p=p_atm,i=this.parentNode.id.substr(5);fpb_a_height(this.parentNode,200,(pb_IE18?70:25),p[i],97); /*this.parentNode.style.background=(n==p[i])?'none':'#d0d0d0';*/ this.innerHTML=(n!=p[i])?'&#8593; &#8593; &#8593;':'&#8595; &#8595; &#8595;'; this.style.backgroundImage=(n==p[i])?'url(/img/css/bg25-n.png)':'url(/img/css/bg25-nh.png)'});
}
pb_event.add(document,'keydown',function(e){e=e||window.event; if(v_esc>0&&e.keyCode==27) {if(fpb_BI('pb__alert')){fpb_win_del(1,1);v_esc=0}}});
v_sea=fpb_getLSa1('afind')||[]; if (!v_sea||v_sea.length!=10) v_sea=['','','','','','','','','','']; v_aid=f_sys_017(document); v_sessionID=Math.round(Math.random()*9000000);
pb_event.add(document,'dblclick',f_sys_011); fpb_BI('logo').tabIndex="-1"; // fpb_BI('asws').tabIndex="-1";
f_sys_001(); pb_event.add(window,'storage',function(e){e=e||window.event; if(e.key=='aorder'){f_zclose();f_sys_001()}});
l=v_mail.length; l=v_mail.substr(5,l-5)+v_mail.substr(0,5); p=fpb_BI('IDmail'); if(p) { p.innerHTML=l; p.href='mailto:info@patriot-rti.ru'; } p=fpb_BI('IDmail2'); if(p) { p.innerHTML=l; p.href='mailto:info@patriot-rti.ru'; }
p=fpb_getEBCN('imginstr'); for (i=p.length-1; i>=0; i--) {
	pb_event.add(p[i],'mouseover',function(){var n=null;fpb_animate(this,200,25,n,n,n,n,n,n,n,n,n,n,'#d2cdc7','#2878bb')});
	pb_event.add(p[i],'mouseout',function(){var n=null;fpb_animate(this,200,25,n,n,n,n,n,n,n,n,n,n,'#2878bb','#d2cdc7')});
}if(fpb_ById('menuSert0'))fpb_initMenu('menuSert0');if(fpb_ById('menuSert1'))fpb_initMenu('menuSert1');if(fpb_ById('menuSert2'))fpb_initMenu('menuSert2');if(fpb_ById('menuSert3'))fpb_initMenu('menuSert3');
fpb_initMenu('lt_menu');
p = fpb_ById('IDdatePrice');
if (p) {
	s = new Date();
	l = (s.getMonth() + 1).toString();
	if (l.length == 1) l = '0' + l;
	p.innerHTML = (s.getDate().toString() + '.' + l + '.' + s.getFullYear().toString());
}
setTimeout(function(e){
  var a,p,p1,p2,p3,i,j;
  a=document.querySelectorAll('.divh3'); if (a) {
	for (i=0; i<a.length; i+=1) {
		pb_event.add(a[i],'click',function(e){
			var p,a,i,l,f=0; e=e||window.event; if (!e.target) e.target = e.srcElement; 
			if(e.target.parentNode.className == 'div_mc' || e.target.parentNode.className == 'div_mo') p=e.target.parentNode; else p=e.target.parentNode.parentNode;
			p.className=(parseInt(fpb_getStyle(p,'height'))==40)?'div_mo':'div_mc'; fpb_a_height(p,200,25,p.scrollHeight,40);
		});
	}
}
  a=document.querySelectorAll('.divh4'); if (a) {
	for (i=0; i<a.length; i+=1) {
		pb_event.add(a[i],'click',function(e){
			var p,a,i,l,f=0; e=e||window.event; if (!e.target) e.target = e.srcElement; 
			if(e.target.parentNode.className == 'div_mc' || e.target.parentNode.className == 'div_mo') p=e.target.parentNode; else p=e.target.parentNode.parentNode;
			p.className=(parseInt(fpb_getStyle(p,'height'))==25)?'div_mo':'div_mc'; fpb_a_height(p,200,25,p.scrollHeight,25);
		});
	}
}});
pb_event.add(document.body,'click',function(e){ /* При любом клике по странице, проверка - не открыто-ли мобильное меню слева, и авто-закрытие если открыто. */
    var p,l=fpb_ById('leftblock'),b=document.body, sb=fpb_ById('sub_block'), w=parseInt(fpb_getStyle(l,'width'),10);
    e=e||window.event; p=e.target||e.srcElement; if((sb&&p==sb) || p==fpb_ById('svg1') || p==fpb_ById('ltblock') || p==fpb_ById('leftblock')) return;
    while (p!=b&&p!=l)p=p.parentNode; if(p!=l){ if(w>100)f_ltblock(e);if(sb)sb.style.display='none';}
});

}
function f_bup(e) { var p=window.pageYOffset||document.documentElement.scrollTop; if(p>0&&o_pageToUp==null) { o_pageToUp=setInterval(function(){var t, p=window.pageYOffset||document.documentElement.scrollTop; if (p>200) t=p/2+p/4; else t=p<20?0:p/2; window.scrollTo(0,t); if (p<20){clearInterval(o_pageToUp);o_pageToUp=null;}},30) } }
function f_over(el){var n=null;fpb_animate(el,200,(pb_IE18)?50:25,n,n,n,n,n,n,1,0)}
function f_out(el){var n=null;fpb_animate(el,200,(pb_IE18)?50:25,n,n,n,n,n,n,0,1)}
// Для приёма и показа капчи
function f_hRSCCap(){
var st,i,j,r='',o=fpb_BI('idcapOK')||null,p=fpb_BI('idcapImg')||null;
try {if(v_xmlHttp.readyState==4){
	if(v_int_cap)clearInterval(v_int_cap); v_cap=''; v_queryHttp=0; if(o)o.disabled=false; st=v_xmlHttp.status;
	if(p&&st==200){ r=v_xmlHttp.responseText;i=r.indexOf('?t=');if(i>0){i=r.substr(i+3);j=i.indexOf('&');if(j>0)v_cap=i.substr(0,j)} }
	v_caphtml=(st==200&&v_cap>'')?('<img src="'+r+'" alt="" style="padding:0;margin:0;border:none" /><img src="/img/css/refresh.gif" title="обновить рисунок" alt="обновить рисунок" style="cursor:pointer;border:none;padding:0;margin:0 0 3px 10px;" onclick="f_postCap()"/>'):'';
	if(p)p.innerHTML=v_caphtml||'Ошибка';
}}catch(e){if(v_int_cap)clearInterval(v_int_cap);if(p)p.innerHTML='Ошибка';if(o)o.disabled=false;v_queryHttp=0;}
}function f_postCap(n){var o=fpb_BI('idcapOK')||null,p=fpb_BI('idcapImg')||null; n=n||10; if(n>0&&n<11&&p&&o&&v_xmlHttp&&v_queryHttp==0){v_caphtml='';v_queryHttp=1;o.disabled=true;fpb_postHttp(v_cp,'mfd',['c_new',v_sessionID,'c_n',n],v_xmlHttp);p.innerHTML='Загружается...';v_int_cap=setInterval(function(){f_hRSCCap()},100);}}
// Приём ответа сервера. Для прочих операций.
function f_hRqStCh(){
var ret,st,i,p;try{
if(pb_xmlHttp.readyState==4){
	st=pb_xmlHttp.status;f_hide_query();
	if(st==200){ret=pb_xmlHttp.responseText;if(v_mode>0&&v_mode<4){
		fpb_alert('<div class="pb_ahb">'+((v_mode==1)?'Сообщить об ошибке':((v_mode==2)?'Обратная связь':'Оформление заказа'))+'</div>',ret,670,430); p=fpb_BI('idcapImg'); if (!p) v_caphtml=''; else {
			if(!v_caphtml) f_postCap(); else p.innerHTML=v_caphtml; if(pb_storage>0) {for (i=1;i<=3;i+=1) {p='Ftext'+i;fpb_BI(p).value=f_sys_012(localStorage.getItem(p)||'')}} if(v_mode==1) fpb_BI('Ftext2').value=v_href;
	}} if(v_mode==10){
		if (ret=='error') f_message('Ошибка при поиске','Неверная строка для поиска<br>или проблемы с сетью<br>или проблемы браузера',200,110);
		if (ret=='errordb') f_mesXRST('Ошибка при поиске',1);
		if (ret.length>8) {
			if (ret.substr(0,9)=='no_found ') { f_sea(); fpb_BI('idSeaDiv').innerHTML='<span style="color:#c80000;font:normal 12px arial">'+ret.substr(9)+'</span><br>Не найдено'; }
			else { fpb_BI('content').innerHTML=ret; p=1;for(i=0;i<10;i+=1){if(v_sea[i]==v_temp)p=0} if(p){for(i=9;i>0;i-=1)v_sea[i]=v_sea[i-1];v_sea[0]=v_temp;} fpb_setLSa1('afind',v_sea); }
		}
	}}else{f_mesXRST(st)}v_mode=0;
}}catch(e){v_mode=0;f_hide_query();}
}
function f_post(n,f) { // f_post(n[,f]) n - mode, f - номер файла капчи (0-9)
var m,cap='',i,t='',p,a=['','','','']; n=n||1; f=f||10; if(pb_queryHttp>0||n<1||n>3||f<1||f>10)return false;v_mode=n;
if(n==3&&!fpb_BI('Ftext2')) { if(v_az.length<2) { f_message('Заказ пуст','Заказ пустой',200,90); return; } else f_zclose(); }
if(n==2||n==3) { if(fpb_ById('Fcheck') && !fpb_ById('Fcheck').checked) {alert('Согласитесь с политикой конфиденциальности (установите флажок)'); return} }
if(pb_storage>0) {for (i=1;i<=3;i+=1) {p='Ftext'+i;a[i]=f_sys_012(localStorage.getItem(p)||'')}}
if (fpb_BI('Ftext2')) {
	if(v_mode>1&&fpb_BI('Ftext2').value.indexOf('@')!=-1) { if (!f_checkEmail(a[2])) { alert('Неверно указан E-mail'); return } }
	if (!a[1]||!a[2]||(n<3&&!a[3])) { alert('Заполните '+((n==3)?'поля "Контактное лицо" и "Телефон / E-mail"':'все поля')+' перед отправкой'); return }
	cap=fpb_BI('Fcaptcha')||''; if (cap) { cap=fpb_trim(cap.value)||''; if (cap.length!=5) { alert('Нужно указать 5-значный код'); return }}
	if(n==3) { m=v_az.length; p=v_az[0].length-1; t='Содержимое заказа:<br><br><table><tbody><tr>'; for(n=0;n<p;n+=1) t+='<th>'+f_sys_012(v_az[0][n])+'</th>'; t+='</tr>';
		for(i=1;i<m;i+=1) { t+='<tr>'; for(n=0;n<p;n+=1) { t+='<td'+((typeof(v_az[i][n])=='number')?' style="text-align:right">':'>')+f_sys_012(v_az[i][n])+'</td>'; } t+='</tr>'; }
		t+='</tbody></table>'; if (v_sum>0) t+='<br>Примерная сумма: '+v_sum;
	}
} m=['mode',v_mode,'login',v_mode,'pass',v_mode,'c_n',f,'cap',cap,'hcaptcha',v_cap,'text1',a[1],'text2',a[2],'text3',a[3],'zlist',t];
f_show_query();fpb_postHttp(v_cb,'mfd',m);v_interval=setInterval(function(){f_hRqStCh()},100);fpb_win_del(1);
}function f_ch_clb(n){ var p=fpb_BI('Ftext'+n); if(pb_storage>0&&p) { p=fpb_trim(p.value)||' '; localStorage.setItem('Ftext'+n,p); }}
function f_zakaz() {
f_message('Сообщение','Заказ в разработке',200,70);
}
// Поиск
function f_sea() {
var t,i,j,h=150,s='';
t=v_px10+'<div id="idSeaDiv">Введите номер или наименование '+'(или часть,которая вам известна).<br>От 2-х до 40 знаков. Начальные и конечные пробелы не учитываются.</div>';
t+=v_px20+'<p style="float:left;margin:5px 0 0 15px;width:150px;font-weight:bold">Текст для поиска:</p>';
t+='<input class="inpbox" id="idInpSea" type="text" maxlength="40" value="" style="float:left;margin:3px 0 0 10px;padding:0 2px;width:350px;background:#fafaff;"/>';
t+='<input type="button" class="abut" style="float:right;margin-right:15px;" value="Искать" onclick="f_seaPost()" />';
for(i=0;i<10;i+=1){if(v_sea[i]) s+='<option value="'+i+'">'+v_sea[i]+'</option>'; else break;}
if (s>'') {
	h=180; t+=v_px10+'<p style="float:left;margin:5px 0 0 15px;width:150px;">Ранее уже искали:</p><select id="idSelSea" style="float:left;margin:2px 0 0 10px;padding:0;border:solid 1px #808080;width:355px;background:#fafaff;" onchange="if(this.value!=99)fpb_BI(\'idInpSea\').value=v_sea[this.value]"><option value="99"></option>'+s+'</select>';
	t+='<input type="button" class="abut" style="float:right;margin-right:15px;" value="Очистить" onclick="v_sea=[\'\',\'\',\'\',\'\',\'\',\'\',\'\',\'\',\'\',\'\'];v_temp=fpb_BI(\'idInpSea\').value||\'\';fpb_win_del(1);f_sea();fpb_BI(\'idInpSea\').value=v_temp" />';
} t+=v_px10;
f_message('Поиск',t,700,h); v_esc=0; fpb_BI('idInpSea').focus();
}
function f_seaPost() {
var p,t=f_sys_012(fpb_BI('idInpSea').value); if(!t||t.length<2){fpb_BI('idInpSea').focus();return;}fpb_win_del(1,1);v_mode=10;v_temp=t; p=(v_pb_tt.substr(0,1)=='1')?1:2;
m=['mode',v_mode,'login',v_mode,'pass',v_mode,'col',p,'txt',t];f_show_query();fpb_postHttp(v_cs,'mfd',m);v_interval=setInterval(function(){f_hRqStCh()},100);
}
// Заказ
function f_az(id) {
var i,j,l,t,h=160; id=id||0; if(!id||!v_ap) return;
p=0; l=v_az.length; j=v_az[0].length; for(i=0;i<l;i+=1) {if (v_az[i][j-1]==id)p=i}
t=v_px10+fpb_BI('pt'+id).innerHTML+v_px10; if(p>0) { t+='<span style="font:italic bold 13px arial;color:#2878bb">Уже есть в заказе</span>!'+v_px10; p=v_az[p][v_azn]; } else { p=1; h=140; }
t+='Количество:&nbsp;<input id="IDiadd" type="text" value="'+p+'"/>&nbsp;<input type="button" class="pb_buttons" value="Ok" onclick="f_aza('+id+')"/>'+v_px10;
t+='<span style="color:#2878bb">'+'Чтобы посмотреть весь Ваш заказ, выберите пункт меню</span> <span style="font:bold 12px arial;color:#2878bb">«Ваш заказ»</span>'+v_px10;
f_message((h==160?'Изменить количество в заказе':'Добавить в заказ'),t,500,h);
} function f_aza(id) {
var i,j,l,t,s,p=v_pb_tt,n=fpb_BI('IDiadd'); id=id||0; if(!id||!n||!v_ap) return; n=parseInt(fpb_trim(n.value),10); fpb_win_del(1);
s=0; l=v_az.length; j=v_az[0].length; for(i=0;i<l;i+=1) {if (v_az[i][j-1]==id)s=i}
if(s>0)v_az[s][v_azn]=n; else {
	t='['; if (p[0]=='1') { s=fpb_BI('pn'+id); s=s?(fpb_trim(s.innerHTML)||' '):' '; t+="'"+f_sys_002(s)+"',"; }
	s=fpb_BI('pt'+id); s=s?(fpb_trim(s.innerHTML)||' '):' '; t+="'"+f_sys_002(s)+"',"; if (p[2]=='1') { s=fpb_BI('pe'+id); s=s?(fpb_trim(s.innerHTML)||' '):' '; t+="'"+f_sys_002(s)+"',"; }
	t+=n+','; if (p[3]=='1') { s=fpb_BI('pp'+id); s=s?(fpb_trim(s.innerHTML)||0):0; t+=s+',0,'; }
	t+='"'+id.toFixed(0)+'"]'; t=eval(t); if (t.length!=j) { f_sys_001(); return; } v_az[l]=t; s=l;
} if(p[3]=='1') { v_az[s][v_azn+2]=1*((v_az[s][v_azn+1]*n).toFixed(2)||0); f_zsum(); }
fpb_setLSa2('aorder',v_az); fpb_grid('idForGrid',v_ap,v_az,function(v,t,y,x){return f_zdel(v,t,y,x)});
}function f_zdel(v,t,y,x){
var i,j,l,p; if(y==0)return false; p=v_az[y];
if(t=='del') { l=v_az.length; fpb_BI('idForGrid').innerHTML=''; for (i=y;i<l;i+=1)v_az[i]=v_az[i+1]; v_az.length=l-1; }
if(t=='n') { p[v_azn]=v; } if(v_pb_tt[3]=='1') f_zsum();
fpb_setLSa2('aorder',v_az); fpb_grid('idForGrid',v_ap,v_az,function(v,t,y,x){return f_zdel(v,t,y,x)}); // fpb_BI('IDsum').innerHTML=v_sum+' руб.';
}function f_zsum() {
var i,j,p,l=v_az.length,s=v_pb_tt; v_sum=0; if(s[3]=='1') {
  for(i=1;i<l;i+=1){p=v_az[i];p[v_azn+2]=1*((p[v_azn]*p[v_azn+1]).toFixed(2)||0);v_sum+=p[v_azn+2];} // p=fpb_BI('IDsum'); if(p)p.innerHTML=v_sum+' руб.'; p=fpb_BI('IDbascket'); if(p){p.innerHTML='Корзина<br><span style="font:bold 11px arial;line-height:12px">('+v_sum+' руб.)</span>';}
}}

function f_z() {
var i,t,s,p=v_pb_tt; if(!v_ap)return; f_sys_016(1); v_esc=1; f_show_query(1);
t='<div style="position:relative;margin:0 auto;width:1000px;height:0;"><div id="dz" style="'+(pb_IE18?v_IEold:'')+'">'+v_px30+v_px15;
t+='<div id="dzhead">Ваш заказ</div><div class="dzclose" onclick="f_zclose()"></div><div class="dzclose" style="left:0" onclick="f_zclose()"></div>';
t+='<div id="IDclear" onclick="f_zclear()" onmouseover="v_descIDc=fpb_animate(this,250,25,null,null,null,null,null,null,null,null,\'#ffb0a0\',\'#800000\')" onmouseout="v_descIDc=fpb_animate(this,250,25,null,null,null,null,null,null,null,null,\'#800000\',\'#ffb0a0\')" style="background-color: rgb(230, 141, 128);">Очистить заказ</div>';
t+='<div id="IDsend" onclick="f_post(3)" onmouseover="v_descIDs=fpb_animate(this,250,25,null,null,null,null,null,null,null,null,\'#a4c6ff\',\'#2878bb\')" onmouseout="v_descIDs=fpb_animate(this,200,25,null,null,null,null,null,null,null,null,\'#2878bb\',\'#a4c6ff\')" style="background-color: rgb(164, 198, 255);">Оформить заказ</div>';
t+='<p style="margin:3px 0 0 220px;">Для удаления строки щелкните по крестику (в правой колонке).<br>Количество меняется щелчком мыши по необходимой ячейке таблицы.</p>'+v_px5b;
t+='<p style="margin:5px 0 0 20px;"><span>Для добавления продукции в заказ</span>, необходимо открыть любой прайс-лист или поиск, <span>щёлкнуть по значку корзины</span> (в правой колонке).</p>';
t+='<p style="margin:2px 0 0 20px;">Чтобы быстро выбрать и открыть любой прайс-лист, наведите указатель мыши на <span>метку слева под главным меню</span>.</p>';
t+='<p style="margin:2px 0 0 20px;">Если Вы прокрутили экран при открытом заказе, сделайте двойной щелчок в любое место окна браузера.</p>';
t+=v_px5b+v_px5+'<div id="idForGrid" style="position:relative;clear:both;padding:0 10px;width:980px;height:545px;overflow:hidden;background:#f0f0f0"></div></div></div>';
t+='';
v_hdiv=document.createElement('div'); s=v_hdiv.style; s.position='absolute'; s.left='0'; s.top=f_sys_010()+'px'; if(pb_isIE>0&&pb_isIE<7){s.width='100%';s.height='100%'} s.right='0'; s.bottom='0'; s.zIndex=251;
pb_s_5.appendChild(v_hdiv); v_hdiv.innerHTML=t; f_zsum(); fpb_grid('idForGrid',v_ap,v_az,function(v,t,y,x){return f_zdel(v,t,y,x)});
}
function f_zclose() { v_esc=0; fpb_win_del(1); if(v_hdiv){pb_s_5.removeChild(v_hdiv); v_hdiv=null; f_hide_query(); fpb_clearAnimate(v_descIDc);fpb_clearAnimate(v_descIDs);v_descIDc=v_descIDs=0; f_sys_016(0);} }
function f_zclear() {
var t; t='<span style="color:#800000">Вы уверены, что хотите полностью очистить содержимое заказа ?</span>'+v_px15;
t+='<input type="button" class="abut" value="Очистить" style="margin:0" onclick="fpb_win_del(1); v_az.length=1; fpb_setLSa2(\'aorder\',v_az); f_zclose();"/>';
t+='<input type="button" class="abut" id="idMsgCancel" value="Отмена" style="margin:0 0 0 20px" onclick="fpb_win_del(1,1)"/>';
f_message('Очистить заказ',v_px10+t+v_px10,500,105); fpb_BI('idMsgCancel').focus();
}
function f_ltblock() {
	var p=fpb_ById('leftblock'), w=parseInt(fpb_getStyle(p,'width'),10);
	p.style.width = (w<100?307:0)+'px';
}
