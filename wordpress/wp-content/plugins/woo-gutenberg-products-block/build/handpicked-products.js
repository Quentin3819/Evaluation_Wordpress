this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["handpicked-products"]=function(e){function t(t){for(var n,i,u=t[0],s=t[1],a=t[2],d=0,b=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);b.length;)b.shift()();return c.push.apply(c,a||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={11:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=s;return c.push([644,2,0]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.React}()},17:function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"r",(function(){return c})),r.d(t,"k",(function(){return i})),r.d(t,"m",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"l",(function(){return a})),r.d(t,"o",(function(){return l})),r.d(t,"d",(function(){return d})),r.d(t,"n",(function(){return b})),r.d(t,"c",(function(){return p})),r.d(t,"p",(function(){return g})),r.d(t,"i",(function(){return f})),r.d(t,"j",(function(){return h})),r.d(t,"f",(function(){return O})),r.d(t,"g",(function(){return j})),r.d(t,"h",(function(){return m})),r.d(t,"q",(function(){return w})),r.d(t,"a",(function(){return y})),r.d(t,"s",(function(){return v}));var n=r(4),o=Object(n.getSetting)("enableReviewRating",!0),c=Object(n.getSetting)("showAvatars",!0),i=Object(n.getSetting)("max_columns",6),u=Object(n.getSetting)("min_columns",1),s=Object(n.getSetting)("default_columns",3),a=Object(n.getSetting)("max_rows",6),l=Object(n.getSetting)("min_rows",1),d=Object(n.getSetting)("default_rows",2),b=Object(n.getSetting)("min_height",500),p=Object(n.getSetting)("default_height",500),g=Object(n.getSetting)("placeholderImgSrc",""),f=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),h=Object(n.getSetting)("limitTags"),O=Object(n.getSetting)("hasProducts",!0),j=Object(n.getSetting)("hasTags",!0),m=Object(n.getSetting)("homeUrl",""),w=Object(n.getSetting)("productCount",0),y=Object(n.getSetting)("attributes",[]),v=Object(n.getSetting)("wcBlocksAssetUrl","")},19:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},20:function(e,t){!function(){e.exports=this.moment}()},21:function(e,t){!function(){e.exports=this.wp.compose}()},22:function(e,t){!function(){e.exports=this.wp.editor}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},26:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},27:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(19),o=r.n(n),c=function(e){var t;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if("function"!=typeof e.json){r.next=11;break}return r.prev=1,r.next=4,o.a.awrap(e.json());case 4:return t=r.sent,r.abrupt("return",{message:t.message,type:t.type||"api"});case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",{message:r.t0.message,type:"general"});case 11:return r.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return r.stop()}}),null,null,[[1,8]])}},28:function(e,t,r){"use strict";var n=r(7),o=r.n(n),c=r(9),i=r(8),u=r.n(i),s=r(5),a=r(17),l={root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories")};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"g",(function(){return p})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return f})),r.d(t,"c",(function(){return h})),r.d(t,"b",(function(){return O})),r.d(t,"f",(function(){return j})),r.d(t,"a",(function(){return m})),r.d(t,"h",(function(){return w}));var p=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,d=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,u=void 0===i?[]:i,s={per_page:a.i?100:-1,catalog_visibility:"any",status:"publish",search:o,orderby:"title",order:"asc"},d=[Object(c.addQueryArgs)(l.products,b({},s,{},u))];return a.i&&r.length&&d.push(Object(c.addQueryArgs)(l.products,{catalog_visibility:"any",status:"publish",include:r})),d}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(d.map((function(e){return u()({path:e})}))).then((function(e){return Object(s.uniqBy)(Object(s.flatten)(e),"id").map((function(e){return b({},e,{parent:0})}))})).catch((function(e){throw e}))},g=function(e){return u()({path:"".concat(l.products,"/").concat(e)})},f=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=[Object(c.addQueryArgs)("".concat(l.products,"/tags"),{per_page:a.j?100:-1,orderby:a.j?"count":"name",order:a.j?"desc":"asc",search:n})];return a.j&&r.length&&o.push(Object(c.addQueryArgs)("".concat(l.products,"/tags"),{include:r})),o}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return u()({path:e})}))).then((function(e){return Object(s.uniqBy)(Object(s.flatten)(e),"id")}))},h=function(e){return u()({path:"".concat(l.categories,"/").concat(e)})},O=function(e){return u()({path:Object(c.addQueryArgs)("".concat(l.products,"/categories"),b({per_page:-1},e))})},j=function(e){return u()({path:Object(c.addQueryArgs)("".concat(l.products,"/").concat(e,"/variations"),{per_page:-1})})},m=function(){return u()({path:Object(c.addQueryArgs)("".concat(l.products,"/attributes"),{per_page:-1})})},w=function(e){return u()({path:Object(c.addQueryArgs)("".concat(l.products,"/attributes/").concat(e,"/terms"),{per_page:-1})})}},3:function(e,t){!function(){e.exports=this.wp.components}()},31:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(26));t.a=function(e){var t,r,i,u=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=u).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},334:function(e,t,r){"use strict";var n=r(11),o=r.n(n),c=r(19),i=r.n(c),u=r(13),s=r.n(u),a=r(18),l=r.n(a),d=r(14),b=r.n(d),p=r(15),g=r.n(p),f=r(12),h=r.n(f),O=r(16),j=r.n(O),m=r(0),w=r(5),y=r(21),v=(r(2),r(17)),_=r(28),k=r(27),E=Object(y.createHigherOrderComponent)((function(e){var t=function(t){function r(){var e;return s()(this,r),(e=b()(this,g()(r).apply(this,arguments))).state={list:[],loading:!0},e.setError=e.setError.bind(h()(e)),e.debouncedOnSearch=Object(w.debounce)(e.onSearch.bind(h()(e)),400),e}return j()(r,t),l()(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.selected;Object(_.g)({selected:t}).then((function(t){e.setState({list:t,loading:!1})})).catch(this.setError)}},{key:"componentWillUnmount",value:function(){this.debouncedOnSearch.cancel()}},{key:"onSearch",value:function(e){var t=this,r=this.props.selected;Object(_.g)({selected:r,search:e}).then((function(e){t.setState({list:e,loading:!1})})).catch(this.setError)}},{key:"setError",value:function(e){var t;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.awrap(Object(k.a)(e));case 2:t=r.sent,this.setState({list:[],loading:!1,error:t});case 4:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){var t=this,r=this.state,n=r.error,c=r.list,i=r.loading;return Object(m.createElement)(e,o()({},this.props,{error:n,products:c,isLoading:i,onSearch:v.i?function(e){t.setState({loading:!0}),t.debouncedOnSearch(e)}:null}))}}]),r}(m.Component);return t.defaultProps={selected:[]},t}),"withSearchedProducts");t.a=E},359:function(e,t,r){var n=r(360);"string"==typeof n&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(30)(n,o);n.locals&&(e.exports=n.locals)},360:function(e,t,r){},37:function(e,t){!function(){e.exports=this.wp.keycodes}()},4:function(e,t){!function(){e.exports=this.wc.wcSettings}()},44:function(e,t,r){"use strict";var n=r(7),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(3));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,o=r.price,s=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(a({},r,{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return t(a({},r,{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:s?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return t(a({},r,{rating:!s}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return t(a({},r,{button:!n}))}}))}},5:function(e,t){!function(){e.exports=this.lodash}()},51:function(e,t){!function(){e.exports=this.ReactDOM}()},54:function(e,t){!function(){e.exports=this.wp.viewport}()},56:function(e,t,r){"use strict";var n=r(0),o=r(6),c=r.n(o),i=r(24),u=r.n(i),s=r(17);r.d(t,"a",(function(){return a}));var a=function(e){return function(t){var r=t.attributes,o=r.align,i=r.contentVisibility,a=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:a},function(e,t){var r=e.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,a=r.orderby,l=r.products,d=r.columns||s.b,b=r.rows||s.d,p=new Map;switch(p.set("limit",b*d),p.set("columns",d),c&&c.length&&(p.set("category",c.join(",")),i&&"all"===i&&p.set("cat_operator","AND")),n&&n.length&&(p.set("terms",n.map((function(e){return e.id})).join(",")),p.set("attribute",n[0].attr_slug),o&&"all"===o&&p.set("terms_operator","AND")),a&&("price_desc"===a?(p.set("orderby","price"),p.set("order","DESC")):"price_asc"===a?(p.set("orderby","price"),p.set("order","ASC")):"date"===a?(p.set("orderby","date"),p.set("order","DESC")):p.set("orderby",a)),t){case"woocommerce/product-best-sellers":p.set("best_selling","1");break;case"woocommerce/product-top-rated":p.set("orderby","rating");break;case"woocommerce/product-on-sale":p.set("on_sale","1");break;case"woocommerce/product-new":p.set("orderby","date"),p.set("order","DESC");break;case"woocommerce/handpicked-products":if(!l.length)return"";p.set("ids",l.join(",")),p.set("limit",l.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var g="[products",f=!0,h=!1,O=void 0;try{for(var j,m=p[Symbol.iterator]();!(f=(j=m.next()).done);f=!0){var w=u()(j.value,2);g+=" "+w[0]+'="'+w[1]+'"'}}catch(e){h=!0,O=e}finally{try{f||null==m.return||m.return()}finally{if(h)throw O}}return g+="]"}(t,e))}}},60:function(e,t){!function(){e.exports=this.wp.hooks}()},63:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},64:function(e,t){!function(){e.exports=this.wp.date}()},644:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),c=r(25),i=r(17),u=r(3),s=function(){return Object(n.createElement)(u.Icon,{className:"material-icon",icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"}),Object(n.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}))})},a=(r(359),r(13)),l=r.n(a),d=r(18),b=r.n(d),p=r(14),g=r.n(p),f=r(15),h=r.n(f),O=r(16),j=r.n(O),m=r(22),w=(r(2),r(44)),y=r(32),v=r(334),_=r(31),k=function(e){var t=e.error,r=e.onChange,c=e.onSearch,i=e.selected,u=e.products,s=e.isLoading,a={clear:Object(o.__)("Clear all products","woo-gutenberg-products-block"),list:Object(o.__)("Products","woo-gutenberg-products-block"),noItems:Object(o.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(o.__)("Search for products to display","woo-gutenberg-products-block"),selected:function(e){return Object(o.sprintf)(Object(o._n)("%d product selected","%d products selected",e,"woo-gutenberg-products-block"),e)},updated:Object(o.__)("Product search results updated.","woo-gutenberg-products-block")};return t?Object(n.createElement)(_.a,{error:t}):Object(n.createElement)(y.a,{className:"woocommerce-products",list:u,isLoading:s,selected:u.filter((function(e){var t=e.id;return i.includes(t)})),onSearch:c,onChange:r,messages:a})};k.defaultProps={selected:[],products:[],isLoading:!0};var E=Object(v.a)(k),S=r(68),P=r(94),C=function(e){function t(){return l()(this,t),g()(this,h()(t).apply(this,arguments))}return j()(t,e),b()(t,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,c=t.columns,s=t.contentVisibility,a=t.orderby,l=t.alignButtons;return Object(n.createElement)(m.InspectorControls,{key:"inspector"},Object(n.createElement)(u.PanelBody,{title:Object(o.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(u.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:c,onChange:function(e){return r({columns:e})},min:i.m,max:i.k}),Object(n.createElement)(u.ToggleControl,{label:Object(o.__)("Align Buttons","woo-gutenberg-products-block"),help:l?Object(o.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:l,onChange:function(){return r({alignButtons:!l})}})),Object(n.createElement)(u.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(w.a,{settings:s,onChange:function(e){return r({contentVisibility:e})}})),Object(n.createElement)(u.PanelBody,{title:Object(o.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(S.a,{setAttributes:r,value:a})),Object(n.createElement)(u.PanelBody,{title:Object(o.__)("Products","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(E,{selected:t.products,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));r({products:t})}})))}},{key:"renderEditMode",value:function(){var e=this.props,t=e.attributes,r=e.debouncedSpeak,c=e.setAttributes;return Object(n.createElement)(u.Placeholder,{icon:Object(n.createElement)(s,null),label:Object(o.__)("Hand-picked Products","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-handpicked-products"},Object(o.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-handpicked-products__selection"},Object(n.createElement)(E,{selected:t.products,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));c({products:t})}}),Object(n.createElement)(u.Button,{isDefault:!0,onClick:function(){c({editMode:!1}),r(Object(o.__)("Showing Hand-picked Products block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block"))))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.name,c=e.setAttributes,i=t.editMode;return t.isPreview?P.a:Object(n.createElement)(n.Fragment,null,Object(n.createElement)(m.BlockControls,null,Object(n.createElement)(u.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return c({editMode:!i})},isActive:i}]})),this.getInspectorControls(),i?this.renderEditMode():Object(n.createElement)(u.Disabled,null,Object(n.createElement)(m.ServerSideRender,{block:r,attributes:t})))}}]),t}(n.Component),x=Object(u.withSpokenMessages)(C),A=r(56);Object(c.registerBlockType)("woocommerce/handpicked-products",{title:Object(o.__)("Hand-picked Products","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(s,null),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{align:{type:"string"},columns:{type:"number",default:i.b},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},products:{type:"array",default:[]},alignButtons:{type:"boolean",default:!1},isPreview:{type:"boolean",default:!1}},deprecated:[{attributes:{align:{type:"string"},columns:{type:"number",default:i.b},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},products:{type:"array",default:[]}},save:Object(A.a)("woocommerce/handpicked-products")}],edit:function(e){return Object(n.createElement)(x,e)},save:function(){return null}})},67:function(e,t){!function(){e.exports=this.wp.dom}()},68:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(3);r(2);t.a=function(e){var t=e.value,r=e.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return r({orderby:e})}})}},72:function(e,t){},75:function(e,t){},76:function(e,t){},77:function(e,t){},78:function(e,t){},8:function(e,t){!function(){e.exports=this.wp.apiFetch}()},9:function(e,t){!function(){e.exports=this.wp.url}()},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r(17),c=Object(n.createElement)("img",{src:o.s+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})}});