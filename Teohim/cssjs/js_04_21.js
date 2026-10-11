var v_storage=0, v_layer=null, v_dialogEsc=0, v_descSH, v_esc=0, v_interval=null, v_intvl = null, v_int_cap=null, v_mode=0, v_setsb=0, v_IE18=0, v_queryHttp=0, v_queryXHR=0, v_sessionID, v_cap='', v_capID, v_XHRC=$.httpNew(), v_XHR=$.httpNew();
var v_cb='<div class="px', v_cp='"></div>', v_px0=v_cb+'0'+v_cp,v_px0b=v_cb+'0b'+v_cp,v_px1=v_cb+'1'+v_cp,v_px3=v_cb+'3'+v_cp,v_px3b=v_cb+'3b'+v_cp,v_px5=v_cb+'5'+v_cp,v_px7=v_cb+'7'+v_cp,v_px5b=v_cb+'5b'+v_cp,v_px10=v_cb+'10'+v_cp,v_px10b=v_cb+'10b'+v_cp,v_px15=v_cb+'15'+v_cp,v_px15b=v_cb+'15b'+v_cp,v_px20=v_cb+'20'+v_cp,v_px20b=v_cb+'20b'+v_cp,v_px25=v_cb+'25'+v_cp,v_px25b=v_cb+'25b'+v_cp,v_px30=v_cb+'30'+v_cp,v_px30b=v_cb+'30b'+v_cp,v_px40=v_cb+'40'+v_cp,v_px50=v_cb+'50'+v_cp;
var v_wlh=window.location.href,v_page=0,o_pageToUp=null,v_idBT_I=null,v_idBT_S=0,v_trname,v_trname2,v_trtara,v_zlist,v_zlistt,v_zlist_,v_zlistr,v_mtrt,v_ordEdit=0,v_fields,v_cb8,v_spIDmail='im.ruteohim@teoh';
var v_aPages,v_smls_txt = '<div style="cursor:pointer;float:left;width:105px;margin:0;padding:5px 0;text-align:center;font-size:11px;text-decoration:underline;" onclick="f_smiles(0)">Cмотреть отзывы</div>';
var a_gal=[], a_fgal=[]; /* Массив для фотогалерей на странице - содержит подмассивы с характеристиками каждой галереи */
var v_galItem=-1, a_galItems=[-1,0,0,0]; /* Активное изображение в full - режиме галереи; Массив значений активной галереи. */
var a_fgalItems; /* Набор загруженных больших фото для режима "pb_ismall" - старой галереи с полноэкранным отображением при клике */

var v_changeRal,aRal,aRalN=[],aRalC=[],aRalSel=[],dBalPrice=0,v_ralOldK,v_ralOldR1,v_ralOldR2,v_ralCF;

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
	if((f == -1) && (!b || b==1)) { h+=30; bt += v_px15 + '<input type="button" class="pb_buttons" id="idMsgOK" value="Ok" style="width:70px;height:30px;" onclick="$.wDelete(1,1);"/>'; }
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
function f_init_zlist() {
	var i; v_zlistt=[[0,'']]; v_zlistr=[[0,0,0,0]]; /* 0 элемент массива = [0, общ.кол-во позиций, общ.кол-во кг, общ.сумма] */
}
/* Проверка на страницу ЗАКАЗ и заполнение полей с текущим количеством заказанных материалов. */
/* v_mtrt[i]=[i,0,f_gIH('idNamet'+i,1),f_gIH('idSCent'+i+'_3'),f_gIH('idSCent'+i+'_4'),f_gIH('idSCent'+i+'_5'),f_gIH('idSCent'+i+'_6'),f_gIH('idSCent'+i+'_7'),f_gIH('idSCent'+i+'_8'), tk, tt, tn, ts, 0]; */
function f_set_zlist(f) {
var i,j,p,k=0,r,l,n,m=3,r=v_zlistr,l=r.length;
f=f||0; if(f) { p = $.gLS('zlistr') || JSON.stringify(v_zlistr); v_zlistr = JSON.parse(p); p = $.gLS('zlistr') || JSON.stringify(v_zlistr); v_zlistr = JSON.parse(p); }
if (v_page==226) {
  for (i=1;i<l;i+=1) {
	n=r[i][0]; j=r[i][4];
	if ($.id('ordF'+n+'_'+j+'_0')) { p=$.id('ordD'+n+'_'+j); p.innerHTML=''; p.className=''; p.title=''; $.id('trt'+n+'_'+j+'_ld').className='trt_none'; if ($.id('trt'+n+'_'+j+'_I')) $.id('trt'+n+'_'+j+'_I').className='trt_none'; }
	for (ii=0; ii<4; ii+=1) { p=$.id('trt'+n+'_'+j+'_'+ii); if(p)p.className='trt_none'; }
	p=$.id('dordRal'+n+'_'+j); if (p && aRal.indexOf(n)>=0) { p.style.background='#'+((r[i][5]>0) ? aRalC[r[i][5]][r[i][6]] : aRalC[7][40]); }
  }
k=r[0][2];
if (k>0) {
 if (k >= 60 && k < 200) m = 4;
 if (k >= 200 && k < 500) m = 5;
 if (k >= 500 && k < 1000) m = 6;
 if (k >= 1000 && k < 3000) m = 7;
 if (k >= 3000) m = 8;
 for (i=1;i<l;i+=1) { f_t226(r[i][0],i,m,r[i][4]); }
}
 if (k==0) { $.id('id_div_clear').style.display='block'; $.id('trt0th').className='trt_none'; $.id('trt1th').className='trt_none'; $.id('clc').style.display=$.id('clz').style.display=$.id('dlnkPR').style.display=$.id('idOrdert').style.display=$.id('dordEdit').style.display='none'; }
 else { $.id('id_div_clear').style.display='none'; $.id('trt0th').className='trt_tr fwb'; $.id('trt1th').className='trt_tr'; $.id('clc').style.display=$.id('clz').style.display=$.id('dlnkPR').style.display=$.id('idOrdert').style.display=$.id('dordEdit').style.display='block'; }
}
}
function f_t226(n,np,m,pos) {
	var i,j,tt,kl=0,tk,tt,tn,s,c,a,p,f=0,sum=0,bs=0,col=0; n=n||0, r=v_zlistr; if (!n) return; a=r[np]; tk=[a[2][0],a[2][2],a[2][4],a[2][6],a[2][8],a[2][10]]; tt=JSON.parse(JSON.stringify(v_mtrt[n][10])); tn=JSON.parse(JSON.stringify(v_mtrt[n][11]));
	if (v_page!=226)return;
	if($.id('ordF'+n+'_'+pos+'_0')) { p=$.id('ordD'+n+'_'+pos); p.innerHTML=''; p.className=''; p.title=''; }
	if(aRal.indexOf(n)>=0) { col=aRalN[r[np][5]][r[np][6]]||0; if (!f_tr12(r[np][5],r[np][6])) col=0; }
	for (i=0; i<4; i+=1) { if (tt[i]>0) kl+=tk[i]*tt[i]; } if (kl>99620) kl=99620;
	if(kl<(tt[0]+tt[0]) && (n==17||n==20||n==21||n==22||n==165||n==193||n==205||n==206)) { col=0; if($.id('dordRal'+n+'_'+pos)) $.id('dordRal'+n+'_'+pos).style.background='#'+((r[np][5]>0) ? aRalC[r[np][5]][r[np][6]] : aRalC[7][40]); }
	if(kl<tt[0] && (n==33||n==37||n==71)) { col=0; if($.id('dordRal'+n+'_'+pos)) $.id('dordRal'+n+'_'+pos).style.background='#'+((r[np][5]>0) ? aRalC[r[np][5]][r[np][6]] : aRalC[7][40]); }
	c=v_mtrt[n][m]; if(col>0) { if(n==27)c+=25; if (kl>=600) col+=5; else { col+=((aRal[0]/kl)>Math.round(aRal[0]/kl))?(Math.round(aRal[0]/kl)+1):Math.round(aRal[0]/kl); } c+=col; } kl=0;
	if (tn[0] && tn[2] && tn[3]) bs=1;
	j=3; if(tk[j]==1 && (tk[1]>0 || tk[0]>0) && bs==1) { tn[j]=tn[j-1]; }
	j=2; if(tk[j]==1 && tk[3]==0 && (tk[1]>0 || tk[0]>0)) { tn[j]=tn[j-1]; }
	j=1; if(tk[j]==1 && tk[3]==0 && tk[2]==0 && tk[0]>0 && bs==0) { tn[j]=tn[j-1]; }
  for (i=0; i<4; i+=1) { p=$.id('trt'+n+'_'+pos+'_'+i); if(p)p.className='trt_none'; if (tt[i]>0) { kl+=tk[i]*tt[i];
	  if(tk[i]>0) { p.className='trt_tr'; p.style.color='#000000'; f+=1; } else { if(v_ordEdit==1) { p.className='trt_tr'; p.style.color='#808080'; f+=1; } }
	  $.id('ordF'+n+'_'+pos+'_'+i).innerHTML='<span style="font:bold 13px arial">'+tk[i]+'</span> по '+tt[i]+((n==105||n==106||n==227)?'л':'кг');
	  if (v_ordEdit==1) {
	    s='<div class="f_l" onclick="f_ordTara('+n+','+np+','+pos+','+i+',2)"></div><input type="text" id="id_inptara'+n+'_'+pos+'_'+i+'" style="float:left;width:69px;height:15px;text-align:right;" maxlength="8"';
	    s+=' onfocus="if(this.value==\'нет\'){this.value=\'\';this.style.color=\'#000000\'}" onblur="if(this.value==\'\'){this.value=\'нет\';this.style.color=\'inherit\'}" onchange="f_ordTara('+n+','+np+','+pos+','+i+',0)" value="'+(tk[i]==0?'нет':(tk[i]*tt[i]).toFixed(2))+'"/>';
	    s+='<div class="f_r"'+((kl>99620)?'':(' onclick="f_ordTara('+n+','+np+','+pos+','+i+',1)"'))+'></div>';
	  } else {
	    s=''+(tk[i]==0?'нет':f_ts((tk[i]*tt[i]).toFixed(2)));
	  }
	  $.id('ordK'+n+'_'+pos+'_'+i).innerHTML=s;
	  sum+=tk[i]*tt[i]*(c+tn[i]);
	  $.id('ordC'+n+'_'+pos+'_'+i).innerHTML=f_ts((c+tn[i]).toFixed(2));
	  $.id('ordS'+n+'_'+pos+'_'+i).innerHTML=f_ts((tk[i]*tt[i]*(c+tn[i])).toFixed(2));
	  if (v_ordEdit==1) {
		  p=$.id('ordD'+n+'_'+pos); p.className='ordDtd'; p.innerHTML='<div class="ordD"></div>';  p.title='Удалить';
	  }
	  p=$.id('ordRal'+n+'_'+pos); if (p) { p.innerHTML = (aRal.indexOf(n)>=0) ? ('RAL '+(r[np][5]*1000+r[np][6])) : 'Базовый (RAL 7035, RAL 7040)'; }
	  if(f>0) { $.id('trt'+n+'_'+pos+'_ld').className='trt_tr'; if ($.id('trt'+n+'_'+pos+'_I') && f>1) $.id('trt'+n+'_'+pos+'_I').className='trt_tr'; }
	  if ($.id('trt'+n+'_'+pos+'_I')) { $.id('ordKI'+n+'_'+pos).innerHTML=f_ts(kl.toFixed(2)); $.id('ordCS'+n+'_'+pos).innerHTML=f_ts(sum.toFixed(2)); }
  }
  }
	return [kl,sum];
}
function f_ts(s,sp) { /* Разделитель тысяч пробелом, s - строка, sp-десятичный разделитель (по-умолчанию ',') - если отсутствует, то строка формируется без дробной части */
	var p,i; sp=sp||''; if (typeof(s)!='string') {if (typeof(s)=='number') s=s.toFixed(!sp?0:2)} if (typeof(s)!='string') s='0.00'; if(sp) {s=$.trim(s.replace(/\./gm,sp)); s=$.trim(s.replace(/\,/gm,sp));}
	if (sp) { i=s.indexOf(sp); if(i>0) { p=s.substr(0,i); s=s.substr(i); } else { if(i==0) { p=''; s='0'+s; } else { p=s; s=''; } } } else { p=s; s=''; }
	i=p.length; if(i>3) { p=p.substr(0,i-3)+' '+p.substr(i-3); }
	i=p.length; if(i>7) { p=p.substr(0,i-7)+' '+p.substr(i-7); }
    i=p.length; if(i>11) { p=p.substr(0,i-11)+' '+p.substr(i-11); }
	p=p+s; i=p.indexOf(' .'); if(i>0) { p=p.substr(0,i)+p.substr(i+1); }
	return p;
}
function f_ordTara(n,np,pos,pi,f) { /* Режим редактирования на странице Заказа: "-","+","кол-во" (f== 2,1,0) */
  var i,j,p, v, kl=0, m,tk,tt, a, kg=0; pi=pi||0; if(pi<0 || pi>3 || f<0 || f>2 || n<11 || n>351) return; f_basketRalDel(event);
  m=v_mtrt[n]; if(!n)return; tk=JSON.parse(JSON.stringify(m[9])); tt=JSON.parse(JSON.stringify(m[10])); a=v_zlistr[np]; v=parseFloat($.id('id_inptara'+n+'_'+pos+'_'+pi).value)||0; if(v<0)v=0;
  for (i=0; i<4; i+=1) { tk[i]=a[2][i+i]||0; tt[i]=a[2][i+i+1]||0; }
  if (f==1) { tk[pi]+=1; } if (f==2 && tk[pi]>0) { tk[pi]-=1; } if(tk[pi]<0)tk[pi]=0;
  if (f==0) { if (v/(tt[pi])>Math.round(v/(tt[pi]))) tk[pi]=Math.round(v/(tt[pi]))+1; else tk[pi]=Math.round((v/(tt[pi]))); }
  for (i=0; i<4; i+=1) { kg+=tk[i]*tt[i]; } if (kg<=0) { $.id('id_inptara'+n+'_'+pos+'_'+pi).value=tt[pi].toFixed(2); f_message('<div class="pb_ahr">Недопустимое количество!</div>','<span class="c1">Недопустимое минимальное количество!</span>'+v_px5,400,100); return; }
  if (aRal.indexOf(n)>=0 && a[5]>0 && (a[5]!=7 || (a[6]!=35&&a[6]!=40)) && f!=1 && kg<(tt[0]+tt[0]) && (n==17||n==20||n==21||n==22||n==165||n==193||n==205||n==206)) { f_message('<div class="pb_ahr">Колеровка от количества!</div>','<span class="c1">Минимальное количество для колеровки<br>&nbsp;<br>'+(tt[0]+tt[0])+((n==105||n==106||n==227)?'л':'кг')+'</span>'+v_px5,400,130); return; }
  if (aRal.indexOf(n)>=0 && a[5]>0 && (a[5]!=7 || (a[6]!=35&&a[6]!=40)) && f!=1 && kg<tt[0] && (n==33||n==37||n==71)) { f_message('<div class="pb_ahr">Колеровка от количества!</div>','<span class="c1">Минимальное количество для колеровки<br>&nbsp;<br>'+tt[0]+'кг</span>'+v_px5,400,130); return; }
  for (i=0; i<4; i+=1) { a[2][i+i]=tk[i]; kl+=tk[i]*tt[i]; }
  a[1]=kl; v_zlistr[np]=a; $.sLS('zlistr',JSON.stringify(v_zlistr));
  f_testBasketSum(); f_set_zlist(1);
}
function f_ordDel(n,pos) {
  var t, i, a=0, r=v_zlistr, l=r.length, ft = r[0][1] ? 1 : 0; n=n||0; 
  if (ft) {
    for(i=1;i<l;i+=1) { if(r[i][0]==n && r[i][4]==pos) { a=i; i=l; } } if(!a)return; v_zlist_=r[a]; v_ralOldK=r[a][1]; v_changeRal=pos;
    t='ВНИМАНИЕ!'+v_px10+'Удалить из заказа:'+v_px5+v_mtrt[n][2]+v_px10+'Количество: '+r[a][1]+((n==105||n==106||n==227)?'л':'кг')+(r[a][5]>0?(v_px5+'Цвет: RAL '+(r[a][5]*1000+r[a][6])):'')+v_px20;
    t+='<input type="button" class="pb_buttons fleft ml20 fwb c8" style="width:100px;" value="Удалить" onclick="f_addRal('+n+',0);$.wDelete(1,1);if(v_ordEdit==1)f_basketRalDel(event);f_testBasketSum(); f_set_zlist(1);"/>';
    t+='<input type="button" class="pb_buttons fright mr20" style="width:100px;" value="Отменить" onclick="$.wDelete(1,1);"/>';
  } else t='<span class="fwn fs15">Заказ пустой</span>';
  f_message('<div class="pb_ahr">Удалить из заказа</div>',t,400,250);
}
function f_ordEdit() {
  var p=$.id('dordEdit'); if (!p) return; if(dBalPrice) { $.B.removeChild(dBalPrice); dBalPrice=0; }
  if (v_ordEdit==0) { v_ordEdit=1; p.innerHTML='Завершить редактирование'; $.id('clz').style.display=$.id('clc').style.display=$.id('dlnkPR').style.display=$.id('idOrdert').style.display=$.id('dordEdit').style.display='none'; }
  else { v_ordEdit=0; p.innerHTML='Редактировать заказ'; $.id('clz').style.display=$.id('clc').style.display=$.id('dlnkPR').style.display=$.id('idOrdert').style.display=$.id('dordEdit').style.display='block'; }
  f_set_zlist();
}
function f_ordClc() {
	var ft = v_zlistr[0][1] ? 1 : 0, t='ВНИМАНИЕ!'+v_px10+'Очистка списка заказанных материалов!'+v_px10+'После очистки восстановить информацию невозможно'+v_px20;
    if(v_ordEdit==1) return;
	t+='<input type="button" class="pb_buttons fleft ml20 fwb c8" style="width:100px;" value="Очистить" onclick="f_init_zlist();$.sLS(\'zlistr\',JSON.stringify(v_zlistr));window.location.reload();"/>';
	t+='<input type="button" class="pb_buttons fright mr20" style="width:100px;" value="Отменить" onclick="$.wDelete(1,1);"/>';
	if (!ft) t='<span class="fwn fs15">Заказ пустой</span>';
	f_message('<div class="pb_ahr">Полная очистка заказа</div>',t,ft?400:220,ft?185:100);
}
function f_ordClz() {
  if(v_ordEdit==1) return;
  if (v_zlistr[0][1]) {f_post(3,v_zlistr[0][3],1); } else f_message('Оформление заказа','<span class="fwn fs15">Заказ пустой</span>',200,100);
}

