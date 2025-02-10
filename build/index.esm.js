import n,{css as e}from"styled-components";import t,{createContext as o,useContext as r,useRef as i,useState as l,useLayoutEffect as a,useEffect as c}from"react";import{HtmlUtils as d,CmUtils as s}from"@delpi/common";import p from"react-perfect-scrollbar-z";var f=function(){return f=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},f.apply(this,arguments)};function u(n,e,t){if(t||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}function h(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}"function"==typeof SuppressedError&&SuppressedError;var m,x,b,g,v,y,w,k,C,N=n.div(m||(m=h(["\n  margin-left: 30px;\n  position: relative;\n\n  > span,\n  > i {\n    min-height: 20px;\n    vertical-align: middle;\n  }\n\n  .node-data-text {\n    display: inline-block;\n    padding: 0px 5px;\n  }\n\n  .node-data-text-toggle {\n    cursor: pointer;\n  }\n\n  &::after,\n  &::before {\n    content: '';\n    left: -23px;\n    position: absolute;\n    right: auto;\n    cursor: default;\n  }\n\n  &::before {\n    border-left: ","px dashed\n      ",";\n    bottom: 50px;\n    height: 100%;\n    top: -","px;\n    width: 1px;\n  }\n\n  &::after {\n    border-top: ","px dashed\n      ",";\n    height: 20px;\n    top: ","px;\n    width: 27px;\n  }\n\n  &:last-child::before {\n    height: ","px;\n  }\n"],["\n  margin-left: 30px;\n  position: relative;\n\n  > span,\n  > i {\n    min-height: 20px;\n    vertical-align: middle;\n  }\n\n  .node-data-text {\n    display: inline-block;\n    padding: 0px 5px;\n  }\n\n  .node-data-text-toggle {\n    cursor: pointer;\n  }\n\n  &::after,\n  &::before {\n    content: '';\n    left: -23px;\n    position: absolute;\n    right: auto;\n    cursor: default;\n  }\n\n  &::before {\n    border-left: ","px dashed\n      ",";\n    bottom: 50px;\n    height: 100%;\n    top: -","px;\n    width: 1px;\n  }\n\n  &::after {\n    border-top: ","px dashed\n      ",";\n    height: 20px;\n    top: ","px;\n    width: 27px;\n  }\n\n  &:last-child::before {\n    height: ","px;\n  }\n"])),(function(n){return n.showYLine?1:0}),(function(n){return n.lineColor}),(function(){return 12}),(function(n){return n.showXLine?1:0}),(function(n){return n.lineColor}),(function(){return 12}),(function(){return 24})),E=n.span(v||(v=h(["\n  display: inline-block;\n  padding: 3px 7px;\n  border-radius: 6px;\n  -webkit-border-radius: 6px;\n  -moz-border-radius: 6px;\n\n  > div {\n    display: flex;\n  }\n\n  ","\n"],["\n  display: inline-block;\n  padding: 3px 7px;\n  border-radius: 6px;\n  -webkit-border-radius: 6px;\n  -moz-border-radius: 6px;\n\n  > div {\n    display: flex;\n  }\n\n  ","\n"])),(function(n){return n.nodeSelected&&e(g||(g=h(["\n      ","\n      ","\n        color: ",";\n    "],["\n      ","\n      ","\n        color: ",";\n    "])),n.fullRowSelection&&e(x||(x=h(["\n        background-color: ",";\n      "],["\n        background-color: ",";\n      "])),n.selectedBgColor),!n.fullRowSelection&&e(b||(b=h(["\n        .node-data-text {\n          background-color: ",";\n          border-radius: 6px;\n          -webkit-border-radius: 6px;\n          -moz-border-radius: 6px;\n        }\n      "],["\n        .node-data-text {\n          background-color: ",";\n          border-radius: 6px;\n          -webkit-border-radius: 6px;\n          -moz-border-radius: 6px;\n        }\n      "])),n.selectedBgColor),n.selectedColor)})),j=n.i(k||(k=h(["\n  display: inline-block;\n  position: relative;\n  left: 1px;\n  top: 3px;\n  cursor: pointer;\n  width: 14px;\n  height: 14px;\n\n  + .node-data-text {\n    margin-left: 2px;\n  }\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    background-color: ",";\n    transition: transform 0.25s ease-out;\n  }\n\n  /* Vertical line */\n  &::before {\n    top: 0px;\n    left: 50%;\n    width: 2px;\n    height: 100%;\n    margin-left: -1px;\n  }\n\n  /* horizontal line */\n  &::after {\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    margin-top: -1px;\n  }\n\n  ","\n\n  ","\n"],["\n  display: inline-block;\n  position: relative;\n  left: 1px;\n  top: 3px;\n  cursor: pointer;\n  width: 14px;\n  height: 14px;\n\n  + .node-data-text {\n    margin-left: 2px;\n  }\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    background-color: ",";\n    transition: transform 0.25s ease-out;\n  }\n\n  /* Vertical line */\n  &::before {\n    top: 0px;\n    left: 50%;\n    width: 2px;\n    height: 100%;\n    margin-left: -1px;\n  }\n\n  /* horizontal line */\n  &::after {\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    margin-top: -1px;\n  }\n\n  ","\n\n  ","\n"])),(function(n){return n.nodeSelected?n.selectedColor:"#4d6878"}),(function(n){return n.disabled&&e(y||(y=h(["\n      cursor: default;\n      pointer-events: none;\n      opacity: 0.65;\n    "],["\n      cursor: default;\n      pointer-events: none;\n      opacity: 0.65;\n    "])))}),(function(n){return n.active&&e(w||(w=h(["\n      &:before {\n        transform: rotate(90deg);\n      }\n      &:after {\n        transform: rotate(180deg);\n      }\n    "],["\n      &:before {\n        transform: rotate(90deg);\n      }\n      &:after {\n        transform: rotate(180deg);\n      }\n    "])))})),S=n.div(C||(C=h(["\n  > .rdk-tree-item:first-child {\n    &::before {\n      height: 100%;\n      top: 15px;\n    }\n  }\n  > .rdk-tree-item:only-child::before {\n    border: 0px !important;\n  }\n"],["\n  > .rdk-tree-item:first-child {\n    &::before {\n      height: 100%;\n      top: 15px;\n    }\n  }\n  > .rdk-tree-item:only-child::before {\n    border: 0px !important;\n  }\n"]))),O=function(n){var e=n.children,o=n.className;return t.createElement(S,{className:d.joinClass("rdk-tree-root rdk-tree-view",o)},e)},T=o({}),z=function(n){var e=n.children,o=n.className,r=n.effectData,c=void 0===r?[]:r,s=n.always,h=void 0===s||s,m=n.refScroll,x=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t}(n,["children","className","effectData","always","refScroll"]),b=i(),g=l([]),v=g[0],y=g[1],w=l(0),k=w[0],C=w[1];a((function(){if(v.length>0){var n=v[0],e=v[1];if(!e)return;C(+new Date);var t=e,o=b.current,r=o.element.getBoundingClientRect(),i=t.getBoundingClientRect();if(r.bottom===i.bottom)return void o.update();var l=o.element.scrollTop,a=i.top-r.top;if(n){var c=a+l,s=parseInt(t.style.paddingTop||0)||0;if(l=c-s,a/o.containerHeight<.7&&a>s)return void o.update();d.scrollTo(o.element,l,500)}else{var p=i.bottom-r.bottom;if(p<i.height&&p>0)return d.scrollTo(o.element,a+l,500),void o.update();var f=(g=o.element,y="span.node-content",w=Array.from(g.querySelectorAll(y)).reverse(),k=w.findIndex((function(n){return d.isVisible(n)})),w[k]);if(!f)return;var u=f.getBoundingClientRect(),h=r.bottom-u.top-u.height;if(h>=i.height){var x=o.element.scrollHeight-h;d.scrollTo(o.element,x,500)}else i.top<r.top&&d.scrollTo(o.element,a+l,500);o.update()}}var g,y,w,k;m&&!m.current&&(m.current=b.current)}),[v,m]);return t.createElement(T.Provider,{value:{notifyToggle:function(n){return y(u(u([],n,!0),[+new Date],!1))},flagHeight:k}},t.createElement(p,f({refScroll:b,effectData:c,className:d.joinClass("rdk-tree-scroll",o),always:h},x),t.createElement(O,null,e)))};var B=function(n){var e=n.children;return s.isFunc(e)?e():e},P=function(n){var e=n.children;return n.isActive&&e?t.createElement("div",{className:"rdk-tree-view"},e):null},R=t.memo((function(n){var e=n.children,o=n.id,i=n.className,a=n.iconClassName,p=n.showCheckbox,f=n.checkboxName,u=n.checkboxClassName,h=n.labelCheckboxText,m=n.labelCheckboxClassName,x=n.nodeContent,b=n.isOpen,g=void 0!==b&&b,v=n.disabled,y=void 0!==v&&v,w=n.fullRowSelection,k=void 0!==w&&w,C=n.selectedWhenToggle,S=void 0!==C&&C,O=n.selectedColor,z=void 0===O?"#000":O,R=n.selectedBgColor,A=void 0===R?"transparent":R,D=n.lineColor,L=void 0===D?"#92adc0":D,F=n.selected,I=void 0!==F&&F,H=n.hideNodeIcon,V=n.showXLine,X=void 0===V||V,Y=n.showYLine,q=void 0===Y||Y,W=n.selfData,G=n.onClick,J=void 0===G?function(){}:G,K=n.onToggle,M=void 0===K?function(){}:K,Q=(r(T)||{}).notifyToggle,U=l(g),Z=U[0],$=U[1],_=l(I),nn=_[0],en=_[1];function tn(n){y||(rn(n),S&&ln(n))}function on(n){!y&&S&&rn(n),ln(n)}function rn(n){s.isFunc(Q)&&Q([!Z,n.target.closest("span.node-content")]),s.isFunc(M)&&M(!Z,W),$(!Z)}function ln(n){en(!nn),s.isFunc(J)&&J(n,!nn,W)}return c((function(){return en(I)}),[I]),c((function(){return $(g)}),[g]),t.createElement(N,{id:o,className:d.joinClass("rdk-tree-item",{"has-child":!!e},{"is-active":Z},i),showXLine:X,showYLine:q,lineColor:L},t.createElement(E,{className:d.joinClass("node-content",{"is-active":Z},{disabled:y},{selected:nn}),nodeSelected:nn,selectedColor:z,selectedBgColor:A,fullRowSelection:k},t.createElement("div",null,!H&&t.createElement(j,{className:d.joinClass("node-icon",a),active:Z,disabled:y,selectedColor:z,nodeSelected:nn,onClick:tn}),p&&t.createElement("span",{className:"node-cbx"},t.createElement("input",{type:"checkbox",name:f,className:d.joinClass("node-cbx-icon",u),checked:Z,disabled:y,onChange:tn}),t.createElement("label",{className:d.joinClass("node-cbx-label",S&&"node-data-text-toggle",m),onClick:on},h)),t.createElement("span",{className:d.joinClass("node-data-text",S&&"node-data-text-toggle"),onClick:on},t.createElement(B,null,x)))),t.createElement(P,{isActive:Z},e))}));export{S as StyledTreeContainer,N as StyledTreeItem,E as StyledTreeItemContent,j as StyledTreeItemIcon,R as TreeItem,z as TreeScrollView,O as TreeView};
