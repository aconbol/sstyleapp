(self.webpackChunksstyleapp=self.webpackChunksstyleapp||[]).push([[72],{72:(o,t,e)=>{"use strict";e.r(t),e.d(t,{Tab1PageModule:()=>m});var i=e(8809),n=e(1116),r=e(1462),a=e(7321),l=e(9185),c=e(5614),s=e(2590),g=e(6374),d=e(4519),u=e(7271);const Z=[{path:"",component:(()=>{class o{constructor(o,t,e,i,n){this.authService=o,this.router=t,this.restSstyle=e,this.dataServ=i,this.loader=n,this.imgBase64=null,this.imgResult64=null,this.imgAlign64=null,this.dataFoto={cliente:null,username:null,archivo:null,timestamp:null}}transferirFoto(){this.imgBase64=this.dataServ.getFotoOriginal(),this.imgBase64&&(this.dataFoto=this.dataServ.getDatosFoto())}logout(){this.authService.logout().then(()=>{console.log("Saliendo LOGOUT..."),this.router.navigate(["login"])})}verEstado(){this.restSstyle.verEstado().then(o=>{o.forEach(o=>{console.log("Devolucion: ",o),"cuda"===o.modo?alert("El servicio esta funcionando correctamente..."):alert("Error en el servicio, llame a su Cont\xe1cto T\xe9cnico...")}).catch(o=>{console.log("error en el servicio RES: ",o),alert("Error en el servicio, llame a su Cont\xe1cto T\xe9cnico...")})}).catch(o=>{console.log("error en el servicio: ",o),alert("Error en el servicio, llame a su Cont\xe1cto T\xe9cnico...")})}subirFoto(){console.log("Subir foto"),this.router.navigate(["gallery"])}setup(){console.log("Alinear Imagen... "),this.loader.showLoader(),this.restSstyle.setup({datosFoto:this.dataFoto,imgBase64:this.imgBase64}).then(o=>{o.forEach(o=>{console.log("SETUP - TAB1 - Respuesta de servicios/setup",o),this.imgResult64="data:image/jpeg;base64,"+o.result_image,this.loader.hideLoader()}).catch(o=>{this.loader.hideLoader(),console.log("error en el servicio SETUP: ",o),alert("La im\xe1gen no es compatible o verifique el servicio")})}).catch(o=>{this.loader.hideLoader(),console.log("error en el servicio (REST) SETUP: ",o),alert("Error en el servicio, llame a su Cont\xe1cto T\xe9cnico...")})}tabsWillEnter(){}tabsDidEnter(){console.log("Tabs1 tabsDidEnter..."),this.transferirFoto()}tabsWillLeave(){}tabsDidLeave(){}}return o.\u0275fac=function(t){return new(t||o)(c.Y36(s.e),c.Y36(l.F0),c.Y36(g.p),c.Y36(d.D),c.Y36(u.D))},o.\u0275cmp=c.Xpm({type:o,selectors:[["app-tab1"]],decls:66,vars:6,consts:[[3,"translucent"],["color","primary"],["fullscreen",""],["fixed",""],["size","4"],[1,"title-block"],["fixed","",1,"recuadro"],["size","2"],["color","secondary"],["size","10"],["outline","","color","secondary",3,"click"],["name","duplicate-outline"],[1,"label-bold"],["name","settings-outline"],["size","8"],[1,"label-title"],[1,"imgcenter"],[3,"src"],[1,"fontcolor"],[1,"fontcolortitle"],["horizontal","end","vertical","top","edge","","slot","fixed"],["color","tertiary"],["side","bottom"],["color","light",3,"click"],["name","exit"],["name","stats-chart"],["color","light"],["name","logo-vimeo"]],template:function(o,t){1&o&&(c.TgZ(0,"ion-header",0),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-title",1),c._uU(3," Configuraci\xf3n Inicial "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(4,"ion-content",2),c.TgZ(5,"div"),c.TgZ(6,"ion-grid",3),c.TgZ(7,"ion-row"),c.TgZ(8,"ion-col",4),c.TgZ(9,"ion-list-header"),c._uU(10,"Controles"),c.qZA(),c._UZ(11,"hr"),c._UZ(12,"br"),c.TgZ(13,"ion-label",5),c._uU(14,"Inicializaci\xf3n:"),c.qZA(),c.TgZ(15,"div"),c.TgZ(16,"ion-grid",6),c.TgZ(17,"ion-row"),c.TgZ(18,"ion-col",7),c.TgZ(19,"ion-label",8),c._uU(20,"1. "),c.qZA(),c.qZA(),c.TgZ(21,"ion-col",9),c.TgZ(22,"ion-chip",10),c.NdJ("click",function(){return t.subirFoto()}),c._UZ(23,"ion-icon",11),c.TgZ(24,"ion-label",12),c._uU(25,"Elegir Foto"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(26,"ion-row"),c.TgZ(27,"ion-col",7),c.TgZ(28,"ion-label",8),c._uU(29,"2. "),c.qZA(),c.qZA(),c.TgZ(30,"ion-col",9),c.TgZ(31,"ion-chip",10),c.NdJ("click",function(){return t.setup()}),c._UZ(32,"ion-icon",13),c.TgZ(33,"ion-label",12),c._uU(34,"Alinear Im\xe1gen"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(35,"ion-col",14),c.TgZ(36,"ion-label",15),c._uU(37,"1. Fotograf\xeda Elegida"),c.qZA(),c.TgZ(38,"ion-card"),c.TgZ(39,"div",16),c._UZ(40,"img",17),c.qZA(),c.TgZ(41,"ion-card-header"),c.TgZ(42,"ion-card-subtitle",18),c._uU(43),c.qZA(),c.TgZ(44,"ion-card-title",19),c._uU(45),c.qZA(),c.qZA(),c.TgZ(46,"ion-card-content",18),c._uU(47),c.qZA(),c.qZA(),c.TgZ(48,"ion-label",15),c._uU(49,"2. Fotograf\xeda Alineada"),c.qZA(),c.TgZ(50,"ion-card"),c.TgZ(51,"div",16),c._UZ(52,"img",17),c.qZA(),c.TgZ(53,"ion-card-header"),c.TgZ(54,"ion-card-title",19),c._uU(55," Im\xe1gen Inicial "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(56,"ion-fab",20),c.TgZ(57,"ion-fab-button",21),c._UZ(58,"ion-icon",13),c.qZA(),c.TgZ(59,"ion-fab-list",22),c.TgZ(60,"ion-fab-button",23),c.NdJ("click",function(){return t.logout()}),c._UZ(61,"ion-icon",24),c.qZA(),c.TgZ(62,"ion-fab-button",23),c.NdJ("click",function(){return t.verEstado()}),c._UZ(63,"ion-icon",25),c.qZA(),c.TgZ(64,"ion-fab-button",26),c._UZ(65,"ion-icon",27),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&o&&(c.Q6J("translucent",!0),c.xp6(40),c.Q6J("src",t.imgBase64,c.LSH),c.xp6(3),c.hij(" Archivo: ",t.dataFoto.archivo," "),c.xp6(2),c.hij(" Cliente: ",t.dataFoto.cliente," "),c.xp6(2),c.hij(" Creado: ",t.dataFoto.timestamp," "),c.xp6(5),c.Q6J("src",t.imgResult64,c.LSH))},directives:[i.Gu,i.sr,i.wd,i.W2,i.jY,i.Nd,i.wI,i.yh,i.Q$,i.hM,i.gu,i.PM,i.Zi,i.tO,i.gZ,i.FN,i.IJ,i.W4,i.zq],styles:["ion-fab[_ngcontent-%COMP%]{margin-top:5px;margin-right:5px}ion-card[_ngcontent-%COMP%]{margin-top:0;background-color:var(--ion-color-primary-shade)}ion-list-header[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-chip[_ngcontent-%COMP%]{margin-bottom:12px;border:1px solid}.label-bold[_ngcontent-%COMP%]{font-weight:500}.imgcenter[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:0;padding-left:3px;padding-right:3px}.imgcenter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:3px;width:100%;border-radius:10px}hr[_ngcontent-%COMP%]{background-color:var(--ion-color-tertiary);height:3px;margin-top:0;margin-bottom:10px}.title-block[_ngcontent-%COMP%]{color:var(--ion-color-secondary-shade);font-size:large;font-weight:500}.label-title[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);font-size:larger;margin-left:15px;margin-top:10px}.recuadro[_ngcontent-%COMP%]{margin-top:0;margin-bottom:40px;border-radius:5%;padding:5% 0 0 5%;border:2px solid;border-color:var(--ion-color-tertiary)}.recuadro[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0 0 15px}.recuadro[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:10px}.recuadro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);font-size:small}.fontcolor[_ngcontent-%COMP%]{color:var(--ion-color-tertiary-tint);font-weight:700;font-size:medium}.fontcolortitle[_ngcontent-%COMP%]{color:#d7d8da}"]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[[l.Bz.forChild(Z)],l.Bz]}),o})(),m=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[[i.Pc,n.ez,r.u5,a.e,h]]}),o})()}}]);