import{r}from"./index.20226cc4.js";import{M as x}from"./MainLayout.91da7236.js";import{g as s,j as e,F as h,H as t,T as c,e as i}from"./theme.977ad65c.js";import{C as a,a as o,b as n,c as l}from"./chunk-S432VF2S.eb72c13b.js";const b=()=>{const[d,u]=r.useState([{},""]);return r.useEffect(()=>{s("7cortex_user")||(window.location.href="/dev/mon_compte_business//signup"),u(s("7cortex_user"))},[]),e.jsx(x,{user:d,activeLink:"Factures clients",children:e.jsxs(h,{children:[e.jsxs(a,{m:2,bgColor:"blue.500",w:{base:"100%",md:"30%"},align:"left",children:[e.jsx(o,{children:e.jsx(t,{color:"white",size:"md",children:"Ajouter une facture "})}),e.jsx(n,{children:e.jsx(c,{color:"white",children:" Créer une facture  "})}),e.jsx(l,{children:e.jsx("a",{href:"/dev/mon_compte_business/facture_client/create",children:e.jsx(i,{children:"Ajouter votre facture"})})})]}),e.jsxs(a,{m:2,bgColor:"blue.300",w:{base:"100%",md:"30%"},align:"left",children:[e.jsx(o,{children:e.jsx(t,{color:"white",size:"md",children:"Attacher une facture externe"})}),e.jsx(n,{children:e.jsx(c,{color:"white",children:"Comptabiliser une facture externe "})}),e.jsx(l,{children:e.jsx("a",{href:"/dev/mon_compte_business/facture_client/add",children:e.jsx(i,{children:"Attacher votre facture"})})})]})]})})};export{b as default};