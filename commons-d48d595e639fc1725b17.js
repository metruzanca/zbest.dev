(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8+s/":function(e,t,r){"use strict";r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var n,a=r("q1tI"),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function d(){c=e(l.map((function(e){return e.props}))),u.canUseDOM?t(c):r&&(c=r(c))}var u=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),d()},o.componentDidUpdate=function(){d()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),d()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(u,"canUseDOM",s),u}}},"8ypT":function(e,t,r){},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),s=n(r("8OQS")),c=n(r("pVnL")),l=n(r("q1tI")),d=n(r("17x9")),u=function(e){var t=(0,c.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=u(e),r=p(t);return g[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),l.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function O(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function T(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function A(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function E(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+l+o+s+r+n+t+i+a+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=l.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(j,(0,c.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?l.default.createElement("picture",null,a(n),s):s})),j=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},h,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));j.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=p(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,m=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,O=e.loading,E=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,c.default)({opacity:k?1:0,transition:P?"opacity "+b+"ms":"none"},s),L="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},N=(0,c.default)((0,c.default)((0,c.default)({opacity:this.state.imgLoaded?0:1},P&&R),s),f),M={title:t,alt:this.state.isVisible?"":r,style:N,className:p,itemProp:w};if(g){var H=g,z=h(g);return l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),L&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&R)}),z.base64&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:M,imageVariants:H,generateSources:A}),z.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:M,imageVariants:H,generateSources:T}),this.state.isVisible&&l.default.createElement("picture",null,S(H),l.default.createElement(j,{alt:r,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:O,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)((0,c.default)({alt:r,title:t,loading:O},z),{},{imageVariants:H}))}}))}if(m){var F=m,q=h(m),V=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete V.display,l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},L&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:L,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},P&&R)}),q.base64&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:M,imageVariants:F,generateSources:A}),q.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:M,imageVariants:F,generateSources:T}),this.state.isVisible&&l.default.createElement("picture",null,S(F),l.default.createElement(j,{alt:r,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:O,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)((0,c.default)({alt:r,title:t,loading:O},q),{},{imageVariants:F}))}}))}return null},t}(l.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});P.propTypes={resolutions:I,sizes:L,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([L,d.default.arrayOf(L)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var R=P;t.default=R},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"ZbestDev","description":"I\'m Samuele Zanca, I\'m a FullStack Developer and this is my professional portfolio","author":"@metruzanca"}}}}')},"HAE/":function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperty:r("hswa").f})},INYr:function(e,t,r){"use strict";var n=r("XKFU"),a=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"ZbestDev"}}}}')},Nhdc:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return M}));var n=r("q1tI"),a=r("Wbzz"),i={dark:{themeName:"dark",bgPrimary:"#211e31",bgHeader:"#342f52",fgPrimary:"white",fgHighlight:"#f6df4c",fgLink:"#6883fd",fgLinkVisited:"#8D77FFs"},light:{themeName:"light",bgPrimary:"white",bgHeader:"#342f52",fgPrimary:"black",fgHighlight:"#f6df4c",fgLink:"#6883fd",fgLinkVisited:"#8D77FFs"}};function o(){return"undefined"!=typeof window?window.localStorage:{getItem:function(e){return"dark"},setItem:function(e,t){}}}var s=Object(n.createContext)({theme:i.dark,setTheme:function(e){}}),c=r("qKvR"),l=function(e){var t=e.siteTitle,r=Object(n.useContext)(s),o=r.theme,l=r.setTheme;return Object(c.d)("header",{style:{background:o.bgHeader,marginBottom:"1.45rem"}},Object(c.d)("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",flexDirection:"row"}},Object(c.d)("h1",{style:{margin:0}},Object(c.d)(a.Link,{to:"/",style:{color:"#F6DF4C",textDecoration:"none"}},t)),Object(c.d)("div",{style:{position:"absolute",right:0,marginRight:30}},Object(c.d)(M,{toggled:"dark"==o.themeName,onClick:function(e){l(e?i.dark:i.light)},colors:{toggleOff:"#feac73",toggleOn:"#8d77ff"}}),Object(c.d)("span",{style:{color:"white"}}," Theme WIP"))))},d=r("ezAz"),u=r("9eSz"),f=r.n(u),p=function(){var e=d.data;return Object(c.d)(f.a,{fluid:e.placeholderImage.childImageSharp.fluid})},h=r("IRj2"),g=(r("8ypT"),function(e){var t=e.children,r=h.data,a=Object(n.useState)(function(){switch(o().getItem("theme")){default:case"dark":return i.dark;case"light":return i.light}}()),d=a[0],u=a[1];return Object(c.d)(s.Provider,{value:{theme:d,setTheme:function(e){u(e),function(e){o().setItem("theme",e.themeName)}(e)}}},Object(c.d)(c.a,{styles:Object(c.c)("body{background-color:",d.bgPrimary,";color:",d.fgPrimary,";}")}),Object(c.d)(l,{siteTitle:r.site.siteMetadata.title}),Object(c.d)("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},Object(c.d)("main",null,t),Object(c.d)("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",Object(c.d)("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}),m=r("EH9Q"),y=r("qhky"),b=function(e){var t=e.title,r=e.meta,n=void 0===r?[]:r,a=e.lang,i=void 0===a?"en":a,o=e.description,s=void 0===o?"":o,l=m.data.site,d=s||l.siteMetadata.description;return Object(c.d)(y.a,{htmlAttributes:{lang:i},title:t,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:t},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:t},{name:"twitter:description",content:d}].concat(n)})},v=(r("f3/d"),r("HAE/"),r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("lSNA")),w=r.n(v),S=r("4qRI"),O=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,T=Object(S.a)((function(e){return O.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),A=r("SIPS"),E=r("MiSq"),k=T,C=function(e){return"theme"!==e&&"innerRef"!==e},x=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?k:C};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach((function(t){w()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=function e(t,r){var a,i,o;void 0!==r&&(a=r.label,o=r.target,i=t.__emotion_forwardProp&&r.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var s=t.__emotion_real===t,l=s&&t.__emotion_base||t;"function"!=typeof i&&s&&(i=t.__emotion_forwardProp);var d=i||x(l),u=!d("as");return function(){var f=arguments,p=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&p.push("label:"+a+";"),null==f[0]||void 0===f[0].raw)p.push.apply(p,f);else{0,p.push(f[0][0]);for(var h=f.length,g=1;g<h;g++)p.push(f[g],f[0][g])}var m=Object(c.e)((function(e,t,r){return Object(n.createElement)(c.b.Consumer,null,(function(a){var s=u&&e.as||l,c="",f=[],h=e;if(null==e.theme){for(var g in h={},e)h[g]=e[g];h.theme=a}"string"==typeof e.className?c=Object(A.a)(t.registered,f,e.className):null!=e.className&&(c=e.className+" ");var m=Object(E.a)(p.concat(f),t.registered,h);Object(A.b)(t,m,"string"==typeof s);c+=t.key+"-"+m.name,void 0!==o&&(c+=" "+o);var y=u&&void 0===i?x(s):d,b={};for(var v in e)u&&"as"===v||y(v)&&(b[v]=e[v]);return b.className=c,b.ref=r||e.innerRef,Object(n.createElement)(s,b)}))}));return m.displayName=void 0!==a?a:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=l,m.__emotion_styles=p,m.__emotion_forwardProp=i,Object.defineProperty(m,"toString",{value:function(){return"."+o}}),m.withComponent=function(t,n){return e(t,void 0!==n?P({},r||{},{},n):r).apply(void 0,p)},m}},L=I("div",{target:"e1ej6afs0"})({name:"1n801x0",styles:"position:relative;display:inline-block;width:60px;height:34px;"}),R=I("input",{target:"e1ej6afs1"})({name:"2oe625",styles:"opacity:0;width:0;height:0;&:focus{box-shadow:0 0 1px #2196F3;}"}),N=I("span",{target:"e1ej6afs2"})({name:"1a708ax",styles:'position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s;border-radius:34px;&:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;transition:.4s;border-radius:50%;}'});var M=function(e){var t=e.onClick,r=e.colors,a=void 0===r?{toggleOff:"#FF002A",toggleOn:"#1BF0FE"}:r,i=e.toggled,o={"&:before":{transform:"translateX(26px)"},backgroundColor:a.toggleOn},s={backgroundColor:a.toggleOff},l=Object(n.useState)(i),d=l[0],u=l[1],f=Object(n.useState)(d?o:s),p=f[0],h=f[1];Object(n.useEffect)((function(){var e;u(i),h(i?o:s),console.log((e=new Date).getHours()+":"+e.getMinutes()+":"+e.getSeconds()+" => "+d)}),[i]);return Object(c.d)(L,null,Object(c.d)(R,{checked:d,type:"checkbox"}),Object(c.d)(N,{onClick:function(){u(!d),t(!d)},style:p}))}},OGtf:function(e,t,r){var n=r("XKFU"),a=r("eeVq"),i=r("vhPU"),o=/"/g,s=function(e,t,r,n){var a=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},WLL4:function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperties:r("FJW5")})},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,c,l,d=n(t),u=n(r);if(d&&u){if((c=t.length)!=r.length)return!1;for(s=c;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(d!=u)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var h=t instanceof RegExp,g=r instanceof RegExp;if(h!=g)return!1;if(h&&g)return t.toString()==r.toString();var m=a(t);if((c=m.length)!==a(r).length)return!1;for(s=c;0!=s--;)if(!i.call(r,m[s]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(s=c;0!=s--;)if(!("_owner"===(l=m[s])&&t.$$typeof||e(t[l],r[l])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},jm62:function(e,t,r){var n=r("XKFU"),a=r("mQtv"),i=r("aCFj"),o=r("EemH"),s=r("8a7r");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=i(e),c=o.f,l=a(n),d={},u=0;l.length>u;)void 0!==(r=c(n,t=l[u++]))&&s(d,t,r);return d}})},mQtv:function(e,t,r){var n=r("kJMx"),a=r("JiEa"),i=r("y3w9"),o=r("dyZX").Reflect;e.exports=o&&o.ownKeys||function(e){var t=n.f(i(e)),r=a.f;return r?t.concat(r(e)):t}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return ge}));r("dZ+Y"),r("KKXr"),r("2Spj"),r("eM6i"),r("8+KV"),r("0l/t"),r("LK8F"),r("pIFo"),r("V+eJ"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("rE2o"),r("ioFf"),r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx");var n,a,i,o,s=r("17x9"),c=r.n(s),l=r("8+s/"),d=r.n(l),u=r("bmMU"),f=r.n(u),p=r("q1tI"),h=r.n(p),g=r("MgzW"),m=r.n(g),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(w).map((function(e){return w[e]})),"charset"),O="cssText",T="href",A="http-equiv",E="innerHTML",k="itemprop",C="name",x="property",j="rel",P="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",N="defer",M="encodeSpecialCharacters",H="onChangeClientState",z="titleTemplate",F=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},B=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,w.TITLE),r=Q(e,z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,R);return t||n||void 0},X=function(e){return Q(e,H)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Z=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+V(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||r===j&&"canonical"===e[r].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==E&&s!==O&&s!==k||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=m()({},n[s],a[s]);n[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,u=e.title,f=e.titleAttributes;ce(w.BODY,n),ce(w.HTML,a),se(u,f);var p={baseTag:le(w.BASE,r),linkTags:le(w.LINK,i),metaTags:le(w.META,o),noscriptTags:le(w.NOSCRIPT,s),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,d)},h={},g={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(g[e]=p[e].oldTags)})),t&&t(),c(e,h,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(w.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var d=i.indexOf(c);-1!==d&&i.splice(d,1)}for(var u=i.length-1;u>=0;u--)r.removeAttribute(i[u]);a.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===E)r.innerHTML=t.innerHTML;else if(n===O)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},de=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=ue(r,n),[h.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=de(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return ue(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===E||r===O){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===E||e===O)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,d=e.title,u=void 0===d?"":d,f=e.titleAttributes;return{base:fe(w.BASE,t,n),bodyAttributes:fe(y,r,n),htmlAttributes:fe(b,a,n),link:fe(w.LINK,i,n),meta:fe(w.META,o,n),noscript:fe(w.NOSCRIPT,s,n),script:fe(w.SCRIPT,c,n),style:fe(w.STYLE,l,n),title:fe(w.TITLE,{title:u,titleAttributes:f},n)}},he=d()((function(e){return{baseTag:G([T,I],e),bodyAttributes:J(y,e),defer:Q(e,N),encode:Q(e,M),htmlAttributes:J(b,e),linkTags:Z(w.LINK,[j,T],e),metaTags:Z(w.META,[C,S,A,x,k],e),noscriptTags:Z(w.NOSCRIPT,[E],e),onChangeClientState:X(e),scriptTags:Z(w.SCRIPT,[P,E],e),styleTags:Z(w.STYLE,[O],e),title:K(e),titleAttributes:J(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),ge=(a=he,o=i=function(e){function t(){return W(this,t),B(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return _({},n,((t={})[r.type]=[].concat(n[r.type]||[],[_({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case w.TITLE:return _({},a,((t={})[n.type]=o,t.titleAttributes=_({},i),t));case w.BODY:return _({},a,{bodyAttributes:_({},i)});case w.HTML:return _({},a,{htmlAttributes:_({},i)})}return _({},a,((r={})[n.type]=_({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=_({},t);return Object.keys(e).forEach((function(t){var n;r=_({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[F[r]||r]=e[r],t}),t)}(U(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=_({},r);return t&&(n=this.mapChildrenToProps(t,n)),h.a.createElement(a,n)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ge.renderStatic=ge.rewind}).call(this,r("yLpj"))},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=commons-d48d595e639fc1725b17.js.map