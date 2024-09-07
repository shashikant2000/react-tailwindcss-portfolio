"use strict";(self.webpackChunkreact_tailwindcss_portfolio=self.webpackChunkreact_tailwindcss_portfolio||[]).push([[283],{448:(e,t,r)=>{r.d(t,{A:()=>g});var a=r(43),s=r(254),i=r(605),c=r(475),l=r(579);const o=e=>{let{title:t,category:r,image:a}=e;return(0,l.jsx)(i.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,l.jsx)(c.N_,{to:"/projects/single-project","aria-label":"Single Project",children:(0,l.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),(0,l.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,l.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,l.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})};var d=r(175);const n=["Web Application","Mobile Application","UI/UX Design","Branding"],m=e=>{let{setSelectProject:t}=e;return(0,l.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[(0,l.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),n.map((e=>(0,l.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})},g=()=>{const{projects:e,searchProject:t,setSearchProject:r,searchProjectsByTitle:i,selectProject:c,setSelectProject:n,selectProjectsByCategory:g}=(0,a.useContext)(d.Y);return(0,l.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,l.jsx)("div",{className:"text-center",children:(0,l.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,l.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,l.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),(0,l.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[(0,l.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,l.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:(0,l.jsx)(s.CKj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,l.jsx)("input",{onChange:e=>{r(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),(0,l.jsx)(m,{setSelectProject:n})]})]}),(0,l.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:c?g.map((e=>(0,l.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id))):t?i.map((e=>(0,l.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id))):e.map((e=>(0,l.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)))})]})}},175:(e,t,r)=>{r.d(t,{Y:()=>d,S:()=>n});var a=r(43),s=r(135),i=r(912),c=r(451);const l=[{id:1,title:"Google Health Platform",category:"Web Application",img:i,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Phoenix Digital Agency",category:"Mobile Application",img:r(388)},{id:3,title:"Project Management UI",category:"UI/UX Design",img:r(915)},{id:4,title:"Cloud Storage Platform",category:"UI/UX Design",img:r(756)},{id:5,title:"React Social App",category:"Mobile Application",img:c},{id:6,title:"Apple Design System",category:"Web Application",img:s}];var o=r(579);const d=(0,a.createContext)(),n=e=>{const[t,r]=(0,a.useState)(l),[s,i]=(0,a.useState)(""),[c,n]=(0,a.useState)(""),m=t.filter((e=>e.title.toLowerCase().includes(s.toLowerCase())||""===s?e:"")),g=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(c)));return(0,o.jsx)(d.Provider,{value:{projects:t,setProjects:r,searchProject:s,setSearchProject:i,searchProjectsByTitle:m,selectProject:c,setSelectProject:n,selectProjectsByCategory:g},children:e.children})}},283:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(448),s=r(175),i=r(579);const c=()=>(0,i.jsx)(s.S,{children:(0,i.jsx)("div",{className:"container mx-auto",children:(0,i.jsx)(a.A,{})})})},451:(e,t,r)=>{e.exports=r.p+"static/media/mobile-project-1.0aa0cb76fed1b95c21d8.jpg"},388:(e,t,r)=>{e.exports=r.p+"static/media/mobile-project-2.a5aae7867760d0c29dd2.jpg"},915:(e,t,r)=>{e.exports=r.p+"static/media/ui-project-1.41def4d8652deca915b2.jpg"},756:(e,t,r)=>{e.exports=r.p+"static/media/ui-project-2.d289191456efd2d47465.jpg"},135:(e,t,r)=>{e.exports=r.p+"static/media/web-project-1.dbc2198e771ad7e1d3ea.jpg"},912:(e,t,r)=>{e.exports=r.p+"static/media/web-project-2.f01087020cc02a54e124.jpg"}}]);
//# sourceMappingURL=283.38aa646f.chunk.js.map