__d(function(g,_r,_i,a,m,_e,_d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"PasswordRecoveryScreen",{enumerable:!0,get:function(){return x}}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return x}});var e,t=_r(_d[0]),r=_r(_d[1]),s=(e=r)&&e.__esModule?e:{default:e},n=_r(_d[2]),o=_r(_d[3]),l=_r(_d[4]),i=_r(_d[5]),d=_r(_d[6]),c=_r(_d[7]),u=_r(_d[8]),h=_r(_d[9]),y=_r(_d[10]),v=_r(_d[11]),p=_r(_d[12]);const x={component:()=>{let[e,r]=(0,n.useState)(!0),{authenticated:o,user:i}=(0,l.u)(),{walletProxy:x,closePrivyModal:w,createAnalyticsEvent:S,client:P}=(0,y.u)(),{navigate:_,data:k,onUserCloseViaDialogOrKeybindRef:A}=(0,v.u)(),[C,I]=(0,n.useState)(void 0),[O,T]=(0,n.useState)(""),[R,U]=(0,n.useState)(!1),{entropyId:W,entropyIdVerifier:E,onCompleteNavigateTo:H,onSuccess:M,onFailure:N}=k.recoverWallet,V=(e="User exited before their wallet could be recovered")=>{w({shouldCallAuthOnSuccess:!1}),N("string"==typeof e?new h.k(e):e)};return A.current=V,(0,n.useEffect)(()=>{if(!o)return V("User must be authenticated and have a Privy wallet before it can be recovered")},[o]),(0,t.jsxs)(p.S,{children:[(0,t.jsx)(p.S.Header,{icon:s.default,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:V}),(0,t.jsx)(p.S.Body,{children:(0,t.jsx)(f,{children:(0,t.jsxs)("div",{children:[(0,t.jsxs)(c.P,{children:[(0,t.jsx)(c.a,{type:e?"password":"text",onChange:e=>(e=>{e&&I(e)})(e.target.value),disabled:R,style:{paddingRight:"2.3rem"}}),(0,t.jsx)(c.I,{style:{right:"0.75rem"},children:e?(0,t.jsx)(c.H,{onClick:()=>r(!1)}):(0,t.jsx)(c.S,{onClick:()=>r(!0)})})]}),!!O&&(0,t.jsx)(j,{children:O})]})})}),(0,t.jsxs)(p.S.Footer,{children:[(0,t.jsx)(p.S.HelpText,{children:(0,t.jsxs)(d.S,{children:[(0,t.jsx)("h4",{children:"Why is this necessary?"}),(0,t.jsx)("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),(0,t.jsx)(p.S.Actions,{children:(0,t.jsx)(b,{loading:R||!x,disabled:!C,onClick:async()=>{U(!0);let e=await P.getAccessToken(),t=(0,l.k)(i,W);if(!e||!t||null===C)return V("User must be authenticated and have a Privy wallet before it can be recovered");try{S({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:t.address}}),await(x?.recover({accessToken:e,entropyId:W,entropyIdVerifier:E,recoveryPassword:C})),T(""),H?_(H):w({shouldCallAuthOnSuccess:!1}),M?.(t),S({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:t.address}})}catch(e){(0,u.m)(e)?T("Invalid recovery password, please try again."):T("An error has occurred, please try again.")}finally{U(!1)}},$hideAnimations:!W&&R,children:"Recover your account"})}),(0,t.jsx)(p.S.Watermark,{})]})]})}};let f=o.styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,j=o.styled.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,b=(0,o.styled)(i.P)`
  ${({$hideAnimations:e})=>e&&o.css`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`},2864,[8,3215,17,2375,2323,2915,2920,3225,771,2334,2326,2389,3226]);