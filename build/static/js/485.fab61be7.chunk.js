(self.webpackChunkhexapod=self.webpackChunkhexapod||[]).push([[485],{8485:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return it}});var n=a(885),i=a(2791),r=a(1523),s={front:500,side:800,middle:700,coxia:320,femur:830,tibia:1400},o={leftFront:{alpha:0,beta:-6,gamma:-6},rightFront:{alpha:0,beta:-2,gamma:-14},leftMiddle:{alpha:0,beta:4,gamma:-6},rightMiddle:{alpha:0,beta:0,gamma:-6},leftBack:{alpha:0,beta:-3,gamma:-6},rightBack:{alpha:0,beta:-9,gamma:-6}},l={alpha:0,beta:0,gamma:0},c={tx:0,ty:0,tz:0,rx:0,ry:0,rz:0,hipStance:0,legStance:0},d={tx:0,tz:0,rx:0,ry:0,legStance:0,hipStance:20,hipSwing:25,liftSwing:40,stepCount:5},u="#FC427B",p="#32ff7e",h="#EE5A24",m="#079992",g=10,x=[{name:"bodyMesh",showlegend:!0,type:"mesh3d",opacity:.3,color:"#ff6348",x:[100,100,-100,-100,-100,100,100],y:[0,100,100,0,-100,-100,0],z:[100,100,100,100,100,100,100]},{line:{color:u,opacity:1,width:12},name:"bodyOutline",showlegend:!0,type:"scatter3d",x:[100,100,-100,-100,-100,100,100],y:[0,100,100,0,-100,-100,0],z:[100,100,100,100,100,100,100]},{marker:{color:u,opacity:1,size:14},mode:"markers",name:"head",type:"scatter3d",x:[0],y:[100],z:[100]},{marker:{color:p,opacity:1,size:14},mode:"markers",name:"centerOfGravity",type:"scatter3d",x:[0],y:[0],z:[100]},{marker:{color:p,opacity:.5,size:7},mode:"markers",name:"centerOfGravityProjection",type:"scatter3d",x:[0],y:[0],z:[0]},{line:{color:h,width:g},name:"rightMiddleLeg",showlegend:!1,type:"scatter3d",x:[100,200,300,300],y:[0,0,0,0],z:[100,100,100,0]},{line:{color:h,width:g},name:"rightFrontLeg",showlegend:!1,type:"scatter3d",x:[100,170.71067811865476,241.4213562373095,241.4213562373095],y:[100,170.71067811865476,241.42135623730948,241.42135623730948],z:[100,100,100,0]},{line:{color:h,width:g},name:"leftFrontLeg",showlegend:!1,type:"scatter3d",x:[-100,-170.71067811865476,-241.42135623730948,-241.42135623730948],y:[100,170.71067811865476,241.4213562373095,241.4213562373095],z:[100,100,100,0]},{line:{color:h,width:g},name:"leftMiddleLeg",showlegend:!1,type:"scatter3d",x:[-100,-200,-300,-300],y:[0,12246467991473532e-30,24492935982947064e-30,24492935982947064e-30],z:[100,100,100,0]},{line:{color:h,width:g},name:"leftBackLeg",showlegend:!1,type:"scatter3d",x:[-100,-170.71067811865476,-241.42135623730954,-241.42135623730954],y:[-100,-170.71067811865476,-241.42135623730948,-241.42135623730948],z:[100,100,100,0]},{line:{color:h,width:g},name:"rightBackLeg",showlegend:!1,type:"scatter3d",x:[100,170.71067811865476,241.42135623730948,241.42135623730948],y:[-100,-170.71067811865476,-241.42135623730954,-241.42135623730954],z:[100,100,100,0]},{name:"supportPolygonMesh",showlegend:!1,type:"mesh3d",opacity:.2,color:"#3c6382",x:[300,241.4213562373095,-241.42135623730948,-300,-241.42135623730954,241.42135623730948],y:[0,241.42135623730948,241.4213562373095,24492935982947064e-30,-241.42135623730948,-241.42135623730954],z:[0,0,0,0,0,0]},{line:{color:"#2f3640",width:2},name:"hexapodXaxis",mode:"lines",showlegend:!1,opacity:1,type:"scatter3d",x:[0,50],y:[0,0],z:[100,100]},{line:{color:"#e67e22",width:2},name:"hexapodYaxis",mode:"lines",showlegend:!1,opacity:1,type:"scatter3d",x:[0,0],y:[0,50],z:[100,100]},{line:{color:"#0097e6",width:2},name:"hexapodZaxis",mode:"lines",showlegend:!1,opacity:1,type:"scatter3d",x:[0,0],y:[0,0],z:[100,150]},{line:{color:"#2f3640",width:2},name:"worldXaxis",showlegend:!1,mode:"lines",opacity:1,type:"scatter3d",x:[0,50],y:[0,0],z:[0,0]},{line:{color:"#e67e22",width:2},name:"worldYaxis",showlegend:!1,mode:"lines",opacity:1,type:"scatter3d",x:[0,0],y:[0,50],z:[0,0]},{line:{color:"#0097e6",width:2},name:"worldZaxis",showlegend:!1,mode:"lines",opacity:1,type:"scatter3d",x:[0,0],y:[0,0],z:[0,50]}],f={center:{x:.0005967195135552272,y:.11455181630825005,z:-.44957387699746415},eye:{x:.010119765679525836,y:.573601223004958,z:.04247372257492105},up:{x:.006592638138864914,y:3338632363222382e-20,z:.9999782677677168}},y={xaxis:{nticks:1,range:[-600,600],zerolinecolor:m,showbackground:!1},yaxis:{nticks:1,range:[-600,600],zerolinecolor:m,showbackground:!1},zaxis:{nticks:1,range:[-10,590],zerolinecolor:m,showbackground:!0,backgroundcolor:"rgb(14, 40, 69)"},aspectmode:"manual",aspectratio:{x:1,y:1,z:1},camera:f},v={scene:y,margin:{b:20,l:10,r:10,t:20},paper_bgcolor:"rgb(23, 33, 43)",showlegend:!1,autosize:!0},w=a(8014),j=a(6355),Z=a(6053),S=a(184),k="Dimensions",b="Inverse Kinematics",N="Forward Kinematics",M="Leg Patterns",V="Root",z="Walking Gaits",P="/inverse-kinematics",C="/forward-kinematics",W="/leg-patterns",E="/",T="/walking-gaits",A=["alpha","beta","gamma"],F=["front","side","middle","coxia","femur","tibia"],I=["leftFront","rightFront","leftMiddle","rightMiddle","leftBack","rightBack"],G=["tx","ty","tz","rx","ry","rz","hipStance","legStance"],U=["hipSwing","liftSwing","legStance","hipStance","tx","tz","rx","ry","stepCount"],D=function(e){return{minVal:-e,maxVal:e,stepVal:1}},R={30:D(30),45:D(45),60:D(60),90:D(90),180:D(180)},B={minVal:-1,maxVal:1,stepVal:.1},_={dimensionInputs:{minVal:0,maxVal:1/0,stepVal:1},tx:B,ty:B,tz:B,rx:R[30],ry:R[30],rz:R[60],legStance:R[90],hipStance:R[60],alpha:R[30],beta:R[90],gamma:R[90]},L={tx:{minVal:-.25,maxVal:.25,stepVal:.1,defaultVal:0},tz:{minVal:-.5,maxVal:.5,stepVal:.1,defaultVal:0},rx:{minVal:-15,maxVal:15,stepVal:2.5,defaultVal:0},ry:{minVal:-15,maxVal:15,stepVal:2.5,defaultVal:0},legStance:{minVal:-50,maxVal:50,stepVal:1,defaultVal:0},hipStance:{minVal:0,maxVal:40,stepVal:1,defaultVal:30},hipSwing:{minVal:10,maxVal:40,stepVal:1,defaultVal:25},liftSwing:{minVal:10,maxVal:70,stepVal:1,defaultVal:40},stepCount:{minVal:3,maxVal:70,stepVal:1,defaultVal:5}},K={mug:(0,S.jsx)(w.qaA,{className:"vertical-align"}),circle:(0,S.jsx)(Z.TnT,{className:"small-icon"}),octocat:(0,S.jsx)(j.XXB,{className:"vertical-align"}),times:(0,S.jsx)(j.aHS,{className:"vertical-align"}),home:(0,S.jsx)(j.xng,{className:"vertical-align"})},O={inverseKinematics:{path:P,description:b,icon:K.circle},forwardKinematics:{path:C,description:N,icon:K.circle},legPatterns:{path:W,description:M,icon:K.circle},landingPage:{path:E,description:V,icon:K.home},walkingGaits:{path:T,description:z,icon:K.circle}},q=[O.inverseKinematics,O.forwardKinematics,O.legPatterns,O.walkingGaits,O.landingPage],H=[{name:"KOFI",icon:K.mug,description:"Buy Mithi Ko-Fi \ud83c\udf75",url:"https://ko-fi.com/minimithi"},{name:"REPO",icon:K.octocat,description:"Source Code",url:"https://github.com/mithi/hexapod-irl"}],X="navBullet",Y="navDetailed",J=function(e){var t=e.link,a=e.showDesc;return(0,S.jsx)("li",{children:(0,S.jsx)(r.rU,{to:t.path,className:"link-icon",children:(0,S.jsxs)("span",{children:[t.icon," ",a?t.description:null]})})})},Q=function(e){var t=e.path,a=e.description,n=e.icon;return(0,S.jsx)("li",{children:(0,S.jsx)("a",{href:t,className:"link-icon",target:"_blank",rel:"noopener noreferrer",children:(0,S.jsxs)("span",{children:[n," ",a]})})})},$=function(){return(0,S.jsxs)("ul",{id:"top-bar",children:[H.map((function(e){return(0,S.jsx)(Q,{path:e.url,icon:e.icon},X+e.url)})),q.map((function(e){return(0,S.jsx)(J,{link:e},X+e.path)}))]})},ee=function(){return(0,S.jsx)("footer",{children:(0,S.jsx)("nav",{id:"nav",children:(0,S.jsxs)("ul",{className:"grid-cols-1 no-bullet",children:[H.map((function(e){return(0,S.jsx)(Q,{path:e.url,icon:e.icon,description:e.description},Y+e.url)})),q.map((function(e){return(0,S.jsx)(J,{link:e,showDesc:!0},Y+e.path)}))]})})})},te=function(){return(0,S.jsx)($,{})},ae=a(1413),ne=a(5671),ie=a(3144),re=a(136),se=a(5716),oe=a(2067),le=a(2982),ce=function(e,t){var a=function(e){var t=e.body.closedPointsList,a=t.map((function(e){return e.x})),n=t.map((function(e){return e.y})),i=t.map((function(e){return e.z})),r=e.body,s=r.head,o=r.cog,l=e.cogProjection,c=e.legs,d=e.groundContactPoints,u=(0,ae.Z)((0,ae.Z)({},x[0]),{},{x:a,y:n,z:i}),p=(0,ae.Z)((0,ae.Z)({},x[1]),{},{x:a,y:n,z:i}),h=(0,ae.Z)((0,ae.Z)({},x[2]),{},{x:[s.x],y:[s.y],z:[s.z]}),m=(0,ae.Z)((0,ae.Z)({},x[3]),{},{x:[o.x],y:[o.y],z:[o.z]}),g=(0,ae.Z)((0,ae.Z)({},x[4]),{},{x:[l.x],y:[l.y],z:[l.z]}),f=c.map((function(e,t){return(0,ae.Z)((0,ae.Z)({},x[t+5]),{},{x:e.allPointsList.map((function(e){return e.x})),y:e.allPointsList.map((function(e){return e.y})),z:e.allPointsList.map((function(e){return e.z}))})})),y=(0,ae.Z)((0,ae.Z)({},x[11]),{},{x:d.map((function(e){return e.x})),y:d.map((function(e){return e.y})),z:d.map((function(e){return e.z}))}),v=e.body.dimensions.front/2,w=e.localAxes,j=w.xAxis,Z=w.yAxis,S=w.zAxis,k=(0,ae.Z)((0,ae.Z)({},x[12]),{},{x:[o.x,o.x+v*j.x],y:[o.y,o.y+v*j.y],z:[o.z,o.z+v*j.z]}),b=(0,ae.Z)((0,ae.Z)({},x[13]),{},{x:[o.x,o.x+v*Z.x],y:[o.y,o.y+v*Z.y],z:[o.z,o.z+v*Z.z]}),N=(0,ae.Z)((0,ae.Z)({},x[14]),{},{x:[o.x,o.x+v*S.x],y:[o.y,o.y+v*S.y],z:[o.z,o.z+v*S.z]}),M=(0,ae.Z)((0,ae.Z)({},x[15]),{},{x:[0,v]}),V=(0,ae.Z)((0,ae.Z)({},x[16]),{},{y:[0,v]}),z=(0,ae.Z)((0,ae.Z)({},x[17]),{},{z:[0,v]});return[u,p,h,m,g].concat((0,le.Z)(f),[y,k,b,N,M,V,z])}(e);[null,void 0,{}].includes(t)&&(t=f);var n,i=(n=e.dimensions,Object.values(n).reduce((function(e,t){return e+t}),0)),r=[-i,i],s=(0,ae.Z)((0,ae.Z)({},y.xaxis),{},{range:r}),o=(0,ae.Z)((0,ae.Z)({},y.yaxis),{},{range:r}),l=(0,ae.Z)((0,ae.Z)({},y.zaxis),{},{range:[-10,2*i-10]}),c=(0,ae.Z)((0,ae.Z)({},y),{},{xaxis:s,yaxis:o,zaxis:l,camera:t});return[a,(0,ae.Z)((0,ae.Z)({},v),{},{scene:c})]},de=function(e){(0,re.Z)(i,e);var t=(0,se.Z)(i);function i(){var e;(0,ne.Z)(this,i);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).cameraView=f,e.state={ready:!1},e.Plot=null,e.logCameraView=function(t){e.cameraView=t["scene.camera"]},e}return(0,ie.Z)(i,[{key:"componentDidMount",value:function(){var e=this;a.e(994).then(a.t.bind(a,8994,23)).then((function(t){e.Plot=(0,oe.Z)(t),e.setState({ready:!0})}))}},{key:"render",value:function(){if(!this.state.ready)return(0,S.jsx)("p",{children:"Loading your cute robot..."});if(!this.props.hexapod)return null;var e=ce(this.props.hexapod,this.cameraView),t=(0,n.Z)(e,2),a={data:t[0],layout:t[1],onRelayout:this.logCameraView,revision:this.props.revision,config:{displaylogo:!1,responsive:!0},style:{height:"100%",width:"100%"},useResizeHandler:!0},i=this.Plot;return(0,S.jsx)(i,(0,ae.Z)({},a))}}]),i}(i.Component),ue=de,pe=a(4942),he=function(e){(0,re.Z)(a,e);var t=(0,se.Z)(a);function a(e){var n;return(0,ne.Z)(this,a),(n=t.call(this,e)).state={message:null},n.myRef=i.createRef(),n}return(0,ie.Z)(a,[{key:"componentDidMount",value:function(){this.setState({message:null})}},{key:"handleChange",value:function(e){var t=this.props.rangeParams,a=t.minVal,n=t.maxVal,i=t.stepVal,r=this.myRef.current.validity;if(r.badInput)this.setState({message:"NaN"});else if(r.rangeOverflow)this.setState({message:"max=".concat(n)});else if(r.rangeUnderflow)this.setState({message:"min=".concat(a)});else if(r.stepMismatch)this.setState({message:"step=".concat(i)});else if(this.myRef.current.checkValidity()){var s=parseFloat(e);isNaN(s)?this.setState({message:"NaN"}):(this.setState({message:null}),this.props.handleChange(this.props.name,s))}else this.setState({message:"Error"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.rangeParams,i=t.id,r=t.value,s=i||a,o=n.minVal,l=n.maxVal,c=n.stepVal,d={type:"number",input:"numeric",id:s,ref:this.myRef,value:r,min:o,max:l,step:c,style:{margin:0}};return(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{htmlFor:s,className:"label",children:a}),(0,S.jsx)("input",(0,ae.Z)((0,ae.Z)({},d),{},{onChange:function(t){return e.handleChange(t.target.value)}})),(0,S.jsx)("label",{className:"label red",style:{opacity:1},children:this.state.message})]})}}]),a}(i.Component),me=he,ge=function(e){var t=e.info;return(0,S.jsxs)("div",{className:"message",children:[(0,S.jsxs)("h2",{className:"red",children:[K.times," ",t.subject]}),(0,S.jsx)("p",{children:t.body})]})},xe=function(e){var t=e.id,a=e.value,n=e.handleChange,i=e.showValue;return(0,S.jsxs)("div",{className:"switch-container",children:[(0,S.jsxs)("label",{className:"switch",children:[(0,S.jsx)("input",{id:t,type:"checkbox",value:a,onChange:n}),(0,S.jsx)("span",{className:"toggle-switch-widget round"}),(0,S.jsx)("span",{style:{opacity:0},children:a})]}),(0,S.jsx)("label",{className:"label",children:i?a:null})]})},fe=function(e){var t=e.title,a=e.other,n=e.children;return(0,S.jsxs)("div",{children:[(0,S.jsxs)("div",{className:"card-header",children:[t,a]}),n]})},ye=function(e){var t=e.handleClick,a=e.children;return(0,S.jsx)("button",{type:"button",className:"button",onClick:t,children:a})},ve=function(e){var t=e.reset;return(0,S.jsx)(ye,{handleClick:t,children:"reset"})},we=function(e){(0,re.Z)(a,e);var t=(0,se.Z)(a);function a(){var e;(0,ne.Z)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).sectionName=k,e.state={isFine:!0},e.reset=function(){return e.props.onUpdate("dimensions",{dimensions:s})},e.toggleMode=function(){return e.setState({isFine:!e.state.isFine})},e.updateFieldState=function(t,a){return e.updateDimensions(t,a)},e.updateDimensions=function(t,a){var n=(0,ae.Z)((0,ae.Z)({},e.props.params.dimensions),{},(0,pe.Z)({},t,a));e.props.onUpdate("dimensions",{dimensions:n})},e.render=function(){return(0,S.jsxs)(fe,{title:(0,S.jsx)("h2",{children:e.sectionName}),other:e.toggleSwitch,children:[e.NumberInputFields,(0,S.jsx)(ve,{reset:e.reset})]})},e}return(0,ie.Z)(a,[{key:"toggleSwitch",get:function(){var e={id:"DimensionsWidgetSwitch",value:this.state.isFine?"1x":"5x",handleChange:this.toggleMode,showValue:!0};return(0,S.jsx)(xe,(0,ae.Z)({},e))}},{key:"NumberInputFields",get:function(){var e=this,t=_.dimensionInputs,a=t.minVal,n=t.maxVal,r=this.state.isFine?1:5,s=this.props.params.dimensions,o=F.map((function(t){var o={name:t,value:s[t],rangeParams:{minVal:a,maxVal:n,stepVal:r},handleChange:e.updateFieldState};return(0,i.createElement)(me,(0,ae.Z)((0,ae.Z)({},o),{},{key:t}))}));return(0,S.jsx)("div",{className:"grid-cols-6",children:o})}}]),a}(i.Component),je=we,Ze=a(8742),Se=a(5455),ke=function(e){var t=e.name,a=e.id,n=e.value,i=e.rangeParams,r=e.handleChange;return(0,S.jsxs)("div",{className:"slider-container",children:[(0,S.jsxs)("div",{className:"label",children:[(0,S.jsx)("label",{htmlFor:a||t,children:t}),": ",(0,S.jsx)("span",{children:n})]}),(0,S.jsx)("input",{type:"range",id:a||t,min:i.minVal,max:i.maxVal,step:i.stepVal,value:n,onChange:function(e){return r(t,e.target.value)},className:"slider"})]})},be=function(e){var t=e.names,a=e.values,n=e.handleChange,i=e.rangeParams;return t.map((function(e){return(0,S.jsx)(ke,{name:e,rangeParams:i?i[e]:_[e],handleChange:n,value:a[e]},e)}))},Ne=function(e){(0,re.Z)(a,e);var t=(0,se.Z)(a);function a(){var e;(0,ne.Z)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).updateFieldState=function(t,a){var n=Number(a);isNaN(n)||e.props.onUpdate(e.props.name,t,n)},e.fields=function(t){return A.map((function(a){var n="".concat(e.props.name,"-").concat(a),i={id:n,name:a,key:n,value:e.props.pose[a],rangeParams:_[a],handleChange:e.updateFieldState};return(0,S.jsx)(t,(0,ae.Z)({},i))}))},e.render=function(){return(0,S.jsx)(fe,{title:(0,S.jsx)("h3",{children:e.props.name}),children:(0,S.jsx)("div",{className:e.props.renderStacked?"grid-cols-1":"grid-cols-3",children:e.fields(e.props.WidgetType)})})},e}return(0,ie.Z)(a)}(i.Component),Me=Ne,Ve=function(e){(0,re.Z)(a,e);var t=(0,se.Z)(a);function a(){var e;(0,ne.Z)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).pageName=N,e.state={WidgetType:me},e.componentDidMount=function(){return e.props.onMount(e.pageName)},e.reset=function(){return e.props.onUpdate("pose",{pose:o})},e.updatePose=function(t,a,n){var i=e.props.params.pose,r=(0,ae.Z)((0,ae.Z)({},i),{},(0,pe.Z)({},t,(0,ae.Z)((0,ae.Z)({},i[t]),{},(0,pe.Z)({},a,n))));e.props.onUpdate("pose",{pose:r})},e.toggleMode=function(){var t=e.state.WidgetType===ke?me:ke;e.setState({WidgetType:t})},e.legPoseWidget=function(t){return(0,S.jsx)(Me,{name:t,pose:e.props.params.pose[t],onUpdate:e.updatePose,WidgetType:e.state.WidgetType,renderStacked:e.state.WidgetType===ke},t)},e.render=function(){return(0,S.jsxs)(fe,{title:(0,S.jsx)("h2",{children:e.pageName}),other:e.toggleSwitch,children:[(0,S.jsx)("div",{className:"grid-cols-2",children:I.map((function(t){return e.legPoseWidget(t)}))}),(0,S.jsx)(ve,{reset:e.reset})]})},e}return(0,ie.Z)(a,[{key:"toggleSwitch",get:function(){var e={id:"FwdKinematicsSwitch",value:this.state.WidgetType===ke?"Slide":"Input",handleChange:this.toggleMode,showValue:!0};return(0,S.jsx)(xe,(0,ae.Z)({},e))}}]),a}(i.Component),ze=Ve,Pe={rightMiddle:"rm",rightFront:"rf",leftFront:"lf",leftMiddle:"lm",leftBack:"lb",rightBack:"rb"},Ce=function(e){var t=e.rm,a=e.rf,n=e.lf,i=e.lm,r=e.lb,s=e.rb;return(0,S.jsxs)("table",{children:[(0,S.jsx)("thead",{children:(0,S.jsxs)("tr",{children:[(0,S.jsx)("th",{children:"POSITION"}),(0,S.jsx)("th",{children:"ALPHA"}),(0,S.jsx)("th",{children:"BETA"}),(0,S.jsx)("th",{children:"GAMMA"})]})}),(0,S.jsxs)("tbody",{children:[(0,S.jsx)(We,{label:"rightMiddle",leg:t}),(0,S.jsx)(We,{label:"rightFront",leg:a}),(0,S.jsx)(We,{label:"leftFront",leg:n}),(0,S.jsx)(We,{label:"leftMiddle",leg:i}),(0,S.jsx)(We,{label:"leftBack",leg:r}),(0,S.jsx)(We,{label:"rightBack",leg:s})]})]})},We=function(e){var t=e.label,a=e.leg;return(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{children:t}),(0,S.jsx)("td",{children:a.alpha}),(0,S.jsx)("td",{children:a.beta}),(0,S.jsx)("td",{children:a.gamma})]})},Ee=function(e){var t=function(e){return Se.Y3.reduce((function(t,a){var n=Pe[a],i=e[a],r=i.alpha,s=i.beta,o=i.gamma;return t[n]={alpha:Number(r).toFixed(2),beta:Number(s).toFixed(2),gamma:Number(o).toFixed(2)},t}),{})}(e.pose);return(0,S.jsx)("div",{className:"table-container",children:(0,S.jsx)(Ce,(0,ae.Z)({},t))})},Te=function(e){(0,re.Z)(a,e);var t=(0,se.Z)(a);function a(){var e;(0,ne.Z)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).pageName=b,e.state={ikParams:c,errorMessage:null},e.componentDidMount=function(){return e.props.onMount(e.pageName)},e.reset=function(){var t=(0,Se.wi)(e.props.params.dimensions,c);e.updateHexapodPlot(t.hexapod,c)},e.updateHexapodPlot=function(t,a){e.setState({ikParams:a,errorMessage:null}),e.props.onUpdate("hexapod",{hexapod:t})},e.updateIkParams=function(t,a){var n=(0,ae.Z)((0,ae.Z)({},e.state.ikParams),{},(0,pe.Z)({},t,a)),i=(0,Se.wi)(e.props.params.dimensions,n);if(!i.obtainedSolution)return e.props.onUpdate("hexapod",{hexapod:null}),void e.setState({errorMessage:i.message});e.updateHexapodPlot(i.hexapod,n)},e.render=function(){return(0,S.jsxs)(fe,{title:(0,S.jsx)("h2",{children:e.pageName}),children:[(0,S.jsx)("div",{className:"grid-cols-3",children:e.sliders.slice(0,6)}),(0,S.jsx)("div",{className:"grid-cols-2",children:e.sliders.slice(6,8)}),(0,S.jsx)(ve,{reset:e.reset}),e.additionalInfo]})},e}return(0,ie.Z)(a,[{key:"sliders",get:function(){return be({names:G,values:this.state.ikParams,handleChange:this.updateIkParams})}},{key:"additionalInfo",get:function(){return this.state.errorMessage?(0,S.jsx)(ge,{info:this.state.errorMessage}):(0,S.jsx)(Ee,{pose:this.props.params.pose})}}]),a}(i.Component),Ae=Te,Fe=i.lazy((function(){return a.e(9).then(a.bind(a,3009))})),Ie=function(){return(0,S.jsx)("div",{style:{height:"80px"},children:(0,S.jsx)(i.Suspense,{fallback:(0,S.jsx)("p",{children:"A cute random robot will soon appear!"}),children:(0,S.jsx)(Fe,{})})})},Ge=function(e){(0,re.Z)(a,e);var t=(0,se.Z)(a);function a(){var e;(0,ne.Z)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).pageName=V,e.componentDidMount=function(){return e.props.onMount(e.pageName)},e.render=function(){return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)("div",{id:"landing",children:(0,S.jsx)(Ie,{})})})},e}return(0,ie.Z)(a)}(i.Component),Ue=Ge,De=function(e){(0,re.Z)(a,e);var t=(0,se.Z)(a);function a(){var e;(0,ne.Z)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).pageName=M,e.state={patternParams:l},e.componentDidMount=function(){e.props.onMount(e.pageName),e.reset()},e.reset=function(){e.props.onUpdate("pose",{pose:o}),e.setState({patternParams:l})},e.updatePatternPose=function(t,a){var n=(0,ae.Z)((0,ae.Z)({},e.state.patternParams),{},(0,pe.Z)({},t,Number(a))),i={};for(var r in o)i[r]=n;e.props.onUpdate("pose",{pose:i}),e.setState({patternParams:n})},e.render=function(){return(0,S.jsxs)(fe,{title:(0,S.jsx)("h2",{children:e.pageName}),children:[(0,S.jsx)("div",{className:"grid-cols-1",children:e.sliders}),(0,S.jsx)(ve,{reset:e.reset})]})},e}return(0,ie.Z)(a,[{key:"sliders",get:function(){return be({names:A,values:this.state.patternParams,handleChange:this.updatePatternPose})}}]),a}(i.Component),Re=De,Be=function(e,t){return Object.keys(e).reduce((function(a,n){var i=e[n],r=i.alpha,s=i.beta,o=i.gamma;return a[n]={alpha:r[t],beta:s[t],gamma:o[t]},a}),{})},_e=function(e,t,a){return(0,S.jsx)(xe,{id:e,handleChange:a,value:t,showValue:!0})},Le=function(e,t,a){return(0,S.jsxs)("div",{className:"grid-cols-3",style:{paddingBottom:"20px"},children:[e,t,a]})},Ke=function(e){return e.leftMiddle.alpha.length},Oe=function(e){(0,re.Z)(a,e);var t=(0,se.Z)(a);function a(){var e;(0,ne.Z)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).pageName=z,e.currentTwist=0,e.walkSequence=null,e.state={gaitParams:d,isAnimating:!1,isTripodGait:!0,isForward:!0,inWalkMode:!0,showGaitWidgets:!0,animationCount:0},e.componentDidMount=function(){e.props.onMount(e.pageName);var t=e.state,a=t.isTripodGait,n=t.inWalkMode;e.setWalkSequence(d,a,n)},e.componentWillUnmount=function(){clearInterval(e.intervalID)},e.animate=function(){var t=e.state,a=t.isForward,n=t.inWalkMode,i=Ke(e.walkSequence),r=(e.state.animationCount+1)%i;e.setState({animationCount:r});var s=a?r:i-r,o=Math.max(0,Math.min(i-1,s)),l=Be(e.walkSequence,o);if(n)e.onUpdate(l,e.currentTwist);else{var c=2*e.state.gaitParams.hipSwing/i,d=a?(e.currentTwist+c)%360:(e.currentTwist-c)%360;e.onUpdate(l,d)}},e.onUpdate=function(t,a){e.currentTwist=a;var n=e.props.params.dimensions,i=new Se.sI(n,t,{wontRotate:!0});if(i&&i.body){var r=(0,Se.ku)(a);e.props.onUpdate("hexapod",{hexapod:i.cloneTrot(r)})}},e.setWalkSequence=function(t,a,n){var i=a?"tripod":"ripple",r=n?"walking":"rotating",s=e.props.params.dimensions,o=e.state.animationCount;e.walkSequence=(0,Se.Pc)(s,t,i,r)||e.walkSequence;var l=Be(e.walkSequence,o);e.onUpdate(l,e.currentTwist),e.setState({gaitParams:t,isTripodGait:a,inWalkMode:n})},e.reset=function(){var t=e.state,a=t.isTripodGait,n=t.inWalkMode;e.currentTwist=0,e.setWalkSequence(d,a,n)},e.updateGaitParams=function(t,a){var n=e.state,i=n.isTripodGait,r=n.inWalkMode,s=(0,ae.Z)((0,ae.Z)({},e.state.gaitParams),{},(0,pe.Z)({},t,a));e.setWalkSequence(s,i,r)},e.toggleWalkMode=function(){var t=e.state,a=t.gaitParams,n=t.isTripodGait,i=!e.state.inWalkMode;e.setWalkSequence(a,n,i)},e.toggleGaitType=function(){var t=e.state,a=t.gaitParams,n=t.inWalkMode,i=!e.state.isTripodGait;e.setWalkSequence(a,i,n)},e.toggleWidgets=function(){return e.setState({showGaitWidgets:!e.state.showGaitWidgets})},e.toggleDirection=function(){return e.setState({isForward:!e.state.isForward})},e.toggleAnimating=function(){var t=!e.state.isAnimating;e.setState({isAnimating:t}),t?e.intervalID=setInterval(e.animate,25):clearInterval(e.intervalID)},e}return(0,ie.Z)(a,[{key:"widgetsSwitch",get:function(){var e=this.state.showGaitWidgets?"controlsShown":"poseShown";return _e("widgetSw",e,this.toggleWidgets)}},{key:"animatingSwitch",get:function(){var e=this.state.isAnimating?"PLAYING...":"...PAUSED. ";return _e("animatingSw",e,this.toggleAnimating)}},{key:"gaitTypeSwitch",get:function(){var e=this.state.isTripodGait?"tripodGait":"rippleGait";return _e("gaitSw",e,this.toggleGaitType)}},{key:"directionSwitch",get:function(){var e=this.state.isForward?"isForward":"isBackward";return _e("directionSw",e,this.toggleDirection)}},{key:"rotateSwitch",get:function(){var e=this.state.inWalkMode?"isWalk":"isRotate";return _e("rotateSw",e,this.toggleWalkMode)}},{key:"sliders",get:function(){var e=be({names:U,values:this.state.gaitParams,rangeParams:L,handleChange:this.updateGaitParams});return(0,S.jsx)("div",{className:"grid-cols-2",children:e})}},{key:"animationCount",get:function(){var e=this.state,t=e.isAnimating,a=e.animationCount;return(0,S.jsx)("div",{className:"text",hidden:!t,children:a})}},{key:"render",value:function(){var e=Le(this.animatingSwitch,this.widgetsSwitch),t=Le(this.gaitTypeSwitch,this.directionSwitch,this.rotateSwitch),a=this.state.showGaitWidgets,n=this.props.params.pose;return(0,S.jsxs)(fe,{title:(0,S.jsx)("h2",{children:this.pageName}),other:this.animationCount,children:[e,(0,S.jsxs)("div",{hidden:!a,children:[t,this.sliders,(0,S.jsx)(ve,{reset:this.reset})]}),(0,S.jsx)("div",{hidden:a,children:(0,S.jsx)(Ee,{pose:n})})]})}}]),a}(i.Component),qe=Oe,He=function(e){var t=e.pageComponent;return(0,S.jsxs)(Ze.rs,{children:[(0,S.jsx)(Ze.AW,{path:"/",exact:!0,children:t(Ue)}),(0,S.jsx)(Ze.AW,{path:O.legPatterns.path,exact:!0,children:t(Re)}),(0,S.jsx)(Ze.AW,{path:O.forwardKinematics.path,exact:!0,children:t(ze)}),(0,S.jsx)(Ze.AW,{path:O.inverseKinematics.path,exact:!0,children:t(Ae)}),(0,S.jsx)(Ze.AW,{path:O.walkingGaits.path,exact:!0,children:t(qe)}),(0,S.jsx)(Ze.AW,{children:(0,S.jsx)(Ze.l_,{to:"/"})})]})},Xe=function(e,t,a){if("default"===e)return new Se.sI(s,o);var n=null,i=a.pose,r=a.dimensions;return"pose"===e&&(n=new Se.sI(r,t.pose)),"dimensions"===e&&(n=new Se.sI(t.dimensions,i)),"hexapod"===e&&(n=t.hexapod),n&&n.foundSolution?n:a},Ye=a(8577),Je=a(9454),Qe=a(7762),$e=["leftFront","rightFront","leftMiddle","rightMiddle","leftBack","rightBack"],et=["leftFront","leftMiddle","leftBack"],tt=function(e,t){var a=t?-1*e:e;return Math.max(Math.min(Math.round(a)+90,180),0)},at=function(e){var t,a={},n=(0,Qe.Z)($e);try{for(n.s();!(t=n.n()).done;){var i=t.value,r=e[i],s=r.alpha,o=r.beta,l=r.gamma,c=et.includes(i);a[i]={alpha:tt(s,!0),beta:tt(o,c),gamma:tt(l,!c)}}}catch(d){n.e(d)}finally{n.f()}return a},nt=function(){var e=(0,i.useRef)(),t=(0,i.useState)((function(){return new Date})),a=(0,n.Z)(t,2),r=a[0],s=a[1],o=(0,i.useState)(0),l=(0,n.Z)(o,2),c=l[0],d=l[1];return(0,i.useEffect)((function(){return e.current=(0,Ye.Z)(Je.SOCKET_SERVER_URL),function(){return e.current.disconnect()}}),[]),[(0,i.useCallback)((function(t){var a=new Date,n=a-r;n<Je.MINIMUM_TIME_BETWEEN_MESSAGES?console.log("too soon: ",n):(console.log("just right: ",n),e.current.emit(Je.CHANNEL_NAME,{pose:at(t),sender:Je.CLIENT_SENDER_NAME,time:a.getTime()}),s(a),d(n))}),[r]),c]},it=function(){var e=(0,i.useState)(V),t=(0,n.Z)(e,2),a=t[0],s=t[1],l=(0,i.useState)((function(){return Xe("default")})),c=(0,n.Z)(l,2),d=c[0],u=c[1],p=(0,i.useState)(0),h=(0,n.Z)(p,2),m=h[0],g=h[1],x=(0,i.useState)(!0),f=(0,n.Z)(x,2),y=f[0],v=f[1],w=a!==V,j=nt(),Z=(0,n.Z)(j,2),k=Z[0],b=Z[1];(0,i.useEffect)((function(){return k(d.pose)}),[d,k]);var N=(0,i.useCallback)((function(e,t){g((function(e){return e+1})),u((function(a){return Xe(e,t,a)}))}),[]);(0,i.useEffect)((function(){document.title=a+" - Mithi's Bare Minimum Hexapod Robot Simulator",N("pose",{pose:o})}),[a,N]);var M=(0,i.useCallback)((function(e){return(0,S.jsx)(e,{onMount:function(e){return s(e)},onUpdate:N,params:{dimensions:d.dimensions,pose:d.pose}})}),[N,d]);return(0,S.jsxs)(r.VK,{children:[(0,S.jsx)(te,{}),(0,S.jsxs)("div",{id:"main",children:[(0,S.jsx)("button",{onClick:function(){return v(!y)},children:"onn/off"}),(0,S.jsxs)("div",{id:"sidebar",children:[(0,S.jsx)("div",{hidden:!w,children:(0,S.jsx)(je,{params:{dimensions:d.dimensions},onUpdate:N})}),(0,S.jsx)(He,{pageComponent:M}),(0,S.jsxs)("p",{children:[" deltaDate: ",b," "]}),w?null:(0,S.jsx)(ee,{})]}),(0,S.jsx)("div",{id:"plot",className:"border",hidden:!w,children:y&&(0,S.jsx)(ue,{revision:m,hexapod:d})})]}),w?(0,S.jsx)(ee,{}):null]})}},9454:function(e){var t="http://192.168.1.100:".concat(4001);e.exports={SOCKET_CLIENT_URLS:["http://localhost:5000","http://192.168.254.105:5000","http://localhost:4001"],SOCKET_SERVER_PORT:4001,SOCKET_SERVER_URL:t,MINIMUM_TIME_BETWEEN_MESSAGES:80,CLIENT_SENDER_NAME:"react-app",CHANNEL_NAME:"setServo"}}}]);
//# sourceMappingURL=485.fab61be7.chunk.js.map