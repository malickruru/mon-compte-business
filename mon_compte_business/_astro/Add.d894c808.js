import{r as l}from"./index.20226cc4.js";import{M as B}from"./MainLayout.91da7236.js";import{j as e,H as m,i as k,k as b,h as v,B as S,e as a,F as y,g as C}from"./theme.977ad65c.js";import{d as _,C as E,E as L,S as M,L as A,R as D,a as R,B as z,b as H,c as I}from"./Success.0f1f33aa.js";import{C as h,a as x,b as j,c as p}from"./chunk-S432VF2S.eb72c13b.js";import"./Separator.bb430a8c.js";const N=({formData:t,setFormData:s,page:r,setPage:n})=>e.jsxs(h,{w:{base:"100%",md:"60%"},align:"center",children:[e.jsx(x,{children:e.jsx(m,{size:"md",children:"Montant de la facture"})}),e.jsx(j,{children:e.jsxs(k,{children:[e.jsx(b,{children:"Montant total de la facture en Fcfa"}),e.jsx(v,{type:"number",value:t.pvgoto,onChange:o=>s({...t,pvgoto:o.target.value})}),e.jsx(S,{m:5}),e.jsx(b,{children:"Montant  de la facture déjà réglé"}),e.jsx(v,{type:"number",value:t.reglement,onChange:o=>s({...t,reglement:o.target.value})})]})}),e.jsxs(p,{children:[e.jsx(a,{mt:4,mr:2,colorScheme:"blue",onClick:()=>{n(r-1)},children:"Précédent"}),e.jsx(a,{mt:4,colorScheme:"blue",isDisabled:!t.pvgoto,onClick:()=>{n(r+1)},children:"Suivant"})]})]}),q=({formData:t,setFormData:s,page:r,setPage:n})=>e.jsxs(h,{w:{base:"100%",md:"60%"},align:"center",children:[e.jsx(x,{children:e.jsx(m,{size:"md",children:"Détail de la facture"})}),e.jsx(j,{children:e.jsx(_.CKEditor,{editor:E,data:t.message,onBlur:(o,i)=>{s({...t,message:i.getData()})}})}),e.jsxs(p,{children:[e.jsx(a,{mt:4,mr:2,colorScheme:"blue",onClick:()=>{n(r-1)},children:"Précédent"}),e.jsx(a,{mt:4,colorScheme:"blue",isDisabled:!t.message,onClick:()=>{n(r+1)},children:"Suivant"})]})]}),G=({formData:t,setFormData:s,page:r,setPage:n,fichier:o,setFichier:i})=>{const c=u=>{i(u)};return e.jsxs(h,{w:{base:"100%",md:"60%"},align:"center",children:[e.jsx(x,{children:e.jsx(m,{size:"md",children:"Ajouter un fichier existant pour justifier la facture (optionnel)"})}),e.jsxs(j,{children:[e.jsx(L,{multiple:!0,handleChange:c,name:"file"}),e.jsx(S,{p:5,children:o?`Nom du fichier: ${o[0].name}`:"Aucun fichier téléversé"})]}),e.jsxs(p,{children:[e.jsx(a,{mt:4,mr:2,colorScheme:"blue",onClick:()=>{n(r-1)},children:"Précédent"}),e.jsx(a,{mt:4,colorScheme:"blue",isDisabled:!1,onClick:()=>{n(r+1)},children:"Suivant"})]})]})};function K({user:t}){const[s,r]=l.useState(0),[n,o]=l.useState([]),[i,c]=l.useState({compta_libelle:"",societetiers:"",emailtiers:"",pvgoto:"",reglement:0,message:"",ip:"",commission_hosting:100,id_operation:7,codeop:"v",email:"",groupe:"",societe:""}),[u,g]=l.useState("");l.useEffect(()=>{var w={method:"GET"};fetch("https://www.7cortex.com/dev/7goto/api/society.php",w).then(d=>d.json()).then(d=>o(d.data)).catch(d=>console.log("error",d))},[]);const f=[e.jsx(M,{formData:i,setFormData:c,page:s,setPage:r,society:n}),e.jsx(A,{formData:i,setFormData:c,page:s,setPage:r}),e.jsx(N,{formData:i,setFormData:c,page:s,setPage:r}),e.jsx(q,{formData:i,setFormData:c,page:s,setPage:r}),e.jsx(G,{formData:i,setFormData:c,page:s,setPage:r,fichier:u,setFichier:g}),e.jsx(D,{formData:i,setFormData:c,fichier:u,setFichier:g,page:s,setPage:r,user:t}),e.jsx(R,{})],F=()=>(s+1)/f.length*100;return e.jsxs(y,{flexDirection:"column",alignItems:"center",justifyContent:"center",m:5,children:[e.jsx("div",{className:"progress-bar",style:{width:"60%"},children:e.jsx("div",{style:{width:F()+"%"}})}),f[s]]})}const J=()=>{const[t,s]=l.useState([{},""]);return l.useEffect(()=>{C("7cortex_user")||(window.location.href="/dev/mon_compte_business/signup"),s(C("7cortex_user"))},[]),e.jsxs(B,{user:t,activeLink:"Factures clients",children:[e.jsx(z,{children:e.jsx(H,{children:e.jsx(I,{href:"/dev/mon_compte_business/facture_client/list",children:" Retour à la liste "})})}),e.jsx(m,{as:"h1",textAlign:"center",p:3,children:" Ajouter une facture"}),e.jsx(K,{user:t})]})};export{J as default};