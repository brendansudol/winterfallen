(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(22)},21:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),s=t.n(i),c=t(3),l=t(6),o=t(7),m=t(10),h=t(8),d=t(11),u=t(12),g=[{id:"Arya",name:"Arya",hashtag:"#AryaStark"},{id:"BranStark",name:"Bran",hashtag:"#BranStark"},{id:"Brienne",name:"Brienne",hashtag:"#BrienneOfTarth"},{id:"Cersei",name:"Cersei",hashtag:"#CerseiLannister"},{id:"Daenery",name:"Daenerys",hashtag:"#DaenerysTargaryen"},{id:"Davos",name:"Davos",hashtag:"#DavosSeaworth"},{id:"Euron",name:"Euron",hashtag:"#EuronGreyjoy"},{id:"Greyworm",name:"Greyworm",hashtag:"#Greyworm"},{id:"JaimeLannister",name:"Jaime",hashtag:"#JaimeLannister"},{id:"JohnSnow",name:"John Snow",hashtag:"#JonSnow"},{id:"Jorah",name:"Jorah",hashtag:"#JorahMormont"},{id:"Missandei",name:"Missandei",hashtag:"#Missandei"},{id:"NightKing",name:"Night King",hashtag:"#NightKing"},{id:"RedWoman",name:"Melisandre",hashtag:"#Melisandre"},{id:"SamTarly",name:"Sam",hashtag:"#SamwellTarly"},{id:"Sansa",name:"Sansa",hashtag:"#SansaStark"},{id:"TheHound",name:"The Hound",hashtag:"#TheHound"},{id:"Theon",name:"Theon",hashtag:"#TheonGreyjoy"},{id:"TyrionLannister",name:"Tyrion",hashtag:"#TyrionLannister"},{id:"Varys",name:"Varys",hashtag:"#Varys"}],p=function(e){return encodeURIComponent(e)},f=function(e){return"".concat("/winterfallen","/img/characters/").concat(e,".png")},w=function(e){var a=e.length,t=e.map(function(e){return e.hashtag}).join(", "),n=window.location.href,r="I think ".concat(a," main character").concat(1===a?" is":"s are"," going to die in the next GoT episode (Battle of Winterfell)... ").concat(t);return"https://twitter.com/intent/tweet?text=".concat(p(r),"&url=").concat(p(n))},y=function(e){function a(){var e;Object(l.a)(this,a),(e=Object(m.a)(this,Object(h.a)(a).call(this))).handleToggleStatus=function(a){return function(){e.setState(function(e){return{characters:e.characters.map(function(e){return e.id===a?Object(c.a)({},e,{willDie:!e.willDie}):e})}},e.updateUrl)}},e.updateUrl=function(){};var t=g.map(function(e){return Object(c.a)({},e,{willDie:!1})});return e.state={characters:t},e}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state.characters,t=a.filter(function(e){return e.willDie});return r.a.createElement("div",{className:"p2 mx-auto container app"},r.a.createElement("header",{className:"mb2"},r.a.createElement("h1",{className:"m0 sm-h0 serif"},"The Winterfallen"),r.a.createElement("p",{className:"m0 h5 sm-h4"},"Predict who will die in the upcoming ",r.a.createElement("em",null,"Battle of Winterfell"))),r.a.createElement("div",{className:"flex flex-wrap mxn1 mb2  pt1"},a.map(function(a){var t=a.id,n=a.name,i=a.willDie;return r.a.createElement("div",{key:t,className:"col-6 sm-col-4 px1 mb2"},r.a.createElement("button",{className:"btn p1 h6 caps col-12 ".concat(i?"btn-danger":"btn-success"),onClick:e.handleToggleStatus(t),style:{height:48}},r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("img",{key:t,className:"mr05",src:f(t),alt:n,width:30,height:30}),r.a.createElement("span",{className:"truncate"},n)),r.a.createElement("span",{className:"h2"},i?"\ud83d\ude35":"\ud83d\ude42"))))})),r.a.createElement("div",{className:"p2 rounded results"},r.a.createElement("div",null,"I think ",r.a.createElement("strong",null,t.length)," main"," ",1===t.length?"character is":"characters are"," going to die in the next GoT episode..."),t.length>0&&r.a.createElement("div",{className:"mt1 flex flex-wrap"},t.map(function(e,a){return[a>0&&r.a.createElement("span",{className:"mr05"},","),r.a.createElement("span",{className:"flex-inline items-center"},r.a.createElement("img",{className:"mr01",src:f(e.id),alt:"",width:18,height:18}),r.a.createElement("span",null,e.name))]})),r.a.createElement("div",{className:"mt1"},r.a.createElement(u.a,{content:"The super cool character emojis will show up in your tweet once it's published to Twitter if you use the suggested hashtags!",className:"tooltip",arrow:!0},r.a.createElement("a",{className:"black bold h6",rel:"noopener noreferrer",target:"_blank",href:w(t)},"Share on Twitter")))))}}]),a}(n.Component);t(20),t(21);s.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.60b88bad.chunk.js.map