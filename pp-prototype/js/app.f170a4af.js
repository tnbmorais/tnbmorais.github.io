(function(t){function e(e){for(var s,i,a=e[0],c=e[1],l=e[2],d=0,p=[];d<a.length;d++)i=a[d],o[i]&&p.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},o={app:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"022c":function(t,e,n){"use strict";var s=n("5ed7"),o=n.n(s);o.a},"034f":function(t,e,n){"use strict";var s=n("64a9"),o=n.n(s);o.a},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"app-no-scroll":t.lockScroll},attrs:{id:"app"}},[n("flicking",{attrs:{options:{moveType:"snap",duration:200,collectStatistics:!1,autoResize:!0,adaptive:!0,isEqualSize:!1}}},[n("SportPage",{attrs:{"sport-name":"Football",items:t.footballItems,"buttons-selected":t.buttonsSelected},on:{"btn-click":t.updateSelectedButtons}}),n("SportPage",{attrs:{"sport-name":"Horse-Racing",items:t.horseRacingItems,"buttons-selected":t.buttonsSelected},on:{"btn-click":t.updateSelectedButtons}}),n("SportPage",{attrs:{"sport-name":"Tennis",items:t.tennisItems,"buttons-selected":t.buttonsSelected},on:{"btn-click":t.updateSelectedButtons}})],1),n("Betslip",{attrs:{"no-of-bets":t.noOfBets,"no-in-betslip":t.noInBetslip,"buttons-selected":t.buttonsSelected},on:{betslipStatusUpdate:t.updateScrollLock,"btn-click":t.updateSelectedButtons}})],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v(t._s(t.sportName))]),t._l(t.items,(function(e,s){return n("Card",{key:s,staticClass:"card",attrs:{"nr-of-runners":e,section:t.sportName,cardIndex:s,"buttons-selected":t.buttonsSelected},on:{"btn-click":t.onCardButtonClick}})}))],2)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",{staticClass:"card"},[n("md-list",t._l(t.listOfRunners,(function(e,s){return n("md-list-item",{key:s},[n("div",{staticClass:"runners"},[t._v("Runner A / Runner B")]),n("md-button",{staticClass:"md-raised odds",class:{"md-primary":t.isButtonSelected(s,"1")},on:{click:function(e){return t.onBtnClick(s,"1")}}},[t._v("2/1")]),n("md-button",{staticClass:"md-raised odds",class:{"md-primary":t.isButtonSelected(s,"2")},on:{click:function(e){return t.onBtnClick(s,"2")}}},[t._v("5/4")])],1)})),1)],1)},l=[],u={name:"Card",props:{section:String,cardIndex:Number,nrOfRunners:Number,buttonsSelected:Array},computed:{listOfRunners(){return Array.from([...Array(this.nrOfRunners)])}},methods:{onBtnClick(t,e){this.$emit("btn-click",`${this.section}-${this.cardIndex}-${t}-${e}`)},isButtonSelected(t,e){return this.buttonsSelected&&this.buttonsSelected.some(n=>n===`${this.section}-${this.cardIndex}-${t}-${e}`)}}},d=u,p=(n("022c"),n("2877")),m=Object(p["a"])(d,c,l,!1,null,"1fe8bf81",null),b=m.exports,f={name:"SportPage",props:{sportName:String,items:Array,buttonsSelected:Array},computed:{sectionName(){return`${this.sportName}-`}},methods:{onCardButtonClick(t){this.$emit("btn-click",t)}},components:{Card:b}},h=f,v=(n("ab00"),Object(p["a"])(h,i,a,!1,null,"1949dfec",null)),S=v.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",{directives:[{name:"touch",rawName:"v-touch:swipe.top",value:t.swipeHandler,expression:"swipeHandler",arg:"swipe",modifiers:{top:!0}},{name:"touch",rawName:"v-touch:swipe.bottom",value:t.swipeHandler,expression:"swipeHandler",arg:"swipe",modifiers:{bottom:!0}}],staticClass:"betslip md-elevation-24",class:{open:t.isOpen},on:{click:function(t){t.preventDefault()}}},[n("hr",{staticClass:"divider"}),n("div",{staticClass:"md-layout action-buttons"},[n("md-button",{staticClass:"md-layout-item md-raised betslip-btn"},[t._v("Betslip "+t._s(t.noInBetslip))]),n("md-button",{staticClass:"md-layout-item md-raised md-primary betslip-btn"},[t._v("€50.00")]),n("md-button",{staticClass:"md-layout-item md-raised betslip-btn"},[t._v("Bets "+t._s(t.noOfBets))])],1),t._l(t.suggestions,(function(e){return n("flicking",{key:e,staticClass:"cards-holder",attrs:{options:{moveType:"snap",duration:200,gap:32,autoResize:!0,adaptive:!0,overflow:!0,isEqualSize:!0,isConstantSize:!0,collectStatistics:!1}}},[n("div",[n("Card",{attrs:{"nr-of-runners":3,section:"Betslip-1",cardIndex:e,"buttons-selected":t.buttonsSelected},on:{"btn-click":t.onCardButtonClick}})],1),n("div",[n("Card",{attrs:{"nr-of-runners":3,section:"Betslip-2",cardIndex:e,"buttons-selected":t.buttonsSelected},on:{"btn-click":t.onCardButtonClick}})],1),n("div",[n("Card",{attrs:{"nr-of-runners":3,section:"Betslip-3",cardIndex:e,"buttons-selected":t.buttonsSelected},on:{"btn-click":t.onCardButtonClick}})],1)])})),n("div",{staticClass:"place-bets-btn md-layout"},[n("md-button",{staticClass:"md-raised md-layout-item md-size-100 betslip-btn"},[t._v("Place Bet")])],1)],2)},C=[],y=n("6a3f"),B={name:"Betslip",components:{Card:b,Flicking:y["a"]},props:{noInBetslip:Number,noOfBets:Number,buttonsSelected:Array},data(){return{suggestions:[1,2],isOpen:!1}},methods:{swipeHandler(t){this.isOpen="top"===t,this.$emit("betslipStatusUpdate",this.isOpen)},onCardButtonClick(t){this.$emit("btn-click",t)}}},g=B,_=(n("6488"),Object(p["a"])(g,k,C,!1,null,"70309f50",null)),O=_.exports,w={name:"App",data(){return{buttonsSelected:[],noOfBets:0,lockScroll:!1,footballItems:[5,2,3,4,5,2,3],horseRacingItems:[2,4,5,2,3],tennisItems:[5,4,1,5,4]}},computed:{noInBetslip(){return this.buttonsSelected.length}},methods:{updateScrollLock(t){this.lockScroll=t},updateSelectedButtons(t){const e=this.buttonsSelected.some(e=>e===t);if(!e)return this.buttonsSelected.push(t);this.buttonsSelected=this.buttonsSelected.filter(e=>e!==t)}},components:{SportPage:S,Flicking:y["a"],Betslip:O}},x=w,$=(n("034f"),Object(p["a"])(x,o,r,!1,null,null,null)),I=$.exports,j=n("43f9"),P=n.n(j),N=(n("51de"),n("d69d"),n("0086")),R=n.n(N);s["default"].use(P.a),s["default"].use(y["b"]),s["default"].use(R.a),s["default"].config.productionTip=!1,new s["default"]({render:t=>t(I)}).$mount("#app")},"5ed7":function(t,e,n){},6488:function(t,e,n){"use strict";var s=n("84c5"),o=n.n(s);o.a},"64a9":function(t,e,n){},"84c5":function(t,e,n){},9516:function(t,e,n){},ab00:function(t,e,n){"use strict";var s=n("9516"),o=n.n(s);o.a}});
//# sourceMappingURL=app.f170a4af.js.map