(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{254:function(t,e,n){var content=n(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("71426ee4",content,!1,{sourceMap:!1})},255:function(t,e,n){"use strict";n(254)},256:function(t,e,n){var o=n(41)(!1);o.push([t.i,"section[data-v-d37db69e]{padding:10px;margin:10px 0;display:flex;flex-direction:row}section[data-v-d37db69e]:nth-child(2n){background-color:#ddd}img[data-v-d37db69e]{padding-right:20px;width:200px}.created[data-v-d37db69e]{font-size:70%}.short[data-v-d37db69e]{padding-top:10px}",""]),t.exports=o},257:function(t,e,n){"use strict";var o={props:{posts:Array}},r=(n(255),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.posts,(function(e){return n("section",{key:e._id},[e.thumbnail?n("div",[n("img",{attrs:{src:e.thumbnail}})]):t._e(),t._v(" "),n("div",[n("h3",[n("nuxt-link",{attrs:{to:{params:{post:e.path,category:e.category.path?e.category.path:e.category},name:"category-post"}}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")])],1),t._v(" "),n("small",{staticClass:"created"},[t._v(t._s(t._f("dateTime")(e.created)))]),t._v(" "),n("div",{staticClass:"short",domProps:{innerHTML:t._s(e.short)}})])])})),0)}),[],!1,null,"d37db69e",null);e.a=component.exports},273:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("c6301d64",content,!1,{sourceMap:!1})},282:function(t,e,n){"use strict";n(273)},283:function(t,e,n){var o=n(41)(!1);o.push([t.i,"h1[data-v-ab47d822]{padding:10px}",""]),t.exports=o},294:function(t,e,n){"use strict";n.r(e);n(21);var o={components:{PostsList:n(257).a},props:{category:Object,posts:Array},head:function(){return{title:this.category.name,meta:[{hid:"description",name:"description",content:this.category.name}]}}},r=(n(282),n(7)),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.category.name))]),t._v(" "),n("PostsList",{attrs:{posts:t.posts}})],1)}),[],!1,null,"ab47d822",null).exports,d=n(107),l=n(9),f=Object(d.a)(l.name).useState;var v={components:{Category:c},asyncData:function(t){return function(t,e,n){var o=e.params.category;return t.dispatch(l.name+"/"+l.ACTIONS.INIT,o).catch((function(){n({statusCode:404,message:"Category not found"})}))}(t.store,t.route,t.error)},setup:function(){return f({posts:l.DATA.POSTS,metadata:l.DATA.METADATA})}},h=Object(r.a)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Category",{attrs:{category:t.metadata,posts:t.posts}})}),[],!1,null,null,null);e.default=h.exports}}]);