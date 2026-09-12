var v_cb='<div class="px', v_px0=v_cb+'0"></div>',v_px0b=v_cb+'0b"></div>',v_px1=v_cb+'1"></div>',v_px3=v_cb+'3"></div>',v_px3b=v_cb+'3b"></div>',v_px5=v_cb+'5"></div>',v_px5b=v_cb+'5b"></div>',v_px10=v_cb+'10"></div>',v_px10b=v_cb+'10b"></div>',v_px15=v_cb+'15"></div>',v_px15b=v_cb+'15b"></div>',v_px20=v_cb+'20"></div>',v_px20b=v_cb+'20b"></div>',v_px25=v_cb+'25"></div>',v_px25b=v_cb+'25b"></div>',v_px30=v_cb+'30"></div>',v_px30b=v_cb+'30b"></div>';
var v_storage=0, v_interval=null, v_layer=null, v_descSH=0, v_mode=0, v_esc=0, v_dialogEsc=0, v_hash=0, v_num=0, v_idKid=0, v_arrKid, v_id, v_pid=0, v_nid=0, v_maxid=0, v_inp='<input type="button" class="pb_buttons"', v_queryXHR=0, v_xml=$.httpNew(), v_XHR=$.httpNew();
var v_tObj=[' ','Цех промышленный','Цех пищевой','Технические помещения','Склад','Холодильник / Морозильник','Гараж (паркинг)','Автосервис','Автомойка','Торговый / Развлекательный / Выставочный зал','Офис','Мед. Учреждения','Животноводство','Сельхоз. объекты','Электростанции, ТЭК','Объекты РосАтом','Жилищное строительство','ПРОЧЕЕ'];
var v_tPkr=[' ','Пропитка Полиуретановая','Пропитка Эпоксидная','Пропитка Флюат','Покрытие Полиуретановое','Покрытие Эпоксидное','Покрытие Светостойкое','Покрытие для Асфальта','Кварцнаполненное Эпоксидное','Кварцнаполненное Полиуретановое','Наливной пол Эпоксидный','Наливной пол Полиуретановый','Наливной пол Промышленный','Наливной пол Антистатический','Антискользящее покрытие','Фрезер-насечка','Безыскровое покрытие','Стяжка Эластобетон-А','Стяжка Эластобетон-Б','Стяжка Эластобетон-В','ПРОЧЕЕ'];
var v_tPreds=[]; /* Список названий представителей в админке (как в списке выбора select) */

function vcorpJS_onload(v,d) {
var p,i,l,t; v_cb='';
v_storage=window.localStorage?window.localStorage:0;
if (!v_storage){f_mesErr('Ограничение','Ваш браузер устарел'+v_px5+'и нуждается в замене.',450,130,3); return; }
if (v!='vcorp_js_00_01') { f_mesErr('Диагностика','Неверная версия JS-библиотеки<br>(необходима сборка vcorp_js_00_01)'+v_px5+'Обновите (перезагрузите) страницу.'+v_px5+'Рекомендуется сбросить кеш браузера.',320,150,3); return false; }
v_hash=$.id('idhash'); if (!v_hash) { f_message('<div class="pb_ahr">Ошибка</div>',v_px10+'Ошибка авторизации',170,100,3); return; } v_hash=v_hash.innerHTML;

/* По клавише <Esc> убирает окно сообщения или диалоговое окно - Если не было редактирования (v_esc==1 и/или v_dialogEsc==1) */
$.EH.add(document,'keydown',function(e){e=e||window.event; if(v_esc>0&&e.keyCode==27) {if($.id('pb__alert')){$.wDelete(1,1);if(!$.isDialog()||v_dialogEsc==1)v_esc=0;$._(24)(e);return}if($.isDialog()){if(v_dialogEsc==1){v_dialogEsc=0;$.removeDialog();$._(24)(e);}else v_esc=1;}}});

p=$.id('idPrice'); if (p) { p.innerHTML=v_PP; } v_id=parseInt($.trim($.id('idID').innerHTML),10); if($.id('idSelPred')) v_pid=parseInt($.id('idSelPred').value,10)||0; v_nid=v_pid||v_id; f_getKidList(); if(v_id==v_pid) $.id('idSelPred').value=''+v_id;
}

