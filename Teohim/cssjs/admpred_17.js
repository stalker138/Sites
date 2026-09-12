var o_cb='<div class="px', o_px0=o_cb+'0"></div>',o_px0b=o_cb+'0b"></div>',o_px1=o_cb+'1"></div>',o_px3=o_cb+'3"></div>',o_px3b=o_cb+'3b"></div>',o_px5=o_cb+'5"></div>',o_px5b=o_cb+'5b"></div>',o_px10=o_cb+'10"></div>',o_px10b=o_cb+'10b"></div>',o_px15=o_cb+'15"></div>',o_px15b=o_cb+'15b"></div>',o_px20=o_cb+'20"></div>',o_px20b=o_cb+'20b"></div>',o_px25=o_cb+'25"></div>',o_px25b=o_cb+'25b"></div>',o_px30=o_cb+'30"></div>',o_px30b=o_cb+'30b"></div>';
var o_interval=null, o_layer=null, o_descSH=0, o_mode=0, o_esc=0, o_dialogEsc=0, o_hash=0, o_value, o_num=0, v_arrObj, o_id, o_pid=0, o_nid=0, o_maxid=0, o_inp='<input type="button" class="pb_buttons"', o_xml=fpb_createXmlHttp();
var o_tObj=[' ','Цех промышленный','Цех пищевой','Технические помещения','Склад','Холодильник / Морозильник','Гараж (паркинг)','Автосервис','Автомойка','Торговый / Развлекательный / Выставочный зал','Офис','Мед. Учреждения','Животноводство','Сельхоз. объекты','Объекты РосАтом','Жилищное строительство','ПРОЧЕЕ'];
var o_tPkr=[' ','Пропитка Полиуретановая','Пропитка Эпоксидная','Пропитка Флюат','Покрытие Полиуретановое','Покрытие Эпоксидное','Покрытие Светостойкое','Покрытие для Асфальта','Кварцнаполненное Эпоксидное','Кварцнаполненное Полиуретановое','Наливной пол Эпоксидный','Наливной пол Полиуретановый','Наливной пол Антистатический','Антискользящее покрытие','Фрезер-насечка','Безыскровое покрытие','Стяжка Эластобетон-А','Стяжка Эластобетон-Б','Стяжка Эластобетон-В','ПРОЧЕЕ'];
var o_tsObj=[' ','Цех пром.','Цех пищ.','Тех.пом.','Склад','Хлд/Мрз','Гараж','А/сервис','А/мойка','Т/Р/В зал','Офис','Мед.','Жив-во','С/Х','РосАтом','Прочее'];
var o_tsPkr=[' ','Проп.ПУ','Проп.ЭД','Проп.Фл','Покр.ПУ','Покр.ЭД','Покр.Св','Покр.Асф','КНП ЭД','КНП ПУ','НП ЭД','НП ПУ','НП Аст','А/скольз.','Фрезер','Безыскр.','Стяжка-А','Стяжка-Б','Стяжка-В','Прочее'];

function fpb_onload(v,d) {
var p,i,l,t; o_cb='';
if (v && d && (v!='00.77'||d!='150731')) { f_message('Диагностика','Неверная версия JS-библиотеки<br>(необходима сборка 00.77 150731)<br><br>Обновите (перезагрузите) страницу.<br>Рекомендуется сбросить кеш браузера.',320,150,3); return false; }
o_hash=fpb_BI('idhash'); if (!o_hash) { f_message('<div class="pb_ahr">Ошибка</div>',o_px10+'Ошибка авторизации',170,100,3); return; } o_hash=o_hash.innerHTML;
pb_event.add(document,'keydown',function(e){e=e||window.event; if(o_esc>0&&e.keyCode==27) {if(fpb_BI('pb__alert')){fpb_win_del(1,1);if(pb_s_25==null||o_dialogEsc==1)o_esc=0;return}if(pb_s_25!=null){if(o_dialogEsc==1){o_dialogEsc=0;fpb_removeDialog();}else o_esc=1;}}});
p=fpb_BI('idPrice'); if (p) { p.innerHTML=o_PP; } f_getObjList(); o_id=parseInt(fpb_trim(fpb_BI('idID').innerHTML),10); if(fpb_BI('idSelPred')) o_pid=parseInt(fpb_BI('idSelPred').value,10)||0; o_nid=o_pid=o_pid||o_id; if(o_id==1&&fpb_BI('idSelPred')) fpb_BI('idSelPred').value='1';
}

