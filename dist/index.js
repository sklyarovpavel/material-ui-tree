!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("material-ui"),require("classnames"),require("material-ui-icons")):"function"==typeof define&&define.amd?define(["prop-types","react","material-ui","classnames","material-ui-icons"],t):"object"==typeof exports?exports.MuiTree=t(require("prop-types"),require("react"),require("material-ui"),require("classnames"),require("material-ui-icons")):e.MuiTree=t(e[void 0],e[void 0],e[void 0],e[void 0],e[void 0])}(window,function(e,t,n,a,r){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return{paper:{paddingTop:20,paddingBottom:20},caption:{fontSize:16,textAlign:"center"},treeNode:{height:32},treeIcon:{width:16,height:16,marginRight:8},treeIconButton:{color:e.palette.primary.light},treeText:{flex:"0 0 auto",paddingLeft:8,paddingRight:24},treeTextFlex:{flex:1},treeTextButton:{color:e.palette.primary.light},button:{minWidth:"auto",minHeight:"auto",width:"auto",height:"auto",fontSize:12,lineHeight:1,padding:4}}}},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=f(n(1)),l=f(n(0)),o=f(n(4)),i=n(3),u=n(5),c=f(n(9)),d=f(n(8)),s=f(n(2));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));a.state={expand:!1,childrenPage:0},a.doExpand=function(){a.setState(function(e){return{expand:!e.expand}})},a.handleClick=function(){if(a.state.expand)a.doExpand();else if(0===a.getChildren().length){var e=a.context.tree.requestChildrenData,t=a.props,n=t.data,r=t.chdIndex;e&&"function"==typeof e?e(n,r,a.doExpand):a.doExpand()}else a.doExpand()},a.loadMore=function(){a.setState(function(e){return{childrenPage:e.childrenPage+1}})};var r=e.layer,l=n.tree,o=l.expandFirst,i=l.expandAll;return a.state={expand:i||0===r&&o,childrenPage:0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),a(t,[{key:"getChildren",value:function(){return this.props.data[this.context.tree.childrenName]||[]}},{key:"renderChildrenByPage",value:function(e){var t=this.props,n=t.layer,a=t.chdIndex,l=this.context.tree.childrenCountPerPage,o=this.getChildren(),i=e*l,u=(e+1)*l;u=u>o.length?o.length:u;var c=o.slice(i,u);return r.default.createElement(d.default,{key:"tree-branch-page-"+e,data:c,expand:this.state.expand,layer:n,chdIndex:a})}},{key:"renderChildren",value:function(){for(var e=this.state.childrenPage,t=[],n=0;n<=e;)t.push(this.renderChildrenByPage(n)),n+=1;return t}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.className,a=e.data,l=e.expand,d=e.layer,s=e.chdIndex,f=this.state.childrenPage,p=this.context.tree.childrenCountPerPage,h=this.getChildren(),y=Math.ceil(h.length/p);return r.default.createElement(i.Collapse,{in:l,unmountOnExit:!0},r.default.createElement(i.List,{dense:!0,component:"div",className:n,style:{paddingLeft:d>0?32:0}},r.default.createElement(c.default,{data:a,onClick:this.handleClick,expand:this.state.expand,layer:d,chdIndex:s}),this.renderChildren(),this.state.expand&&f+1<y?r.default.createElement(i.ListItem,{dense:!0,button:!0,onClick:this.loadMore,className:t.treeNode,style:{paddingLeft:48}},r.default.createElement(i.ListItemIcon,null,r.default.createElement(u.MoreVert,{className:(0,o.default)(t.treeIcon,t.treeIconButton)})),r.default.createElement(i.ListItemText,{inset:!0,disableTypography:!0,primary:"已加载"+(f+1)*p+"/"+h.length+"，点击加载更多...",className:(0,o.default)(t.treeText,t.treeTextButton)})):null))}}]),t}();p.defaultProps={className:"",data:{},expand:!1,chdIndex:[]},p.propTypes={classes:l.default.object.isRequired,layer:l.default.number.isRequired,className:l.default.string,data:l.default.any,expand:l.default.bool,chdIndex:l.default.array},p.contextTypes={tree:l.default.shape({childrenName:l.default.string,expandFirst:l.default.bool,expandAll:l.default.bool,requestChildrenData:l.default.func,childrenCountPerPage:l.default.number})},t.default=(0,i.withStyles)(s.default,{withTheme:!0})(p)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children",a=t.length,r=0,l=e;r<a;)l=l[n][t[r]],r+=1;return l}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(1)),r=o(n(0)),l=o(n(6));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t){var n=e.data,r=e.expand,o=e.layer,i=e.chdIndex,u=t.tree.valueName;return a.default.createElement(a.default.Fragment,null,n.map(function(e,t){return a.default.createElement(l.default,{key:"tree-branch-"+e[u],expand:r,data:e,layer:o+1,chdIndex:i.concat(t)})}))};i.propTypes={data:r.default.array.isRequired,expand:r.default.bool.isRequired,layer:r.default.number.isRequired,chdIndex:r.default.array.isRequired},i.contextTypes={tree:r.default.shape({valueName:r.default.string})},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=s(n(1)),o=s(n(0)),i=s(n(4)),u=n(3),c=n(5),d=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return n=a=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.state={showButtons:!0},a.handleButtonClick=function(e,t){e.preventDefault(),e.stopPropagation(),t()},f(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),r(t,[{key:"getActions",value:function(e){var t=this,n=this.context.tree,r=n.getActionsData,o=n.actionsAlignRight,i=this.props,c=i.classes,d=i.layer,s=i.chdIndex,f=i.expand;if(r&&"function"==typeof r){var p=r(e,d,s,f);if(p&&p.length)return p.map(function(e,n){var r=e.icon,i=e.label,d=e.hint,s=e.onClick,f=void 0===s?function(){}:s,p=e.style,h=void 0===p?{}:p,y=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["icon","label","hint","onClick","style"]),m=Object.assign({marginLeft:16},h),b=null;i?b=l.default.createElement(u.Button,{size:"small"},r?l.default.cloneElement(r,{style:{width:12,height:12}}):null,i):r&&(b=l.default.createElement(u.IconButton,null,r)),b&&(b=l.default.cloneElement(b,a({color:"primary",onClick:function(e){return t.handleButtonClick(e,f)},className:c.button,style:m},y)));var g=b;return g&&d&&(g=l.default.createElement(u.Tooltip,{title:d,placement:o?"left":"right"},b)),g?l.default.cloneElement(g,{key:"fab-list-item-"+(n+1)}):null})}return null}},{key:"getLabel",value:function(){var e=this.props,t=e.data,n=e.expand,a=this.context.tree,r=a.labelName,l=a.renderLabel;return l&&"function"==typeof l?l(t,n):t[r]}},{key:"render",value:function(){var e,t,n,a=this.props,r=a.classes,o=a.data,d=a.onClick,s=a.expand,f=this.context.tree,p=f.valueName,h=f.actionsAlignRight;return l.default.createElement(u.ListItem,{dense:!0,button:!0,className:r.treeNode,id:"tree-leaf-"+o[p],onClick:d},l.default.createElement(u.ListItemIcon,null,s?l.default.createElement(c.RemoveCircleOutline,{className:r.treeIcon}):l.default.createElement(c.AddCircleOutline,{className:r.treeIcon})),l.default.createElement(u.ListItemText,{inset:!0,primary:this.getLabel(),className:(0,i.default)(r.treeText,(e={},t=r.treeTextFlex,n=h,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))}),this.state.showButtons?this.getActions(o):null)}}]),t}();p.defaultProps={onClick:function(){},expand:!1},p.propTypes={classes:o.default.object.isRequired,data:o.default.object.isRequired,layer:o.default.number.isRequired,chdIndex:o.default.array.isRequired,onClick:o.default.func,expand:o.default.bool},p.contextTypes={tree:o.default.shape({labelName:o.default.string,valueName:o.default.string,actionsAlignRight:o.default.bool,getActionsData:o.default.func,renderLabel:o.default.func})},t.default=(0,u.withStyles)(d.default,{withTheme:!0})(p)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTreeLeafDataByIndexArray=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=s(n(1)),l=s(n(0)),o=s(n(4)),i=n(3),u=s(n(6)),c=s(n(2)),d=s(n(7));function s(e){return e&&e.__esModule?e:{default:e}}t.getTreeLeafDataByIndexArray=d.default;var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),a(t,[{key:"getChildContext",value:function(){var e=this.props;return{tree:{labelName:e.labelName,valueName:e.valueName,childrenName:e.childrenName,expandFirst:e.expandFirst,expandAll:e.expandAll,actionsAlignRight:e.actionsAlignRight,getActionsData:e.getActionsData,renderLabel:e.renderLabel,requestChildrenData:e.requestChildrenData,childrenCountPerPage:e.childrenCountPerPage}}}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.className,a=e.data,l=e.title;return r.default.createElement(i.Paper,{className:(0,o.default)(t.paper,n)},l?r.default.createElement(i.Typography,{variant:"caption",className:t.caption},l):null,r.default.createElement(u.default,{data:a,expand:!0,layer:0}))}}]),t}();f.defaultProps={className:"",labelName:"label",valueName:"value",childrenName:"children",data:{},title:"",expandFirst:!1,expandAll:!1,childrenCountPerPage:20,actionsAlignRight:!1,getActionsData:null,renderLabel:null,requestChildrenData:null},f.propTypes={classes:l.default.object.isRequired,className:l.default.string,labelName:l.default.string,valueName:l.default.string,childrenName:l.default.string,data:l.default.object,title:l.default.string,expandFirst:l.default.bool,expandAll:l.default.bool,childrenCountPerPage:l.default.number,actionsAlignRight:l.default.bool,getActionsData:l.default.func,renderLabel:l.default.func,requestChildrenData:l.default.func},f.childContextTypes={tree:l.default.shape({labelName:l.default.string,valueName:l.default.string,childrenName:l.default.string,actionsAlignRight:l.default.bool,getActionsData:l.default.func,renderLabel:l.default.func,requestChildrenData:l.default.func,childrenCountPerPage:l.default.number})},t.default=(0,i.withStyles)(c.default,{withTheme:!0})(f)}])});