/* Печать страницы - открытие страницы с контентом для печати */
function f_print() {
	var p, u=v_wlh, i=u.indexOf('.ru/'); if (v_page>202 && v_page<207) u+='print.php'; else u='/print/'+u.substr(i+4);
	p=window.open(u,'','left='+(($.uEnv()?0:0)+$.gCW()/2-425)+',top=50,height='+($.gCH()-100)+',width=850,resizable=yes,scrollbars=yes,status=yes,location=no,directories=no,menubar=no');
	setTimeout(function(){if(v_page==1010)f_page1010(0,1);if(v_page==1011)f_page1011(0,1);},20); p.focus();
}
/* Плавная прокрутка страницы до верха или низа */
function f_bup(e) { var p=window.pageYOffset||document.documentElement.scrollTop; $._(24)(e); if(p>0&&o_pageToUp==null) { o_pageToUp=setInterval(function(){var t, p=window.pageYOffset||document.documentElement.scrollTop; if (p>200) t=v_IE18?(p/4):(p/2+p/4); else t=((v_IE18&&p<40)||(!v_IE18&&p<20))?0:(v_IE18?(p/10):(p/2)); window.scrollTo(0,t); if (p<20){clearInterval(o_pageToUp);o_pageToUp=null;}},30) } }
/*
function f_down(e) { var pH,sT,cH; $.uEnv(); pH=$.gPH(); sT=$.gPST(); cH=$.gCH(); if(sT<(pH-cH-20)&&o_pageToUp==null) { o_pageToUp=setInterval(function(){var pH,sT,cH; $.uEnv(); pH=$.gPH(); sT=$.gPST(); cH=$.gCH(); if(sT<(pH-cH-20)) { window.scrollTo(0,Math.round(sT+(pH/(v_IE18?4:15)))); } else {window.scrollTo(0,pH);clearInterval(o_pageToUp);o_pageToUp=null;}},30) } }
*/
function f_testLS(e) {
	if (window.sessionStorage) { window.sessionStorage.setItem('url',v_wlh); }
}

function f_testfbuy() {
var  i,j,a,p,l,t,r=v_zlistr, lr=r.length;
a=$.qSA('.fbuy,.fbuyb'); if(a) { l=a.length;
  for (i=0; i<l; i+=1) { a[i].className='fbuy';
	p=$.qS('div',a[i])||0; if(p) { t=parseInt(p.innerHTML,10)||0; for (j=1; j<lr; j+=1) { if(r[j][0]==t) p.parentNode.className = 'fbuyb';} }
  }
}
}
/* **************************  РАБОТА С МАССИВОМ ЗАКАЗОВ ()  /************************** */
function f_init_mtrt() {
  var i,p,a,t,tk,tt,tn,ts; v_mtrt=[[0]];
  for (i = 11; i < 351; i+=1) {
	p=$.id('idCent' + i); if(p) {
	  tk=[0,0,0,0,0,0]; tt=[0,0,0,0,0,0]; tn=[0,0,0,0,0,0]; ts=[0,0,0,0,0,0]; if($.id('idTara'+i)!='none') {
		t=$.id('idTara'+i).innerHTML; if(t.indexOf(',,')>0) { t=t.replace(/\,\,/gm,',0,').replace(/\,\,/gm,',0,'); } if (t!='none') {
		  t=t.substr(1,t.length-2); t=t.split(','); for(p=0;p<12;p+=1) { if (!t[p]) t[p]=0; } for(p=0;p<6;p+=1) { tt[p]=0-(0-t[p+p]); tn[p]=0-(0-t[p+p+1]); }
	  }} v_mtrt[i]=[i,0,f_gIH('idNamet'+i,1),f_imN(i,3),f_imN(i,4),f_imN(i,5),f_imN(i,6),f_imN(i,7),f_imN(i,8), tk, tt, tn, ts, 0];
	}
  }
} function f_imN(i,n) { return ($.id('idSCent'+i+'_'+n)) ? (parseInt($.id('idSCent'+i+'_'+n).innerHTML,10)||0) : 0; }
function f_gIH(n,f) { return f ? ($.id(n) ? ($.id(n)?$.id(n).innerHTML:'') : (parseInt($.id(n).innerHTML,10)||0)):0; }
/* f_newBasket() - самотестирование и пересчёт всех заказанных материалов с несколькими цветами RAL одновременно у одного материала */
/* v_zlistt[0]=[0,0,[0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0],0,0,0,0]; [общ.кол-во, общ.сумма, [список кодов заказанной продукции, максимум 30]]
   v_zlistr=[[0,0,0,0]]; 0 элемент массива = [0, общ.кол-во позиций, общ.кол-во кг, общ.сумма]
   v_zlistt[i] = [i,0,[0,0,0,0,0,0,0,0,0,0,0,0],0,0,0,0]; [код, общее кол-во, [кол-во мест,одно тарное место], сумма,NNNpos,ral1,ral2]
   v_zlistr[i] = [id,0,[0,0,0,0,0,0,0,0,0,0,0,0],0,0,0,0]; [код, общее кол-во, [кол-во мест,одно тарное место], сумма, Nпорядковый (от 1), ral1, ral2]
*/
function f_newBasket() {
var i, p, rp=0,rn=[[0,0,0,0]],t=v_zlistt; p=$.gLS('zlistr'); if (p) { p=JSON.parse(p); if(p.length>1) return f_testBasketSum(); }
  for (i=1; i<351; i+=1) { if (t[i]&&t[i][1]>0) {
	rp+=1; rn[rp]=JSON.parse(JSON.stringify(t[i])); rn[rp][4]=1;
  } }
  v_zlistr = rn; $.sLS('zlistr',JSON.stringify(v_zlistr)); return f_testBasketSum();
}
/* Пересчитывает Заново все суммы с учётом количества/скидок и колеровок. Корректирует все элементы массива v_zlistr (заказ-корзина).
   Принимает необязательные параметры: id - код материала, ral1 и ral2 - колеровка
   Возвращает массив [f,pos,kg,sum], где f - если 0, то нет такого материала с такой колеровкой, иначе есть;  pos - общее кол-во позиций в заказе;  kg - общий вес;  sum - общая сумма
   Показывает блок корзины с общими суммами, если что-то есть в заказе. */
function f_testBasketSum(id,ral1,ral2) {
  var i,j,t,m=3, n=0, col,c,k=0,s=0,p=0,kg=0,sum=0,pos=0, r=[[0,0,0,0]], rr=v_zlistr, l=rr.length, f=0, r1, r2, kl,bs,tk,tn,tt,nc; id=id||0; ral1=ral1||0; ral2=ral2||0;
  for (j=11; j<351; j+=1) { for (i=1; i<l; i+=1) { if(rr[i][0]==j) { p+=1; r[p]=JSON.parse(JSON.stringify(rr[i])); } } } /* Последовательный перенос материалов, по коду */
  l=r.length; for (i=1; i<l; i+=1) { t=r[i][2]; k=t[0]*t[1]+t[2]*t[3]+t[4]*t[5]+t[6]*t[7]+t[8]*t[9]+t[10]*t[11]; r[i][1]=k; pos+=1; kg+=k; if(r[i][0]==id && r[i][5]==ral1 && r[i][6]==ral2) f+=1; }
  if (kg >= 60 && kg < 200) m = 4;
  if (kg >= 200 && kg < 500) m = 5;
  if (kg >= 500 && kg < 1000) m = 6;
  if (kg >= 1000 && kg < 3000) m = 7;
  if (kg >= 3000) m = 8; p=0;
  for (i=1; i<l; i+=1) {
	if(n!=r[i][0]) { p=0; n=r[i][0]; }
	k=r[i][1]; p+=1; r1=r[i][5]; r2=r[i][6]; tk=[r[i][2][0],r[i][2][2],r[i][2][4],r[i][2][6],r[i][2][8],r[i][2][10]]; tt=[r[i][2][1],r[i][2][3],r[i][2][5],r[i][2][7],r[i][2][9],r[i][2][11]]; tn=JSON.parse(JSON.stringify(v_mtrt[n][11])); col=0;
	if(aRal.indexOf(n)>=0) { col=aRalN[r[i][5]][r[i][6]]||0; if (!f_tr12(r[i][5],r[i][6])) col=0; }
	bs=0; s=0; c=v_mtrt[n][m]; if(col>0) { if(n==27)c+=25; if (k>=600) col+=5; else { col+=((aRal[0]/k)>Math.round(aRal[0]/k))?(Math.round(aRal[0]/k)+1):Math.round(aRal[0]/k); } c+=col; }
	if (tn[0] && tn[2] && tn[3]) bs=1;
	j=3; if(tk[j]==1 && (tk[1]>0 || tk[0]>0) && bs==1) { tn[j]=tn[j-1]; }
	j=2; if(tk[j]==1 && tk[3]==0 && (tk[1]>0 || tk[0]>0)) { tn[j]=tn[j-1]; }
	j=1; if(tk[j]==1 && tk[3]==0 && tk[2]==0 && tk[0]>0 && bs==0) { tn[j]=tn[j-1]; }
	for (j=0; j<4; j+=1) { s+=tk[j]*tt[j]*(c+tn[j]); } r[i][3]=s; r[i][4]=p; sum+=s;
  }
  r[0]=[0,pos,kg,sum]; v_zlistr=r; $.sLS('zlistr',JSON.stringify(v_zlistr));
  if ($.id('idbsk')) { $.id('idbskn').innerHTML=f_ts(pos.toFixed(0)); $.id('idbsks').innerHTML=f_ts(sum.toFixed(2))+'р'; $.id('idbskk').innerHTML=f_ts(kg.toFixed(2))+'кг'; $.id('idbsk').style.display=(kg==0)?'none':'block'; }
  if (v_page==226 && $.id('idSumNmTara')) { $.id('idSumNmTara').innerHTML=f_ts((l-1).toFixed(0)); $.id('idSumKgTara').innerHTML=f_ts(kg.toFixed(2)); $.id('idSumMatTara').innerHTML=f_ts(sum.toFixed(2)); $.id('dordEdit').style.display=kg?'block':'none'; }
  return [f,pos,kg,sum];
}
/* Принимает необязательные параметры: id - код материала, ral1 и ral2 - колеровка
   Возвращает массив [f,pos,kg,sum], где f - если 0, то нет такого материала с такой колеровкой, иначе есть;  pos - общее кол-во мпозиций в заказе;  kg - общий вес;  sum - общая сумма
   Показывает блок корзины с общими суммами, если что-то есть в заказе. */