function f_post(f) {
	var m, p=fpb_BI('iCoord'), t=f_replace(p.value), i=t.indexOf(','), c1=fpb_trim(t.substr(0,i)), c2=fpb_trim(t.substr(i+1)), i1=parseFloat(c1)||0, i2=parseFloat(c2)||0; f=f||0;
	p.style.border = 'solid 1px #' + ((!t||!c1||!c2||i1==0||i2==0||i==-1) ? '800000' : 'c8c8c8');
	p=fpb_BI('iName'); p.style.border = 'solid 1px #' + (f_replace(p.value) ? 'c8c8c8' : '800000'); if (!f_replace(p.value))f=0;
	p=fpb_BI('iAdr'); p.style.border = 'solid 1px #' + (f_replace(p.value) ? 'c8c8c8' : '800000'); if (!f_replace(p.value))f=0;
	if(!t||!c1||!c2||i==-1||pb_queryHttp>0)return false;
	if (f&&o_hash) {
		m=['data',f,'session',o_hash,'c1',c1,'c2',c2,'name',f_replace(fpb_BI('iName').value),'adr',f_replace(fpb_BI('iAdr').value)];
		f_show_query(); o_mode=1; fpb_postHttp('/setpred03/adm_price.php','mfd',m); o_interval=setInterval(function(){f_hRSC()},100);
	} return true;
}
function f_postPred() {
	var i,j,p,s='0123456789';
	for (i=11; i<111; i+=1) {
		if(fpb_BI('i'+i+'_3')) {
			s+=f_replace(fpb_BI('i'+i+'_3').value);
			for (j=4; j<9; j+=1) {
				if(fpb_BI('i'+i+'_'+j)) s+=fpb_CC(9)+f_replace(fpb_BI('i'+i+'_'+j).value);
			} s+=fpb_CC(10);
		}
	}
	f_show_query(); o_mode=2; fpb_postHttp(fpb_BI('iddomain').innerHTML+'/cssjs/price.js.php','mfd',['data',s,'hash',o_hash]); o_interval=setInterval(function(){f_hRSC()},100);
}
function f_priceDefault() {
	fpb_BI('priceCalc').style.display='block';
}
function f_priceCalc() {
	var i, k, s, z, p=fpb_BI('iPriceK'), c=fpb_BI('iPriceA'); if (!p||!c) return;
	k=parseFloat(f_replace(p.value,1).replace(/\,/gm,'.'))||1; if(k<0)k=0-k; p.value=k.toFixed(2); k=parseFloat(k.toFixed(2));
	p=parseInt(f_replace(c.value,1))||0; c.value=''+p;
	for (i=11; i<111; i+=1) {
		if (fpb_BI('d'+i+'_0')) {
		  s=fpb_BI('d'+i+'_0').innerHTML||0;
		  if (s) {
			for(j=3; j<9; j+=1) {
				if (fpb_BI('i'+i+'_'+j) && fpb_BI('src'+s+j)) {
					c=fpb_BI('src'+s+j).innerHTML; z=(c.indexOf('*')==-1)?'р.':'р.*';
					fpb_BI('i'+i+'_'+j).value = ((parseInt(c,10)||0)*k+p).toFixed(0)+z;
				}
			}
		  }
		}
	}
}

function f_change(o) { if (!o) return; o.value=(parseInt(fpb_trim(o.value),10)>=0) ? fpb_trim(o.value) : fpb_trim(o_value); o.style.background=(parseInt(o.value,10)>0)?'#eeeeee':'#ffc8c8'; }
function f_focus(o) { if (!o) return; o_value = fpb_trim(o.value); if (isNaN(o_value)||parseInt(o_value,10)<0) o_value='0'; }
function f_keydown(e,o) {
	var id, i, n=1; if (!e||!o||(e.keyCode!=38&&e.keyCode!=40)) return; if (e.keyCode==38) n=-1;
	id=o.id; i=id.indexOf('_'); j=parseInt(id.substr(i+1),10); i=parseInt(id.substr(1,i-1),10);
	while (true) { if (n==1) { i+=1; if(i>=110)i=11; } else { i-=1; if(i<=10)i=110; } if (fpb_BI('i'+i+'_'+j)) break; }
	if (fpb_BI('i'+i+'_'+j)) fpb_BI('i'+i+'_'+j).focus();
}

