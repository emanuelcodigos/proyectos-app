(this["webpackJsonpadministrador-proyectos"]=this["webpackJsonpadministrador-proyectos"]||[]).push([[0],{23:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(18),o=a.n(c),s=(a(23),a(9)),i=a(4),u=a(3),l=a.n(u),d=a(5),p=a(6),b=a(8),j=a.n(b),O=Object(r.createContext)(),m=a(12),h=a(2),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),a=Object(p.a)(t,2),n=a[0],c=a[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(h.a)(Object(h.a)({},n),{},Object(m.a)({},t.name,t.value)))};return[n,s,o,c]},f=(a(35),a(0)),v=function(){return Object(f.jsxs)("div",{className:"spinner",children:[Object(f.jsx)("div",{className:"bounce1"}),Object(f.jsx)("div",{className:"bounce2"}),Object(f.jsx)("div",{className:"bounce3"})]})},x=function(){var e=Object(i.g)(),t=Object(r.useContext)(O),a=t.loading,n=t.alerta,c=t.autenticado,o=t.mostrarAlerta,u=t.selLoading,b=t.startLoginUsuario,m=t.resetearAlertAuth,h=y({email:"ema@gmail.com",password:"123456789"}),x=Object(p.a)(h,2),_=x[0],S=x[1],T=_.email,E=_.password,g=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==T.trim()&&""!==E.trim()){e.next=3;break}return e.abrupt("return",o("Todos los campos son obligatorios","error"));case 3:return u(),e.next=6,b({email:T,password:E});case 6:u();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){null!==n&&(j.a.fire(n.categoria.toUpperCase(),n.msg,n.categoria),m())}),[n]),Object(r.useEffect)((function(){c&&e("/proyectos")}),[c,e]),Object(f.jsx)("div",{className:"form-usuario",children:Object(f.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(f.jsx)("h1",{children:"Inicia Sesion"}),Object(f.jsxs)("form",{onSubmit:g,children:[Object(f.jsxs)("div",{className:"campo-form",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{type:"email",value:T,id:"email",name:"email",placeholder:"Tu email",onChange:S})]}),Object(f.jsxs)("div",{className:"campo-form",children:[Object(f.jsx)("label",{htmlFor:"pass",children:"Contrase\xf1a"}),Object(f.jsx)("input",{type:"password",value:E,id:"pass",name:"password",placeholder:"Tu contrase\xf1a",onChange:S})]}),a?Object(f.jsx)(v,{}):Object(f.jsx)("div",{className:"campo-form",children:Object(f.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Iniciar sesion"})})]}),Object(f.jsxs)(s.b,{to:"/registro",className:"enlace-cuenta",children:["No tenes cuenta? ",Object(f.jsx)("span",{children:"Registrate aqui"})]})]})})},_=function(e){var t=Object(i.g)(),a=Object(r.useContext)(O),n=a.loading,c=a.alerta,o=a.autenticado,u=a.mostrarAlerta,b=a.selLoading,m=a.startRegistraUsuario,h=a.resetearAlertAuth,x=y({email:"ema@gmail.com",password:"123456789",password2:"",nombre:""}),_=Object(p.a)(x,2),S=_[0],T=_[1],E=S.email,g=S.password,C=S.password2,A=S.nombre,k=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==A.trim()&&""!==E.trim()&&""!==g.trim()&&""!==C.trim()){e.next=3;break}return e.abrupt("return",u("Todos los campos son obligatorios","error"));case 3:if(!(g.length<6)){e.next=5;break}return e.abrupt("return",u("La contrase\xf1a debe tener al menos 6 caracteres","error"));case 5:if(g===C){e.next=7;break}return e.abrupt("return",u("Las contrase\xf1a deben ser iguales","error"));case 7:return b(),e.next=10,m({nombre:A,email:E,password:g});case 10:b();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){null!==c&&(j.a.fire(c.categoria.toUpperCase(),c.msg,c.categoria),h())}),[c]),Object(r.useEffect)((function(){o&&t("/proyectos")}),[o,t]),Object(f.jsx)("div",{className:"form-usuario",children:Object(f.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(f.jsx)("h1",{children:"Crear Cuenta"}),Object(f.jsxs)("form",{onSubmit:k,children:[Object(f.jsxs)("div",{className:"campo-form",children:[Object(f.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(f.jsx)("input",{type:"text",value:A,id:"nombre",name:"nombre",placeholder:"Tu nombre",onChange:T})]}),Object(f.jsxs)("div",{className:"campo-form",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{type:"email",value:E,id:"email",name:"email",placeholder:"Tu email",onChange:T})]}),Object(f.jsxs)("div",{className:"campo-form",children:[Object(f.jsx)("label",{htmlFor:"pass",children:"Contrase\xf1a"}),Object(f.jsx)("input",{type:"password",value:g,id:"pass",name:"password",placeholder:"contrase\xf1a",onChange:T})]}),Object(f.jsxs)("div",{className:"campo-form",children:[Object(f.jsx)("label",{htmlFor:"pass2",children:"Contrase\xf1a"}),Object(f.jsx)("input",{type:"password",value:C,id:"pass2",name:"password2",placeholder:"Confirmar contrase\xf1a",onChange:T})]}),n?Object(f.jsx)(v,{}):Object(f.jsx)("div",{className:"campo-form",children:Object(f.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Registrarme"})})]}),!n&&Object(f.jsx)(s.b,{to:"/",className:"enlace-cuenta",children:Object(f.jsx)("span",{children:"Iniciar sesion"})})]})})},S=function(e){var t=e.children,a=Object(r.useContext)(O),n=a.autenticado,c=a.usuarioAutenticado,o=localStorage.getItem("token");return Object(r.useEffect)((function(){o&&c(o)}),[o]),n?t:Object(f.jsx)(i.a,{to:"/"})},T="[Loading] Set Loding Global",E="[Proyectos] Set array proyectos",g="[Proyectos] Add nuevo proyecto",C="[Proyectos Tareas] set alerta error",A="[Proyecto] Set Proyecto activo",k="[Proyecto] Delete proyecto",N="[Tareas] Get tareas por ID proyecto",P="[Tareas] Add nueva tarea",R="[Tareas] Delete tarea",D="[Tareas] Set estado",w="[Tareas] select tarea",L="[Tarea] update tarea",U="[Tarea] Cancel update tarea",K="[Auth] Verificar registro",I="[Auth] Alerta registro",H="[Auth] Set loading",W="[Auth] Registrado correctamente",F="[Auth] Atenticado correctamente",B="[Auth] Error al registrarse",V="[Auth] Error al hacer login",G="[Auth] Resetear alerta autenticacion",J="[Auth] log out",M=function(e,t){switch(t.type){case K:return Object(h.a)(Object(h.a)({},e),{},{verificado:t.payload});case I:return Object(h.a)(Object(h.a)({},e),{},{alerta:t.payload});case H:return Object(h.a)(Object(h.a)({},e),{},{loading:!e.loading});case W:return localStorage.setItem("token",t.payload.token),Object(h.a)(Object(h.a)({},e),{},{autenticado:!0,token:t.payload.token,usuario:{uid:t.payload.uid,nombre:t.payload.nombre}});case F:return Object(h.a)(Object(h.a)({},e),{},{autenticado:!0,usuario:{uid:t.payload.uid,nombre:t.payload.nombre}});case B:case V:return localStorage.removeItem("token"),Object(h.a)(Object(h.a)({},e),{},{token:null,autenticado:!1});case G:return Object(h.a)(Object(h.a)({},e),{},{alerta:null});case J:return localStorage.removeItem("token"),Object(h.a)(Object(h.a)({},e),{},{autenticado:!1,token:null,usuario:null});default:return e}},q=function(e){var t={token:localStorage.getItem("token"),autenticado:!1,alerta:null,usuario:null,loading:!1},a=Object(r.useReducer)(M,t),n=Object(p.a)(a,2),c=n[0],o=n[1],s=function(e,t){o({type:I,payload:{msg:e,categoria:t}})},i=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"api/usuarios"),e.next=4,fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:t.nombre,email:t.email,password:t.password})});case 4:return r=e.sent,e.next=7,r.json();case 7:(n=e.sent).ok?(o({type:W,payload:{token:n.token,uid:n.uid,nombre:n.nombre}}),s("Registrado correctamente","success")):(o({type:B,payload:n.msg}),s(n.msg,"error")),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),o({type:B,payload:"Error en el servidor"});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"api/auth"),e.prev=1,e.next=4,fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,password:t.password})});case 4:return r=e.sent,e.next=7,r.json();case 7:(n=e.sent).ok?(o({type:W,payload:{token:n.token,uid:n.uid,nombre:n.nombre}}),s("Autenticado correctamente","success")):(o({type:B,payload:n.msg}),s(n.msg,"error")),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),o({type:B,payload:"Error en el servidor"});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"api/auth"),e.next=4,fetch(a,{method:"GET",headers:{"Content-Type":"application/json","x-auth-token":t}});case 4:return r=e.sent,e.next=7,r.json();case 7:(n=e.sent).ok?o({type:F,payload:{uid:n.usuario.id,nombre:n.usuario.nombre}}):o({type:B,payload:n.msg}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),o({type:B,payload:"Error en el servidor"});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(O.Provider,{value:{loading:c.loading,alerta:c.alerta,token:c.token,autenticado:c.autenticado,usuario:c.usuario,mostrarAlerta:s,selLoading:function(){o({type:H})},startRegistraUsuario:i,startLoginUsuario:u,resetearAlertAuth:function(){o({type:G})},usuarioAutenticado:b,logOut:function(){o({type:J}),s("Sesion cerrada correctamente","success")}},children:e.children})},z=Object(r.createContext)(),Q=a(13),X=function(e,t){switch(t.type){case T:return Object(h.a)(Object(h.a)({},e),{},{loading:t.payload});case C:return Object(h.a)(Object(h.a)({},e),{},{alerta:t.payload});case E:return Object(h.a)(Object(h.a)({},e),{},{proyectos:t.payload});case g:return Object(h.a)(Object(h.a)({},e),{},{alerta:null,proyectos:[].concat(Object(Q.a)(e.proyectos),[t.payload])});case A:return Object(h.a)(Object(h.a)({},e),{},{activeProyect:t.payload});case k:return Object(h.a)(Object(h.a)({},e),{},{activeProyect:null,proyectos:e.proyectos.filter((function(e){return e._id!==t.payload}))});default:return e}},Y=function(e){var t=Object(r.useReducer)(X,{loading:!1,alerta:null,activeProyect:null,proyectos:[]}),a=Object(p.a)(t,2),n=a[0],c=a[1],o=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"api/proyectos"),a=localStorage.getItem("token"),e.next=5,fetch(t,{method:"GET",headers:{"Content-Type":"application/json","x-auth-token":a}});case 5:return r=e.sent,e.next=8,r.json();case 8:(n=e.sent).ok?c({type:E,payload:n.proyectos}):(c({type:E,payload:[]}),c({type:C,payload:n.msg})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,r,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"api/proyectos"),r=localStorage.getItem("token"),e.next=5,fetch(a,{method:"POST",headers:{"Content-Type":"application/json","x-auth-token":r},body:JSON.stringify({nombre:t.nombre})});case 5:return n=e.sent,e.next=8,n.json();case 8:(o=e.sent).ok?c({type:g,payload:o.proyecto}):c({type:C,payload:o.msg}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,r,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"api/proyectos/").concat(t),r=localStorage.getItem("token"),e.next=5,fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json","x-auth-token":r}});case 5:return n=e.sent,e.next=8,n.json();case 8:(o=e.sent).ok?c({type:k,payload:t}):c({type:C,payload:o.msg}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(z.Provider,{value:{loading:n.loading,arrayProyectos:n.proyectos,proyectoActivo:n.activeProyect,alerta:n.alerta,setLoadingGlogal:function(e){c({type:T,payload:e})},setArrayProyectos:o,addNuevoProyecto:s,setActiveProyect:function(e){c({type:A,payload:e})},deleteProyecto:i},children:e.children})},Z=Object(r.createContext)(),$=function(e,t){switch(t.type){case C:return Object(h.a)(Object(h.a)({},e),{},{alerta:t.payload});case N:return Object(h.a)(Object(h.a)({},e),{},{tareaActive:t.payload});case P:return Object(h.a)(Object(h.a)({},e),{},{tareaActive:[].concat(Object(Q.a)(e.tareaActive),[t.payload])});case R:return Object(h.a)(Object(h.a)({},e),{},{tareaActive:e.tareaActive.filter((function(e){return e._id!==t.payload}))});case D:return Object(h.a)(Object(h.a)({},e),{},{tareaActive:e.tareaActive.map((function(e){return e._id===t.payload._id?t.payload:e}))});case w:return Object(h.a)(Object(h.a)({},e),{},{tareaSeleccinada:t.payload});case L:return Object(h.a)(Object(h.a)({},e),{},{tareaActive:e.tareaActive.map((function(e){return e._id===t.payload._id?t.payload:e})),tareaSeleccinada:null});case U:return Object(h.a)(Object(h.a)({},e),{},{tareaSeleccinada:null});default:return e}},ee=function(e){var t=Object(r.useReducer)($,{tareaActive:[],tareaSeleccinada:null,alerta:null}),a=Object(p.a)(t,2),n=a[0],c=a[1],o=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,r,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),r="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"api/tareas/").concat(t),e.next=5,fetch(r,{method:"GET",headers:{"Content-Type":"application/json","x-auth-token":a}});case 5:return n=e.sent,e.next=8,n.json();case 8:(o=e.sent).ok&&c({type:N,payload:o.tareas}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,r,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),r="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"api/tareas"),e.next=5,fetch(r,{method:"POST",headers:{"Content-Type":"application/json","x-auth-token":a},body:JSON.stringify({nombre:t.nombre,proyectoId:t.proyectoId})});case 5:return n=e.sent,e.next=8,n.json();case 8:(o=e.sent).ok&&c({type:P,payload:o.tarea}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var r,n,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=localStorage.getItem("token"),n="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"api/tareas/").concat(t),e.next=5,fetch(n,{method:"DELETE",headers:{"Content-Type":"application/json","x-auth-token":r},body:JSON.stringify({proyectoId:a})});case 5:return o=e.sent,e.next=8,o.json();case 8:(s=e.sent).ok?c({type:R,payload:t}):c({type:C,payload:s.msg}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),c({type:C,payload:"Error en el servidor"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,r,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),r="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"api/tareas/").concat(t._id),e.next=5,fetch(r,{method:"PUT",headers:{"Content-Type":"application/json","x-auth-token":a},body:JSON.stringify({proyectoId:t.proyectoId,estado:t.estado,nombre:t.nombre})});case 5:return n=e.sent,e.next=8,n.json();case 8:(o=e.sent).ok?c({type:D,payload:o.tarea}):c({type:C,payload:o.msg}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),c({type:C,payload:"Error en el servidor"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,r,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),r="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"api/tareas/").concat(t._id),e.next=5,fetch(r,{method:"PUT",headers:{"Content-Type":"application/json","x-auth-token":a},body:JSON.stringify({nombre:t.nombre,proyectoId:t.proyectoId})});case 5:return n=e.sent,e.next=8,n.json();case 8:(o=e.sent).ok?c({type:L,payload:o.tarea}):c({type:C,payload:o.msg}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),c({type:C,payload:"Error en el servidor"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(Z.Provider,{value:{arrayTareas:n.arrayTareas,tareasActive:n.tareaActive,tareaSeleccinada:n.tareaSeleccinada,getTareasDeUnProyecto:o,addNuevaTareaAUnProyecto:s,deleteTareaPorId:i,setEstadoTarea:u,selectTareaParaEditar:function(e){c({type:w,payload:e})},updateTarea:b,cancelUpdateTarea:function(){c({type:U})}},children:e.children})},te=function(){var e=Object(r.useContext)(O),t=e.usuario,a=e.logOut;return Object(f.jsxs)("header",{className:"app-header",children:[t&&Object(f.jsxs)("p",{className:"nombre-usuario",children:["Hola, ",Object(f.jsx)("span",{children:t.nombre})]}),Object(f.jsx)("nav",{className:"nav-principal",children:Object(f.jsx)("button",{className:"btn btn-blank btn-logout",onClick:function(){a()},children:"Cerrar sesion"})})]})},ae=function(e){var t=e.proyecto,a=Object(r.useContext)(z),n=a.setLoadingGlogal,c=a.setActiveProyect,o=Object(r.useContext)(Z).getTareasDeUnProyecto,s=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(t),n(!0),e.next=4,o(t._id);case 4:n(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("li",{children:Object(f.jsx)("button",{onClick:s,className:"btn btn-blank",children:t.nombre})})},re=function(){var e=Object(r.useContext)(z),t=e.arrayProyectos,a=e.setArrayProyectos;return Object(r.useEffect)((function(){a()}),[]),0===t.length?Object(f.jsx)("p",{children:"No hay proyectos, comienza creando uno"}):Object(f.jsx)("ul",{className:"listado-proyectos",children:t.map((function(e){return Object(f.jsx)(ae,{proyecto:e},e._id)}))})},ne=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),a=t[0],n=t[1],c=y({nombre:""}),o=Object(p.a)(c,3),s=o[0],i=o[1],u=o[2],b=s.nombre,O=Object(r.useContext)(z),m=O.loading,h=O.setLoadingGlogal,x=O.addNuevoProyecto,_=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==b.trim()){e.next=3;break}return e.abrupt("return",j.a.fire("Error","Ingresa un nombre para el proyecto","error"));case 3:return h(!0),e.next=6,x({nombre:b});case 6:h(!1),u(),n(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:m?Object(f.jsx)(v,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{type:"button",className:"btn btn-block btn-primario",onClick:function(){return n(!0)},children:"Nuevo proyecto"}),a&&Object(f.jsxs)("form",{onSubmit:_,className:"formulario-nuevo-proyecto",children:[Object(f.jsx)("input",{type:"text",className:"input-text",name:"nombre",value:b,onChange:i,placeholder:"nombre del proyecto"}),Object(f.jsx)("input",{type:"submit",value:"agregar proyecto",className:"btn btn-primario btn-block"})]})]})})},ce=function(){return Object(f.jsxs)("aside",{children:[Object(f.jsxs)("h1",{children:["MERN ",Object(f.jsx)("span",{children:"Proyectos"})]}),Object(f.jsx)(ne,{}),Object(f.jsxs)("div",{className:"proyectos",children:[Object(f.jsx)("h2",{children:"Tus proyectos"}),Object(f.jsx)(re,{})]})]})},oe=function(){var e=Object(r.useContext)(z).proyectoActivo,t=Object(r.useContext)(Z),a=t.addNuevaTareaAUnProyecto,n=t.updateTarea,c=t.tareaSeleccinada,o=t.cancelUpdateTarea,s=y({nombre:""}),i=Object(p.a)(s,4),u=i[0],l=i[1],d=i[2],b=i[3];if(Object(r.useEffect)((function(){b(null!==c?c:{nombre:""})}),[c]),!e)return null;var O=u.nombre;return Object(f.jsx)("div",{className:"formulario",children:Object(f.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===O.trim())return j.a.fire("error","Escribe una tarea","error");if(null===c){var r={nombre:O,proyectoId:e._id};a(r)}else n(u);d()},children:[Object(f.jsx)("div",{className:"contenedor-input",children:Object(f.jsx)("input",{type:"text",className:"input-text",placeholder:"Escribe una tarea",name:"nombre",value:O,onChange:l})}),Object(f.jsxs)("div",{className:"contenedor-input",children:[Object(f.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:c?"Editar tarea":"Agregar tarea"}),c&&Object(f.jsx)("input",{onClick:function(){o()},type:"button",className:"btn btn-eliminar btn-block",value:"Cancelar"})]})]})})},se=function(e){var t=e.tarea,a=Object(r.useContext)(Z),n=a.deleteTareaPorId,c=a.setEstadoTarea,o=a.selectTareaParaEditar,s=Object(r.useContext)(z),i=s.loading,u=s.setLoadingGlogal,p=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,n(t._id,t.proyectoId);case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),t.estado?t.estado=!1:t.estado=!0,e.next=4,c(t);case 4:u(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,o(t);case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("li",{className:"tarea sombra",children:[Object(f.jsx)("p",{children:t.nombre}),i&&Object(f.jsx)(v,{}),Object(f.jsx)("div",{className:"estado",children:t.estado?Object(f.jsx)("button",{onClick:b,className:"completo",children:"Completo"}):Object(f.jsx)("button",{onClick:b,className:"incompleto",children:"Incompleto"})}),Object(f.jsxs)("div",{className:"acciones",children:[Object(f.jsx)("button",{onClick:j,className:"btn btn-primario",children:"Editar"}),Object(f.jsx)("button",{onClick:p,className:"btn btn-secundario",children:"Eliminar"})]})]})},ie=function(){var e=Object(r.useContext)(z),t=e.loading,a=e.proyectoActivo,n=e.alerta,c=e.setLoadingGlogal,o=e.deleteProyecto,s=Object(r.useContext)(Z).tareasActive;if(Object(r.useEffect)((function(){null!==n&&j.a.fire("Error",n,"error")}),[n]),!a)return null;var i=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,o(a._id);case 3:c(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[a?Object(f.jsx)("h2",{children:a.nombre}):Object(f.jsx)("h2",{className:"mensaje error",children:"Selecciona un proyecto"}),Object(f.jsx)("ul",{className:"listado-tareas",children:0===s.length?Object(f.jsx)("li",{className:"tarea",children:Object(f.jsx)("p",{children:"No hay tareas"})}):s.map((function(e){return Object(f.jsx)(se,{tarea:e},e._id)}))}),t?Object(f.jsx)(v,{}):Object(f.jsx)("button",{type:"button",className:"btn btn-eliminar",onClick:i,children:"Eliminar proyecto \xd7"})]})},ue=function(){return Object(f.jsxs)("div",{className:"contenedor-app",children:[Object(f.jsx)(ce,{}),Object(f.jsxs)("div",{className:"seccion-principal",children:[Object(f.jsx)(te,{}),Object(f.jsxs)("main",{children:[Object(f.jsx)(oe,{}),Object(f.jsx)("div",{className:"contenedor-tareas",children:Object(f.jsx)(ie,{})})]})]})]})},le=function(){return Object(f.jsx)(i.d,{children:Object(f.jsx)(i.b,{path:"proyectos",element:Object(f.jsx)(ue,{})})})};var de=function(){return Object(f.jsx)(Y,{children:Object(f.jsx)(ee,{children:Object(f.jsx)(q,{children:Object(f.jsx)(s.a,{children:Object(f.jsxs)(i.d,{children:[Object(f.jsx)(i.b,{path:"/",element:Object(f.jsx)(x,{})}),Object(f.jsx)(i.b,{path:"registro",element:Object(f.jsx)(_,{})}),Object(f.jsx)(i.b,{path:"/*",element:Object(f.jsx)(S,{children:Object(f.jsx)(le,{})})})]})})})})})};o.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(de,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ef8f31ca.chunk.js.map