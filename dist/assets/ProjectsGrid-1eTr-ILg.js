import{j as e,m as y,L as h,R as u,S as b,T as j,C as k,d as P,e as N,O as f,f as v,M as A,g as S,H as C,h as M,i as w,r as l,k as T}from"./index-D1FipPYK.js";const m=({id:a,title:t,category:n,image:s})=>e.jsx(y.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:e.jsx(h,{to:`/projects/${a}`,"aria-label":"Single Project",children:e.jsxs("div",{className:"project-card rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[e.jsx("div",{children:e.jsx("img",{src:s,className:"w-full h-96 object-cover rounded-t-xl border-none",alt:"Single Project"})}),e.jsxs("div",{className:"text-center px-4 py-6",children:[e.jsx("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),e.jsx("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:n})]})]})})}),B=[{id:1,title:"Ruang Tenun",category:"Mobile Application",img:u},{id:2,title:"SkillBridge",category:"Web Application",img:b},{id:3,title:"Traveloop",category:"Web Application",img:j},{id:4,title:"CluckNRoll",category:"Web Design",img:k},{id:5,title:"E-Library Management",category:"Web Application",img:P},{id:6,title:"Fast Food Express",category:"Desktop Application",img:N},{id:7,title:"Open Street Map",category:"Mobile Application",img:f},{id:8,title:"GrowYourGames",category:"Web Application",img:v},{id:9,title:"MubeeGo",category:"Mobile Application",img:A},{id:10,title:"Todo App",category:"Mobile Application",img:S},{id:11,title:"Habit Tracker",category:"Mobile Application",img:C},{id:12,title:"Course Scheduler",category:"Mobile Application",img:M},{id:13,title:"BallVerse",category:"Mobile Application",img:w}],g=l.createContext(),R=a=>{const[t,n]=l.useState(B),[s,c]=l.useState(""),[o,d]=l.useState(""),r=t.filter(i=>i.title.toLowerCase().includes(s.toLowerCase())||s===""?i:""),x=t.filter(i=>(i.category.charAt(0).toUpperCase()+i.category.slice(1)).includes(o));return e.jsx(g.Provider,{value:{projects:t,setProjects:n,searchProject:s,setSearchProject:c,searchProjectsByTitle:r,selectProject:o,setSelectProject:d,selectProjectsByCategory:x},children:a.children})},F=["Web Application","Mobile Application","Desktop Application"],G=({setSelectProject:a})=>e.jsxs("select",{onChange:t=>{a(t.target.value)},className:`font-general-medium \r
                px-4\r
                sm:px-6\r
                py-2\r
                border\r
                dark:border-secondary-dark\r
                rounded-lg\r
                text-sm\r
                sm:text-md\r
                dark:font-medium\r
                bg-secondary-light\r
                dark:bg-ternary-dark\r
                text-primary-dark\r
                dark:text-ternary-light\r
            `,children:[e.jsx("option",{value:a,className:"text-sm sm:text-md",children:"All Projects"}),F.map(t=>e.jsx("option",{className:"text-normal sm:text-md",children:t},t))]}),W=()=>{const{projects:a,searchProject:t,setSearchProject:n,searchProjectsByTitle:s,selectProject:c,setSelectProject:o,selectProjectsByCategory:d}=l.useContext(g);return e.jsxs("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),e.jsxs("div",{className:"mt-10 sm:mt-16",children:[e.jsx("h3",{className:`font-general-regular \r
                        text-center text-secondary-dark\r
                        dark:text-ternary-light\r
                        text-md\r
                        sm:text-xl\r
                        mb-3\r
                        `,children:"Search projects by title or filter by category"}),e.jsxs("div",{className:`\r
                        flex\r
                        flex-col\r
                        md:flex-row\r
                        justify-between\r
                        border-b border-primary-light\r
                        dark:border-secondary-dark\r
                        pb-3\r
                        gap-3\r
                        `,children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:`\r
                                hidden\r
                                sm:block\r
                                bg-primary-light\r
                                dark:bg-ternary-dark\r
                                p-2.5\r
                                shadow-sm\r
                                rounded-xl\r
                                cursor-pointer\r
                                `,children:e.jsx(T,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),e.jsx("input",{onChange:r=>{n(r.target.value)},className:`font-general-medium \r
                                pl-3\r
                                pr-1\r
                                sm:px-4\r
                                py-2\r
                                border \r
                            border-gray-200\r
                                dark:border-secondary-dark\r
                                rounded-lg\r
                                text-sm\r
                                sm:text-md\r
                                w-full\r
                                bg-secondary-light\r
                                dark:bg-ternary-dark\r
                                text-primary-dark\r
                                dark:text-ternary-light\r
                                `,id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),e.jsx(G,{setSelectProject:o})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:c?d.map(r=>e.jsx(m,{id:r.id,title:r.title,category:r.category,image:r.img},r.id)):t?s.map(r=>e.jsx(m,{id:r.id,title:r.title,category:r.category,image:r.img},r.id)):a.map(r=>e.jsx(m,{id:r.id,title:r.title,category:r.category,image:r.img},r.id))})]})};export{R as P,W as a};
