webpackJsonp([1],{0:function(t,s){},"34KM":function(t,s){},"8GXv":function(t,s){},KDf5:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("zL8q"),l=e.n(a),n=(e("tvR6"),{props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}}),r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t){return s("span",{staticClass:"star-item",class:t,attrs:{"track-by":"$index"}})}),0)},staticRenderFns:[]};var o=e("VU/8")(n,r,!1,function(t){e("WNDE")},null,null).exports;i.default.use(l.a);var c={props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},components:{star:o}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wra"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wra",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})]),t._v(" "),e("div",{staticClass:"backgroud"},[e("img",{attrs:{width:"100%",height:"100%",src:t.seller.avatar,alt:""}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wra  clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wra"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家通告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"el-icon-close"})])])])],1)},staticRenderFns:[]};var u={data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("/api/seller").then(function(s){0===(s=s.body).errno&&(t.seller=s.data,console.log(t.seller))})},components:{"v-header":e("VU/8")(c,d,!1,function(t){e("8GXv")},null,null).exports}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("router-view",{attrs:{seller:t.seller}})],1)},staticRenderFns:[]};var h=e("VU/8")(u,v,!1,function(t){e("WJej")},null,null).exports,f=e("/ocq"),p=e("8+8L"),_=e("GQaK"),m={props:{selectFoods:{type:Array,default:function(){return[{price:15,count:1}]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[]}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,l=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+l+"px,0)",t.style.transform="translate3d(0,"+l+"px,0)";var n=t.getElementsByClassName("inner-hook")[0];n.style.webkitTransform="translate3d("+a+"px,0,0)",n.style.transform="translate3d("+a+"px,0,0)"}}},enter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var s=t.getElementsByClassName("inner-hook")[0];s.style.webkitTransform="translate3d(0,0,0)",s.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wra"},[e("div",{staticClass:"loge",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"el-icon-shopping-cart-1 ",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice)+"元")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n                "+t._s(t.payDesc)+"\n            ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,i){return e("div",{key:i},[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)}),0)])},staticRenderFns:[]};var g=e("VU/8")(m,C,!1,function(t){e("QZmp")},null,null).exports,w={props:{food:{type:Object}},methods:{addCart:function(t){t._constructed&&(console.log("click"),this.food.count?this.food.count++:i.default.set(this.food,"count",1),this.$emit("cart-add",t.target))},decreasecart:function(t){t._constructed&&(console.log("click"),this.food.count&&this.food.count--)}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease ",on:{click:t.decreasecart}},[e("i",{staticClass:"inner el-icon-remove-outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add el-icon-circle-plus",on:{click:t.addCart}})],1)},staticRenderFns:[]};var b=e("VU/8")(w,y,!1,function(t){e("SMEw")},null,null).exports,x={props:{seller:{type:Object}},data:function(){return{scrollY:0,foodScroll:null,goods:[],listHeight:[]}},methods:{getHeight:function(){var t=this.$refs.foodScroll.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}console.log(this.listHeight)},selectMenu:function(t){var s=this.$refs.foodScroll.getElementsByClassName("food-list-hook")[t];console.log(t),this.foodScroll.scrollToElement(s,300)},_menuScroll:function(){var t=this.$refs.menuScroll;new _.a(t,{scrollY:!0,click:!0})},_foodScroll:function(){var t=this.$refs.foodScroll;this.foodScroll=new _.a(t,{scrollY:!0,click:!0,probeType:3});var s=this;this.foodScroll.on("scroll",function(t){s.scrollY=Math.abs(Math.round(t.y)),console.log(s.scrollY)})},cartAdd:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})}},created:function(){var t=this;this.classMap=["decrease","discount","guarantee","invoice","special"],this.$http.get("/api/goods").then(function(s){0===(s=s.body).errno&&(t.goods=s.data,console.log(t.goods),t.$nextTick(function(){this._menuScroll(),this._foodScroll()}))})},components:{shopcart:g,cartcontrol:b},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){console.log(this.scrollY);var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuScroll",staticClass:"menu-wra"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:s.id,staticClass:"menu-item",on:{click:function(s){return t.selectMenu(i)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\r\n         ")])])}),0)]),t._v(" "),e("div",{ref:"foodScroll",staticClass:"foods-wra"},[e("ul",{staticStyle:{margin:"0",padding:"0"}},t._l(t.goods,function(s,i){return e("li",{staticClass:"food-list food-list-hook",staticStyle:{"list-style":"none"}},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",{staticStyle:{margin:"0",padding:"0"}},t._l(s.foods,function(s,i){return e("li",{staticClass:"food-item border-1px",class:{current:t.currentIndex===i}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wra"},[e("cartcontrol",{attrs:{food:s},on:{"cart-add":t.cartAdd}})],1)])])}),0)])}),0)]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1)},staticRenderFns:[]};var E=e("VU/8")(x,k,!1,function(t){e("KDf5")},null,null).exports,S={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("seller")])},staticRenderFns:[]};var P=e("VU/8")({},S,!1,function(t){e("mIGZ")},null,null).exports,$={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("ratings")])},staticRenderFns:[]};var N=e("VU/8")({},$,!1,function(t){e("l3Ll")},null,null).exports;e("34KM");i.default.use(f.a),i.default.use(p.a);var M=[{path:"/",redirect:"/goods"},{path:"/goods",component:E},{path:"/ratings",component:N},{path:"/seller",component:P}],F=new f.a({linkActiveClass:"active",linkExactActiveClass:"active",routes:M});new i.default({el:"#app",router:F,VueResource:p.a,render:function(t){return t(h)}})},QZmp:function(t,s){},SMEw:function(t,s){},WJej:function(t,s){},WNDE:function(t,s){},l3Ll:function(t,s){},mIGZ:function(t,s){},tvR6:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.c3de8d709884d215bd85.js.map