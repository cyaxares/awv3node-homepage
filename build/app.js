webpackJsonp([0],[,function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=s(0),r=s.n(n),a=s(0),o=(s.n(a),s(4)),i=(s.n(o),s(2)),l=function(e){s.i(a.render)(r.a.createElement(o.AppContainer,null,r.a.createElement(e,null)),document.getElementById("app"))};l(i.a)}).call(t,s(8)(e))},function(e,t,s){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=s(0),i=s.n(o),l=s(3),c=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return i.a.createElement(l.a,{height:"400%",style:{backgroundSize:"cover",backgroundImage:"url(build/assets/stars.svg)"}},i.a.createElement(l.a.Layer,{offset:0,speed:.6,style:{backgroundImage:"url(build/assets/logo.png)",backgroundPosition:"center"}}),i.a.createElement(l.a.Layer,{offset:1,speed:-.2},i.a.createElement("img",{src:"build/assets/satellite4.svg",style:{width:"30%",marginLeft:"60%"}})),i.a.createElement(l.a.Layer,{offset:1.8,speed:.8,style:{opacity:.2}},i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:600,marginLeft:"10%"}}),i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:300,marginLeft:"40%"}}),i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:100,marginLeft:"15%"}})),i.a.createElement(l.a.Layer,{offset:2.3,speed:.5,style:{opacity:.4}},i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:200,marginLeft:"70%"}}),i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:200,marginLeft:"40%"}}),i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:400,marginLeft:"30%"}})),i.a.createElement(l.a.Layer,{offset:3.3,speed:.6,style:{opacity:.6}},i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:100,marginLeft:"10%"}}),i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:300,marginLeft:"40%"}}),i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:400,marginLeft:"50%"}})),i.a.createElement(l.a.Layer,{offset:2.5,speed:-.1,style:{opacity:.8}},i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:300,marginLeft:"60%"}}),i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:400,marginLeft:"20%"}}),i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:200,marginLeft:"80%"}})),i.a.createElement(l.a.Layer,{offset:4.8,speed:.4},i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:300,marginLeft:"10%"}}),i.a.createElement("img",{src:"build/assets/cloud.svg",style:{display:"block",width:400,marginLeft:"70%"}})),i.a.createElement(l.a.Layer,{offset:2.5,factor:2,speed:-.2,style:{opacity:.2,display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement("img",{src:"build/assets/ether.svg",style:{width:"100%"}})),i.a.createElement(l.a.Layer,{offset:2.3,speed:-.4,style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement("img",{src:"build/assets/earth.svg",style:{width:"100%"}})),i.a.createElement(l.a.Layer,{offset:2.1,speed:-.3,style:{backgroundSize:"80%",backgroundPosition:"center",backgroundImage:"url(build/assets/clients.svg)"}}),i.a.createElement(l.a.Layer,{offset:1.5,speed:-.5,style:{backgroundSize:"45%",backgroundPosition:"center",backgroundImage:"url(build/assets/clients-main.svg)"}}))},t}(i.a.Component);t.a=c},function(e,t,s){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o,i,l=s(0),c=s.n(l),u=function(e){function t(){var s,a,o;n(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return s=a=r(this,e.call.apply(e,[this].concat(l))),a.windowInnerHeight=0,a.windowPageYOffset=0,a.busy=!1,a.scroller=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object.values(a.refs).forEach(function(t){return t.move&&t.move(a.windowInnerHeight,a.windowPageYOffset,e)}),a.busy=!1},a.onScroll=function(e){a.busy||(a.busy=!0,requestAnimationFrame(a.scroller),a.windowPageYOffset=window.pageYOffset)},a.onResize=function(){a.windowPageYOffset=window.pageYOffset,a.windowInnerHeight=window.innerHeight,Object.values(a.refs).forEach(function(e){return e.height&&e.height(a.windowInnerHeight)}),a.scroller(!0)},o=s,r(a,o)}return a(t,e),t.prototype.componentDidMount=function(){window.addEventListener("scroll",this.onScroll,{passive:!0}),window.addEventListener("resize",this.onResize,!1),this.onResize()},t.prototype.componentDidUpdate=function(){this.onResize()},t.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize,!1)},t.prototype.render=function(){return this.layers=c.a.Children.map(this.props.children,function(e,t){return c.a.cloneElement(e,Object.assign({},e.props,{ref:"child-"+t}))}),c.a.createElement("div",{ref:"container",style:Object.assign({position:"absolute",width:"100%",transform:"translate3d(0, 0, 0)",overflow:"hidden",height:this.props.height},this.props.style),className:this.props.className},this.layers)},t}(c.a.Component);u.Layer=(i=o=function(e){function t(){var s,a,o;n(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return s=a=r(this,e.call.apply(e,[this].concat(l))),a.invisible=!1,o=s,r(a,o)}return a(t,e),t.prototype.move=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=-(t*this.props.speed)+e*this.props.offset,r=e*this.props.factor;(n>t+e||n+r<t)&&!s||(this.refs.layer.style.transform="translate3d(0,"+n+"px,0)")},t.prototype.height=function e(t){var e=t*this.props.factor;this.refs.layer.style.height=e+"px"},t.prototype.render=function(){return c.a.createElement("div",{ref:"layer",style:Object.assign({position:"absolute",backgroundSize:"auto",backgroundRepeat:"no-repeat",willChange:"transform",width:"100%",height:this.innerHeight},this.props.style),className:this.props.className},this.props.children)},t}(c.a.Component),o.propTypes={factor:c.a.PropTypes.number,offset:c.a.PropTypes.number},o.defaultProps={factor:1,offset:0},i),t.a=u},,,,,,function(e,t,s){e.exports=s(1)}],[9]);