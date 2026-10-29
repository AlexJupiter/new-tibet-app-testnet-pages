__d(function(_g,_r,_i,_a,_m,_e,_d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"SignRequestScreen",{enumerable:!0,get:function(){return S}}),Object.defineProperty(_e,"SignRequestView",{enumerable:!0,get:function(){return f}}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return S}});var e=_r(_d[0]),t=_r(_d[1]),n=_r(_d[2]),r=_r(_d[3]),i=_r(_d[4]),s=_r(_d[5]),a=_r(_d[6]),o=_r(_d[7]),l=_r(_d[8]),c=_r(_d[9]),d=_r(_d[10]),u=_r(_d[11]),g=_r(_d[12]),p=_r(_d[13]),y=_r(_d[14]);const x=i.styled.img`
  && {
    height: ${e=>"sm"===e.size?"65px":"140px"};
    width: ${e=>"sm"===e.size?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let h=e=>{if(!(0,s.isHex)(e))return e;try{let t=(0,s.hexToString)(e);return t.includes("\ufffd")?e:t}catch{return e}},m=e=>{try{let n=t.base64.decode(e),r=(new TextDecoder).decode(n);return r.includes("\ufffd")?e:r}catch{return e}},b=t=>{let{types:n,primaryType:r,...i}=t.typedData;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j,{data:i}),(0,e.jsx)(o.C,{text:(s=t.typedData,JSON.stringify(s,null,2)),itemName:"full payload to clipboard"})," "]});var s};const f=({method:t,messageData:r,copy:i,iconUrl:s,isLoading:a,success:o,walletProxyIsLoading:c,errorMessage:d,isCancellable:u,onSign:g,onCancel:p,onClose:f})=>(0,e.jsx)(y.S,{title:i.title,subtitle:i.description,showClose:!0,onClose:f,icon:n.Edit,iconVariant:"subtle",helpText:d?(0,e.jsx)(C,{children:d}):void 0,primaryCta:{label:i.buttonText,onClick:g,disabled:a||o||c,loading:a},secondaryCta:u?{label:"Not now",onClick:p,disabled:a||o||c}:void 0,watermark:!0,children:(0,e.jsxs)(l.a,{children:[s?(0,e.jsx)(x,{style:{alignSelf:"center"},size:"sm",src:s,alt:"app image"}):null,(0,e.jsxs)(E,{children:["personal_sign"===t&&(0,e.jsx)(w,{children:h(r)}),"eth_signTypedData_v4"===t&&(0,e.jsx)(b,{typedData:r}),"solana_signMessage"===t&&(0,e.jsx)(w,{children:m(r)})]})]})}),S={component:()=>{let{authenticated:t}=(0,u.u)(),{initializeWalletProxy:n,closePrivyModal:i}=(0,g.u)(),{navigate:s,data:o,onUserCloseViaDialogOrKeybindRef:l}=(0,p.u)(),[c,y]=(0,r.useState)(!0),[x,h]=(0,r.useState)(""),[m,b]=(0,r.useState)(),[S,E]=(0,r.useState)(null),[C,j]=(0,r.useState)(!1);(0,r.useEffect)(()=>{t||s("LandingScreen")},[t]),(0,r.useEffect)(()=>{n(u.W).then(e=>{y(!1),e||(h("An error has occurred, please try again."),b(new d.P(new d.b(x,a.ProviderErrors.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:w,data:T,confirmAndSign:_,onSuccess:v,onFailure:P,uiOptions:R}=o.signMessage,D={title:R?.title||"Sign message",description:R?.description||"Signing this message will not cost you any fees.",buttonText:R?.buttonText||"Sign and continue"},O=e=>{e?v(e):P(m||new d.P(new d.b("The user rejected the request.",a.ProviderErrors.E4001_USER_REJECTED_REQUEST.eipCode))),i({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{E(null),h(""),b(void 0)},200)};return l.current=()=>{O(S)},(0,e.jsx)(f,{method:w,messageData:T,copy:D,iconUrl:R?.iconUrl&&"string"==typeof R.iconUrl?R.iconUrl:void 0,isLoading:C,success:null!==S,walletProxyIsLoading:c,errorMessage:x,isCancellable:R?.isCancellable,onSign:async()=>{j(!0),h("");try{let e=await _();E(e),j(!1),setTimeout(()=>{O(e)},u.Q)}catch(e){console.error(e),h("An error has occurred, please try again."),b(new d.P(new d.b(x,a.ProviderErrors.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),j(!1)}},onCancel:()=>O(null),onClose:()=>O(S)})}};let E=i.styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,C=i.styled.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,j=(0,i.styled)(c.D)`
  margin-top: 0;
`,w=(0,i.styled)(c.M)`
  margin-top: 0;
`},2892,[8,1167,2915,17,2376,856,773,2958,2928,3238,2341,2324,2327,2390,2916]);