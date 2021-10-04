(this["webpackJsonpportifolio-dms"]=this["webpackJsonpportifolio-dms"]||[]).push([[0],{23:function(A,e,t){},24:function(A,e,t){},26:function(A,e,t){},28:function(A,e,t){},29:function(A,e,t){},30:function(A,e,t){},31:function(A,e,t){},32:function(A,e,t){},41:function(A,e,t){},42:function(A,e,t){"use strict";t.r(e);var a=t(1),s=t.n(a),n=t(16),c=t.n(n),r=(t(23),t(8)),i=(t(24),t(2)),o=t(7);function l(){return{home:{imgURL:"https://i.ibb.co/R7jqnFW/37647447.jpg",name:"Dennis Marcelo",specialty:"Desenvolvedor Full-Stack",resume:["Atualmente estudo na Trybe onde busco me tornar full-stack utilizando tecnologias como JavaScript, React, nodeJs, mongoDB e Python. Na Trybe tamb\xe9m busco desenvolver habilidades  sociocomportamentais e metodologias \xe1geis como scrum e kanban.","Sou formado em an\xe1lise e desenvolvimento de sistema pela universidade Est\xe1cio, apaixonado por tecnologia e pela praticidade e comodidade que elas nos proporcionam, pelo mesmo motivo decidi me tornar desenvolvedor."]},hardSkills:{frontEnd:[" HTML","CSS","JavaScritp","React"],backEnd:["NodeJs","MongoDB","Express","bcrypt"],test:["jest"]},projects:[{title:"Trivia React",description:"Jogo de trivia onde o usu\xe1rio pode escolher a dificuldade, tipo, categoria e quantidade de perguntas. As pegunta tem 30 segundos para ser respondidas e no final \xe9 exibido um ranking de melhores pontua\xe7\xf5es",linkImg:"https://i.ibb.co/gy1Q7Cy/ezgif-com-gif-maker.gif",linkApp:"https://sd-010-b-project-trivia-react-redux.vercel.app/",date:"06/2021",status:"Finalizado"},{title:"NetGames",description:"Este projeto teve como foco testar os ciclos de vida dos componentes React e as rotas da aplica\xe7\xe3o. Nele \xe9 poss\xedvel criar, deletar e editar cards.",linkImg:"https://i.ibb.co/KbRMmcN/NetGames.gif",linkApp:"https://dennismarcelo.github.io/movie-card-library-crud/#/",date:"04/2021",status:"Finalizado"},{title:"PokeDex",description:"Este projeto marca o in\xedcio do meu aprendizado em react e tamb\xe9m flex-box, nele \xe9 poss\xedvel visualizar alguns cards de pok\xe9mons em diferentes telas.",linkImg:"https://i.ibb.co/x7zVMdg/pokedex.gif",linkApp:"https://dennismarcelo.github.io/trybe-exercises/",date:"05/2021",status:"Finalizado"},{title:"ToDo List",description:"Um dos meus primeiros projetos realizados na Trybe utilizando somente HTML, CSS e JavaScript. O objetivo do projeto foi criar uma lista de tarefas onde \xe9 poss\xedvel criar, deletar, mover e salvar uma ou v\xe1rias tarefas.",linkImg:"https://i.ibb.co/1mzfwFY/todo-list.gif",linkApp:"https://dennismarcelo.github.io/Todo-List/",date:"04/2021",status:"Finalizado"}]}}var d=Object(a.createContext)(),g=t(0);function j(A){var e=A.children,t=Object(a.useState)({}),s=Object(o.a)(t,2),n=s[0],c=s[1];Object(a.useEffect)((function(){c(l)}),[]);var r={dataUser:n};return Object(g.jsx)(d.Provider,{value:r,children:e})}t(26);var m=function(){var A=Object(a.useContext)(d).dataUser.home;return Object(g.jsxs)("main",{className:"Home",children:[Object(g.jsx)("div",{className:"profile",children:void 0!==A?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{className:"image-profile",src:A.imgURL,alt:"dennis"}),Object(g.jsx)("h3",{children:A.name}),Object(g.jsx)("span",{children:A.specialty})]}):""}),Object(g.jsxs)("div",{className:"about",children:[Object(g.jsx)("h1",{children:"Sobre mim"}),Object(g.jsx)("ul",{children:void 0!==A?Object(g.jsx)(g.Fragment,{children:A.resume.map((function(A){return Object(g.jsx)("li",{children:A},A)}))}):""})]})]})},u=t(13),b=t.n(u),h=t(17);t(28);var p=function(){var A=Object(a.useState)(""),e=Object(o.a)(A,2),t=e[0],s=e[1],n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),j=d[0],m=d[1],u=function(){var A=Object(h.a)(b.a.mark((function A(e){var a,n;return b.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return"https://portifolio-dms-backend.herokuapp.com/sendToMe",a={method:"POST",body:JSON.stringify({name:t,email:r,text:j}),headers:new Headers({"Content-Type":"application/json",Accept:"application/json"})},A.next=4,fetch("https://portifolio-dms-backend.herokuapp.com/sendToMe",a).then((function(A){return A.json()}));case 4:"Mensasgem enviado com sucesso!"===(n=A.sent).message?(window.alert(n.message),s(""),i(""),m("")):window.alert("N\xe3o foi possivel enviar o email, tente novamente mais tarde."),e.preventDefault();case 7:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}();return Object(g.jsxs)("main",{className:"contact",children:[Object(g.jsx)("h1",{children:"Contato"}),Object(g.jsxs)("form",{onSubmit:u,children:[Object(g.jsx)("input",{type:"text",placeholder:"Nome e Sobrenome",maxLength:"50",minLength:"3",onChange:function(A){var e=A.target.value;return s(e)},value:t,required:!0}),Object(g.jsx)("input",{type:"email",placeholder:"Email",onChange:function(A){var e=A.target.value;return i(e)},value:r,required:!0}),Object(g.jsx)("textarea",{cols:"40",rows:"4",placeholder:"Digite aqui sua mensagem.",maxLength:"500",onChange:function(A){var e=A.target.value;return m(e)},value:j,required:!0}),Object(g.jsx)("button",{type:"submit",className:"button",children:"Eviar"})]})]})};t(29);var B=function(){var A=Object(a.useContext)(d).dataUser.hardSkills,e=function(A){return Object(g.jsx)(g.Fragment,{children:A.map((function(A){return Object(g.jsx)("li",{children:A},A)}))})};return Object(g.jsxs)("main",{className:"HardSkills",children:[Object(g.jsx)("h1",{className:"hardSkills-title",children:"Hard-Skills"}),Object(g.jsxs)("div",{className:"skills",children:[Object(g.jsxs)("ul",{className:"front-end",children:[Object(g.jsx)("h4",{children:"Front End"}),void 0!==A?e(A.frontEnd):""]}),Object(g.jsxs)("ul",{className:"back-end",children:[Object(g.jsx)("h4",{children:"Back End"}),void 0!==A?e(A.backEnd):""]}),Object(g.jsxs)("ul",{className:"test",children:[Object(g.jsx)("h4",{children:"Tests"}),void 0!==A?e(A.test):""]})]})]})};t(30);var E=function(){var A=Object(a.useContext)(d).dataUser.projects,e=function(A){var e=A;return e.length>=85&&(e=e.slice(0,85),e+="..."),e},t=function(A){var e=A;return e.length>=239&&(e=e.slice(0,239),e+="..."),e};return Object(g.jsxs)("main",{className:"Projects",children:[Object(g.jsx)("h1",{children:"Projetos"}),Object(g.jsx)("div",{className:"project-cards",children:void 0!==A?Object(g.jsx)(g.Fragment,{children:A.map((function(A){var a=A.title,s=A.linkImg,n=A.description,c=A.date,r=A.linkApp,i=A.status;return Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("img",{src:s,alt:"Projeto ".concat(a)}),Object(g.jsxs)("div",{className:"card-info",children:[Object(g.jsx)("h1",{children:e(a)}),Object(g.jsx)("p",{children:t(n)}),Object(g.jsxs)("div",{className:"visit",children:[Object(g.jsx)("span",{className:"project-status",children:"".concat(i,": ").concat(c)}),Object(g.jsx)("a",{className:"button",href:r,target:"_blank",rel:"noreferrer",children:"Visitar"})]})]})]},a)}))}):""})]})};var C=function(){return Object(g.jsx)("main",{className:"Page404",children:Object(g.jsx)("h1",{children:"Page404"})})},v=(t(31),t(32),t.p+"static/media/instagram quadrado 256.baf231c8.png");var O=function(A){var e=A.isOpen,t=Object(i.f)().pathname;return Object(g.jsxs)("nav",{className:"menu-options ".concat(e),children:[Object(g.jsx)(r.b,{className:"/"===t?"activated":"",to:"/",children:"Home"}),Object(g.jsx)(r.b,{className:"/projects"===t?"activated":"",to:"/projects",children:"Projetos"}),Object(g.jsx)(r.b,{className:"/contact"===t?"activated":"",to:"/contact",children:"Contato"}),Object(g.jsxs)("span",{className:"social-network-links",children:[Object(g.jsx)("a",{href:"https://www.facebook.com/dennis.marcelo.77/",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("img",{className:"icon",src:"data:image/png;base64,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",alt:"facebook"})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/dennis-marcelo/",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("img",{className:"icon",src:"data:image/png;base64,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",alt:"linkedin"})}),Object(g.jsx)("a",{href:"https://www.instagram.com/dms.im410/",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("img",{className:"icon",src:v,alt:"instagram"})})]})]})};t(41);var f=function(A){var e=A.changeMenu,t=A.isChecked,a=A.isFixedMenu;return Object(g.jsx)("div",{className:"menu-controler ".concat(a),children:Object(g.jsxs)("label",{htmlFor:"menu-hamburguer",children:[Object(g.jsx)("input",{id:"menu-hamburguer",type:"checkbox",onChange:e,checked:t}),Object(g.jsx)("span",{className:"hamburguer"})]})})};var Q=function(){var A=Object(a.useState)(!1),e=Object(o.a)(A,2),t=e[0],s=e[1],n=Object(a.useState)("close-menu"),c=Object(o.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),j=d[0],m=d[1];return Object(g.jsxs)("header",{children:[Object(g.jsx)("h1",{className:"textLogo",children:"DMS"}),Object(g.jsx)(O,{isOpen:r}),Object(g.jsx)(f,{changeMenu:function(){t?(s(!1),i("close-menu"),m("")):(s(!0),i("open-menu"),m("fixed-menu"))},isChecked:t,isFixedMenu:j})]})};var x=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(j,{children:[Object(g.jsx)(Q,{}),Object(g.jsxs)(i.c,{children:[Object(g.jsx)(i.a,{exact:!0,path:"/",component:m}),Object(g.jsx)(i.a,{path:"/contact",component:p}),Object(g.jsx)(i.a,{path:"/hardskills",component:B}),Object(g.jsx)(i.a,{path:"/projects",component:E}),Object(g.jsx)(i.a,{path:"*",component:C})]})]})})};c.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(r.a,{basename:"/portifolioReact",children:Object(g.jsx)(x,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.873bd254.chunk.js.map