function f_getBasketSum(id,ral1,ral2) {
  var i,kg=0,sum=0,pos=0, r=v_zlistr, f=0, l=r.length; id=id||0; ral1=ral1||0; ral2=ral2||0;
  for (i=1; i<l; i+=1) { if(r[i][0]>0) { kg+=r[i][1]; pos+=1; sum+=r[i][3]; if(r[i][0]==id && r[i][5]==ral1 && r[i][6]==ral2) f+=1; } }
  v_zlistr[0]=[0,pos,kg,sum];
  if ($.id('idbsk')) { $.id('idbskn').innerHTML=f_ts(pos.toFixed(0)); $.id('idbsks').innerHTML=f_ts(sum.toFixed(2))+'р'; $.id('idbskk').innerHTML=f_ts(kg.toFixed(2))+'кг'; $.id('idbsk').style.display=(kg==0)?'none':'block'; }
  return [f,pos,kg,sum];
}
/* ***************************************************************************************************************************************** */
/* СТАРТОВАЯ ФУНКЦИЯ (Авто-вызов с параметром v - версия VcorpJS). Стартует по событию DOMContentLoaded - готовности страницы к отображению. */
function vcorpJS_onload(v) {
var p,i,j,l,n,o,a,t;
v_storage=window.localStorage?window.localStorage:0;
if (!v_storage){f_mesErr('Ограничение','Ваш браузер устарел'+v_px5+'и нуждается в замене.',450,130,3); return; }
if (v!='vcorp_js_00_01' && v!='vcorp_js_00_80') { f_mesErr('Диагностика','Неверная версия JS-библиотеки<br>(необходима сборка vcorp_js_00_01 или vcorp_js_00_80)'+v_px5+'Обновите (перезагрузите) страницу.'+v_px5+'Рекомендуется сбросить кеш браузера.',320,150,3); return false; }

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
}v_cb8='/auto/cb8.php';
/* По клавише <Esc> убирает окно сообщения или диалоговое окно - Если не было редактирования (v_esc==1 и/или v_dialogEsc==1) */
$.EH.add(document,'keydown',function(e){e=e||window.event; if(v_esc>0&&e.keyCode==27) {if($.id('pb__alert')){$.wDelete(1,1);if(!$.isDialog()||v_dialogEsc==1)v_esc=0;$._(24)(e);return}if($.isDialog()){if(v_dialogEsc==1){v_dialogEsc=0;$.removeDialog();$._(24)(e);}else v_esc=1;}}});
$.EH.add(window,'load',photoGal);
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


/*if ((v_page==1010 || v_page==1002 || v_page==1005 || v_page==1008 || v_page==1009 || v_page==1069 || v_page==2061 || v_page==2063)  && $.qS('.mtrls')) f_mtrls_set();*/ /* ПРАЙС-ЛИСТ - Выделение строк и столбцов (таблицы с CSS-классом mtrls)*/
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
f_init_mtrt(); f_init_zlist(); p = $.gLS('zlistt') || JSON.stringify(v_zlistt); v_zlistt = JSON.parse(p); p = $.gLS('zlistr') || JSON.stringify(v_zlistr); v_zlistr = JSON.parse(p);
o=f_newBasket();
if (v_page==226) {
  l=v_zlistr.length; t='<p class="nds mt0 fright" style="font-size:13px">Цены с НДС, руб</p><div class="px0"></div><table class="tmtr"><tbody>';
  t+='<tr id="trt0th" class="trt_tr"><th class="fwb" style="width:80px;min-width:80px">Фасовка</th><th style="width:112px;min-width:112px">Кол-во, кг</th><th style="width:65px;min-width:65px">Цена за кг</th><th style="width:85px;min-width:85px">Стоимость</th></tr><tr id="trt1th" class="trt_tr" style="height:10px"><td colspan="4"></td></tr>';
  for (j=1; j<l; j+=1) {
	n=v_zlistr[j][0]; a=v_zlistr[j][4];
	t+='<tr id="trt'+n+'_'+a+'" class=""trt_tr"><td class="tmdl" colspan="4" style="font-weight:bold;color:#004f92;">'+v_mtrt[n][2];
	if (v_zlistr[j][5]>0) {
	  t+=v_px0+'<div class="nw" style="float:left;color:#000000"><span class="c0">Цвет:</span> <span class="c0" id="ordRal'+n+'_'+a+'"></span> <div class="dordRal" id="dordRal'+n+'_'+a+'" onclick="f_basketRal(event)" title="Выбор цвета..." style="display:inline-block;">...</div></div>';
	}
	t+='<div id="ordD'+n+'_'+a+'" style="float:right;" onclick="f_ordDel('+n+','+a+')"></div></td>';
	p=v_mtrt[n][10]; for (i=0; i<4; i+=1) { if(p[i]>0){
		t+='<tr id="trt'+n+'_'+a+'_'+i+'" class=""trt_tr"><td id="ordF'+n+'_'+a+'_'+i+'" class="tac"></td>';
		t+='<td id="ordK'+n+'_'+a+'_'+i+'" class="tar" style="white-space:nowrap"></td>';
		t+='<td id="ordC'+n+'_'+a+'_'+i+'" class="tar"></td>';
		t+='<td id="ordS'+n+'_'+a+'_'+i+'" class="tar"></td></tr>';
	}}
	t+='<tr id="trt'+n+'_'+a+'_I" class="trt_tr"><td style="padding-left:3px;font:bold 11px arial">Итого</td><td id="ordKI'+n+'_'+a+'" class="tar" style="font:bold 11px arial"></td><td colspan="2" id="ordCS'+n+'_'+a+'" class="tar" style="font:bold 11px arial"></td></tr>';
	t+='<tr id="trt'+n+'_'+a+'_ld" class="trt_tr" style="height:10px"><td colspan="6" class="sepl"></td></tr>';
  }
  t+='<tr style="background:#ffff00;"><td style="padding-left:3px;font-weight:bold;">ИТОГО:</td><td id="idSumKgTara" style="padding-right:3px;font-weight:bold;text-align:right"></td><td colspan="2" id="idSumMatTara" style="padding-right:3px;font-weight:bold;text-align:right;"></td></tr>';
  t+='<tr style="background:#ffff00;"><td colspan="4" style="padding-left:3px;font-weight:bold;">Наименований: <span id="idSumNmTara" style="padding-right:3px;font-weight:bold;font-size:13px"></span></td></tr>';
  t+='</tbody></table>'+v_px0b+v_px15+v_px20;
  $.id('idOrdert').innerHTML=t; v_ordEdit=0; f_set_zlist();
  if ($.id('idSumNmTara')) { $.id('idSumNmTara').innerHTML=f_ts(o[1].toFixed(0)); $.id('idSumKgTara').innerHTML=f_ts(o[2].toFixed(2)); $.id('idSumMatTara').innerHTML=f_ts(o[3].toFixed(2)); $.id('dordEdit').style.display=o[2]?'block':'none'; }
}
$.sLS('zlist',''); $.sLS('zlistt','');

/* Блок Смайликов: "Понравилась страница?" */
p=$.id('id_smiles'); if (p && $.gLS('smls' + v_wlh)) p.innerHTML=v_smls_txt; /* перезапись содержимого блока, если уже ранее оценка была сделана. */

