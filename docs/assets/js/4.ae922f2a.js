(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{410:function(t,e,n){},411:function(t,e,n){},413:function(t,e,n){"use strict";n(410)},414:function(t,e,n){"use strict";n(411)},415:function(t,e,n){"use strict";var r=n(13),i=n(6),a=n(228),o=n(29),s=n(10),u=n(33),c=n(416),p=n(61),l=n(4),f=n(41),m=n(85).f,v=n(40).f,g=n(14).f,d=n(239).trim,h=i.Number,_=h.prototype,b="Number"==u(f(_)),y=function(t){var e,n,r,i,a,o,s,u,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=d(c)).charCodeAt(0))||45===e){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(o=(a=c.slice(2)).length,s=0;s<o;s++)if((u=a.charCodeAt(s))<48||u>i)return NaN;return parseInt(a,r)}return+c};if(a("Number",!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var C,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(b?l((function(){_.valueOf.call(n)})):"Number"!=u(n))?c(new h(y(e)),n,x):y(e)},$=r?m(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;$.length>N;N++)s(h,C=$[N])&&!s(x,C)&&g(x,C,v(h,C));x.prototype=_,_.constructor=x,o(i,"Number",x)}},416:function(t,e,n){var r=n(9),i=n(126);t.exports=function(t,e,n){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&i(t,o),t}},417:function(t,e,n){var r=n(236),i=n(229),a=n(418),o=n(422);t.exports=function(t,e){if(null==t)return{};var n=r(o(t),(function(t){return[t]}));return e=i(e),a(t,n,(function(t,n){return e(t,n[0])}))}},418:function(t,e,n){var r=n(131),i=n(419),a=n(124);t.exports=function(t,e,n){for(var o=-1,s=e.length,u={};++o<s;){var c=e[o],p=r(t,c);n(p,c)&&i(u,a(c,t),p)}return u}},419:function(t,e,n){var r=n(420),i=n(124),a=n(129),o=n(84),s=n(63);t.exports=function(t,e,n,u){if(!o(t))return t;for(var c=-1,p=(e=i(e,t)).length,l=p-1,f=t;null!=f&&++c<p;){var m=s(e[c]),v=n;if("__proto__"===m||"constructor"===m||"prototype"===m)return t;if(c!=l){var g=f[m];void 0===(v=u?u(g,m,f):void 0)&&(v=o(g)?g:a(e[c+1])?[]:{})}r(f,m,v),f=f[m]}return t}},420:function(t,e,n){var r=n(421),i=n(128),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];a.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n)}},421:function(t,e,n){var r=n(237);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},422:function(t,e,n){var r=n(230),i=n(423),a=n(425);t.exports=function(t){return r(t,a,i)}},423:function(t,e,n){var r=n(127),i=n(424),a=n(231),o=n(232),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,a(t)),t=i(t);return e}:o;t.exports=s},424:function(t,e,n){var r=n(235)(Object.getPrototypeOf,Object);t.exports=r},425:function(t,e,n){var r=n(233),i=n(426),a=n(130);t.exports=function(t){return a(t)?r(t,!0):i(t)}},426:function(t,e,n){var r=n(84),i=n(234),a=n(427),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return a(t);var e=i(t),n=[];for(var s in t)("constructor"!=s||!e&&o.call(t,s))&&n.push(s);return n}},427:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},428:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return f}));n(16);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,455,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(413),n(8)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,o=(n(414),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),s=(n(415),n(86)),u=n.n(s),c=n(417),p=n.n(c),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return p()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(i.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},433:function(t,e,n){},444:function(t,e,n){"use strict";n(433)},461:function(t,e,n){"use strict";n.r(e);n(62),n(1);var r=n(132),i=n.n(r),a=n(428),o={data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return a.b},resolvePostDate:function(t){return i()(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},s=(n(444),n(8)),u=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:""}},[n("div",{staticClass:"card-panel-content row",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(e){return n("article",{key:e.key,staticClass:"ui-post entry col-md-4 card-container",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("meta",{attrs:{itemprop:"mainEntityOfPage",content:e.path}}),t._v(" "),n("div",{staticClass:"entry card h-100"},[n("div",{staticClass:"card-header-image"},[n("NavLink",{attrs:{link:e.path}},[n("img",{attrs:{src:e.frontmatter.featuredimg}})])],1),t._v(" "),n("div",{staticClass:"card-inside"},[n("div",{staticClass:"card-subheading"},[e.frontmatter.tags?n("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},t._l(t.resolvePostTags(e.frontmatter.tags),(function(e){return n("router-link",{key:e,attrs:{to:"/tag/"+e}},[t._v("\n                "+t._s(e)+"\n              ")])})),1):t._e()]),t._v(" "),n("h2",{staticClass:"heading",attrs:{itemprop:"name headline"}},[n("NavLink",{staticClass:"heading",attrs:{link:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),n("p",{attrs:{itemprop:"description"}},[t._v("\n            "+t._s(e.frontmatter.summary||e.summary)+"\n          ")])]),t._v(" "),n("div",{staticClass:"meta-bottom mt-auto"},[t.$themeConfig.authors?n("div",t._l(t.$themeConfig.authors,(function(r){return n("span",{key:r.name,staticClass:"nav-item"},[n("div",{staticClass:"d-flex"},[n("a",{staticClass:"profile-avatar"},[r.name===e.frontmatter.author?n("img",{staticClass:"avatar-image",attrs:{src:t.$withBase(r.avatar),alt:r.name}}):t._e()]),t._v(" "),n("div",{staticClass:"meta"},[r.name===e.frontmatter.author?n("div",[n("span",{staticClass:"username"},[t._v(t._s(r.name))]),t._v("  \n                  ")]):t._e(),t._v(" "),n("div")])])])})),0):t._e(),t._v(" "),e.frontmatter.date?n("div",{staticClass:"date"},[n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:e.frontmatter.date}},[t._v("\n              "+t._s(t.resolvePostDate(e.frontmatter.date))+"\n            ")])]):t._e()])])])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?n(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);e.default=u.exports}}]);