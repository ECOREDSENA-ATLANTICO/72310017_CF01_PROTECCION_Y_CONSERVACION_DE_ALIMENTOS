(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"159b":function(e,t,a){var r=a("da84"),s=a("fdbc"),o=a("17c2"),n=a("9112");for(var c in s){var i=r[c],u=i&&i.prototype;if(u&&u.forEach!==o)try{n(u,"forEach",o)}catch(d){u.forEach=o}}},"17c2":function(e,t,a){"use strict";var r=a("b727").forEach,s=a("a640"),o=s("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"2cc0":function(e,t,a){},"32bd":function(e,t,a){"use strict";a("4afc")},4298:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("div",{attrs:{id:"Actividad"}},[a("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tarjeta--blanca"},[a("div",{staticClass:"row align-items-center mb-4"},[e._m(0),a("div",{staticClass:"col "},[a("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),a("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),a("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?a("ActividadResultados",{attrs:{respuestas:e.respuestas}}):a("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),a("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-auto"},[r("img",{attrs:{src:a("8da0"),alt:""}})])}],c=a("5530"),i=(a("d81d"),a("c740"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"mb-4 pb-4",domProps:{innerHTML:e._s(e.pregunta.texto)}}),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col-5"},[a("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),a("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(t,r){return a("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":r!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(a){return e.onRespuestaSelected(t)}}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),a("div",{staticClass:"col",domProps:{innerHTML:e._s(t.texto)}})])])})),0)]),e.respuestaSelected.id?[a("hr"),e.respuestaSelected.esCorrecta?a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),u=[],d={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:function(){return{respuestaSelected:{}}},computed:{opcionesComputed:function(){if(!this.pregunta.opciones.length)return[];var e=this.respuestaSelected.id;return this.pregunta.opciones.map((function(t){return Object(c["a"])(Object(c["a"])({},t),{},{correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e})}))}},watch:{pregunta:function(){this.respuestaSelected={}}},methods:{onRespuestaSelected:function(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},l=d,p=(a("32bd"),a("2877")),m=Object(p["a"])(l,i,u,!1,null,"0d0c9f9a",null),f=m.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tarjeta-avance"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col"},[a("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[a("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),a("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),a("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?a("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[a("span",[e._v("Reiniciar")])]):a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[a("span",[e._v("Continuar")]),a("i",{staticClass:"fas fa-arrow-right"})])])])])},g=[],v=(a("a9e3"),{name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth:function(){return"".concat((this.preguntaIndex+1)/this.preguntasCount*100,"%")}}}),h=v,C=(a("a631"),Object(p["a"])(h,b,g,!1,null,"7a0121ad",null)),j=C.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row align-items-center justify-content-around"},[r("div",{staticClass:"col-5"},[(e.aprobado,r("img",{attrs:{src:a("a46c"),alt:""}}))]),r("div",{staticClass:"col-4"},[r("div",{staticClass:"d-flex align-items-center flex-column"},[r("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[r("h3",[e._v("¡BUEN TRABAJO!")]),r("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[r("h3",[e._v("VUELVE A INTENTARLO")]),r("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],r("hr",{staticClass:"w-100"}),r("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},_=[],y=(a("159b"),{name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas:function(){var e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach((function(t){t.esCorrecta?e.correctas++:e.incorrectas++})),e.porcentaje=e.correctas/e.total*100,e},aprobado:function(){return this.rtas.porcentaje>=70}}}),A=y,O=(a("aeef"),Object(p["a"])(A,x,_,!1,null,"360ec089",null)),L=O.exports,E={name:"Actividad",components:{ActividadPregunta:f,ActividadBarraAvance:j,ActividadResultados:L},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:function(){return{intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}},computed:{preguntas:function(){var e=this,t=this.cuestionario,a=t.preguntas,r=t.barajarPreguntas;if(!a)return[];var s=r?this.shuffle(a):a;return s.map((function(t){return Object(c["a"])(Object(c["a"])({},t),{},{opciones:t.barajarRespuestas?e.shuffle(t.opciones):t.opciones,intentos:e.intentos})}))},preguntaSelected:function(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle:function(e){var t,a=e.length;while(a>0){t=Math.floor(Math.random()*a),a--;var r=[e[t],e[a]];e[a]=r[0],e[t]=r[1]}return e},onRrespuestaSelected:function(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar:function(){var e=this;if(this.continuarDisabled=!0,this.respuestaActual.id){var t=this.respuestas.findIndex((function(t){return t.id===e.preguntaSelected.id}));-1===t?this.respuestas.push(this.respuestaActual):this.respuestas[t]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar:function(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},S=E,I=(a("f212"),Object(p["a"])(S,o,n,!1,null,"1f7092aa",null)),N=I.exports,R={name:"ActividadDidactica",components:{Actividad:N},data:function(){return{cuestionario:{tema:"Nombre del componente formativo",titulo:"Exploremos las BPM",introduccion:"<b> Objetivo:</b> apropiar los conceptos de las buenas prácticas de manufactura (BPM) para su respectiva aplicación",barajarPreguntas:!1,preguntas:[{id:1,texto:"Estás preparando una ensalada. Debes lavar la lechuga y cortar las verduras. ¿Qué haces con la tabla de cortar?",imagen:a("66bb"),barajarRespuestas:!0,opciones:[{id:"a",texto:"La lavas con agua y jabón después de cortar las verduras.",esCorrecta:!1},{id:"b",texto:"La limpias con un paño húmedo después de cortar las verduras.",esCorrecta:!0},{id:"c",texto:"Usas la misma tabla para cortar las verduras y la carne.",esCorrecta:!1},{id:"d",texto:"Usas una tabla diferente para cortar las verduras y la carne.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"Vas a preparar una torta y descubres que la leche se venció hace dos días. ¿Qué haces?",imagen:a("50ac"),barajarRespuestas:!0,opciones:[{id:"a",texto:"La usas de todas formas, ya que solo se venció un poco.",esCorrecta:!1},{id:"b",texto:"La hueles para ver si huele mal y si no la usas.",esCorrecta:!1},{id:"c",texto:"La dejas a temperatura ambiente para ver si mejora.",esCorrecta:!1},{id:"d",texto:"La tiras a la basura y compras leche fresca.",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"Terminaste de preparar un pollo asado y necesitas guardar las sobras. ¿Cómo lo haces?",imagen:a("7464"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Lo pones en un plato y lo tapas con papel film.",esCorrecta:!1},{id:"b",texto:"Lo pones en el refrigerador a temperatura ambiente.",esCorrecta:!1},{id:"c",texto:"Lo pones en el refrigerador a una temperatura menor a 4°C.",esCorrecta:!0},{id:"d",texto:"Lo dejas en la encimera hasta que se enfríe.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"Debes limpiar la cocina después de preparar un almuerzo. ¿Qué haces?",imagen:a("9cde"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Limpias las superficies con un paño húmedo.",esCorrecta:!1},{id:"b",texto:"Limpias las superficies con jabón y agua, luego las desinfectas.",esCorrecta:!0},{id:"c",texto:"Limpias las superficies con jabón y agua, pero no las desinfectas.",esCorrecta:!1},{id:"d",texto:"Dejas la limpieza para después, ya que no hay tiempo.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"Estás en un restaurante y ves que un mesero está preparando una ensalada con las manos sin lavar. ¿Qué haces?",imagen:a("66bb"),barajarRespuestas:!0,opciones:[{id:"a",texto:"No dices nada, porque no es tu problema.",esCorrecta:!1},{id:"b",texto:"Le comentas al mesero que debe lavarse las manos.",esCorrecta:!1},{id:"c",texto:"Le comentas al gerente del restaurante.",esCorrecta:!0},{id:"d",texto:"Te vas a otro restaurante.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Cuál de los siguientes materiales NO se recomienda para las paredes de una cocina?",imagen:a("7464"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Azulejos.",esCorrecta:!1},{id:"b",texto:"Láminas de acero inoxidable.",esCorrecta:!1},{id:"c",texto:"Madera.",esCorrecta:!0},{id:"d",texto:"Mármol.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Cuál de los siguientes elementos NO es un factor que influye en la distribución adecuada de una cocina?",imagen:a("50ac"),barajarRespuestas:!0,opciones:[{id:"a",texto:"La cantidad de trabajadores.",esCorrecta:!1},{id:"b",texto:"El tamaño de los utensilios.",esCorrecta:!0},{id:"c",texto:"El volumen de producción.",esCorrecta:!1},{id:"d",texto:"El tipo de alimentos que se procesan.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Cuál de los siguientes métodos NO es una práctica adecuada para la prevención de contaminación cruzada?",imagen:a("9cde"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Utilizar diferentes utensilios para alimentos crudos y cocidos.",esCorrecta:!1},{id:"b",texto:"Lavar las manos después de manipular alimentos crudos.",esCorrecta:!1},{id:"c",texto:"Desinfectar las superficies de trabajo después de cada uso.",esCorrecta:!1},{id:"d",texto:"Utilizar siempre el mismo cuchillo para cortar diferentes alimentos.",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"¿Cuál de las siguientes afirmaciones es CORRECTA respecto a los techos de una cocina?",imagen:a("7464"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Deben construirse con materiales absorbentes como el yeso.",esCorrecta:!1},{id:"b",texto:"La humedad condensada en los techos no representa un riesgo de contaminación.",esCorrecta:!1},{id:"c",texto:"Los techos deben estar diseñados para evitar el goteo de humedad.",esCorrecta:!0},{id:"d",texto:"Los techos deben ser de color oscuro para una mejor iluminación.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"¿Cuál de las siguientes acciones NO es una medida de control de plagas en una cocina?",imagen:a("66bb"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Sellar todas las posibles entradas de roedores e insectos.",esCorrecta:!1},{id:"b",texto:"Inspeccionar regularmente las instalaciones en busca de plagas.",esCorrecta:!1},{id:"c",texto:"Utilizar productos químicos de fumigación sin control.",esCorrecta:!0},{id:"d",texto:"Mantener la limpieza y el orden en la cocina.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Felicidades! ¡Has demostrado un buen conocimiento sobre las Buenas Prácticas de Manufactura! Sigue practicando para asegurar la inocuidad de los alimentos.  ",mensaje_final_reprobado:"¡Buen trabajo! ¡Sigue aprendiendo sobre las Buenas Prácticas de Manufactura para mejorar tus conocimientos en seguridad alimentaria "}}},computed:{},methods:{}},w=R,M=Object(p["a"])(w,r,s,!1,null,null,null);t["default"]=M.exports},"4afc":function(e,t,a){},"50ac":function(e,t,a){e.exports=a.p+"img/img_2.7ce7cb7d.png"},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4");function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},5585:function(e,t,a){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var r=a("1d80"),s=a("5899"),o="["+s+"]",n=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),i=function(e){return function(t){var a=String(r(t));return 1&e&&(a=a.replace(n,"")),2&e&&(a=a.replace(c,"")),a}};e.exports={start:i(1),end:i(2),trim:i(3)}},"66bb":function(e,t,a){e.exports=a.p+"img/img_1.b09e882c.png"},7156:function(e,t,a){var r=a("861d"),s=a("d2bb");e.exports=function(e,t,a){var o,n;return s&&"function"==typeof(o=t.constructor)&&o!==a&&r(n=o.prototype)&&n!==a.prototype&&s(e,n),e}},7464:function(e,t,a){e.exports=a.p+"img/img_3.ea2bacbc.png"},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},"9cde":function(e,t,a){e.exports=a.p+"img/img_4.10273e2c.png"},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},a631:function(e,t,a){"use strict";a("d228")},a640:function(e,t,a){"use strict";var r=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){throw 1},1)}))}},a9e3:function(e,t,a){"use strict";var r=a("83ab"),s=a("da84"),o=a("94ca"),n=a("6eeb"),c=a("5135"),i=a("c6b6"),u=a("7156"),d=a("c04e"),l=a("d039"),p=a("7c73"),m=a("241c").f,f=a("06cf").f,b=a("9bf2").f,g=a("58a8").trim,v="Number",h=s[v],C=h.prototype,j=i(p(C))==v,x=function(e){var t,a,r,s,o,n,c,i,u=d(e,!1);if("string"==typeof u&&u.length>2)if(u=g(u),t=u.charCodeAt(0),43===t||45===t){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+u}for(o=u.slice(2),n=o.length,c=0;c<n;c++)if(i=o.charCodeAt(c),i<48||i>s)return NaN;return parseInt(o,r)}return+u};if(o(v,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var _,y=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof y&&(j?l((function(){C.valueOf.call(a)})):i(a)!=v)?u(new h(x(t)),a,y):x(t)},A=r?m(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;A.length>O;O++)c(h,_=A[O])&&!c(y,_)&&b(y,_,f(h,_));y.prototype=C,C.constructor=y,n(s,v,y)}},aeef:function(e,t,a){"use strict";a("5585")},b64b:function(e,t,a){var r=a("23e7"),s=a("7b0b"),o=a("df75"),n=a("d039"),c=n((function(){o(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(e){return o(s(e))}})},c740:function(e,t,a){"use strict";var r=a("23e7"),s=a("b727").findIndex,o=a("44d2"),n="findIndex",c=!0;n in[]&&Array(1)[n]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{findIndex:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),o(n)},d228:function(e,t,a){},d81d:function(e,t,a){"use strict";var r=a("23e7"),s=a("b727").map,o=a("1dde"),n=o("map");r({target:"Array",proto:!0,forced:!n},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(e,t,a){var r=a("23e7"),s=a("83ab"),o=a("56ef"),n=a("fc6a"),c=a("06cf"),i=a("8418");r({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(e){var t,a,r=n(e),s=c.f,u=o(r),d={},l=0;while(u.length>l)a=s(r,t=u[l++]),void 0!==a&&i(d,t,a);return d}})},e439:function(e,t,a){var r=a("23e7"),s=a("d039"),o=a("fc6a"),n=a("06cf").f,c=a("83ab"),i=s((function(){n(1)})),u=!c||i;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(e,t){return n(o(e),t)}})},f212:function(e,t,a){"use strict";a("2cc0")}}]);
//# sourceMappingURL=actividad.6edac3f7.js.map