// Замена табуляций и спец-символов в тексте.
function f_replace(s,f) {
	s=fpb_trim(s.replace(/\¡/gm,'i').replace(/\'/gm,'’').replace(/\"/gm,'”').replace(new RegExp(fpb_CC(9),'g'),' ').replace(new RegExp(fpb_CC(13),'g'),' '));
	f=f||0; if (f) { s=s.replace(new RegExp(fpb_CC(10),'g'),' '); } else { s=s.replace(new RegExp(fpb_CC(10),'g'),'☆'); }
	return s;
}

function f_message(ht, bt, w, h, b, s) {
	var f = bt.indexOf('<input'); if((!b||b==1))o_esc=1;
	if(f == -1) { if(h>0)h+=30; bt += o_px15 + '<input type="button" class="pb_buttons" id="idMsgOK" value="Ok" onclick="'+((!b || b==1) ? 'fpb_win_del(1,1)"' : '')+'/>'; }
	if (ht.indexOf('<div class="pb_')<0) ht = '<div class="pb_ah0">' + ht + '</div>'; fpb_alert(ht,o_px10+bt, w, h, b, s);
	if(f == -1 && (!b || b==1)) fpb_BI('idMsgOK').focus();
}
function f_mesXRST(s) { o_esc=1; fpb_win_del(1); fpb_alert('<div class="pb_ahr">Ошибка связи. status:'+s.toString()+'</div>',(s.toString()=='0'?'Для вашего прайс-листа админка находится здесь:<div class="px5"></div><a target="_blank" href="https://www.teohim-nnov.ru/setpred03/">https://www.teohim-nnov.ru/setpred03/</a><div class="px5"></div>(ссылка "вход для представителей")':'Временная техническая проблема.<div class="px10"></div>Попробуйте повторить позже.'),400,140); }
function f_mesNot(s) {if(pb_queryHttp>0)return false;f_message('Сообщение',''+(s?s:'В разработке'),200,100);fpb_BI('idMsgOK').focus(); }
function f_openCoord() { var o=window.open('https://maps.yandex.ru/'); o.focus(); }

function f_show_query(f){ // Если f==1, то полупрозрачный слой, если f==0, то непрозрачный для AJAX
	var l,t; f=f||0; o_layer = fpb_addLayer(0,pb_IE18?0:'#808080',260,0,((f==0)?0:0.5)); o_descSH = (f==0) ? fpb_a_opacity(o_layer,1000,100,0,1) : -1;
	if(pb_IE18)setTimeout(function(){o_layer.style.background='#808080'},50); if(f)return;
	l=parseInt(pb_clientWidth/2-250,10); t=parseInt(pb_clientHeight/2-100,10); if(l<0)l=0; if(t<0)t=0;
	o_layer.innerHTML='<div style="position:absolute;left:'+l+'px;top:'+t+'px;width:500px; height:150px; border:solid 1px #0969a3;"><table style="width:100%;height:100%;border:none;text-align:center;background:#f0f0f0;"><tbody><tr><td>Please wait...<div class="px10"></div>Пожалуйста, подождите...</td></tr></tbody></table></div>';
}function f_hide_query(){ if(o_interval)clearInterval(o_interval); o_interval=null; pb_queryHttp=0; if(o_descSH>=0)fpb_clearAnimate(o_descSH); fpb_removeLayer(o_layer); o_layer=null; }

function f_hRSC(){
	var ret, st;
	if (pb_queryHttp>0 && o_mode>0){
		try {
			if (pb_xmlHttp.readyState==4){
				st=pb_xmlHttp.status; f_hide_query();
				if(st==204) {
					f_message('<div class="pb_ahr">Ошибка</div>','Причины ошибки:<br>или временные проблемы<br>или у вас изменился IP-адрес.',300,130);
				} else {
				  if(st==200) {
					ret=pb_xmlHttp.responseText;
					if (!ret) { f_message('Ошибка записи',(o_mode==1?'Данные':'Цены')+' не обновлены',200,100); } else {
					  if (o_mode<3 && ret=='ok') {
							f_message((o_mode==1?'Данные записаны':'Прайс-лист записан'),'Вы обновили '+(o_mode==1?'данные':'цены')+(o_mode==1?(o_px5+'<a href="/maps/" target="_blank">Проверьте по этой ссылке</a>'):''),250,(o_mode==1?120:130));
					  } if (o_mode==3) {
						fpb_removeDialog(); fpb_BI('objList').innerHTML=ret; f_getObjList(); o_pid=o_nid||o_pid||o_id;
						fpb_BI('ihEdit').style.color = '#808080'; if(fpb_BI('ihDel'))fpb_BI('ihDel').style.color = '#808080'; o_num=0;
					  }
					}
				  } else f_mesXRST(st);
				} o_mode=0;
			}
		}catch(e){f_hide_query();o_mode=0;}
	}
}

/* ************************ */
function f_getObjList() {
	var i,l,c,a=[[]],n,p=fpb_BI('hObjList')||0; if (!p)return; c=fpb_qSA('div',p); l=c.length; o_maxid=0;
	for (i=0; i<l; i+=1) { a[i+1]=fpb_trim(c[i].innerHTML).split('¡'); n=parseInt(a[i+1][12]); if(n>o_maxid)o_maxid=n; }
	v_arrObj=a; if(fpb_BI('idSelPred')) o_pid=parseInt(fpb_BI('idSelPred').value,10)||0; o_nid=o_pid=o_pid||o_id;
}

function f_trs(o,n) {
	var p,i,a; n=n||0; o = typeof(o)=='object' ? o : '';
	a=fpb_qSA('tr',o.parintNode); if(!a)return; o_num = n;
	for (i=a.length-1; i>=0; i-=1) { a[i].className = a[i]==o ? 'trs' : ''; }
	fpb_BI('ihEdit').style.color = o? '#000000' : '#808080';
	if (fpb_BI('ihDel')) fpb_BI('ihDel').style.color = o? '#000000' : '#808080';
}
function f_del(e,n) {
	var t;
	n=n||0; if (!e||!n)return; fpb_s24(e);
	t='Вы хотите Удалить объект № '+n+' :'+o_px5+v_arrObj[n][1].substr(0,50)+o_px20+o_inp+' style="width:100px;height:25px;float:left;color:#c80000;" value="Удалить" onclick="f_del2('+n+')" />'+o_inp+' style="width:100px;height:25px;float:right;" value="Отмена" onclick="fpb_win_del(1,1)" />';
	f_message('Удаление объекта № '+n,t,300,170); o_esc=1;
} function f_del2(n) { var i,j=1,s='',l=v_arrObj.length;if (l<1)return; for (i=1; i<l; i+=1) { if(i!=n) s+=f_strObj(i,j++); } f_saveObj(s); }
function f_edit(n) {
	var i,j,so,sp,p,t='',a=['','','0,0,0','0,0,0,0,0','','','','','',''],dl='<div style="float:left;width:100px;">',c='<input type="text" class="inpbox" style="width:';
	n=n||0; if(n!=0&&n!=o_num)return;
	if (n!=0) a=v_arrObj[n]; so=a[2].split(','); sp=a[3].split(',');
	t+=o_px5+'Наименование '+(n==0?'нового объекта':('объекта № '+n))+o_px5+c+'900px;" value="'+a[1]+'" maxlength="100" id="idText1" />';
	t+=o_px10b+o_px10+'<div style="float:left;width:450px">';
	t+=dl+'Типы<br>объекта</div><div style="float:left;">';
	for (i=0;i<3; i+=1) {
		t+='<select id="idTypeObj'+i+'">'; for (j=1;j<17;j+=1) { t+='<option value="'+j+'"'+(j==so[i]?' selected':'')+'>'+o_tObj[j]+'</option>'; } t+='<option value="0"'+(so[i]==0?' selected':'')+'>&nbsp;</option></select>'+o_px5;
	} t+='</div></div><div style="float:right;width:450px">';
	t+=dl+'Типы<br>покрытий</div><div style="float:left;">';
	for (i=0;i<5; i+=1) {
		t+='<select id="idTypePkr'+i+'">'; for (j=1;j<20;j+=1) { t+='<option value="'+j+'"'+(j==sp[i]?' selected':'')+'>'+o_tPkr[j]+'</option>'; } t+='<option value="0"'+(sp[i]==0?' selected':'')+'>&nbsp;</option></select>'+o_px5;
	} t+='</div></div>'+o_px10b+o_px10+'<div style="float:left;width:450px">';
	t+=dl+'Площадь :</div>'+c+'120px;float:left;" value="'+a[4]+'" maxlength="14" id="idText2" />';
	t+=o_px5+dl+'Год :</div><select id="idText3" style="width:80px;">'; for(i=1990;i<2021;i+=1) { t+='<option value="'+i+'"'+(i==a[5]?' selected':'')+'>'+i+'</option>'; } t+='</select>';
	t+='</div><div style="float:right;width:450px">';
	t+=dl+'Широта :</div>'+c+'120px;float:left;" value="'+a[6]+'" id="idText4" maxlength="20" />';
	t+=o_px5+dl+'Долгота :</div>'+c+'120px;float:left;" value="'+a[7]+'" id="idText5" maxlength="20" />';
	t+='</div>';
	t+=o_px10b+o_px10+'Адрес '+(n==0?'нового объекта':('объекта № '+n))+o_px5+c+'900px;" value="'+a[8]+'" maxlength="100" id="idText6" />';
	t+=o_px10+'Краткое описание '+(n==0?'нового объекта':('объекта № '+n))+o_px5+'<textarea class="imparea" id="idText7" style="width:900px;max-width:900px;min-width:900px;height:100px;max-height:100px;min-height:100px;" maxlength="300">'+a[9].replace(new RegExp('☆','g'),fpb_CC(10))+'</textarea>';
	p='/img/mobj/'+o_pid+'/'+n+'.jpg?p='+Math.round(Math.random()*9000000);
	t+=o_px10; if(n!=0) t+='<img id="id_img" class="pb_ismall" src="'+p+'" alt="" style="float:right; margin:0; width:90px; height:90px;'+(a[11]==1?'':'display:none;')+'" onclick="fpb_zoomImg(this,\''+p+'\',200,20,800,800,\'Изображение объекта № '+o_num+'\',-10)"/>';
	t+=((n==0||pb_isOPERA==1||!o_xml)?'':'<div id="id_dd">Вы можете «перетащить» сюда<br>файл с изображением</div>');
	t+='<input type="button" class="pb_buttons" id="idSaveObj" style="width:200px;height:40px;" value="Сохранить '+(n==0?'новый объект':('объект № '+n))+'" onclick="f_edit2('+n+')" />';
	t+='<div id="idText0" style="margin:10px 0 0 10px;width:300px;color:#c80000;font:italic bold 13px arial;"></div>';
	fpb_createDialog(((n==0)?'Добавить новый объект':'Редактирование объекта № '+n),t,950,610,0,'rgba(128,128,128,.3)'); o_esc=o_dialogEsc=1;
	if(n!=0&&pb_isOPERA==0&&o_xml) {
		p=fpb_BI('id_dd'); pb_event.add('id_dd','dragenter',f_denter); pb_event.add('id_dd','dragover',f_denter); pb_event.add('id_dd','dragleave',f_dlive); pb_event.add('id_dd','drop',f_drop);
	}
}
function f_edit2(n) {
	var i,s='',l=v_arrObj.length,t=fpb_CC(9),p=fpb_BI('idText0'),a=['','idText1','idText2','idText3','idText4','idText5','idText6','idText7','',''];
	n=n||0; if(n!=0&&n!=o_num)return; if (l<1)return; p.innerHTML='';
	for(i=1; i<8; i+=1) { a[i]=f_replace(fpb_BI(a[i]).value,(i==7?0:1)); if(i<7&&!a[i]){p.innerHTML='Не все поля заполнены'; return;} } if(a[7]=='idText7')a[7]='';
	a[4]=a[4].replace(/\,/gm,'.').replace(/\(/gm,'').replace(/\)/gm,''); a[5]=a[5].replace(/\,/gm,'.').replace(/\(/gm,'').replace(/\)/gm,'');
	if(a[4].indexOf('°')>0 || a[5].indexOf('°')>0) {p.innerHTML='Неверные координаты<br>(нужны значения в скобках)'; return;}
	for(i=0;i<5;i+=1){ a[9]+=','+fpb_BI('idTypePkr'+i).value; if(i<3) { a[8]+=','+fpb_BI('idTypeObj'+i).value; } } a[8]=a[8].substr(1); a[9]=a[9].substr(1);
	i=(n==0)?l:n; if(n==0)l+=1; v_arrObj[i]=[o_pid,a[1],a[8],a[9],a[2],a[3],a[4],a[5],a[6],a[7],i,(v_arrObj[i]?(v_arrObj[i][11]):0),(v_arrObj[i]?(v_arrObj[i][12]):(o_maxid+1))];
	for (i=1; i<l; i+=1) { s+=f_strObj(i,i); } f_saveObj(s);
}
function f_strObj(i,n) { var a=v_arrObj[i],t=fpb_CC(9); return o_pid+t+a[1]+t+a[2]+t+a[3]+t+a[4]+t+a[5]+t+a[6]+t+a[7]+t+a[8]+t+a[9]+t+n+t+a[11]+t+a[12]+fpb_CC(10); }
function f_saveObj(s) {var m,n=o_pid; m=['data',3,'session',o_hash,'pid',n,'objlist',(s||'none')]; fpb_win_del(1,1); f_show_query(); o_mode=3; fpb_postHttp('/setpred03/adm_obj.php','mfd',m); o_interval=setInterval(function(){f_hRSC()},100); }
function f_changePred() {var n=fpb_BI('idSelPred').value, m=['data',3,'session',o_hash,'pid',n]; fpb_win_del(1,1); f_show_query(); o_mode=3; fpb_postHttp('/setpred03/adm_obj.php','mfd',m); o_interval=setInterval(function(){f_hRSC()},100); o_nid=parseInt(n,10)||0;  }
function f_denter(e) { var p=fpb_BI('id_dd'); fpb_s24(e); p.style.background='#ffeeee'; p.style.color='#800000'; p.innerHTML='Файл готов к отправке,<br>«отпустите» его'; }
function f_dlive(e) { var p=fpb_BI('id_dd'); fpb_s24(e); p.style.background='#eeeeee'; p.style.color='#000080'; p.innerHTML='Вы можете «перетащить» сюда<br>файл с изображением'; }
function f_drop(e) {
	var p=fpb_BI('id_dd'),dt = e.dataTransfer,fls,f,fn,fd; fpb_s24(e); if(!dt && !dt.files) { f_message('Ограничение','Ваш браузер не поддерживается',300,100); return false; }
	fls=dt.files; dt.dropEffect="copy"; /* для IE */
	if(fls.length!=1) { f_message('Ограничение','Можно только 1 файл',300,100); return false; }
	f=fls[0]; if(f.size>1048576) { f_message('Ограничение','Размер файла не более 1 Мбайт',300,100); return false; }
	// fn=o_pid+'_'+o_num;
	fd=new FormData();
	fd.append('id',o_pid);
	fd.append('num',o_num);
	fd.append('img',f,f.name);
	/*
	o_xml.upload.addEventListener('progress', function(e) {
		var p=fpb_BI('id_dd'), pr=Math.ceil(e.loaded/e.total*100);
		p.innerHTML='Файл отправляется. Отправлено: '+pr+'%';
	});
	*/
	o_xml.open('POST', '/setpred03/getimg.php',true);
    // o_xml.setRequestHeader("Referer", location.href);
    // o_xml.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    // o_xml.setRequestHeader("X-File-Name", encodeURIComponent(f.name));
    // o_xml.setRequestHeader("X-File-Name", fn);
    // o_xml.setRequestHeader("Content-Type", "application/octet-stream");
    // o_xml.setRequestHeader("Content-Type", "multipart/form-data");
    o_xml.onreadystatechange=f_xml;
    o_xml.send(fd);
	p.innerHTML='Файл<br>отправляется...';
	return false;
}
function f_xml() {
	var st, ret, p;
	try {
		if (o_xml.readyState==4){
			st=o_xml.status;
			if (st==200) {
				ret=o_xml.responseText;
				if (!ret) { f_message('Ошибка отправки','Файл не отправлен',200,100); } else {
					f_message(ret=='ok'?'Сообщение':'Ошибка',ret=='ok'?'Изображение загружено<br>Установлен размер 800x800':ret,300,ret=='ok'?120:100);
					if (ret=='ok') {
						st='/img/mobj/'+o_pid+'/'+o_num+'.jpg?p='+Math.round(Math.random()*9000000);
						p=fpb_BI('id_img'); p.style.display='block'; p.src=st; p.onclick=function(e){fpb_zoomImg(this,this.src,200,20,800,800,'Изображение объекта № '+o_num,-10)};
					}
				} st=fpb_BI('id_dd'); st.style.background='#eeeeee'; st.style.color='#000080'; st.innerHTML='Вы можете «перетащить» сюда<br>файл с изображением';
			} else { f_mesXRST(st); st=fpb_BI('id_dd'); st.style.background='#eeeeee'; st.style.color='#000080'; st.innerHTML='Вы можете «перетащить» сюда<br>файл с изображением'; }
		}
	}catch(e){}
}