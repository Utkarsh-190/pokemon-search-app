(this["webpackJsonppokemon-search-app"]=this["webpackJsonppokemon-search-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={searchBox:"Search_searchBox__2Nk6i",searchInput:"Search_searchInput__HKw2u",searchButton:"Search_searchButton__3RS1b",suggestionBox:"Search_suggestionBox__1iTCa",suggestion:"Search_suggestion__2sepl"}},function(e,t,n){e.exports={info:"Info_info__3Dkl6",name:"Info_name__2PCbb",properties:"Info_properties__3r1oy",list:"Info_list__3ah-T"}},,function(e,t,n){e.exports={app:"App_app__1v3ub",nav:"App_nav__1hOgN",content:"App_content__1QGBa"}},function(e,t,n){e.exports={mainBody:"Main_mainBody__14i3J",options:"Main_options__9-Eyp",list:"Main_list__1o8ck"}},function(e,t,n){e.exports={filterBox:"Filter_filterBox__3nO86",filter:"Filter_filter__3i10R",filterTypes:"Filter_filterTypes__1Yduk"}},function(e,t,n){e.exports={detailsPage:"Details_detailsPage__Fday-",profile:"Details_profile__2fHXX",barChart:"Details_barChart__1AeBA"}},,function(e,t,n){e.exports={listPage:"List_listPage__W8NVF",list:"List_list__8klno"}},function(e,t,n){e.exports={nav:"Navbar_nav__q2I90",navHeading:"Navbar_navHeading__1CSHt"}},,function(e,t,n){e.exports={listItem:"ListItem_listItem__1AJTy"}},,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),r=n.n(c),i=(n(28),n(14)),o=n.n(i),l=n(4),p=n(15),u=n.n(p),j=n(7),d=n.n(j),h=n(8),b=n(11),m=n.n(b),f=n.p+"static/media/search_icon.e5197f97.svg",v=n(0);var x=function(e){var t=e.setPokemons,n=Object(a.useState)(""),s=Object(l.a)(n,2),c=s[0],r=s[1],i=Object(a.useState)([]),o=Object(l.a)(i,2),p=o[0],u=o[1],j=Object(a.useState)([]),b=Object(l.a)(j,2),x=b[0],O=b[1];Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1200");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,(a=n.results).map((function(e){var t=e.url.split("/");e.id=t[t.length-2]})),u(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=function(){for(var e=[],n=0;n<25;n++)e.push(p[n]);t(e)},_=function(e){var n,a;if(a=e||c){for(var s=0;s<p.length;s++)if(p[s].name==a){n=p[s];break}n?(r(a),t([n])):alert("invalid pokemon name")}else g()};return Object(v.jsxs)("div",{className:m.a.searchBox,children:[Object(v.jsx)("input",{type:"text",placeholder:"Search Pokemons",onChange:function(e){var t=e.target.value.toLowerCase(),n=[];t.length>0?(p.map((function(e){var a=e.name,s=new RegExp("".concat(t),"i"),c=a.search(s);if(0===c){var r={start:a.substring(0,c),mid:a.substring(c,c+t.length),end:a.substring(c+t.length,a.length),name:a};n.push(r)}})),O(n)):O([]),r(t)},onBlur:function(){setTimeout((function(){O([])}),200),c||g()},value:c,className:m.a.searchInput}),Object(v.jsx)("button",{className:m.a.searchButton,onClick:function(){_(null)},children:Object(v.jsx)("img",{src:f,alt:"search icon"})}),x&&Object(v.jsx)("div",{className:m.a.suggestionBox,children:x.map((function(e,t){return Object(v.jsxs)("div",{className:m.a.suggestion,onClick:function(){_(e.name)},children:[e.start,Object(v.jsx)("strong",{children:e.mid}),e.end]},t)}))})]})},O=n(16),g=n.n(O);var _=function(e){var t=e.setPokemons,n=Object(a.useState)(!1),s=Object(l.a)(n,2),c=s[0],r=s[1],i=function(){var e=Object(h.a)(d.a.mark((function e(n){var a,s,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),a=n.toLowerCase(),e.next=4,fetch("https://pokeapi.co/api/v2/type/".concat(a,"/"));case 4:return s=e.sent,e.next=7,s.json();case 7:c=e.sent,r=c.pokemon,i=[],r.map((function(e){var t=e.pokemon.url.split("/");e.pokemon.id=t[t.length-2],i.push(e.pokemon)})),t(i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){r((function(e){return!e}))};return Object(v.jsxs)("div",{className:g.a.filterBox,children:[Object(v.jsxs)("div",{className:g.a.filter,onClick:o,children:[Object(v.jsx)("div",{children:"Filter"}),Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABt0lEQVRoge3Vv0rDQBwH8O+llm5dBYfU0dG0D1DxAdSxElGTlID4DAkHOvkGDiYoDkI3n6D6AtVJ3WxnhYBdhCTnoIUY2mquV0H4fZbAtb+77+8ufwBCCCGEEEIIIeRvcdOsuq5bnnUe13XL3DSrsvWaTJFv2ydJpRItxvGrb1nbsov7lrW9GMevSaUS+bZ9IjMHK1rA9/dXEk17yAylAKyjILgoMo9n27sAQmQ2UQArx0HwVGQeqRMYM0f4FehXxoWXVSpa0L27e2kaxhKARmaYAdhsGsbzba93P61+UngmxOlRGJ4XzSO1AyVdPxBC5BfTAIS+4+xNqvMcpwUgGLPu1cNweCiVRaao2+2K9a2t6zSKlhljq5mfGICNtXq9f5M7Cc9xWhDicsyaV49vbzudTieRySLVAFCsiXmFHy02E865Fvf7AWMsf+ukjDFbAO/zCg8oaAD4bCIZDEIA+TdR+nXN3/MXJV23OOcpZqSkAWDqSeQp2fkR6Wcgb8ozkaU0PKCwAeDHJpSHB9R8ib/hnKcLtZotgLPRmADOSrpuqg4/d1673fDa7cbP/ySEEEIIIeQ/+gBbcMbRPkLcgwAAAABJRU5ErkJggg==",alt:"drop down arrow"})]}),c&&Object(v.jsx)("div",{className:g.a.filterTypes,children:["Normal","Fire","Water","Grass","Flying","Fighting","Poison","Electric","Ground","Rock","Psychic","Ice","Bug","Ghost","Steel","Dragon","Dark","Fairy"].map((function(e,t){return Object(v.jsx)("div",{onClick:function(){i(e)},children:e},t)}))})]})},k=n(5),A=n(19),N=n.n(A),S=n(22),y=n.n(S),I=n(9);var B=function(e){var t=e.pokemon;return Object(v.jsx)(I.b,{to:"/pokemon-search-app/details/".concat(t.id),style:{textDecoration:"none"},children:Object(v.jsxs)("div",{className:y.a.listItem,children:[Object(v.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(t.id,".svg"),alt:"".concat(t.name)}),Object(v.jsx)("div",{children:t.name})]})})};var w=function(e){var t=e.usePokemons,n=Object(l.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25"),i=Object(l.a)(r,2),o=i[0],p=i[1],u=Object(a.useState)(""),j=Object(l.a)(u,2),b=j[0],m=j[1],f=Object(a.useState)(!0),x=Object(l.a)(f,2),O=x[0],g=x[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.results,s=n.next,a.map((function(e){var t=e.url.split("/");return e.id=t[t.length-2]})),m(s),c((function(e){return[].concat(Object(k.a)(e),Object(k.a)(a))})),g(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o]),Object(v.jsxs)("div",{className:N.a.listPage,children:[Object(v.jsx)("div",{className:N.a.list,onScroll:function(e){e.target.scrollHeight-e.target.scrollTop===e.target.clientHeight&&(g(!0),p(b))},children:s.map((function(e){return Object(v.jsx)(B,{pokemon:e},e.id)}))}),O&&Object(v.jsx)("div",{children:"Loading..."})]})};var C=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],c=function(e){s(e)};return Object(v.jsxs)("div",{className:u.a.mainBody,children:[Object(v.jsxs)("div",{className:u.a.options,children:[Object(v.jsx)(x,{setPokemons:c}),Object(v.jsx)(_,{setPokemons:c})]}),Object(v.jsx)("div",{className:u.a.list,children:Object(v.jsx)(w,{usePokemons:[n,c]})})]})},P=n(17),D=n.n(P),R=n(2),E=n(23);var H=function(e){var t=e.data;return Object(v.jsx)("div",{children:Object(v.jsx)(E.a,{data:{labels:t.stats.map((function(e){var t=e.stat;return t.name[0].toUpperCase()+t.name.slice(1)})),datasets:[{label:t.name[0].toUpperCase()+t.name.slice(1),data:t.stats.map((function(e){return e.base_stat})),backgroundColor:"#f5c8c8",borderColor:"#7d6262",borderWidth:2}]},height:"200px",width:"300px",options:{maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}})})},F=n(12),G=n.n(F);var J=function(e){var t=e.data;return Object(v.jsxs)("div",{className:G.a.info,children:[Object(v.jsx)("h1",{className:G.a.name,children:t.name}),Object(v.jsxs)("div",{className:G.a.properties,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Height: "}),Object(v.jsxs)("span",{children:[10*t.height," cm"]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Weight: "}),Object(v.jsxs)("span",{children:[t.weight/10," kg"]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Abilities: "}),Object(v.jsx)("span",{className:G.a.list,children:t.abilities.map((function(e){var t=e.ability;return Object(v.jsxs)("span",{children:[t.name," "]},t.name)}))})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Type: "}),Object(v.jsx)("span",{className:G.a.list,children:t.types.map((function(e){var t=e.type;return Object(v.jsxs)("span",{children:[t.name," "]},t.name)}))})]})]})]})};var T=function(){var e=Object(R.g)().id,t=Object(a.useState)(null),n=Object(l.a)(t,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){var t=JSON.parse(sessionStorage.getItem("cache"));if(t){var n=!1;if(t.map((function(a,s){a.id==Number(e)&&(n=!0,t.unshift(t.splice(s,1)[0]),sessionStorage.setItem("cache",JSON.stringify(t)),c(a))})),n)return}var a=function(){var n=Object(h.a)(d.a.mark((function n(){var a,s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(e));case 2:return a=n.sent,n.next=5,a.json();case 5:s=n.sent,t?(t.unshift(s),t.length>5&&t.pop()):t=[s],sessionStorage.setItem("cache",JSON.stringify(t)),c(s);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();a()}),[]),Object(v.jsxs)("div",{className:D.a.detailsPage,children:[s&&Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:D.a.profile,children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(e,".svg"),alt:"".concat(s.name)})}),Object(v.jsx)(J,{data:s})]}),Object(v.jsx)("div",{className:D.a.barChart,children:Object(v.jsx)(H,{data:s})})]}),Object(v.jsx)(I.b,{to:"/pokemon-search-app/",children:Object(v.jsx)("button",{children:"Back"})})]})},L=n(20),M=n.n(L);var U=function(){return Object(v.jsx)("div",{className:M.a.nav,children:Object(v.jsx)("div",{className:M.a.navHeading,children:"Pokemon Search App"})})};var V=function(){return Object(v.jsxs)("div",{className:o.a.app,children:[Object(v.jsx)("div",{className:o.a.nav,children:Object(v.jsx)(U,{})}),Object(v.jsx)("div",{className:o.a.content,children:Object(v.jsxs)(R.c,{children:[Object(v.jsx)(R.a,{path:"/pokemon-search-app/",element:Object(v.jsx)(C,{})}),Object(v.jsx)(R.a,{path:"/pokemon-search-app/details/:id",element:Object(v.jsx)(T,{})})]})})]})};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(I.a,{children:Object(v.jsx)(V,{})})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.cd450990.chunk.js.map