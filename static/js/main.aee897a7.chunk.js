(this["webpackJsonpmovies-api"]=this["webpackJsonpmovies-api"]||[]).push([[0],{22:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(15),s=a.n(i),r=(a(30),a(22),a(4)),o=a(13),l=a(10),j=a(5),b="852d9f83a850e51791000d76d92469a9",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(t){var a="https://api.themoviedb.org/3/discover/movie?api_key=".concat(b,"&language=en-US&page=").concat(e);fetch(a).then((function(e){return e.json()})).then((function(e){t({type:"FETCH_MOVIES",payload:{popular:e}})}))}};var h=a(1),u=function(e){return e>=8?"green":e>=7?"yellow":e>=5?"orange":"red"},m=function(e){var t=e.title,a=e.poster_path,c=e.overview,n=e.vote_average,i=e.id,s=Object(j.b)();return Object(h.jsx)(l.b,{to:"/movie/".concat(i),children:Object(h.jsxs)("div",{onClick:function(){s(function(e){return function(t){var a="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(b,"&language=en-US");fetch(a).then((function(e){return e.json()})).then((function(e){t({type:"FETCH_CREDITS",payload:{credits:e}})}))}}(i)),s(function(e){return function(t){var a="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(b,"&language=en-US");fetch(a).then((function(e){return e.json()})).then((function(e){t({type:"FETCH_DETAILS",payload:{movie:e}})}))}}(i))},className:"movie",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w1280"+a:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",alt:t})}),Object(h.jsxs)("div",{className:"movie-info",children:[Object(h.jsx)("h3",{children:t}),Object(h.jsx)("span",{className:"badge ".concat(u(n)),children:n})]}),Object(h.jsxs)("div",{className:"movie-overview",children:[Object(h.jsxs)("div",{className:"overview-title",children:[Object(h.jsx)("h3",{children:t}),Object(h.jsx)("span",{className:"badge ".concat(u(n)),children:n})]}),Object(h.jsxs)("div",{className:"overview-text",children:[Object(h.jsx)("h4",{children:"Overview:"}),Object(h.jsx)("p",{children:c})]})]})]})})},O=function(e){return Object(h.jsxs)("div",{className:"actor",children:[Object(h.jsx)("img",{className:"actor-img",src:e.image?"https://image.tmdb.org/t/p/w1280"+e.image:"https://pixy.org/src/139/1394670.png",alt:e.name}),Object(h.jsx)("p",{className:"actor-name",children:e.name}),Object(h.jsx)("p",{className:"actor-char",children:e.charName})]})},g=a(3),p="https://image.tmdb.org/t/p/w1280",f=function(){var e,t=Object(j.c)((function(e){return e.details})).movie,a=Object(j.c)((function(e){return e.credits})).credits,c=Object(g.d)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"shadow",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"close",onClick:function(){c.goBack()}}),Object(h.jsxs)("header",{className:"info-header",children:[Object(h.jsx)("img",{className:"background-img",src:t.backdrop_path?p+t.backdrop_path:"",alt:""}),Object(h.jsx)("div",{className:"overlay"}),Object(h.jsx)("img",{className:"poster-img",src:t.poster_path?p+t.poster_path:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",alt:t.title}),Object(h.jsxs)("div",{className:"wrap-info",children:[Object(h.jsx)("div",{className:"info-tags",children:t.genres.map((function(e){return Object(h.jsx)("span",{className:"info-tag",children:e.name})}))}),Object(h.jsxs)("h2",{className:"info-title",children:[t.title,Object(h.jsxs)("span",{className:"info-year",children:["\xa0(",t.release_date.slice(0,4),")"]})]}),Object(h.jsxs)("h3",{className:"info-secondary",children:[t.title===t.original_title?null:t.original_title,"\xa0",Object(h.jsxs)("span",{children:[t.release_date,"\xa0(",t.original_language.toUpperCase(),")"]})]}),Object(h.jsxs)("div",{className:"info-movie",children:[Object(h.jsx)("span",{className:"badge ".concat((e=t.vote_average,e>=8?"green":e>=7?"yellow":e>=5?"orange":"red")," badge-details"),children:t.vote_average}),Object(h.jsx)("span",{className:"info-votes",children:t.vote_count+" user votes"})]}),Object(h.jsxs)("h5",{className:"director-title",children:["Director:",Object(h.jsx)("span",{className:"director-name",children:a.crew.map((function(e){return"Director"===e.job?e.name:null}))})," "]}),Object(h.jsxs)("h5",{className:"writer-title",children:["Screenwriter:",Object(h.jsx)("span",{className:"writer-name",children:a.crew.map((function(e){return"Screenplay"===e.job||"Writer"===e.job?e.name+", ":null}))})," "]}),Object(h.jsx)("h4",{className:"info-tagline",children:t.tagline}),Object(h.jsxs)("div",{className:"info-text",children:[Object(h.jsx)("h4",{children:"Overview:"}),Object(h.jsx)("p",{children:t.overview})]}),Object(h.jsx)("a",{className:"page-link",href:t.homepage,children:"Watch now >"})]})]}),Object(h.jsxs)("section",{className:"cast",children:[Object(h.jsx)("h2",{className:"cast-title",children:"Cast"}),Object(h.jsx)("div",{className:"cast-wrap",children:a.cast.map((function(e){return Object(h.jsx)(O,{image:e.profile_path,name:e.name,charName:e.character,children:e.character})}))})]})]})})})},v=function(e){var t=e.id,a=e.name,c=e.isDisabled,n=Object(j.b)(),i=Object(g.d)();return Object(h.jsx)(l.b,{to:"/page=".concat(t),className:"pages-btn "+(c?"disabled":""),onClick:function(){if(!c){n(d(t));var e={pathname:"page=".concat(t)};i.push(e)}},children:a})},x=function(){var e=Object(j.c)((function(e){return e.movies.popular.total_pages})),t=Object(j.c)((function(e){return e.movies.popular.page})),a=Object(c.useState)({btn1:t+1,btn2:t+2,btn3:t+3,btn4:t+4}),n=Object(o.a)(a,2),i=n[0],s=n[1],r=Object(c.useState)(!0),l=Object(o.a)(r,2),b=l[0],d=l[1],u=Object(c.useState)(!1),m=Object(o.a)(u,2),O=m[0],g=m[1],p=function(){console.log(t),d(!0),t<=i.btn4&&t!==e?s({btn1:i.btn4,btn2:i.btn4+1,btn3:i.btn4+2,btn4:i.btn4+3}):t===e&&s({btn1:e-4,btn2:e-3,btn3:e-2,btn4:e-1})},f=function(){console.log(t),console.log(i.btn1),i.btn1===e&&g(!0),t<=i.btn1&&1!==t?s({btn1:i.btn1-3,btn2:i.btn1-2,btn3:i.btn1-1,btn4:i.btn1}):1===t&&s({btn1:2,btn2:3,btn3:4,btn4:5})};return Object(h.jsx)("nav",{className:"pages",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)(v,{id:t-1,name:"Prev",isDisabled:b},"Prev"),Object(h.jsx)("li",{onClick:f,className:"pages-li",children:Object(h.jsx)(v,{id:1,name:1},e)}),Object(h.jsx)("li",{className:"pages-break",children:"..."}),Object(h.jsx)("li",{onClick:f,className:"pages-li",children:Object(h.jsx)(v,{id:i.btn1,name:i.btn1},i.btn1)}),Object(h.jsx)(v,{id:i.btn2,name:i.btn2},i.btn2),Object(h.jsx)(v,{id:i.btn3,name:i.btn3},i.btn3),Object(h.jsx)("li",{onClick:p,className:"pages-li",children:Object(h.jsx)(v,{id:i.btn4,name:i.btn4},i.btn4)}),Object(h.jsx)("li",{className:"pages-break",children:"..."}),Object(h.jsx)("li",{onClick:p,className:"pages-li",children:Object(h.jsx)(v,{id:e,name:e},e)}),Object(h.jsx)(v,{id:t+1,isDisabled:O,name:"Next"},"Next")]})})},N="https://api.themoviedb.org/3/search/movie?api_key=".concat("852d9f83a850e51791000d76d92469a9","&query="),I=function(){var e=Object(j.b)(),t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],i=a[1],s=Object(g.e)().pathname.split("/")[2];Object(c.useEffect)((function(){e(d())}),[e]);var l=Object(j.c)((function(e){return e.movies.popular.results})),b=Object(g.d)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{onClick:function(){e(d(1));b.push({pathname:"/page=1"})},className:"title",children:"Moovies"}),Object(h.jsx)("img",{className:"tmdb",src:"data:image/png;base64,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",alt:"Powered by The Movie DB"}),Object(h.jsx)("form",{onSubmit:function(t){t.preventDefault(),n&&(fetch(N+n).then((function(e){return e.json()})).then((function(t){e({type:"FETCH_MOVIES",payload:{popular:t.results,totalPages:t.total_pages}})})),i(""))},children:Object(h.jsx)("input",{className:"search",type:"text",placeholder:"Search...",value:n,onChange:function(e){i(e.target.value)}})})]}),Object(h.jsx)(x,{}),s&&Object(h.jsx)(f,{}),Object(h.jsx)("div",{className:"movie-container",children:l.length>0&&l.map((function(e){return Object(h.jsx)(m,Object(r.a)({},e),e.id)}))}),Object(h.jsx)(x,{})]})};var A=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(I,{})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))},Q=a(11),k={popular:{results:[],page:1,total_pages:null}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIES":return Object(r.a)(Object(r.a)({},e),{},{popular:t.payload.popular});default:return Object(r.a)({},e)}},E={movie:{release_date:"",original_language:"",genres:[{id:null,name:""}]},isLoading:!0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DETAILS":return Object(r.a)(Object(r.a)({},e),{},{movie:t.payload.movie,isLoading:!1});case"LOADING_DETAILS":return Object(r.a)(Object(r.a)({},e),{},{isLoading:!0});default:return Object(r.a)({},e)}},T={credits:{cast:[],crew:[]},isLoading:!0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CREDITS":return Object(r.a)(Object(r.a)({},e),{},{credits:t.payload.credits,isLoading:!1});case"LOADING_CREDITS":return Object(r.a)(Object(r.a)({},e),{},{isLoading:!0});default:return Object(r.a)({},e)}},L=Object(Q.c)({movies:w,details:S,credits:y}),R=a(25),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,F=Object(Q.e)(L,B(Object(Q.a)(R.a)));s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(j.a,{store:F,children:Object(h.jsx)(l.a,{children:Object(h.jsx)(A,{})})})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.aee897a7.chunk.js.map