/* Функция автоматического запоминания и авто-открытия блоков .div_mo / .div_mc, а так-же страниц с URL .../#blockN */
v_aPages=$.gLS('blocks_of_pages')||'[0]'; v_aPages = JSON.parse(v_aPages); /* Сохранённый в LocalStorage массив [URL страницы, номер_последнего_активного_блока, id] - пример: [0,['url1',v_page,3],['url2',v_page,0],['url3',v_page,1],...]*/
setTimeout(function(e){
  var a,p,p1,p2,p3,i,j;
  a=$.qSA('.divh3'); if (a) { l=a.length;
	for (i=0; i<l; i+=1) {
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
  a=$.qSA('.divh4'); if (a) { l=a.length;
	for (i=0; i<l; i+=1) {
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

f_testLS(); $.EH.add(window,'storage',f_testLS);
f_testfbuy();
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
function f_callback() { $.wDelete(1,1); f_post(2); /* Запрос на обратный звонок */ }
function f_post(n, sum, f) {
var i, l, t='', w=500, h=150, a, dr, s, ss='</div><div onclick="f_cb2click(this)" class="cb2',
al=['','Пожелания, замечания, сообщение об ошибке','Запрос на обратный звонок','Оформление заказа на материалы','Заказ выполнения работ','Заказ рассчитанных материалов','Заказ выполнения работ «под ключ»','Заказ Антидроновое одеяло','Заказ Мягкие носилки бескаркасные'],
on=' onkeypress="f_changePost(this)" onchange="f_changePost(this)"',
dl='<div class="fleft mt3 fwb" style="width:'+((n==3||n==5)?'220px;':'150px;');

sum=sum||''; f=f||0; if(f!=1)f=0; n=n||0; if(n<1 || n>8 || ((n==5||n==6)&&!$.id('id_calcHead')) || $.isDialog() || v_queryXHR>0 || v_mode>0 || !v_storage)return false;
a=$.gLS('fields') || {source:'', sity:'', person:'', tel:'', email:'', reqs:'', other:'', pl:'', amount:''};
if(typeof a=='string') a=JSON.parse(a); if(!a.pl)a.pl=''; v_fields=a;
$.uEnv(); s=$.gCH(); if(s<540)h=s-340; if(h<20)h=20; s=$.gCW(); w=s-210; if(w>500)w=500; if(w<270)w=270; s=h-(s<640?65:45); if(n==2){w-=50;if(w<200)w=200;}
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
	t+=v_px5+(($.gCW()<690)?'<div class="fleft mt3 fwb" style="width:80px;':dl)+'">Вы хотите :'+ss+'">Купить Материалы'+ss+' ml10 mr10">Заказать Работы'+(($.gCW()<690)?('</div>'+v_px5+'<div onclick="f_cb2click(this)" class="cb2" style="float:none;margin:0 auto;max-width:170px;">'):(ss+'">'))+'Получить Консультацию</div>';
	t+=v_px10+'<div class="fwb tac">Мы перезвоним максимально быстро!<br>Если хотите, кратко опишите Ваш «вопрос»,<br>тогда с Вами свяжется «нужный» специалист.</div>'+v_px5;
	t+=v_px5+dl+'">Площадь объекта, м²'+dr.substr(2)+'" id="idText4" value=\''+a.pl+'\''+on+'/></div>';
	t+=v_px5+'<textarea id="idArea1" class="inparea" style="width:'+(w+165)+'px;max-width:'+(w+165)+'px;min-width:'+(w+165)+'px;height:'+s+'px;min-height:'+s+'px;max-height:'+s+'px;"'+on+'>'+a.other+'</textarea>';
	h=160; if ($.gCW()<690)h=180;
}
if (n==3 || n==5) { /* Оформление заказа на материалы || Заказ рассчитанных материалов */
	if(n==3) t+='<div class="fleft fwb">На основании этого заказа Вам будет выставлен счет на оплату.</div><div class="fright">Материалов на сумму: <span>'+f_ts(sum)+'р.</span></div>'+v_px10;
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
if (n==4 || n==6 || n==7 || n==8) { /* Заказ выполнения работ || Заказ выполнения работ «под ключ» */
	if(n==6) t+='<div class="tac">ООО «ТэоХим» выполняет работы в Москве и Московской области.<br>Если Ваш объект находится в другом регионе, обратитесь к нашим <a class="fwb" href="/pred/" target="_blank">Представителям</a></div>';
	t+=(n==6?v_px5:'')+'<div class="fs11">Поля <span class="c1">1, 2, 3</span> - обязательны для заполнения.</div>';
	t+=(n==6?v_px5:v_px10)+dl+'"><span class="c1">1.</span> Контактное лицо'+dr+'" id="idText1" value=\''+(a.person||a.source)+'\''+on+'/></div>';
	t+=v_px5+dl+'"><span class="c1">2.</span> Телефон'+dr+'" id="idText2" value=\''+a.tel+'\''+on+'/></div>';
	t+=v_px5+dl+'"><span class="c1">3.</span> Почта (e-mail)'+dr+'" id="idText3" value=\''+a.email+'\''+on+'/></div>';
	if(n==6) {
		t+=v_px3+'<div class="fs11 ml15">Мы ГАРАНТИРУЕМ, что никогда НЕ будем присылать на Ваш телефон и почту рекламу или другой СПАМ.</div>';
		t+=v_px10+'<span>4. Дополнительные данные:</span><br>- назначение Вашего объекта (гараж, склад, цех или др.)<br>- адрес (можно примерно).';
	} else {
	  if (n==4) {
		t+=v_px10+'<div class="tac">Пожалуйста, укажите основные характеристики Вашего объекта.<br>Площадь. Назначение (гараж, склад, цех или др. ).<br>Какое хотите покрытие? Если не знаете – посоветуем.</div>';
	  } else {
		t+=v_px10+'<div class="tac">Пожалуйста, укажите <span>КОЛИЧЕСТВО</span> и скопируйте сюда Ваши реквизиты.<br>Если требуется ДОСТАВКА, напишите адрес доставки.<br>С Вами свяжется специалист.</div>';
	  }
	}
	t+=(n==6?'':v_px5)+'<div class="fwb tac">Мы ответим максимально быстро. Спасибо.</div>'+v_px5;
	t+='<textarea id="idArea1" class="inparea" style="width:'+(w+165)+'px;max-width:'+(w+165)+'px;min-width:'+(w+165)+'px;height:'+(h-30)+'px;min-height:'+(h-30)+'px;max-height:'+(h-30)+'px;"'+on+'>'+a.other+'</textarea>';
	h=(n==4 || n==7 || n==8) ? 155 : 200;
}
t+=v_px10+'<div class="fleft"><div id="idcapImg"></div><div id="idRefresh" title="обновить рисунок" onclick="f_postCap()"></div>';
t+='<input id="idInpC" class="inpbox" type="text" value="" maxlength="3" placeholder="код"/></div><div class="fleft fwn c8">введите 3 цифры'+((n==2&&$.gCW()<690)?'<br>':' ')+'с картинки</div>';
t+='<input type="button" class="pb_buttons" value="Отправить" id="idSend" onclick="f_postGo('+n+','+f+')"/>';
t+=v_px0+'<div id="idText"></div><div class="pb_hidden" id="idCop">'+n+'</div>'+v_px10+'<div class="pb_checked_false" id="idpc" style="padding:2px 5px 0 20px;width:auto;height:20px;font:inherit;"><div class="pb_ch1"></div><span class="pb_chs1">Я согласен (согласна)</span></div><div class="fleft" style="margin:3px 0 0 5px;"><a href="javascript:void(0)" onclick="f_pprivacy()">с политикой конфиденциальности</a></div>';
ym(988617,'reachGoal',((n==3||n==5)?'ClickOrd':'ClickForm'));
$.createDialog('<div class="pb_ah0">'+al[n]+'</div>',t,w+200,h+325); v_esc=v_dialogEsc=1; $.id('idText1').focus(); f_postCap(); $.uCheckeds(); f_cb2click();
}function f_cb2click(p) { var i, a=$.qSA('.cb2'); if(a) { for (i=0; i<a.length; i+=1) { a[i].style.color='inherit'; a[i].style.borderColor='#c8c8c8'; a[i].style.boxShadow='2px 2px 2px 0 #888888'; } if(p) { p.style.color='#c80000'; p.style.borderColor='#c80000'; p.style.boxShadow='2px 2px 2px 0 #004f92'; } } }
function f_changePost(obj) {
	var p=$.id('idText'), a=v_fields, n=$.id('idCop'); if(!n)return; n=parseInt(n.innerHTML,10)||0; if(n<1||n>7)return; v_dialogEsc=0; if(p)p.innerHTML='&nbsp;';
	if(obj.id=='idText3') $.id('idText3').style.background='#ffffff';
	if(n==1) { if(obj.id=='idText1') a.source=f_replace(obj.value,1); } else { if(obj.id=='idText1') a.person=f_replace(obj.value,1); if(obj.id=='idText2') a.tel=f_replace(obj.value,1); if(obj.id=='idText3') a.email=f_replace(obj.value,1); if(obj.id=='idText4') a.pl=f_replace(obj.value,1); }
	if(n==3 || n==5) { if(obj.id=='idText0') a.sity=f_replace(obj.value,1); if(obj.id=='idArea1') a.reqs=f_replace(obj.value); } else { if(obj.id=='idArea1') a.other=f_replace(obj.value); }
	if(obj.id=='idText5') a.amount=''+parseInt(f_replace(obj.value,1),10);
	$.sLS('fields',JSON.stringify(a));
}
function f_postGo(n, f) {
var i,j,m,s,v, htm='empty', cc=$.id('idInpC'), a=[$.id('idText0'),$.id('idText1'),$.id('idText2'),$.id('idText3'),$.id('idText4'),$.id('idText5'),$.id('idText6'),$.id('idArea1')],
al=['Не все поля заполнены. Можно указать Телефон или E-mail','Не все обязательные поля заполнены','Введён неверный E-mail','Необходимо ввести 3 цифры с рисунка','Пожалуста, напишите подробности'],
as=['','','CallBack','OrderGoods','OrderWork','OrderGoodsCvr','OrderGoodsWorkCvr','OrderGoodsWorkCvr','OrderGoodsWorkCvr'];
f=f||0; if(f!=1)f=0; $.id('idText').innerHTML='&nbsp;';
for (i=0;i<=8;i+=1) { if (a[i]) a[i] = f_replace(a[i].value,(i==7?0:1)); else a[i]=''; }
/* Проверки введённых полей */
if (n==1 && (!a[1] || !a[7])) { $.id('idText').innerHTML = al[0]; return; } /* Пожелания, замечания, сообщение об ошибке */
if (n==2 && (!a[1] || (!a[2] && !a[3]))) { $.id('idText').innerHTML = al[0]; return; } /* Запрос на обратный звонок */
if (n>2 && (!a[1] || !a[2] || !a[3])) { $.id('idText').innerHTML = al[1]; return; } /* Обязательные для заполнения поля */
if (a[3] && !f_checkEmail(a[3])) { $.id('idText').innerHTML = al[2]; return; } /* Если введён E-mail и он некорректен */
for (i=0;i<=7;i+=1) { if (!a[i]) a[i] = 'empty'; } if (n==2 && a[4]=='0') a[4]='empty';
cc=cc.value=f_replace(cc.value,1); if (cc.length!=3) { $.id('idText').innerHTML = al[3]; return; }
if($.id('idpc').className=='pb_checked_false') { $.id('idText').innerHTML = 'Вы должны согласиться с политикой конфиденциальности'; return; }
if(n==3) { /* Составление списка материалов */
  if (f==0) { return; }
  if (f==1) {
	  m=$.qSA('.trt_none'); l=m.length; for (i=0; i<l; i+=1) { m[i].parentNode.removeChild(m[i]); }
	  m=0; htm=$.id('idOrdert').innerHTML;
  }
}
if(n==5||n==6) {/* Составление HTML заказа рассчитанных материалов или работ «под ключ» */
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
v_mode = n; m = ['mode',n, 'idText0',a[0], 'idText1',a[1], 'idText2',a[2], 'idText3',a[3], 'idText4',a[4], 'idText5',a[5], 'idText6',a[6], 'idArea1',a[7], 'cb2',j, 'mlist',htm, 'tara',f, 'url',v_wlh, 'cap',cc, 'hcap',v_cap, 'ncap',v_capID];
f_show_query(); ym(988617,'reachGoal',as[n]); ym(988617,'reachGoal','Сonsolidate'); ym(100515207,'reachGoal',as[n]); ym(100515207,'reachGoal','Сonsolidate');
$.httpPost(((f==1)?v_cb8:v_cb),'mfd',m,v_XHR);v_interval=setInterval(function(){f_hRSCR()},100);
}

/* Получение ответа сервера */
function f_hRSCR(){
var ret,st,p=$.id('idText'),
al=['Ошибка','Ваше сообщение принято','Ваш запрос принят','Ваш <span>заказ на материалы</span> принят','Ваш <span>заказ на выполнение работ</span> принят','Ваш <span>заказ рассчитанных материалов</span> принят','Ваш <span>заказ выполнения работ «под ключ»</span> принят','Ваш <span>заказ «Антидроновое одеяло»</span> принят','Ваш <span>заказ «Мягкие носилки бескаркасные»</span> принят','Введён неверный код с картинки.'+v_px5+'Проверьте правильность кода.','Неверно указан почтовый ящик.'+v_px5+'Проверьте правильность E-mail'];
try { if(v_XHR.readyState==4) {
	st=v_XHR.status; f_hide_query();
	if(st==200){
		ret=v_XHR.responseText;
		if(ret=='1'||ret=='2') {
			if (ret=='1') f_mesErr(al[0],al[9],350,120);
			if (ret=='2') { f_mesErr(al[0],al[10],350,120); $.id('idText3').style.background='#fff0f0'; if(p)p.innerHTML='Введён неверный E-mail'; }
		} else {
		  if (ret.substr(0,2)=='ok') {
			al[0] = v_mode<3 ? al[v_mode] : '<span style="font-weight:bold">Заказ ПРИНЯТ</span>';
			al[v_mode] = v_mode<3 ? al[v_mode] : ('№ Вашего заказа: <span class="fwb fs14 cf00">'+ret.substr(2)+'</span>'+v_px10+'Письмо – подтверждение Заказа -<br>отправлено на указанный Вами e-mail.'+v_px10+'<span style="font:normal italic 11px arial;">Если Вы не получили письмо, проверьте<br>папку «Спам»/«Нежелательная почта».</span>'+v_px5+'<span style="font:normal italic 11px arial;">Если письмо не найдено,<br>звоните: <a class="consult fwb" href="tel:+79263622520">+7-926-362-2520</a></span>');
			$.removeDialog(); v_esc=v_dialogEsc=0;
			f_message('<div class="pb_ahb">'+al[0]+'</div>',al[v_mode]+'.'+v_px10+'<span class="fs12 c2">Спасибо</span>.'+v_px5,300,250);
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
	t+='<p>Политика конфиденциальности</p>';
	t+='<p>Согласие на обработку персональных данных</p>';
	t+='<p>Настоящим в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» от 27.07.2006 года свободно, своей волей и в своем интересе выражаю свое безусловное согласие на обработку моих персональных данных ООО «ТЭОХИМ»» ( ОГРН 1037739543126, ИНН 7710305930), зарегистрированным в соответствии с законодательством РФ по адресу: 107023 г.Москва, ул. Суворовская д.10, офис 15 (далее по тексту - Оператор).</p>';
	t+='<p>Персональные данные - любая информация, относящаяся к определенному или определяемому на основании такой информации физическому лицу.</p>';
	t+='<p>Настоящее Согласие выдано мною на обработку следующих персональных данных:</p>';
	t+='<ul>';
	t+='<li>Телефон</li>';
	t+='<li>Имя</li>';
	t+='<li>Электронная почта</li>';
	t+='</ul>';
	t+='<p>Согласие дано Оператору для совершения следующих действий с моими персональными данными с использованием средств автоматизации и/или без использования таких средств: сбор, систематизация, накопление, хранение, уточнение (обновление, изменение), использование, обезличивание, а также осуществление любых иных действий, предусмотренных действующим законодательством РФ как неавтоматизированными, так и автоматизированными способами.</p>';
	t+='<p>Данное согласие дается Оператору для обработки моих персональных данных в следующих целях:</p>';
	t+='<ul>';
	t+='<li>предоставление мне услуг/работ;</li>';
	t+='<li>направление в мой адрес уведомлений, касающихся предоставляемых услуг/работ;</li>';
	t+='<li>подготовка и направление ответов на мои запросы;</li>';
	t+='<li>направление в мой адрес информации, в том числе рекламной, о мероприятиях/товарах/услугах/работах Оператора.</li>';
	t+='</ul>';
	t+='<p>Настоящее согласие действует до момента его отзыва путем направления соответствующего уведомления на электронный адрес teohim@teohim.ru. В случае отзыва мною согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без моего согласия при наличии оснований, указанных в пунктах 2 – 11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона №152-ФЗ «О персональных данных» от 27.06.2006 г.</p>';
	t+='<p>Вы можете <a href="/policies-privacy/" target="_blank" tabindex="0">открыть политику конфиденциальности</a> в отдельной вкладке/окне браузера.</p>';
	t+='<p class="fleft">Спасибо за внимание.</p></div>';
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
    var i, j, l, a, s, n = null, o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], e1 = [0, 0], e2 = [0, 0];
    if (v!='end' || (!$.id('sel1')) || (!$.id('sel2'))) return;
	/* Тип Объекта */
    o[0] = [0, 0]; // все
    o[1] = [1, 5, 42, 46, 57, 62, 70, 104]; // Пищевое Производство
    o[2] = [1, 15, 23, 34, 46, 54]; // СельХоз. объекты
    o[3] = [2, 9, 19, 20, 21, 25, 32, 36, 38, 39, 50, 52, 56, 71, 76, 91, 100, 105, 106, 109, 115, 120, 123, 124, 125, 126]; // Гаражи/Паркинги
    o[4] = [3, 8, 40, 51, 81, 82, 83]; // Резервуары
    o[5] = [4, 26, 30, 48, 52, 58, 63, 65, 76, 77, 78, 79, 84, 85, 92, 93, 95, 98, 112, 121, 127]; // Склады
    o[6] = [6, 7, 10, 13, 16, 17, 18, 22, 27, 30, 31, 35, 37, 41, 43, 44, 49, 52, 53, 55, 59, 60, 66, 67, 68, 72, 73, 74, 75, 78, 79, 80, 82, 84, 85, 86, 87, 88, 89, 90, 94, 101, 108, 114, 117, 118]; // Цеха
    o[7] = [11, 24, 33, 45, 47, 64, 77, 96, 99, 103, 107, 110, 111, 112]; // Прочее
    o[8] = [12, 29, 102, 111, 113]; // Жилищное строительство
    o[9] = [13, 16, 18, 85]; // Объекты РосАтом
    o[10]= [14, 122]; // Медицинские учреждения
    o[11]= [28, 97]; // Учебные заведения
    o[12]= [61, 69, 78]; // Магазины
    o[13]= [3, 8, 33, 49, 53, 82, 83, 86, 88, 116, 119]; // Электростанции, ТЭК

	/* Тип Покрытия */
    p[0] = [0, 0]; // все
    p[1] = [1, 5, 13, 15, 17, 19, 23, 35, 36, 37, 48, 50, 54, 66, 68, 69, 73, 74, 90, 94, 100, 101, 104, 109]; // Пропитка бетона
    p[2] = [2, 4, 5, 7, 9, 10, 11, 12, 13, 15, 16, 18, 20, 21, 22, 27, 29, 30, 31, 32, 34, 35, 38, 41, 44, 45, 46, 49, 54, 55, 56, 57, 59, 60, 61, 62, 64, 65, 67, 75, 76, 77, 78, 79, 80, 82, 84, 85, 86, 88, 89, 92, 103, 106, 107, 112, 114, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127]; // Покрытие бетона
    p[3] = [2, 4, 5, 9, 10, 13, 22, 25, 26, 39, 58, 63, 70, 71, 72, 105, 108]; // Кварцнаполненное покрытие
    p[4] = [3, 8, 33, 40, 51, 81, 82, 83]; // Защита металла
    p[5] = [24]; // Защита дерева
    p[6] = [18, 23]; // Флюатирование
    p[7] = [6, 17, 37, 42, 43, 44, 48, 52, 53, 69, 73]; // Полимерцементные полы
    p[8] = [14, 28, 47, 77, 87, 93, 95, 96, 97, 98, 99, 102, 110, 111, 112, 115]; // Наливные полы
    p[9] = [80, 85, 91, 92]; // Бетонные полы Эластобетон
    p[10]= [0,0]; // Покрытие для асфальта
    p[11]= [84, 89, 110, 114, 116, 117]; // Антистатические полы

    a = o[0]; s = p[0];
    for (i=1; i<=127; i+=1) { e1[i]=0; e2[i]=0; a[i-1]=i; s[i-1]=i; }
    s=parseInt($.id('sel1').value,10)||0; a=o[s]; l=a.length||0;
    for (i=0; i<l; i+=1) e1[a[i]]=1;
    s=parseInt($.id('sel2').value, 10)||0; a=p[s]; l=a.length||0;
    for (i=0; i<l; i+=1) e2[a[i]]=1;
    for (i=1; i<=127; i+=1) { if ($.id('dotz' + i)) { $.id('dotz' + i).style.display = (e1[i]==0 || e2[i]==0) ? 'none' : 'block'; } }
    setTimeout(function () {var n = null; $.animate('divotz', 200, 50, n, n, n, n, n, n, 1, 0, n, n, n, n, function () { $.id('divotz').style.visibility='hidden'; }); }, 100);
}


/* ************************************* */
/* РАБОТА С ЗАКАЗОМ МАТЕРИАЛОВ */

function f_clz(n) {
	if (n==4 || v_zlistr[0][1]) f_post(n,v_zlistr[0][3]); else f_message('Оформление заказа','<span class="fwn fs15">Заказ пустой</span>',200,100);
}
function f_basketRal(e) {
  var i, np=0, d, s, cf,cf2, x=$.gMX(e), y=$.gMY(e), pw=$.gPW(e), ph=$.gPH(e), t=e.target, n=t.id.substr(7), ral1,ral2, r=v_zlistr, l=r.length, zlt, pos; v_changeRal=9;
  i=n.indexOf('_'); pos=parseInt(n.substr(i+1),10); n=parseInt(n.substr(0,i),10); if (v_ordEdit==0||aRal.indexOf(n)==-1)return;
  f_basketRalDel(e); $.uEnv(e); for (i=1; i<l;i+=1) { if (r[i][0]==n && r[i][4]==pos) { zlt=JSON.parse(JSON.stringify(r[i])); np=i; i=l; } } if (!zlt) return;
  cf=(n==17||n==20||n==21||n==22||n==165||n==193||n==205||n==206)?1:0; cf2=(cf && zlt[1]<(zlt[2][1]+zlt[2][1]))?0:1;
  if (n==33||n==37||n==71) { cf=1; cf2=(zlt[1]<zlt[2][1])?0:1; }
  x=$.gOffset(t); y=x.top; x=x.left; s=parseInt($.gStyle(e.target,'width'),10)||30; x+=s; s=parseInt($.gStyle(e.target,'height'),10)||20; y+=s-5;
  if(x>(pw-300))x=pw-300; if(y>(ph-100))y=ph-100; if(x<0)x=0; if(y<0)y=0; /*x+=$.gPSL(); y+=$.gPST();*/
  d=$.D.createElement('div'); d.className='dBalPrice'; s=d.style; s.top=y+'px'; s.left=x+'px'; s=(n==33||n==37||n==71)?zlt[2][1]:(zlt[2][1]+zlt[2][1]);
  if(cf && cf2==0) { f_message('<div class="pb_ah0">Выбор цвета от количества:'+s+((n==105||n==106||n==227)?'л':'кг')+'</div>', '<spanp class="fwb c1">Выбор цвета возможен от количества:<br>'+s+((n==105||n==106||n==227)?'л':'кг')+'</span>', 300, 110); return; }
  ral1=zlt[5]||0,ral2=zlt[6]; aRalSel=[n,ral1,ral2,('if(f_addRal('+n+','+zlt[1]+')){v_zlistr['+np+']=v_zlist_;v_zlist_=[];f_testBasketSum();f_set_zlist();f_basketRalDel(event);}')];
  s='<div class="dBalPriceHead">Выбор цвета</div><div class="dBalPriceHeadDel" onclick="f_basketRalDel(event)"></div>';
  s+=v_px15+'<div style="margin:0 auto; width:150px;">';
  s+='<div class="fleft mt2 fwb">Цвет:</div><div class="ordDtdC fright" title="Сбросить по-умолчанию" onclick="v_zlist_[5]=7;v_zlist_[6]=40;'+aRalSel[3]+'"><div class="ordD"></div></div>';
  s+='<div class="dralc" style="background:#';
  if (!f_tr12(ral1,ral2)) { ral1=7; ral2=40; s+=aRalC[7][40]; } else { s+=aRalC[ral1][ral2]; } 
  v_ralCF=cf?(zlt[2][1]+zlt[2][1]):0; if (n==33||n==37||n==71) v_ralCF=zlt[2][1];
  v_zlist_=zlt; v_ralOldK=v_zlist_[1]; v_ralOldR1=v_zlist_[5]; v_ralOldR2=v_zlist_[6];
  s+=';float:right;margin:0;width:80px;height:20px;" onclick="f_ral('+n+','+ral1+','+ral2+','+zlt[1]+')" title="Выбрать цвет"></div>'+v_px0+'<div class="fright fs11 tal" style="width:103px;">(выбрать цвет)</div>';
  s+='</div>'+v_px5;
  d.innerHTML='<div class="dBalPriceBody">'+s+'</div>';
  $.B.appendChild(d); dBalPrice=d; if(e.targetTouches && e.targetTouches.length==1) $._(24)(e,0); v_changeRal=pos; v_ralOldK=v_zlist_[1];
} function f_basketRalDel(e) { if(dBalPrice==0) return; $.uEnv(e); $.B.removeChild(dBalPrice); $._(24)(e,0); dBalPrice=0; }

function f_b(n, name, name2) { f_newRal(n, name, name2); }
function f_newRal(n, name, name2, f) {
	var i,r=v_zlistr,l=r.length,tt,tn; v_zlist_=0; f=f||0;
	if (f && v_changeRal>0) { for(i=1;i<l;i+=1) { if(n==r[i][0] && r[i][4]==v_changeRal) { v_zlist_=JSON.parse(JSON.stringify(r[i])); i=l; } } }
	else { for(i=1;i<l;i+=1) { if(n==r[i][0]) { v_zlist_=JSON.parse(JSON.stringify(r[i])); v_changeRal=r[i][4]; } } }
	if (!v_zlist_) { v_zlist_=[n,0,[0,0,0,0,0,0,0,0,0,0,0,0],0,1,0,0]; v_changeRal=0; }
	v_trname=name?name:v_mtrt[n][2]; v_trname2=name2?name2:''; v_ralOldK=v_zlist_[1]; v_ralOldR1=v_zlist_[5]; v_ralOldR2=v_zlist_[6];
	tt=v_mtrt[n][10]; tn=v_mtrt[n][11]; v_trtara=[tt[0],tn[0],tt[1],tn[1],tt[2],tn[2],tt[3],tn[3],tt[4],tn[4],tt[5],tn[5]]; f_editRal(n,-1);
}
function f_changeRal(n,k,v) {
	var i,f=0,r=v_zlistr,l=r.length; v=parseInt(v,10)||0; k=k||0; if(k!=v_ralOldK)return false;
	for(i=1;i<l;i+=1) { if(n==r[i][0]) { f+=1; if(v_changeRal!=r[i][4] && v==r[i][4]) { v_zlist_=JSON.parse(JSON.stringify(r[i])); i=l; } } }
	if(v==0) { v_zlist_=[n,0,[0,0,0,0,0,0,0,0,0,0,0,0],0,f+1,0,0]; }
	v_ralOldK=v_zlist_[1]; v_ralOldR1=v_zlist_[5]; v_ralOldR2=v_zlist_[6]; v_changeRal=v_zlist_[4]; f_editRal(n, -1);
}
function f_addRal(n,k) { /* v_ralOldK */
	var i,j,cr,r=v_zlistr,l=r.length,r1,r2,ral1=v_zlist_[5],ral2=v_zlist_[6], ral=ral1*1000+ral2, a, f=0, p; k=k||0; ral='RAL '+(ral?ral:'Базовый 7040');
	if (k>0 && v_ralOldK==0) { /* Добавить новый материал / вариант колеровки в заказ */
	  for(i=1;i<l;i+=1) {
		r1=r[i][5]; r2=r[i][6];
		if (r[i][0]==n && r[i][4]!=v_changeRal && r1==ral1 && r2==ral2) {
		  f_message('<div class="pb_ah0">'+ral+': есть в заказе</div>','Вариант с колеровкой '+ral+'<br>уже есть в заказе.',280,110); return false;
		} if (r[i][0]==n && v_changeRal==0) f+=1;
	  } if(f) v_zlist_[4]=v_changeRal=f; r[l]=v_zlist_;
	}
	if (k==0 && v_ralOldK>0) { /* Удалить материал / вариант колеровки из заказа */
	  for(i=1;i<l;i+=1) { if (r[i][0]==n && r[i][4]==v_changeRal) {
		r[i]=[0]; i=l; if (v_page==226) { cr=a=v_changeRal;
		p=$.id('trt'+n+'_'+a); if(p) p.className='trt_none';
		p=$.id('trt'+n+'_'+a+'_I'); if (p) p.className='trt_none';
		p=$.id('trt'+n+'_'+a+'_ld'); if (p) p.className='trt_none';
		p=$.id('dordRal'+n+'_'+a); if (p) p.style.display='none';
		p=$.id('trt'+n+'_'+a+'_0'); if (p) p.className='trt_none';
		p=$.id('trt'+n+'_'+a+'_1'); if (p) p.className='trt_none';
		p=$.id('trt'+n+'_'+a+'_2'); if (p) p.className='trt_none';
		p=$.id('trt'+n+'_'+a+'_3'); if (p) p.className='trt_none';
		p=$.id('trt'+n+'_'+a+'_4'); if (p) p.className='trt_none';
		p=$.id('trt'+n+'_'+a+'_5'); if (p) p.className='trt_none';
		}
	  }}
	  v_changeRal=0;
	}
	if (k>0 && v_ralOldK>0) { /* Изменить материал / вариант колеровки в заказе */
	  for(i=1;i<l;i+=1) {
		r1=r[i][5]; r2=r[i][6];
		if (r[i][0]==n && r[i][4]!=v_changeRal && r1==ral1 && r2==ral2) {
		  f_message('<div class="pb_ah0">'+ral+': есть в заказе</div>','Вариант с колеровкой '+ral+'<br>уже есть в заказе.',280,110); return false;
		}
	  }
	  for(i=1;i<l;i+=1) { if (r[i][0]==n && r[i][4]==v_changeRal) { r[i]=v_zlist_; i=l; } }
	}
	if(v_page==226) {
	  a=$.qSA('.trt_none')||[]; l=a.length; for (i=0;i<l;i+=1) { if(a[i].id!='trt0th' && a[i].id!='trt1th') a[i].parentNode.removeChild(a[i]); }
	  if (k==0 && v_ralOldK>0) {
		for(i=cr+1; i<=5; i+=1) {
		  p=$.id('dordRal'+n+'_'+i); if (p) p.id='dordRal'+n+'_'+(i-1);
		  p=$.id('ordRal'+n+'_'+i); if (p) p.id='ordRal'+n+'_'+(i-1);
		  p=$.id('ordD'+n+'_'+i); if (p) p.id='ordD'+n+'_'+(i-1);
		  p=$.id('trt'+n+'_'+i); if (p) p.id='trt'+n+'_'+(i-1);
		  p=$.id('trt'+n+'_'+i+'_ld'); if (p) p.id='trt'+n+'_'+(i-1)+'_ld';
		  p=$.id('ordKI'+n+'_'+i); if (p) p.id='ordKI'+n+'_'+(i-1);
		  p=$.id('ordCS'+n+'_'+i); if (p) p.id='ordCS'+n+'_'+(i-1);
		  p=$.id('trt'+n+'_'+i+'_I'); if (p) p.id='trt'+n+'_'+(i-1)+'_I';
		  for (j=0; j<=5; j+=1) {
			p=$.id('ordF'+n+'_'+i+'_'+j); if (p) p.id='ordF'+n+'_'+(i-1)+'_'+j;
			p=$.id('ordK'+n+'_'+i+'_'+j); if (p) p.id='ordK'+n+'_'+(i-1)+'_'+j;
			p=$.id('ordC'+n+'_'+i+'_'+j); if (p) p.id='ordC'+n+'_'+(i-1)+'_'+j;
			p=$.id('ordS'+n+'_'+i+'_'+j); if (p) p.id='ordS'+n+'_'+(i-1)+'_'+j;
			p=$.id('trt'+n+'_'+i+'_'+j); if (p) p.id='trt'+n+'_'+(i-1)+'_'+j;
		  }
		}
	  }
	} else {
	  f_testBasketSum(); if(v_idBT_I) { clearInterval(v_idBT_I); v_idBT_I=null; v_idBT_S=1; } $.removeDialog(); v_esc = v_dialogEsc = 0; f_testfbuy(); if(aRal.indexOf(n)>=0) {setTimeout(function(e){f_newRal(n,v_trname,v_trname2, 1)},20)};
	} return true;
}
function f_tr12(r1,r2) { return (r1==0)?0:1; } /*  */
function f_rBase(r1,r2) { return (r1==0)?1:0; } /*  */
function f_editRal(n,k) { /* диалог выбора кол-ва, тары, цвета */ /*  v_zlist_ = [i,0,[0,0,0,0,0,0,0,0,0,0,0,0],0,0,0,0]; [код, общее кол-во, [кол-во мест,одно тарное место], сумма,NNNsel,ral1,ral2] */
	var i,j,p,t,tt,ff, f, s=0, kk, c='', kl=0, nc, col=0, cf=0, bs=0, b=[0,0,0,0,0,0,0,0,0,0,0,0], a=[0,0], val, z, tr, r1,r2, ral1,ral2,trC='', r=v_zlistr, l=r.length; aRalSel=[], aR=(aRal.indexOf(n)>=0)?1:0;
	z=JSON.parse(JSON.stringify(v_zlist_)); ral1=z[5]||0; ral2=z[6]||0; if (aR) { trC = (f_tr12(ral1,ral2)) ? aRalC[ral1][ral2] : aRalC[7][40]; }
	tr=JSON.parse(JSON.stringify(v_trtara));
	k=k||0; $.removeDialog(); v_esc = v_dialogEsc = 0;
	if(v_idBT_I) { clearInterval(v_idBT_I); v_idBT_I=null; v_idBT_S=1; $.id('idBT_ACD').style.background="inherit"; }
	if(k>=0 && k!=v_ralOldK) {
	  v_idBT_I=setInterval(function(){var p=$.id('idBT_ACD')||0; if(p) {if (v_idBT_S) {p.style.background="#ffc8c8";v_idBT_S=0;} else {p.style.background="inherit";v_idBT_S=1;}} else {if(v_idBT_I){clearInterval(v_idBT_I);v_idBT_I=null;}}},500);
	}
	if (k==-1 && z[1]>0) { k=kl=z[1]; b=[z[2][0],0,z[2][2],0,z[2][4],0,z[2][6],0,z[2][8],0,z[2][10],0]; }
	if(k==-1)k=0; v_zlist_=0; a[n]=[n,k,tr,0];/*[0,200,1,50,0,20,0,10,0,0,0,0]*/
	for (i=0; i<7; i+=2) { if (!a[n][2][i]) a[n][2][i]=0; if (!a[n][2][i+1]) a[n][2][i+1]=0; } if (a[n][2][0] && a[n][2][2] && a[n][2][4] && a[n][2][6]) bs=2;
	val=parseFloat(k).toFixed(2); if (val=='0.00') val='';
	tt='<div class="tac"><span class="c9">'+v_trname+'</span><br><span class=\'fwn fs12\'>'+v_trname2+'</span>' + v_px5b + v_px5;
	t='<p class="fleft mt5 fs11" style="color:#606060">Ввод для <span>оптимального</span> подбора тары :</p> &nbsp;<input class="inpbox" id="IDiadd" type="text" onchange="if(parseFloat(this.value)<=99620)f_editRal('+n+',(parseFloat(this.value)||0),1)" style="width:60px;text-align:right;" value="' + val + '" maxlength="8"/>' + v_px5b;
	t+=v_px0+'<p class="fs11 fleft">Наберите количество в требуемой таре.</p><p class="fs11 fright">Цены с НДС, руб.</p>'+v_px10; kk=k;
	while (kl<k) {
	  for (i=0; i<7; i+=2) {
		nc=a[n][2][i]; while (nc>0 && nc<=(k-kl)) { b[i]+=1; kl+=nc; }
		if (k==kl) break;
	  }
	  if (k==kl) break;
	  if (a[n][2][6]>0 && kl+a[n][2][6]>k) { k=kl+a[n][2][6]; b[6]+=1; }
	  if (a[n][2][6]==0 && a[n][2][4]>0 && kl+a[n][2][4]>k) { k=kl+a[n][2][4]; b[4]+=1; }
	  if (a[n][2][6]==0 && a[n][2][4]==0 && a[n][2][2]>0 && kl+a[n][2][2]>k) { k=kl+a[n][2][2]; b[2]+=1; }
	  if (a[n][2][6]==0 && a[n][2][4]==0 && a[n][2][2]==0 && a[n][2][0]>0 && kl+a[n][2][0]>k) { k=kl+a[n][2][0]; b[0]+=1; }
	  if (k>kk || kl>=kk) { kl=k; break; } else { b=[0,0,0,0,0,0,0,0,0,0,0,0]; kl=0; }
	}
	j=6; if(b[j]==1 && (b[2]>0 || b[0]>0) && bs==2) { a[n][2][j+1]=a[n][2][j-1]; }
	j=4; if(b[j]==1 && b[6]==0 && (b[2]>0 || b[0]>0)) { a[n][2][j+1]=a[n][2][j-1]; }
	j=2; if(b[j]==1 && b[6]==0 && b[4]==0 && b[0]>0 && bs==0) { a[n][2][j+1]=a[n][2][j-1]; }
	for (i=6; i>=2; i-=2) { if (b[i]==2 && a[n][2][i-2]==(a[n][2][i]+a[n][2][i])) { b[i-2]+=1; b[i]=0; } }
	t+='<div id="IDiaddTbl">';
	t+='<table class="tmtrt"><tbody><tr class="fwb" style="height:20px"><th style="width:80px">Фасовка</th><th style="width:100px">Кол-во, '+((n==105||n==106||n==227)?'л':'кг')+'</th><th style="width:60px">Цена за '+((n==105||n==106||n==227)?'л':'кг')+'</th><th style="width:85px">Стоимость</th></tr>';
	k='f_editRal2('+n+','+kl+',['+v_trtara+'],['+b[0]+','+(a[n][2][0]||0)+','+b[2]+','+(a[n][2][2]||0)+','+b[4]+','+(a[n][2][4]||0)+','+b[6]+','+(a[n][2][6]||0)+',0,0,0,0],';
	a[n]=[n,kl,tr,s]; c=f_z_cht(n,kl)[2];
	cf=(n==17||n==20||n==21||n==22||n==165||n==193||n==205||n==206)?(a[n][2][0]+a[n][2][0]):0;
	if (n==33||n==37||n==71) cf=a[n][2][0];
	v_ralCF=cf; s=0; if(cf && ral1==7 && (ral2==40)) cf=0;
	if(ral1==7&&(ral2==35||ral2==40)) {} else { if(aR && ral1>0 && kl>=cf) { c+=aRalN[ral1][ral2]; col=(kl>0&&f_tr12(ral1,ral2)) ? aRal[0] : 0; col=((col/kl)>Math.round(col/kl))?(Math.round(col/kl)+1):Math.round(col/kl); if(kl>=600)col=5; c+=col; } }
	for (i=0; i<7; i+=2) {
	  if(a[n][2][i]) {
		if (n==27 && ral1>0 && aRalN[ral1][ral2]>0) c+=25; /* для 1.4.3. +25 */
		nc=b[i]*a[n][2][i]*a[n][2][i+1]; j=b[i]*a[n][2][i]*c+nc;
		t+='<tr'+(b[i]==0?' style="color:#808080"':'')+'><td style="padding-left:5px;text-align:left"><span style="ont:bold 13px arial">'+b[i]+'</span> по '+a[n][2][i]+((n==105||n==106||n==227)?'л':'кг')+'</td>';
		t+='<td><div class="f_l" onclick="'+k+'(parseFloat($.id(\'id_inptara'+i+'\').value,10)||0),'+i+',2)"></div>';
		t+='<input type="text" id="id_inptara'+i+'" style="width:60px; height:15px; text-align:right;" maxlength="8" onfocus="if(this.value==\'нет\')this.value=\'\'" onblur="if(this.value==\'\')this.value=\'нет\'" onchange="'+k+'(parseFloat(this.value,10)||0),'+i+',0)" value="'+(b[i]==0?'нет':(b[i]*a[n][2][i]).toFixed(2))+'"/>';
		t+='<div class="f_r"'+((kl>99620)?'':(' onclick="'+k+'(parseFloat($.id(\'id_inptara'+i+'\').value,10)||0),'+i+',1)"'))+'></div></td>';
		t+='<td style="padding-right:5px;text-align:right;'+((i==bs&&1==2)?'border:solid 2px #808080;':'')+'">'+(j>0?f_ts((c+a[n][2][i+1]).toFixed(2)):'')+'</td><td style="padding-right:5px;text-align:right">'+(j>0?f_ts(j.toFixed(2)):'')+'</td></tr>'; s+=j;
	  }
	}s=s||0;
	t+='<tr><td style="padding-left:5px;text-align:left;font:bold 13px arial">Итого:</td><td style="padding-right:5px;text-align:right;font:bold 13px arial;">'+f_ts(kl.toFixed(2))+'</td><td colspan="2" style="padding-right:5px;text-align:right;font:bold 13px arial;">'+f_ts(s.toFixed(2)||0)+'</td></tr>';
	t+='</tbody></table>';
	if (aR) { aRalSel=[n,ral1,ral2,''];
	  cf2=((n==17||n==20||n==21||n==22||n==165||n==193||n==205||n==206) && kl<(a[n][2][0]+a[n][2][0]))?0:1;
	  if (n==33||n==37||n==71) cf2=(kl<a[n][2][0])?0:1;
	  t+=v_px15+'<div style="margin:0 30px 0 70px; width:280px;"><div class="fleft mt2 fwb">Цвет:</div><div class="fright mt2" style="width:130px">(RAL '+(cf2?((ral1*1000+ral2)||'7040'):'7040')+((ral1==7&&ral2==40||ral1==0)?' базовый':'')+')</div>';
	  if (!cf2) { t+='<div class="fright" style="width:21px">&nbsp;</div>'; }
	  else { t+='<div class="ordDtdC fright" title="Сбросить по-умолчанию" onclick="f_ral_clr('+n+');'+k+'(parseFloat($.id(\'IDiadd\').value,10)||0),0,3);"><div class="ordD"></div></div>'; }
	  t+='<div class="dralc" style="background:#'; if (!f_tr12(ral1,ral2)) { t+=aRalC[7][40]; } else { t+=aRalC[ral1][ral2]; }
	  aRalSel[3]=k+'(parseFloat($.id(\'IDiadd\').value,10)||0),0,3)';
	  t+=';float:right;margin:0;width:80px;height:20px;" ';
	  if (cf2) { t+='onclick="f_ral('+n+','+ral1+','+ral2+','+kl+')" title="Выбрать цвет"'; }
	  t+='></div>'+v_px0+'<div class="fright fs11 tal" style="width:233px;">'+(cf2?'(выбрать цвет)':'&nbsp;')+'</div>';
	  t+='</div>'+v_px5;
	} else { t+=v_px20; }
	if (aR) {
	  f=0; p=0; for (j=1; j<l; j+=1) { if(n==r[j][0]) f+=1; } ff=(f>0 && f<6 && kl==v_ralOldK && v_ralOldR1==ral1 && v_ralOldR2==ral2)?1:0;
	  tt+='<div id="dordTC">'+((f>0)?('<div class="fleft fs11 fwb" style="margin:-2px 0 0 5px">Заказанные цвета:</div>'+v_px3):'');
	  for (j=1; j<l; j+=1) {
		if(n==r[j][0]) {
		  r1=r[j][5]; r2=r[j][6]; p=(r[j][4]==v_changeRal)?1:0;
		  tt+='<div class="fleft" id="id_bral_'+r[j][4]+'" style="margin:0 0 5px 5px;font-weight:bold;'+(p?'border:solid 2px #000000':'border:solid 2px transparent')+';"><div class="pb_buttons" style="display:inline-block;margin:0;width:55px;font-weight:normal;color:#ffffff;text-shadow:#000000 1px 1px 1px;background:#'+(((p&&kl<cf) || !f_tr12(r1,r2))?aRalC[7][40]:aRalC[r1][r2])+'"'+(ff?(' onclick="f_changeRal('+n+','+kl+','+r[j][4]+')"'):'')+'>'+v_px5+(r1*1000+r2)+'</div><br>'+(r[j][1])+'кг</div>';
		}
	  }
	  if (ff && f<5) { tt+='<div class="cd_ral_plus" title="Добавить с другим цветом..." onclick="f_changeRal('+n+','+kl+',0)">+</div>'; }
	  tt+=((f>0)?(v_px0b+v_px5):'')+'</div>'+v_px0;
	} if (!f_tr12(ral1,ral2) || kl<cf) { ral1=ral2=0; if(aR){ral1=7;ral2=40;} }
	v_zlist_=[n,kl,[b[0],a[n][2][0]||0, b[2],a[n][2][2]||0, b[4],a[n][2][4]||0, b[6],a[n][2][6]||0, b[8],a[n][2][8]||0, 0,0],s,v_changeRal,ral1||0,ral2||0];
	if (aR) {
		if (n==17||n==20||n==21||n==22||n==165||n==193||n==205||n==206) { t+=v_px0+'<p class="fwb mt0 fs11 tac c1">Минимальная партия для колеровки от '+(a[n][2][0]*2)+'кг</p>'+v_px7; }
		if (n==33||n==37||n==71) { t+=v_px0+'<p class="fwb mt0 fs11 tac c1">Минимальная партия для колеровки от '+a[n][2][0]+'кг</p>'+v_px7; }
	}
	t+=v_px5+'<input type="button" class="pb_buttons" id="idBT_ACD" style="font-weight:bold;width:150px;" value="'+((kl==0 && v_ralOldK>0)?'Удалить из заказа':((kl==0 && v_ralOldK==0)?'Добавить в заказ':((v_ralOldK>0)?'Изменить в заказе':'Добавить в заказ')))+'" onclick="f_addRal(' + n + "," + kl + ')"/></div>';
	t+=v_px5+'<p class="fs11 tac">ВНИМАНИЕ! Цены будут изменены (уменьшены)<br>с учетом общего количества покупаемых материалов.</p>';
	$.createDialog('<div class="pb_ah0">Выбор количества и тары</div>', (tt+t), 360, (aR?460:400)); v_esc=v_dialogEsc=1; val=kl.toFixed(2)||'0.00'; if (val=='0.00') val=''; $.id('IDiadd').value=val; $.id('IDiadd').focus();
}

function f_editRal2(n, k, tara, ac, v, pi, f) {
    var p, t, ff, tt='', tb, j, i=0, s=0, c='', kl=0, col=0, cf=0, cf2=0, nc, bs=0, b=[ac[0],0,ac[2],0,ac[4],0,ac[6],0,0,0], tr=JSON.parse(JSON.stringify(tara)), r=v_zlistr, l=r.length, val, z,l,r1,r2, ral1=aRalSel[1], ral2=aRalSel[2], aR=(aRal.indexOf(n)>=0)?1:0;
	a=[0,0]; k=k||0; if (k<0) return; a[n]=[n,k,tr,0]; v=v||0; f=f||0; pi=pi||0;
	for (i=0; i<7; i+=2) { if (!a[n][2][i]) a[n][2][i]=0; if (!a[n][2][i+1]) a[n][2][i+1]=0; } if (a[n][2][0] && a[n][2][2] && a[n][2][4] && a[n][2][6]) bs=2;
	if (f==1) { b[pi]+=1; } if (f==2 && b[pi]>0) { b[pi]-=1; } if(b[pi]<0)b[pi]=0;
	if (f==0) { if (v/(a[n][2][pi])>Math.round(v/(a[n][2][pi]))) b[pi]=Math.round(v/(a[n][2][pi]))+1; else b[pi]=Math.round((v/(a[n][2][pi]))); }

	j=6; if(b[j]==1 && (b[2]>0 || b[0]>0) && bs==2) { a[n][2][j+1]=a[n][2][j-1]; }
	j=4; if(b[j]==1 && b[6]==0 && (b[2]>0 || b[0]>0)) { a[n][2][j+1]=a[n][2][j-1]; }
	j=2; if(b[j]==1 && b[6]==0 && b[4]==0 && b[0]>0 && bs==0) { a[n][2][j+1]=a[n][2][j-1]; }
	for (i=0; i<7; i+=2) {
	  if (b[i]>0) { nc=a[n][2][i]; kl+=nc*b[i]; s+=nc*b[i]*a[n][2][i+1]; }
    }
	if (kl>99620) { $.id('IDiadd').value='99620'; f_editRal(n, 99620, 1); return; }
	if(v_idBT_I) { clearInterval(v_idBT_I); v_idBT_I=null; v_idBT_S=1; $.id('idBT_ACD').style.background="inherit"; }
	if(kl!=v_ralOldK || ral1!=v_ralOldR1 || ral2!=v_ralOldR2) {
		v_idBT_I=setInterval(function(){var p=$.id('idBT_ACD')||0; if(p) {if (v_idBT_S) {p.style.background="#ffc8c8";v_idBT_S=0;} else {p.style.background="inherit";v_idBT_S=1;}} else {if(v_idBT_I){clearInterval(v_idBT_I);v_idBT_I=null;}}},500);
	}
	t='<table class="tmtrt"><tbody><tr class="fwb" style="height:20px"><th style="width:80px">Фасовка</th><th style="width:100px">Кол-во, '+((n==105||n==106||n==227)?'л':'кг')+'</th><th style="width:60px">Цена за '+((n==105||n==106||n==227)?'л':'кг')+'</th><th style="width:85px">Стоимость</th></tr>';
	k='f_editRal2('+n+','+kl+',['+v_trtara+'],['+b[0]+','+(a[n][2][0]||0)+','+b[2]+','+(a[n][2][2]||0)+','+b[4]+','+(a[n][2][4]||0)+','+b[6]+','+(a[n][2][6]||0)+',0,0,0,0],';
	c=f_z_cht(n,kl)[2];
	cf=(n==17||n==20||n==21||n==22||n==165||n==193||n==205||n==206)?(a[n][2][0]+a[n][2][0]):0;
	if (n==33||n==37||n==71) cf=a[n][2][0];
	v_ralCF=cf; s=0; if(cf && ral1==7 && (ral2==40)) cf=0;
	if(ral1==7&&(ral2==35||ral2==40)) {} else { if(aR && ral1>0 && kl>=cf) { c+=aRalN[ral1][ral2]; col=(kl>0&&f_tr12(ral1,ral2)) ? aRal[0] : 0; col=((col/kl)>Math.round(col/kl))?(Math.round(col/kl)+1):Math.round(col/kl); if(kl>=600)col=5; c+=col; } }
	for (i=0; i<7; i+=2) {
	  if(a[n][2][i]) {
		if (n==27 && ral1>0 && aRalN[ral1][ral2]>0) c+=25; /* для 1.4.3. +25 */
		nc=b[i]*a[n][2][i]*a[n][2][i+1]; j=b[i]*a[n][2][i]*c+nc;
		t+='<tr'+(b[i]==0?' style="color:#808080"':'')+'><td style="padding-left:5px;text-align:left"><span style="font:bold 13px arial">'+b[i]+'</span> по '+a[n][2][i]+((n==105||n==106||n==227)?'л':'кг')+'</td>';
		t+='<td><div class="f_l" onclick="'+k+'(parseFloat($.id(\'id_inptara'+i+'\').value,10)||0),'+i+',2)"></div>';
		t+='<input type="text" id="id_inptara'+i+'" style="width:60px; height:15px; text-align:right;" maxlength="8" onfocus="if(this.value==\'нет\')this.value=\'\'" onblur="if(this.value==\'\')this.value=\'нет\'" onchange="'+k+'(parseFloat(this.value,10)||0),'+i+',0)" value="'+(b[i]==0?'нет':(b[i]*a[n][2][i]).toFixed(2))+'"/>';
		t+='<div class="f_r"'+((kl>=99620)?'':(' onclick="'+k+'(parseFloat($.id(\'id_inptara'+i+'\').value,10)||0),'+i+',1)"'))+'></div></td>';
		t+='<td style="padding-right:5px;text-align:right;'+((i==bs&&1==2)?'border:solid 2px #808080;':'')+'">'+(j?f_ts((c+a[n][2][i+1]).toFixed(2)):'')+'</td><td style="padding-right:5px;text-align:right">'+(j?f_ts(j.toFixed(2)):'')+'</td></tr>'; s+=j;
	  }
	} s=s||0;
	t+='<tr><td style="padding-left:5px;text-align:left;font:bold 13px arial">Итого:</td><td style="padding-right:5px;text-align:right;font:bold 13px arial;">'+f_ts(kl.toFixed(2))+'</td><td colspan="2" style="padding-right:5px;text-align:right;font:bold 13px arial;">'+f_ts(s.toFixed(2)||0)+'</td></tr>';
	t+='</tbody></table>';
	if (aR) { aRalSel=[n,ral1,ral2,''];
	  cf2=((n==17||n==20||n==21||n==22||n==165||n==193||n==205||n==206) && kl<(a[n][2][0]+a[n][2][0]))?0:1;
	  if (n==33||n==37||n==71) cf2=(kl<a[n][2][0])?0:1;
	  t+=v_px15+'<div style="margin:0 30px 0 70px; width:280px;"><div class="fleft mt2 fwb">Цвет:</div><div class="fright mt2" style="width:130px">(RAL '+(cf2?((ral1*1000+ral2)||'7040'):'7040')+((ral1==7&&ral2==40||ral1==0)?' базовый':'')+')</div>';
	  if (!cf2) { t+='<div class="fright" style="width:21px">&nbsp;</div>'; }
	  else { t+='<div class="ordDtdC fright" title="Сбросить по-умолчанию" onclick="f_ral_clr('+n+');'+k+'(parseFloat($.id(\'IDiadd\').value,10)||0),0,3);"><div class="ordD"></div></div>'; }
	  t+='<div class="dralc" style="background:#'; if (!f_tr12(ral1,ral2)) { t+=aRalC[7][40]; } else { t+=aRalC[ral1][ral2]; }
	  aRalSel[3]=k+'(parseFloat($.id(\'IDiadd\').value,10)||0),0,3)';
	  t+=';float:right;margin:0;width:80px;height:20px;" ';
	  if (cf2) { t+='onclick="f_ral('+n+','+ral1+','+ral2+','+kl+')" title="Выбрать цвет"'; }
	  t+='></div>'+v_px0+'<div class="fright fs11 tal" style="width:233px;">'+(cf2?'(выбрать цвет)':'&nbsp;')+'</div>';
	  t+='</div>'+v_px5;
	} else { t+=v_px20; }
	if (aR) {
	  f=0; p=0; for (j=1; j<l; j+=1) { if(n==r[j][0]) f+=1; }  tt+=(f>0)?('<div class="fleft fs11 fwb" style="margin:-2px 0 0 5px">Заказанные цвета:</div>'+v_px3):'';
	  ff=(f>0 && f<6 && kl==v_ralOldK && v_ralOldR1==ral1 && v_ralOldR2==ral2)?1:0;
	  for (j=1; j<l; j+=1) {
		if(n==r[j][0]) {
		  r1=r[j][5]; r2=r[j][6]; p=(r[j][4]==v_changeRal)?1:0;
		  tt+='<div class="fleft" id="id_bral_'+r[j][4]+'" style="margin:0 0 5px 5px;font-weight:bold;'+(p?'border:solid 2px #000000':'border:solid 2px transparent')+';"><div class="pb_buttons" style="display:inline-block;margin:0;width:55px;font-weight:normal;color:#ffffff;text-shadow:#000000 1px 1px 1px;background:#'+(((p&&kl<cf) || !f_tr12(r1,r2))?aRalC[7][40]:aRalC[r1][r2])+'"'+(ff?(' onclick="f_changeRal('+n+','+kl+','+r[j][4]+')"'):'')+'>'+v_px5+(r1*1000+r2)+'</div><br>'+(r[j][1])+'кг</div>';
		}
	  }
	  if (ff && f<5) { tt+='<div class="cd_ral_plus" title="Добавить с другим цветом..." onclick="f_changeRal('+n+','+kl+',0)">+</div>'; }
	  tt+=v_px0b+v_px5;
	  $.id('dordTC').innerHTML=(f>0)?tt:'';
	} if (!f_tr12(ral1,ral2) || kl<cf) { ral1=ral2=0; if(aR){ral1=7;ral2=40;} }
	v_zlist_=[n,kl,[b[0],a[n][2][0]||0, b[2],a[n][2][2]||0, b[4],a[n][2][4]||0, b[6],a[n][2][6]||0, b[8],a[n][2][8]||0, 0,0],s,v_changeRal,ral1||0,ral2||0];
	if (aR) {
		if (n==17||n==20||n==21||n==22||n==165||n==193||n==205||n==206) { t+=v_px0+'<p class="fwb mt0 fs11 tac c1">Минимальная партия для колеровки от '+(a[n][2][0]*2)+'кг</p>'+v_px7; }
		if (n==33||n==37||n==71) { t+=v_px0+'<p class="fwb mt0 fs11 tac c1">Минимальная партия для колеровки от '+a[n][2][0]+'кг</p>'+v_px7; }
	}
	t+=v_px5+'<input type="button" class="pb_buttons" id="idBT_ACD" style="font-weight:bold;width:150px;" value="'+((kl==0 && v_ralOldK>0)?'Удалить из заказа':((kl==0 && v_ralOldK==0)?'Добавить в заказ':((v_ralOldK>0)?'Изменить в заказе':'Добавить в заказ')))+'" onclick="f_addRal(' + n + "," + kl + ')"/></div>';
	$.id('IDiaddTbl').innerHTML=t; val=kl.toFixed(2)||'0.00'; if (val=='0.00') val=''; $.id('IDiadd').value=val; $.id('IDiadd').focus();
}
function f_ral(n,ral1,ral2,kl) {
var t,i,j,l,w,f=1,c=[],r=v_zlist_; if (!n) return; w=$.gCW()||401; console.log(w); if(w<351)w=300; if(w>300&&w<400)w=320; if(w>400)w=350;
	c[1]=['EAF044','AF8A54'];
	c[2]=['FA842B','C63927'];
	c[3]=['CB3334','701F29'];
	c[4]=['83639D','992572'];
	c[5]=['6A93B0','2B2C7C'];
	c[6]=['008F39','26392F'];
	c[7]=['BDBDB2','373F43'];
	c[8]=['A65E2F','4E3B2B'];
	c[9]=['EFEBDC','0A0A0D'];
	t='<div class="mt-10"><span>Внимание! Для выбора цвета<br>используйте оригинальную таблицу RAL</span>.<br>Цвета на экране могут отличаться от действительных<br>из-за настроек Вашего монитора.</div>';
	if (kl<v_ralCF && (n==17||n==20||n==21||n==22||n==165||n==193||n==205||n==206)) { f=0; t+='<p class="fwb fs13 tac c1">Минимальная партия для колеровки от '+(r[2][1]*2)+'кг</p>'+v_px5;  }
	if (kl<v_ralCF && (n==33||n==37||n==71)) { f=0; t+='<p class="fwb fs13 tac c1">Минимальная партия для колеровки от '+r[2][1]+'кг</p>'+v_px5;  }
	t+=v_px5b+v_px7;
	for (i=1; i<=9; i+=1) {
		t+='<div class="fleft" id="id_bral'+i+'" style="margin:0 0 5px '+(w==300?'3':'5')+'px;'+(i==ral1?'border:solid 2px #000000':'border:solid 2px transparent')+(w==350?'':';font-size:12px')+';"><input type="button" class="pb_buttons" style="margin:0;width:'+(w==350?'55px':(w==300?'47px':'50px'))+';font-weight:bold;background:linear-gradient(to right,#'+c[i][0]+',#'+c[i][1]+');" value="" onclick="f_ral_sGr('+i+')"/><br>RAL '+i+'xxx</div>';
	}t+=v_px3b+v_px10; t+='<div style="height:190px">';
	for (i=1; i<=9; i+=1) {
	  l=aRalC[i].length; t+='<div id="id_dral'+i+'" style="display:'+((ral1==i)?'block':'none')+'">';
	  for (j=0;j<l;j+=1) if(aRalC[i][j]) {
		t+='<div class="dralc" style="'+(w==350?'width:57px;':'padding:10px 0 0 0;width:52px;height:15px;')+((i==ral1&&j==ral2)?'border:solid 2px #000000;':'border:solid 2px transparent;')+'background:#'+aRalC[i][j]+'" ';
		if (f || (i==7&&(j==40))) {
		  t+='onclick="$.id(\'divAtopB\').style.display=\'block\';$.id(\'divAtopC\').style.display=\'block\';$.id(\'divAtopC\').style.background=\'#'+aRalC[i][j]+'\';';
		  t+='$.id(\'divAtopS\').innerHTML=\'RAL '+(i*1000+j)+'</div>\';f_ral_sCl('+n+','+i+','+j+')"';
		} t+='>'+(w==350?'&nbsp;<br>':'')+(i*1000+j)+'</div>';
	  } t+='</div>';
	} t+='</div>'+v_px10;
	t+='<div id="divAtopC" style="position:absolute; display:none; top:0px; height:390px; left:0; right:0; text-align:center;"><div class="px0" style="height:340px"></div>';
	t+='<span id="divAtopS" style="font-size:30px; color:#3F3A32; letter-spacing:3px; text-shadow:#ffffff 1px 1px 5px;"></span>';
	t+='<div id="divAtopH" class="pb_hidden">'+'</div></div>';
	t+='<div id="divAtopB" style="position:absolute; display:none; bottom:0; height:50px; left:0; right:0; background:#f8f8f8">'+v_px10;
	t+='<input type="button" class="pb_buttons" id="idMsgRalOK" value="Выбрать" style="width:80px;height:30px;"/>';
	t+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="pb_buttons" value="Отменить" style="width:80px;height:30px;" onclick="$.id(\'divAtopC\').style.display=\'none\';$.id(\'divAtopB\').style.display=\'none\'"/>';
	t+='</div>';
	f_message('<div class="pb_ah0">Выберите цвет (текущий: RAL '+(ral1==0?'Базовый':(ral1*1000+ral2))+')</div>',t,350,460);
}
function f_ral_sGr(n) {	var i,p; for(i=1;i<=9;i+=1) { if ($.id('id_dral'+i)) $.id('id_dral'+i).style.display=(n==i)?'block':"none"; if($.id('id_bral'+i)) $.id('id_bral'+i).style.borderColor=(n==i)?'#000000':"transparent"; } }
function f_ral_sCl(n,i,j) { $.id('idMsgRalOK').onclick=Function('e','f_ral_sel('+n+','+i+','+j+');'+aRalSel[3]); }
function f_ral_sel(n,i,j) { n=n||0; i=i||0; j=j||0; if(!n || n!=aRalSel[0] || !i) return; $.wDelete(1,1); if(!f_tr12(i,j)){i=0;j=0;} aRalSel[1]=v_zlist_[5]=i; aRalSel[2]=v_zlist_[6]=j; }
function f_ral_clr(n) { n=n||0; aRalSel[1]=v_zlist_[5]=aRalSel[2]=v_zlist_[6]=0; }

/* Возврат цены от кол-ва - Для ЗАКАЗА Материалов через корзину с тарой */
function f_z_cht(n, kl) {
  var i,r=v_zlistr,l=r.length,k=0,m=3,f=0; n=n||0; kl=kl||0;
  for (i=1; i<l; i+=1) { if(n==r[i][0]) { f+=1; k+=(r[i][4]==v_changeRal)?kl:r[i][1]; } else k+=r[i][1]; } if (l==1||v_changeRal>f) k+=kl;
  if (k >= 40 && k < 200) m = 4;
  if (k >= 200 && k < 500) m = 5;
  if (k >= 500 && k < 1000) m = 6;
  if (k >= 1000 && k < 3000) m = 7;
  if (k >= 3000) m = 8; p=0;
  return [m,k,v_mtrt[n][m]];
}
/* *********************************************************************************** */
/* ФОТОГАЛЕРЕЯ */
function photoGal(e) {
  var i, j, k, ps, pi, pimg, wimg,himg, ws,hs, wi,hi, pg=$.qSA('.pb_gal'), l=pg.length||0;
 if (l>0) {
  for (i=0; i<l; i+=1) {
    if (pg[i]) {
      ws=0; ps=$.qS('.pb_gal_scroll',pg[i])||0; hs=ps?(parseInt($.gStyle(ps,'height'),10)||0):0; pi=ps?($.qSA('.pb_gal_item',ps)||0):0; pimg=ps?($.qSA('.pb_gal_item img',ps)||0):0;
      if(!ps||!hs||!pi||!pimg) { f_mesErr('Ошибка HTML галереи','Ошибка HTML галереи<br>'+(ps?'':'.pb_gal_scroll ')+(pi?'':'.pb_gal_item ')+(pimg?'':'images ')+' not found',300,120); return false; }
      k=pi.length; if (k!=pimg.length) { f_mesErr('Ошибка HTML галереи','Ошибка HTML галереи<br>Количество изображений не равно количеству .pb_gal_item',300,120); return false; }
      wi=new Array(k); hi=new Array(k); wimg=new Array(k); himg=new Array(k);
      for (j=0; j<k; j+=1) {
          if(j==k-1)pi[j].style.paddingRight=0;
          wi[j]=pi[j].offsetWidth||0; hi[j]=pi[j].offsetHeight||0; wimg[j]=$.qS('img',pi[j]).width; himg[j]=$.qS('img',pi[j]).height; ws+=wi[j];
      }
      ps.style.width=(ws+1)+'px';
      a_gal[i]=[0,pg[i],ps,0,0,ws,hs,wi,hi,0,0,0,0,wimg,himg,0,0,-1,0];
      $.EH.add($.qS('.pb_gal_left',pg[i]),'click',photoGal_scroll,false); $.EH.add($.qS('.pb_gal_right',pg[i]),'click',photoGal_scroll,false); $.EH.add(pg[i],'mouseout',photoGal_scroll,false);
      $.EH.add(ps,'mousedown',photoGal_scroll,false); $.EH.add(ps,'mouseup',photoGal_scroll,false); $.EH.add(ps,'mousemove',photoGal_scroll,false);
      if ($.isTOUCH()) { $.EH.add(ps,'touchstart',photoGal_scroll,false); $.EH.add(ps,'touchend',photoGal_scroll,false); $.EH.add(ps,'touchmove',photoGal_scroll,false); }
      $.EH.add(ps,'click',photoGal_full); $.EH.add($.W,'resize', function(e){if($.qS('.pb_fgal')) {setTimeout(function(e){photoGal_full(e,1);},200)}});
      /* a_gal[item]:
      0 - текущий скролл в пикселях; 1 - ссылка на галерею (.pb_gal); 2 - ссылка на DIV скролл .pb_gal_scroll; 3 - резерв;
      4 - X в пикселях при mousedown/touchstart; 5 - width of scroll DIV, 6 - height of scroll DIV; 7 - array of width of DIV(>image), 8 - array of height of DIV(>image);
      9 - mousedown/touchstart, 10 - mousemove/touchmove; 11 и 12 - резерв; 13 - width images, 14 - height images (k - количество картинок);
      15 - ссылка на DIV layer (слой для full-режима), 16 - ссылка на DIV .pb_fgal; 17 - индекс текущего img для full-режима, 18 - desc animation pb_gal_scroll */
    }
  }
  for (i=0; i<l; i+=1) { photoGal_lr(i); }
 } else {
    pi=$.qSA('.pb_gal_itm'); l=pi.length||0; if (l<1) return false;
	a_fgalItems = new Array(l); pg='';
	for (i=0; i<l; i+=1) {
      k=''+pi[i].onclick; j=k.indexOf('$.zoomImg(this'); k=k.substr(j); k=k.substr(16); j=k.indexOf("'"); ws=k; k=k.substr(0,j); pg+='<img id="id_fgal_ism_'+i+'" src="'+k+'" alt=""/>';
	  ws=ws.substr(j+1); j=ws.indexOf("'"); ws=ws.substr(j+1); j=ws.indexOf("'"); ws=ws.substr(0,j);
	  a_fgalItems[i]=['id_fgal_ism_'+i,k,0,0,ws]; /* 0: id; 1: src; 2: width; 3: height; 4: text-head */
	  pi[i].id='id_gal_ism_'+i; pi[i].onclick=undefined; $.EH.add(pi[i],'click',photoGal_full);
	} ps=$.D.createElement('div'); ps.style.display='none'; ps.innerHTML=pg; $.B.appendChild(ps);
    a_gal[0]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0]; a_galItems=[-1,0,0,0]; v_galItem=-1;
	$.EH.add($.W,'resize', function(e){if($.qS('.pb_fgal')) {setTimeout(function(e){photoGal_full(e,1);},200)}});
 }
}
function photoGal_scroll(e) {
  var i,t,p,g,s=0,wg=0,ws=0,f=1,k=-1,ls,rs,n=null,a=a_gal;
  e=e||window.event; i=photoGal_gItem(e); k=i[0]; t=i[1]; p=i[2]; g=i[3]; if (!g) return;
  s=0-a[k][0]; /* k - индекс активной галереи; s - Величина скролла в активной галерее; */
  ws=$.qS('.pb_gal_scroll',g).offsetWidth; wg=g.offsetWidth;
  ls = s<=wg ? s : wg-50; rs = ((ws-wg-s)>=wg) ? wg-50 : (ws-wg-s);
  if (e.type=='click') {
      f=0; // $._(24)(e);
      if (t.className=='pb_gal_left') {
        $.aClear(a[k][18]); a[k][18]=$.animate(a[k][2],200,20,[0-s,n,n,n],[0-(s-ls),n,n,n]); a[k][0]=0-(s-ls);
      }
      if (t.className=='pb_gal_right') {
        $.aClear(a[k][18]); a[k][18]=$.animate(a[k][2],200,20,[0-s,n,n,n],[0-(s+rs),n,n,n]); a[k][0]=0-(s+rs);
      }
  }
  if (f) {
    if ((e.type=='touchstart'&&e.targetTouches.length==1) || e.type=='mousedown') {
      a[k][4]=$.gMX(); a[k][9]=1; a[k][10]=0; if (e.type=='mousedown') $._(24)(e);
    }
    if ((e.type=='touchend'&&e.targetTouches.length==1) || e.type=='mouseup') {
      a[k][4]=a[k][9]=0; // $._(24)(e);
    }
    if ((e.type=='touchmove'&&e.targetTouches.length==1) || e.type=='mousemove') {
      if (a[k][4]!=0) {
        l=$.gMX()-a[k][4]; if(l!=0) {
          a[k][4]+=l; a[k][0]+=l; if (a[k][0]>0) a[k][0]=0; if (a[k][0]<wg-ws) a[k][0]=wg-ws;
          a[k][2].style.left=a[k][0]+'px'; a[k][10]+=l<0?(0-l):l;
          if (e.type=='touchmove') $._(24)(e);
        }
      }
    }
    if (e.type=='mouseout' || e.type=='touchout') {
      a[k][4]=a[k][9]=0; a[k][10]=99; // $._(24)(e);
    }
    photoGal_lr(k);
  }
}
/* photoGal_gItem(e) => return [k, target, target.parentNode, g]; где: k - индекс активной галереи (-1 - ошибка), g - .pb_gal  */
function photoGal_gItem(e) {
  var i,t,p,g,gs,k=-1,a=a_gal,l=a.length; if (!$.qS('.pb_gal')) return a_galItems;
  e=e||window.event; t=e.target; p=t.parentNode;
  if (t.className=='pb_gal_left' || t.className=='pb_gal_right') g=t.parentNode; /* p и g - .pg_gal */
  if (t.className=='pb_gal_item') { g=p.parentNode; } /* t - pb_gal_item; p - .pb_gal_scroll; g - .pg_gal */
  if (p.className=='pb_gal_item') { g=p.parentNode.parentNode; }  /* t - img; p - .pb_gal_item; g - .pg_gal */
  if (!g) { a_galItems=[-1,0,0,0]; return a_galItems; }
  for (i=0; i<l; i+=1) { if (g==a[i][1]) {k=i; i=l;} }
  a_galItems=[k,t,p,g]; return a_galItems;
}
/* photoGal_lr() Управление видимостью элкментов прокрутки (слева и справа) для всех галерей и Full-режима */
function photoGal_lr(n) {
  var i,j,k, a, w=0, aa=a_gal, l=aa.length; n=n||0; if (l<1) return false;
  k=$.qS('.pb_fgal'); if(k) {
     $.qS('.pb_fgal_left',k).style.display = $.qS('.pb_fgal_lft',k).style.display = (v_galItem==0)?'none':'block';
     $.qS('.pb_fgal_right',k).style.display = $.qS('.pb_fgal_rgt',k).style.display = (v_galItem==a_fgal[13].length-1)?'none':'block';
  } else {
    if(n<0||n>l-1)return false;
    for (j=0; j<l; j+=1) {
      i=(n<0)?j:n; a=aa[i]; $.qS('.pb_gal_left',a[1]).style.display=(a[0]==0)?'none':'block';
      for(k=a[7].length-1;k>=0;k-=1)w+=a[7][k]; $.qS('.pb_gal_right',a[1]).style.display=(a[0]<(0-w+a[1].offsetWidth))?'none':'block';
      if(i==n)j=l;
    }
  }
}
/* photoGal_full(e) переход в full-режим галереи (полнооконный/полноэкранный) */
function photoGal_full(e,f) {
  var i,w,h,wi,hi,t,p,g,gs,k,pi,tx='',a=a_gal,wimg,himg; f=f||0; e=e||window.event;
if ($.qS('.pb_gal')) {
  i=f?a_galItems:photoGal_gItem(e); a_galItems=i; k=i[0]; t=i[1]; p=i[2]; g=i[3]; if (!g) return;
  if (t.className=='pb_gal_item' || p.className=='pb_gal_item') {
    if(a[k][9]==0 && (a[k][10]<5||a[k][10]==99)) {
      a[k][10]=0; $.uEnv(); w=$.gCW(); h=$.gCH(); if(!f) $._(24)(e);
      pi = (t.className=='pb_gal_item') ? t : (t.parentNode.className=='pb_gal_item' ? t.parentNode : 0); if(!pi) return;
      p = $.qSA('.pb_gal_item',a[k][2]); l=p.length; a[k][17]=f?v_galItem:-1;
      for (i=0; i<l; i+=1) {
        tx+='<div class="pb_fgal_item" style="width:'+w+'px;height:'+h+'px;background-image:url(\''+$.qS('img',p[i]).src+'\')"></div>';
        if(!f && pi==p[i]) { a[k][17]=i; }
      } if(a[k][17]<0) return; v_galItem=a[k][17];
      if (f) p=a[k][16]; else { a[k][15]=$.addLayer(0,'#000000',210,'hidden',1); p=$.D.createElement('div'); p.className='pb_fgal'; p.style.zIndex=210; }
      p.innerHTML = '<div class="pb_fgal_scroll" style="width:'+(w*l)+'px;left:-'+parseInt((w*v_galItem),10)+'px;">'+tx+'</div><div class="pb_fgal_left"></div><div class="pb_fgal_right"></div><div class="pb_fgal_lft"></div><div class="pb_fgal_rgt"></div><div class="pb_fgal_close" onclick="photoGal_rest('+k+')"></div>';
      if (!f) { $.B.appendChild(p); a[k][16]=p; } gs=$.qS('.pb_fgal_scroll');
      a_fgal=[0-parseInt((w*v_galItem),10),g,gs,0,0,(w*l), 0,0,0, 0,0, 0,0, JSON.parse(JSON.stringify(a[k][13])), JSON.parse(JSON.stringify(a[k][14])), a[k][15], v_galItem, 0];
    }
  }
} else {
	  if (!f) {v_galItem=parseInt(e.target.id.substr(11),10); a[0][17]=v_galItem; }
	  l=a_fgalItems.length; wimg=new Array(l); himg=new Array(l); $.uEnv(); w=$.gCW(); h=$.gCH(); if(!f) $._(24)(e);
      for (i=0; i<l; i+=1) {
        tx+='<div class="pb_fgal_item" style="width:'+w+'px;height:'+h+'px;background-image:url(\''+a_fgalItems[i][1]+'\')"><div class="pb_fgal_text" style="padding-top:10px"><span style="font-size:15px; font-weight:normal; font-style:italic; color:#ffffff; background:rgba(0, 0, 0, 0.5);">&nbsp;'+a_fgalItems[i][4]+'&nbsp;</span></div></div>';
		a_fgalItems[i][2] = wimg[i] = $.id(a_fgalItems[i][0]).width; a_fgalItems[i][3] = himg[i] = $.id(a_fgalItems[i][0]).height;
      }
      if (f) p=a[0][16]; else { a[0][15]=$.addLayer(0,'#000000',210,'hidden',1); p=$.D.createElement('div'); p.className='pb_fgal'; p.style.zIndex=210; }
      p.innerHTML = '<div class="pb_fgal_scroll" style="width:'+(w*l)+'px;left:-'+parseInt((w*v_galItem),10)+'px;">'+tx+'</div><div class="pb_fgal_left"></div><div class="pb_fgal_right"></div><div class="pb_fgal_lft"></div><div class="pb_fgal_rgt"></div><div class="pb_fgal_close" onclick="photoGal_rest(0)"></div>';
      if (!f) { $.B.appendChild(p); a[0][16]=p; } gs=$.qS('.pb_fgal_scroll');
      a_fgal=[0-parseInt((w*v_galItem),10),0,gs,0,0,(w*l), 0,0,0, 0,0, 0,0, wimg, himg, a[0][15], v_galItem, 0];
}
   /* a_fgal - КОПИЯ a_gal[item], а не ссылка на a_gal[item] :
   0 - текущий скролл в пикселях; 1 - ссылка на галерею (.pb_gal); 2 - ссылка на DIV скролл .pb_fgal_scroll; 3 - резерв;
   4 - X в пикселях при mousedown/touchstart; 5 - width of scroll DIV pb_fgal_scroll, 6 7 8 - резерв;
   9 - mousedown/touchstart, 10 - сумма смещение при mousemove/touchmove от стартового; 11 и 12 - резерв; 13 - width images, 14 - height images;
   15 - ссылка на DIV layer (слой для full-режима), 16 - ссылка на DIV .pb_fgal; 17 - индекс текущего img для full-режима, 18 - desc animation pb_gfal_scroll */
   $.EH.add($.qS('.pb_fgal_left'),'click',photoGal_fScroll,false); $.EH.add($.qS('.pb_fgal_right'),'click',photoGal_fScroll,false);
   $.EH.add($.qS('.pb_fgal_lft'),'click',photoGal_fScroll,false); $.EH.add($.qS('.pb_fgal_rgt'),'click',photoGal_fScroll,false);
   if(!f) $.EH.add($.qS('.pb_fgal'),'mouseout',photoGal_fScroll,false);
   $.EH.add(gs,'mousedown',photoGal_fScroll,false); $.EH.add(gs,'mouseup',photoGal_fScroll,false); $.EH.add(gs,'mousemove',photoGal_fScroll,false);
   if ($.isTOUCH()) { $.EH.add(gs,'touchstart',photoGal_fScroll,false); $.EH.add(gs,'touchend',photoGal_fScroll,false); $.EH.add(gs,'touchmove',photoGal_fScroll,false); }
   photoGal_lr(-1);
}
function photoGal_rest(k) { /* 0 - возврат из full-режима, -1 - прокрутка влево, 1 - прокрутка вправо */
    k=k||0; if(k<0||!a_gal[k])return; $.removeLayer(a_gal[k][15]); a_gal[k][16].parentNode.removeChild(a_gal[k][16]);
}
function photoGal_fScroll(e) {
  var i,s,w,ws=0,k,l,a=a_fgal; e=e||window.event; ws=$.qS('.pb_fgal_scroll'); if(!ws)return false;
  w=$.gCW(); h=$.gCH(); ws=ws.offsetWidth; s=a[0]; l=a[13].length-1; k=e.target.className; /* s - Величина скролла в активной галерее; l - количество картинок */
  if (e.type=='click' && (k=='pb_fgal_left' || k=='pb_fgal_right' || k=='pb_fgal_lft' || k=='pb_fgal_rgt')) {
    if (k=='pb_fgal_left' && v_galItem>0) { v_galItem=a[17]=v_galItem-1; }
    if (k=='pb_fgal_right' && v_galItem<l) { v_galItem=a[17]=v_galItem+1; }
    if (k=='pb_fgal_lft' && v_galItem>0) { v_galItem=a[17]=0; }
    if (k=='pb_fgal_rgt' && v_galItem<l) { v_galItem=a[17]=l; }
    photoGal_fScroll_a(w,s,a);
  }
  if ((e.type=='touchstart'&&e.targetTouches.length==1) || e.type=='mousedown') {
    a[4]=$.gMX(); a[10]=0; if (e.type=='mousedown') $._(24)(e);
  }
  if ((e.type=='touchmove'&&e.targetTouches.length==1) || e.type=='mousemove') {
    if (a[4]!=0) {
      k=$.gMX()-a[4]; if(k!=0) {
        a[4]+=k; a[0]+=k; if (a[0]>0) a[0]=0; if (a[0]<w-ws) a[0]=w-ws;
        a[2].style.left=a[0]+'px'; a[10]+=k;
        if (e.type=='touchmove') $._(24)(e);
      }
    }
  }
  if (e.type=='touchend' || e.type=='mouseup' || e.type=='mouseout' || e.type=='touchout') {
    a[4]=0; if(a[10]<-99)v_galItem+=1; if(a[10]>99)v_galItem-=1; if(v_galItem<0)v_galItem=0; if(v_galItem>l)v_galItem=l; a[17]=v_galItem; a[10]=0;
    photoGal_fScroll_a(w,s,a);
  }
  photoGal_lr(-1);
}
function photoGal_fScroll_a(w,s,a) {
    var n=null; a[0]=0-parseInt((w*v_galItem),10); if(s!=a[0]) { $.aClear(a[18]); a[18]=$.animate(a[2],200,20,[s,n,n,n],[a[0],n,n,n]); }
}
