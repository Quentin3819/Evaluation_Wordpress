this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var r,i,a=t[0],l=t[1],u=t[2],b=0,p=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={12:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;return o.push([640,2,1,0]),n()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.React}()},100:function(e,t,n){"use strict";var r=n(13),c=n.n(r),o=n(18),i=n.n(o),a=n(14),l=n.n(a),u=n(15),s=n.n(u),b=n(16),p=n.n(b),d=n(0),f=n(5),m=n(1),g=n(3);function O(e){var t=e.level,n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(d.createElement)(g.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(d.createElement)(g.Path,{d:n[t]})):null}var h=function(e){function t(){return c()(this,t),l()(this,s()(t).apply(this,arguments))}return p()(t,e),i()(t,[{key:"createLevelControl",value:function(e,t,n){var r=e===t;return{icon:Object(d.createElement)(O,{level:e}),title:Object(m.sprintf)(Object(m.__)("Heading %d"),e),isActive:r,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,r=void 0===n||n,c=t.minLevel,o=t.maxLevel,i=t.selectedLevel,a=t.onChange;return Object(d.createElement)(g.Toolbar,{isCollapsed:r,icon:Object(d.createElement)(O,{level:i}),controls:Object(f.range)(c,o).map((function(t){return e.createLevelControl(t,i,a)}))})}}]),t}(d.Component);t.a=h},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(35),c=n(34),o=n(0),i=n(38),a=function(e){var t=e.namespace,n=e.resourceName,a=e.resourceValues,l=void 0===a?[]:a,u=e.query,s=void 0===u?{}:u,b=e.shouldSelect,p=void 0===b||b;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");var d=Object(o.useRef)({results:[],isLoading:!0}),f=Object(i.a)(s),m=Object(i.a)(l),g=Object(c.useSelect)((function(e){if(!p)return null;var c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,f,m];return{results:c.getCollection.apply(c,o),isLoading:!c.hasFinishedResolution("getCollection",o)}}),[t,n,m,f,p]);return null!==g&&(d.current=g),d.current}},136:function(e,t,n){var r=n(137);"string"==typeof r&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};n(30)(r,c);r.locals&&(e.exports=r.locals)},137:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"r",(function(){return o})),n.d(t,"k",(function(){return i})),n.d(t,"m",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"l",(function(){return u})),n.d(t,"o",(function(){return s})),n.d(t,"d",(function(){return b})),n.d(t,"n",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"p",(function(){return f})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return g})),n.d(t,"f",(function(){return O})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return v})),n.d(t,"q",(function(){return j})),n.d(t,"a",(function(){return w})),n.d(t,"s",(function(){return _}));var r=n(4),c=Object(r.getSetting)("enableReviewRating",!0),o=Object(r.getSetting)("showAvatars",!0),i=Object(r.getSetting)("max_columns",6),a=Object(r.getSetting)("min_columns",1),l=Object(r.getSetting)("default_columns",3),u=Object(r.getSetting)("max_rows",6),s=Object(r.getSetting)("min_rows",1),b=Object(r.getSetting)("default_rows",2),p=Object(r.getSetting)("min_height",500),d=Object(r.getSetting)("default_height",500),f=Object(r.getSetting)("placeholderImgSrc",""),m=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),g=Object(r.getSetting)("limitTags"),O=Object(r.getSetting)("hasProducts",!0),h=Object(r.getSetting)("hasTags",!0),v=Object(r.getSetting)("homeUrl",""),j=Object(r.getSetting)("productCount",0),w=Object(r.getSetting)("attributes",[]),_=Object(r.getSetting)("wcBlocksAssetUrl","")},21:function(e,t){!function(){e.exports=this.wp.compose}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},3:function(e,t){!function(){e.exports=this.wp.components}()},338:function(e,t,n){"use strict";var r=n(0),c=n(3);t.a=function(){return Object(r.createElement)(c.Icon,{icon:Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(r.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(r.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(r.createElement)("g",{mask:"url(#external-mask)"},Object(r.createElement)("path",{d:"M0 0h24v24H0z"})))})}},34:function(e,t){!function(){e.exports=this.wp.data}()},35:function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(42),o=n.n(c),i=function(e){var t=Object(r.useRef)();return o()(e,t.current)||(t.current=e),t.current}},4:function(e,t){!function(){e.exports=this.wc.wcSettings}()},42:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=Object(r.createContext)("page"),o=function(){return Object(r.useContext)(c)};c.Provider},49:function(e,t){!function(){e.exports=this.wp.blockEditor}()},5:function(e,t){!function(){e.exports=this.lodash}()},55:function(e,t,n){"use strict";var r=n(11),c=n.n(r),o=n(13),i=n.n(o),a=n(18),l=n.n(a),u=n(14),s=n.n(u),b=n(15),p=n.n(b),d=n(12),f=n.n(d),m=n(16),g=n.n(m),O=n(0),h=n(5),v=n(6),j=n.n(v),w=n(3),_=n(21),y=(n(107),function(e){function t(){var e;return i()(this,t),(e=s()(this,p()(t).apply(this,arguments))).onClick=e.onClick.bind(f()(e)),e}return g()(t,e),l()(t,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.label,o=n.checked,i=n.instanceId,a=n.className,l=n.help,u=n.options,s=n.value,b="inspector-toggle-button-control-".concat(i);return l&&(e=Object(h.isFunction)(l)?l(o):l),Object(O.createElement)(w.BaseControl,{id:b,help:e,className:j()("components-toggle-button-control",a)},Object(O.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},r),Object(O.createElement)(w.ButtonGroup,{"aria-labelledby":b+"__label"},u.map((function(e,n){var o={};return s===e.value?(o.isPrimary=!0,o["aria-pressed"]=!0):(o.isDefault=!0,o["aria-pressed"]=!1),Object(O.createElement)(w.Button,c()({key:"".concat(e.label,"-").concat(e.value,"-").concat(n),value:e.value,onClick:t.onClick,"aria-label":r+": "+e.label},o),e.label)}))))}}]),t}(O.Component));t.a=Object(_.withInstanceId)(y)},625:function(e,t,n){var r=n(626);"string"==typeof r&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};n(30)(r,c);r.locals&&(e.exports=r.locals)},626:function(e,t,n){},627:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(7),c=n.n(r),o=n(61),i=n.n(o),a=n(84),l=n.n(a),u=n(24),s=n.n(u),b=n(0),p=n(90),d=n(108),f=n(47),m=n(347),g=n(5),O=n(38);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.queryAttribute,n=e.queryPrices,r=e.queryState,c=Object(f.a)();c="".concat(c,"-collection-data");var o=Object(p.a)(c),a=s()(o,1)[0],u=Object(p.b)("calculate_attribute_counts",[],c),h=s()(u,2),j=h[0],w=h[1],_=Object(p.b)("calculate_price_range",null,c),y=s()(_,2),k=y[0],E=y[1],x=Object(O.a)(t||{}),C=Object(O.a)(n);Object(b.useEffect)((function(){"object"===l()(x)&&Object.keys(x).length&&(j.find((function(e){return e.taxonomy===x.taxonomy}))||w([].concat(i()(j),[x])))}),[x,j,w]),Object(b.useEffect)((function(){k!==C&&void 0!==C&&E(C)}),[C,E,k]);var S=Object(b.useState)(!1),P=s()(S,2),F=P[0],N=P[1],L=Object(m.a)(F,200),R=s()(L,1)[0];F||N(!0);var B=Object(b.useMemo)((function(){return function(e){var t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(g.sortBy)(e.calculate_attribute_counts.map((function(e){return{taxonomy:e.taxonomy,query_type:e.queryType}})),["taxonomy","query_type"])),t}(a)}),[a]);return Object(d.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:v({},r,{page:void 0,per_page:void 0,orderby:void 0,order:void 0},B),shouldSelect:R})}},640:function(e,t,n){"use strict";n.r(t);var r=n(11),c=n.n(r),o=n(0),i=n(1),a=n(25),l=n(6),u=n.n(l),s=n(49),b=n(3),p=n(17),d=n(4),f=n(100),m=n(98),g=n(24),O=n.n(g),h=n(90),v=n(627),j=(n(2),n(628),function(e,t,n,r,c){var o=parseInt(e[0],10)||t,i=parseInt(e[1],10)||r;return t>o&&(o=t),n<=o&&(o=n-r),t>=i&&(i=t+r),n<i&&(i=n),!c&&o>=i&&(o=i-r),c&&i<=o&&(i=o+r),[o,i]}),w=n(88),_=function(e){var t=e.disabled,n=e.onClick;return Object(o.createElement)("button",{type:"submit",className:"wc-block-price-filter__button wc-block-form-button",disabled:t,onClick:n},Object(i.__)("Go","woo-gutenberg-products-block"))};_.defaultProps={disabled:!1};var y=_,k=function(e){var t=e.minPrice,n=e.maxPrice;return t||n?Object(o.createElement)("div",{className:"wc-block-price-filter__range-text"},Object(i.sprintf)(Object(i.__)("Price: %s — %s","woo-gutenberg-products-block"),t,n)):null},E=function(e){var t=e.disabled,n=e.onBlur,r=e.onChange,c=e.minPrice,a=e.maxPrice;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("input",{type:"text",size:"5",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),onChange:r,onBlur:n,disabled:t,value:c}),Object(o.createElement)("input",{type:"text",size:"5",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),onChange:r,onBlur:n,disabled:t,value:a}))};E.defaultProps={disabled:!1,onBlur:function(){},onChange:function(){}};var x=E,C=function(e){var t=e.minPrice,n=e.maxPrice,r=e.minConstraint,c=e.maxConstraint,a=e.onChange,l=void 0===a?function(){}:a,s=e.step,b=void 0===s?10:s,p=e.currencySymbol,d=void 0===p?"$":p,f=e.priceFormat,m=void 0===f?"%1$s%2$s":f,g=e.showInputFields,h=void 0===g||g,v=e.showFilterButton,_=void 0!==v&&v,E=e.isLoading,C=void 0!==E&&E,S=e.onSubmit,P=void 0===S?function(){}:S,F=Object(o.useRef)(),N=Object(o.useRef)(),L=Object(o.useState)(Object(w.a)(t,m,d)),R=O()(L,2),B=R[0],I=R[1],M=Object(o.useState)(Object(w.a)(n,m,d)),H=O()(M,2),z=H[0],T=H[1];Object(o.useEffect)((function(){I(Object(w.a)(t,m,d))}),[t,m,d]),Object(o.useEffect)((function(){T(Object(w.a)(n,m,d))}),[n,m,d]);var V=Object(o.useMemo)((function(){return isFinite(r)&&isFinite(c)}),[r,c]),D=Object(o.useMemo)((function(){return isFinite(t)&&isFinite(n)&&V?{"--low":Math.round((t-r)/(c-r)*100)-.5+"%","--high":Math.round((n-r)/(c-r)*100)+.5+"%"}:{"--low":"0%","--high":"100%"}}),[t,n,r,c,V]),U=Object(o.useCallback)((function(e){if(!C&&V){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=F.current.offsetWidth,o=F.current.value,i=N.current.offsetWidth,a=N.current.value,l=r*(o/c),u=i*(a/c);Math.abs(n-l)>Math.abs(n-u)?(F.current.style.zIndex=20,N.current.style.zIndex=21):(F.current.style.zIndex=21,N.current.style.zIndex=20)}}),[C,c,V]),Y=Object(o.useCallback)((function(e){var o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=e.target.value,a=j(o?[i,n]:[t,i],r,c,b,o);l([parseInt(a[0],10),parseInt(a[1],10)])}),[t,n,r,c,b]),q=Object(o.useCallback)((function(e){var o=e.target.classList.contains("wc-block-price-filter__amount--min"),i=e.target.value.replace(/[^0-9.-]+/g,""),a=j(o?[i,n]:[t,i],r,c,b,o);l([parseInt(a[0],10),parseInt(a[1],10)]),I(Object(w.a)(parseInt(a[0],10),m,d)),T(Object(w.a)(parseInt(a[1],10),m,d))}),[t,n,r,c,b]),A=Object(o.useCallback)((function(e){var t=e.target.value.replace(/[^0-9.-]+/g,"");e.target.classList.contains("wc-block-price-filter__amount--min")?I(Object(w.a)(t,m,d)):T(Object(w.a)(t,m,d))}),[m,d]),Q=u()("wc-block-price-filter",h&&"wc-block-price-filter--has-input-fields",_&&"wc-block-price-filter--has-filter-button",C&&"is-loading",!V&&"is-disabled");return Object(o.createElement)("div",{className:Q},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-wrapper",onMouseMove:U,onFocus:U},!C&&V&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress",style:D}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),value:t||0,onChange:Y,step:b,min:r,max:c,ref:F}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),value:n||0,onChange:Y,step:b,min:r,max:c,ref:N}))),Object(o.createElement)("div",{className:"wc-block-price-filter__controls"},h?Object(o.createElement)(x,{disabled:C||!V,onChange:A,onBlur:q,minPrice:B,maxPrice:z}):Object(o.createElement)(k,{minPrice:B,maxPrice:z}),_&&Object(o.createElement)(y,{disabled:C||!V,onClick:P})))},S=n(346),P=function(e){var t=e.attributes,n=e.isEditor,r=void 0!==n&&n,c=Object(h.b)("min_price"),i=O()(c,2),a=i[0],l=i[1],u=Object(h.b)("max_price"),s=O()(u,2),b=s[0],p=s[1],f=Object(h.a)(),m=O()(f,1)[0],g=Object(v.a)({queryPrices:!0,queryState:m}),j=g.results,w=g.isLoading,_=Object(o.useState)(),y=O()(_,2),k=y[0],E=y[1],x=Object(o.useState)(),P=O()(x,2),F=P[0],N=P[1],L=isNaN(j.min_price)?null:10*Math.floor(parseInt(j.min_price,10)/10),R=isNaN(j.max_price)?null:10*Math.ceil(parseInt(j.max_price,10)/10),B=Object(S.a)((function(){M()}),500),I=O()(B,1)[0],M=Object(o.useCallback)((function(){l(k===L?void 0:k),p(F===R?void 0:F)}),[k,F,L,R]),H=Object(o.useCallback)((function(e){e[0]!==k&&E(e[0]),e[1]!==F&&N(e[1])}),[L,R,k,F]);if(Object(o.useEffect)((function(){t.showFilterButton||I()}),[k,F,t.showFilterButton]),Object(o.useEffect)((function(){a!==k&&E(Number.isFinite(a)?a:L),b!==F&&N(Number.isFinite(b)?b:R)}),[a,b,L,R]),!w&&(null===L||null===R||L===R))return null;var z="h".concat(t.headingLevel),T=Math.max(Number.isFinite(k)?k:-1/0,Number.isFinite(L)?L:-1/0),V=Math.min(Number.isFinite(F)?F:1/0,Number.isFinite(R)?R:1/0);return Object(o.createElement)(o.Fragment,null,!r&&t.heading&&Object(o.createElement)(z,null,t.heading),Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(C,{minConstraint:L,maxConstraint:R,minPrice:T,maxPrice:V,step:10,currencySymbol:d.CURRENCY.symbol,priceFormat:d.CURRENCY.price_format,showInputFields:t.showInputFields,showFilterButton:t.showFilterButton,onChange:H,onSubmit:M,isLoading:w})))},F=(n(625),function(){return Object(o.createElement)(b.Icon,{icon:Object(o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(o.createElement)("mask",{id:"money-mask",width:"20",height:"14",x:"2",y:"5",maskUnits:"userSpaceOnUse"},Object(o.createElement)("path",{fill:"#fff",fillRule:"evenodd",d:"M2 5v14h20V5H2zm5 12c0-1.657-1.343-3-3-3v-4c1.657 0 3-1.343 3-3h10c0 1.657 1.343 3 3 3v4c-1.657 0-3 1.343-3 3H7zm7-5c0-1.7-.9-3-2-3s-2 1.3-2 3 .9 3 2 3 2-1.3 2-3z",clipRule:"evenodd"})),Object(o.createElement)("g",{mask:"url(#money-mask)"},Object(o.createElement)("path",{d:"M0 0h24v24H0z"})))})}),N=n(338),L=n(55);Object(a.registerBlockType)("woocommerce/price-filter",{title:Object(i.__)("Filter Products by Price","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(F,null),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block"),supports:{},example:{},attributes:{showInputFields:{type:"boolean",default:!0},showFilterButton:{type:"boolean",default:!1},heading:{type:"string",default:Object(i.__)("Filter by price","woo-gutenberg-products-block")},headingLevel:{type:"number",default:3}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=t.className,c=t.heading,a=t.headingLevel,l=t.showInputFields,u=t.showFilterButton;return Object(o.createElement)(o.Fragment,null,0===p.q?Object(o.createElement)(b.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(F,null),label:Object(i.__)("Filter Products by Price","woo-gutenberg-products-block"),instructions:Object(i.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block")},Object(o.createElement)("p",null,Object(i.__)("Products with prices are needed for filtering by price. You haven't created any products yet.","woo-gutenberg-products-block")),Object(o.createElement)(b.Button,{className:"wc-block-price-slider__add_product_button",isDefault:!0,isLarge:!0,href:Object(d.getAdminLink)("post-new.php?post_type=product")},Object(i.__)("Add new product","woo-gutenberg-products-block")+" ",Object(o.createElement)(N.a,null)),Object(o.createElement)(b.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(i.__)("Learn more","woo-gutenberg-products-block"))):Object(o.createElement)("div",{className:r},Object(o.createElement)(s.InspectorControls,{key:"inspector"},Object(o.createElement)(b.PanelBody,{title:Object(i.__)("Block Settings","woo-gutenberg-products-block")},Object(o.createElement)(L.a,{label:Object(i.__)("Price Range","woo-gutenberg-products-block"),value:l?"editable":"text",options:[{label:Object(i.__)("Editable","woo-gutenberg-products-block"),value:"editable"},{label:Object(i.__)("Text","woo-gutenberg-products-block"),value:"text"}],onChange:function(e){return n({showInputFields:"editable"===e})}}),Object(o.createElement)(b.ToggleControl,{label:Object(i.__)("Filter button","woo-gutenberg-products-block"),help:u?Object(i.__)("Results will only update when the button is pressed.","woo-gutenberg-products-block"):Object(i.__)("Results will update when the slider is moved.","woo-gutenberg-products-block"),checked:u,onChange:function(){return n({showFilterButton:!u})}}),Object(o.createElement)("p",null,Object(i.__)("Heading Level","woo-gutenberg-products-block")),Object(o.createElement)(f.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:a,onChange:function(e){return n({headingLevel:e})}}))),Object(o.createElement)(m.a,{headingLevel:a,heading:c,onChange:function(e){return n({heading:e})}}),Object(o.createElement)(b.Disabled,null,Object(o.createElement)(P,{attributes:t,isEditor:!0}))))},save:function(e){var t=e.attributes,n=t.className,r={"data-showinputfields":t.showInputFields,"data-showfilterbutton":t.showFilterButton,"data-heading":t.heading,"data-heading-level":t.headingLevel};return Object(o.createElement)("div",c()({className:u()("is-loading",n)},r),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),c=n(4),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.CURRENCY.price_format,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.CURRENCY.symbol;if(""===e||void 0===e)return"";var o=parseInt(e,10),i=Object(r.sprintf)(t,n,o),a=document.createElement("textarea");return a.innerHTML=i,a.value}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(7),c=n.n(r),o=n(24),i=n.n(o),a=n(35),l=n(34),u=n(0),s=n(47),b=n(38);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=function(e){var t=Object(s.a)();e=e||t;var n=Object(l.useSelect)((function(t){return t(a.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),r=Object(l.useDispatch)(a.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[n,Object(u.useCallback)((function(t){r(e,t)}),[e])]},f=function(e,t,n){var r=Object(s.a)();n=n||r;var c=Object(l.useSelect)((function(r){return r(a.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)}),[n,e]),o=Object(l.useDispatch)(a.QUERY_STATE_STORE_KEY).setQueryValue;return[c,Object(u.useCallback)((function(t){o(n,e,t)}),[n,e])]},m=function(e,t){var n=Object(s.a)(),r=d(t=t||n),o=i()(r,2),a=o[0],l=o[1],f=Object(b.a)(e),m=Object(u.useRef)(!1);return Object(u.useEffect)((function(){l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a,{},f)),m.current=!0}),[f]),m.current?[a,l]:[e,l]}},98:function(e,t,n){"use strict";var r=n(0),c=(n(2),n(49)),o=n(6),i=n.n(o);n(136);t.a=function(e){var t=e.className,n=e.headingLevel,o=e.onChange,a=e.heading,l="h".concat(n);return Object(r.createElement)(l,null,Object(r.createElement)(c.PlainText,{className:i()("wc-block-component-title",t),value:a,onChange:o}))}}});