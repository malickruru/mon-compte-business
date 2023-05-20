import{r as a}from"./index.20226cc4.js";import{A as C,M as _}from"./MainLayout.91da7236.js";import{j as e,H as S,F as p,T as m,e as b,h as v,g as y}from"./theme.977ad65c.js";import{S as I,L as A,R as B,a as F,B as W,b as k,c as q}from"./Success.0f1f33aa.js";import{H as w}from"./Separator.bb430a8c.js";import{C as E,a as L,b as T,c as D}from"./chunk-S432VF2S.eb72c13b.js";const H=({setMontant:i,id:s})=>{const[l,u]=a.useState(""),[n,d]=a.useState(1),[r,x]=a.useState(0);return e.jsxs("div",{id:"detail-"+s,"data-desc":l,"data-qte":n,"data-prix":r,"data-total":n*r,children:[e.jsxs(p,{justifyContent:"space-between",alignItems:{sm:"center"},w:"100%",my:{md:"12px"},children:[e.jsx(v,{type:"text",value:l,placeholder:"description",onChange:c=>{u(c.target.value)}}),e.jsx(v,{type:"number",min:10,value:n,placeholder:"qté",onChange:c=>{i(c.target.value*r,s),d(c.target.value)}}),e.jsx(v,{type:"number",value:r,placeholder:"prix",onChange:c=>{i(c.target.value*n,s),x(c.target.value)}}),e.jsx(m,{my:"5px",children:n*r})]}),e.jsx(w,{})]})},M=({formData:i,setFormData:s,page:l,setPage:u})=>{const[n,d]=a.useState([0]),[r,x]=a.useState(0),c=()=>{let o=0;for(let t=0;t<n.length;t++)o+=parseInt(n[t]);x(o)},j=(o,t)=>{if(o>0){let h=n;h[t]=o,d(h),c(),s({...i,pvgoto:r})}},f=()=>{var o="";for(let h=0;h<n.length;h++){let g=document.getElementById("detail-"+h);o+=`<tr>
            <td>${g.getAttribute("data-desc")}</td>
            <td>${g.getAttribute("data-qte")}</td>
            <td>${g.getAttribute("data-prix")}</td>
            <td>${g.getAttribute("data-total")}</td>
            </tr>`}var t=`<table>
        <tr>
          <th>Description</th>
          <th>quantité</th>
          <th>Prix</th>
          <th>Total</th>
        </tr>
          ${o}
        </table>`;return t};return e.jsxs(E,{w:{base:"100%",md:"60%"},align:"center",children:[e.jsx(L,{children:e.jsx(S,{size:"md",children:"Détail de la facture"})}),e.jsxs(T,{w:"100%",children:[e.jsxs(p,{justifyContent:"space-between",alignItems:{sm:"center"},w:"100%",my:{md:"12px"},children:[e.jsx(m,{fontWeight:"bold",my:"5px",children:"Description"}),e.jsx(m,{fontWeight:"bold",my:"5px",children:"Quantitée"}),e.jsx(m,{fontWeight:"bold",my:"5px",children:"Prix unitaire"}),e.jsx(m,{fontWeight:"bold",my:"5px",children:"Montant"})]}),e.jsx(w,{}),n.map((o,t)=>e.jsx(H,{setMontant:j,id:t},t)),e.jsx(p,{children:e.jsx(b,{colorScheme:"blue",onClick:()=>{d(o=>[...o,0])},children:e.jsx(C,{})})}),e.jsxs(p,{justifyContent:"space-between",alignItems:{sm:"center"},w:"100%",my:{md:"12px"},children:[e.jsx(m,{fontWeight:"bold",my:"5px",children:"Total"}),e.jsx(m,{fontWeight:"bold",my:"5px",children:r})]})]}),e.jsxs(D,{children:[e.jsx(b,{mt:4,mr:2,colorScheme:"blue",onClick:()=>{u(l-1)},children:"Précédent"}),e.jsx(b,{mt:4,colorScheme:"blue",isDisabled:!i.pvgoto,onClick:()=>{s({...i,pvgoto:r,message:f()}),u(l+1)},children:"Suivant"})]})]})};function R({user:i}){const[s,l]=a.useState(0),[u,n]=a.useState([]),[d,r]=a.useState({compta_libelle:"",societetiers:"",emailtiers:"",pvgoto:"",reglement:0,message:"",ip:"",commission_hosting:100,id_operation:7,codeop:"v",email:"",groupe:"",societe:""}),[x,c]=a.useState("");a.useEffect(()=>{var o={method:"GET"};fetch("https://www.7cortex.com/dev/7goto/api/society.php",o).then(t=>t.json()).then(t=>n(t.data)).catch(t=>console.log("error",t))},[]);const j=[e.jsx(I,{formData:d,setFormData:r,page:s,setPage:l,society:u}),e.jsx(A,{formData:d,setFormData:r,page:s,setPage:l}),e.jsx(M,{formData:d,setFormData:r,page:s,setPage:l}),e.jsx(B,{formData:d,setFormData:r,fichier:x,setFichier:c,page:s,setPage:l,user:i}),e.jsx(F,{})],f=()=>(s+1)/j.length*100;return e.jsxs(p,{flexDirection:"column",alignItems:"center",justifyContent:"center",m:5,children:[e.jsx("div",{className:"progress-bar",style:{width:"60%"},children:e.jsx("div",{style:{width:f()+"%"}})}),j[s]]})}const O=()=>{const[i,s]=a.useState([{},""]);return a.useEffect(()=>{y("7cortex_user")||(window.location.href="/dev/mon_compte_business/signup"),s(y("7cortex_user"))},[]),e.jsxs(_,{user:i,activeLink:"Factures clients",children:[e.jsx(W,{children:e.jsx(k,{children:e.jsx(q,{href:"/dev/mon_compte_business/facture_client/list",children:" Retour à la liste "})})}),e.jsx(S,{as:"h1",textAlign:"center",p:3,children:" Ajouter une facture"}),e.jsx(R,{user:i})]})};export{O as default};