/* Замена табуляций и спец-символов в тексте. */
function f_replace(s,f) {
	s=$.trim(s.replace(/\¡/gm,'i').replace(/\'/gm,'’').replace(/\"/gm,'”').replace(new RegExp($.gCC(9),'g'),' ').replace(new RegExp($.gCC(13),'g'),''));
	f=f||0; if (f) { s=s.replace(new RegExp($.gCC(10),'g'),''); } else { s=s.replace(new RegExp($.gCC(10),'g'),'☆'); }
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

function f_openCoord() { var o=window.open('https://maps.yandex.ru/'); o.focus(); }

function f_show_query(){ /* При AJAX-запросе в процессе получения ответа от сервера добавляет слой поверх страницы.  */
	var l,t; v_layer = $.addLayer(0,'#808080',260,0,0); v_descSH = $.aOpacity(v_layer,1000,100,0,1); $.uEnv();
	l=parseInt($.gCW()/2-150,10); t=parseInt($.gCH()/2-100,10); if(l<0)l=0; if(t<0)t=0; v_queryXHR=1;
	v_layer.innerHTML='<div style="position:fixed;left:'+l+'px;top:'+t+'px;width:300px;height:150px;border:solid 1px #0969a3;"><table class="twajax"><tbody><tr><td>Please wait...'+v_px10+'Пожалуйста, подождите...</td></tr></tbody></table></div>';
}function f_hide_query(){ if(v_interval)clearInterval(v_interval); v_interval=null; v_queryXHR=0; if(v_descSH>=0)$.aClear(v_descSH); $.removeLayer(v_layer); v_layer=null; }

function f_hRSC(){
	var ret, st;
	if (v_queryXHR>0 && v_mode>0){
		try {
			if (v_XHR.readyState==4){
				st=v_XHR.status; f_hide_query();
				if(st==204) {
					f_message('<div class="pb_ahr">Ошибка</div>','Причины ошибки:<br>или временные проблемы<br>или у вас изменился IP-адрес.',300,130);
				} else {
				  if(st==200) {
					ret=v_XHR.responseText;
					if (v_mode==4) {
						$.createDialog(('Список последних добавленных ЮЛ'),ret,1200,620); v_esc=v_dialogEsc=1;
					} else {
					if (!ret) { f_message('Ошибка записи','Данные не обновлены',200,100); } else {
						$.removeDialog(); $.id('kidList').innerHTML=ret; f_getKidList(); v_pid=v_nid||v_pid||v_id;
						$.id('ihEdit').style.color = '#808080'; if($.id('ihDel'))$.id('ihDel').style.color = '#808080'; v_num=v_idKid=0;
					}
					}
				  } else f_mesXRST(st);
				} v_mode=0;
			}
		}catch(e){f_hide_query();v_mode=0;}
	}
}

/* ************************ */
function f_getKidList() {
	var i,l,c,a=[[]],n,p=$.id('hKidList')||0; if (!p)return; c=$.qSA('div',p); l=c.length; v_maxid=0;
	for (i=0; i<l; i+=1) { a[i+1]=$.trim(c[i].innerHTML).split('¡'); n=parseInt(a[i+1][7]); if(n>v_maxid)v_maxid=n; }
	v_arrKid=a; if($.id('idSelPred')) v_pid=parseInt($.id('idSelPred').value,10)||0; v_nid=v_pid||v_id;
	
	if (v_id>1) $.id('ihNew').style.display = $.id('ihEdit').style.display = (v_pid==v_id) ? 'block' : 'none';
	p=$.id('hPredList')||0; if (!p){ f_mesErr('Ошибка','Отсутствует список представителей',320,120); return; }; c=$.qSA('div',p); l=c.length;
	a=['']; for (i=0; i<l; i+=1) { a[i+1]=$.trim(c[i].innerHTML); } v_tPreds=a;
}

function f_trs(o,n,m) {
	var p,i,a; n=n||0; m=m||0; o = typeof(o)=='object' ? o : '';
	a=$.qSA('tr',o.parintNode); if(!a)return; v_num = n; v_idKid = m;
	for (i=a.length-1; i>=0; i-=1) { a[i].className = a[i]==o ? 'trs' : ''; }
	$.id('ihEdit').style.color = o? '#000000' : '#808080';
	if ($.id('ihDel')) $.id('ihDel').style.color = o? '#000000' : '#808080';
}
function f_del(e,n) {
	var t;
	n=n||0; if (!e||!n)return; $._(24)(e);
	t='Вы хотите Удалить ЮЛ № '+n+' :'+v_px5+v_arrKid[n][1].substr(0,50)+v_px20+v_inp+' style="width:100px;height:25px;float:left;color:#c80000;" value="Удалить" onclick="f_del2('+n+')" />'+v_inp+' style="width:100px;height:25px;float:right;" value="Отмена" onclick="$.wDelete(1,1)" />';
	f_message('Удаление ЮЛ № '+n,t,300,170); v_esc=1;
} function f_del2(n) { var i,j=1,s='',l=v_arrKid.length; if (l<1)return; for (i=1; i<l; i+=1) { if(i!=n) s+=f_strKid(i,j++); } f_saveKid(s); }
function f_edit(n,m) {
	var i,j,p,t='',a=['','','','','','','','','',''],dl='<div style="float:left;width:100px;">',c='<input type="text" class="inpbox" style="width:';
	n=n||0; m=m||0; if((n!=0&&n!=v_num)||(m!=0&&m!=v_idKid))return; if (n!=0 && m==0) m=v_idKid;
	if (n!=0) a=v_arrKid[n];
	t+=v_px5+'ИНН '+(n==0?'нового ЮЛ':('ЮЛ № '+n+' (ID '+m+')'))+v_px5+c+'130px;" value="'+a[1]+'" maxlength="12" id="idText1" />';
	t+=v_px10+'Организация '+(n==0?'(новое ЮЛ)':('ЮЛ № '+n+' (ID '+m+')'))+v_px5+c+'900px;" value="'+a[2]+'" maxlength="100" id="idText2" />';
	t+=v_px10+'Суть (произвольное описание) '+(n==0?'по новому ЮЛ':('по ЮЛ № '+n+' (ID '+m+')'))+v_px5+'<textarea class="imparea" id="idText3" style="width:900px;max-width:900px;min-width:900px;height:250px;max-height:250px;min-height:250px;" maxlength="300">'+a[3].replace(new RegExp('☆','g'),$.gCC(10))+'</textarea>';
	t+=v_px10+'<input type="button" class="pb_buttons" id="idSaveObj" style="width:200px;height:40px;" value="Сохранить '+(n==0?'новое ЮЛ':('ЮЛ № '+n))+'" onclick="f_edit2('+n+')" />';
	t+='<div id="idText0" style="margin:10px 0 0 10px;width:300px;color:#c80000;font:italic bold 13px arial;"></div>';
	$.createDialog(((n==0)?'Добавить нового ЮЛ':'Редактирование ЮЛ № '+n+' (ID '+m+')'),t,950,520,0,'',0.5,151); v_esc=v_dialogEsc=1;
}
function f_edit2(n) {
	var i,t,s='',l=v_arrKid.length,p=$.id('idText0'),a=['','idText1','idText2','idText3','','','','','',''];
	n=n||0; if(n!=0&&n!=v_num)return; if (l<1)return; p.innerHTML='';
	for(i=1; i<4; i+=1) { a[i]=f_replace($.id(a[i]).value,(i==3?0:1)); if(i<3&&!a[i]){p.innerHTML='Не все поля заполнены'; return;} } if(a[3]=='idText7')a[3]='';
	i=(n==0)?l:n; if (n==0) { l+=1; t=f_getDate(); } else t=v_arrKid[i][8];
	v_arrKid[i]=[v_pid,a[1],a[2],a[3],v_tPreds[v_pid],i,(v_arrKid[i]?(v_arrKid[i][6]):0),(v_arrKid[i]?(v_arrKid[i][7]):(v_maxid+1)),t];
	for (i=1; i<l; i+=1) { s+=f_strKid(i,i); } f_saveKid(s);
} function f_getDate() { var m,d,dt=new Date(); m=dt.getUTCMonth()+1; if(m<10)m='0'+m; d=dt.getUTCDate(); if(d<10)d='0'+d; return dt.getUTCFullYear()+'-'+m+'-'+d; }
function f_strKid(i,n) { var a=v_arrKid[i],t=$.gCC(9); return v_pid+t+a[1]+t+a[2]+t+a[3]+t+a[4]+t+n+t+a[6]+t+a[7]+t+a[8]+$.gCC(10); }
function f_saveKid(s) {var m,n=v_pid; m=['data',3,'session',v_hash,'pid',n,'kidlist',(s||'none')]; $.wDelete(1,1); f_show_query(); v_mode=3; $.httpPost('/setpred01/adm_kid.php','mfd',m,v_XHR); v_interval=setInterval(function(){f_hRSC()},100); }
function f_changePred() {var n=$.id('idSelPred').value, m=['data',3,'session',v_hash,'pid',n]; $.wDelete(1,1); f_show_query(); v_mode=3; $.httpPost('/setpred01/adm_kid.php','mfd',m,v_XHR); v_interval=setInterval(function(){f_hRSC()},100); v_nid=parseInt(n,10)||0;  }

function f_viewNewKid() { /* Паказать новых кидальщиков (для главного представителя v_id==1 ) */
	var p,t='';
	if (v_mode!=0)return;
	f_show_query(); v_mode=4; $.httpPost('/setpred01/adm_kid.php','mfd',['lastkid',v_mode,'hash',v_hash],v_XHR); v_interval=setInterval(function(){f_hRSC()},100);
}
