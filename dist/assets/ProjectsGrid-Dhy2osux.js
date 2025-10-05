import{j as r,m as x,L as g,r as h,d as y,e as p}from"./index-DR8837ws.js";const d=({id:a,title:t,category:n,image:s})=>r.jsx(x.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:r.jsx(g,{to:`/projects/${a}`,"aria-label":"Single Project",children:r.jsxs("div",{className:"project-card rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[r.jsx("div",{children:r.jsx("img",{src:s,className:"w-full h-96 object-cover rounded-t-xl border-none",alt:"Single Project"})}),r.jsxs("div",{className:"text-center px-4 py-6",children:[r.jsx("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),r.jsx("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:n})]})]})})}),j=["Web Application","Mobile Application","Desktop Application"],k=({setSelectProject:a})=>r.jsxs("select",{onChange:t=>{a(t.target.value)},className:`font-general-medium \r
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
            `,children:[r.jsx("option",{value:"",className:"text-sm sm:text-md",children:"All Projects"}),j.map(t=>r.jsx("option",{className:"text-normal sm:text-md",value:t,children:t},t))]}),u=()=>{const{projects:a,isLoading:t,error:n,searchProject:s,setSearchProject:l,searchProjectsByTitle:i,selectProject:c,setSelectProject:o,selectProjectsByCategory:m}=h.useContext(y);return r.jsxs("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[r.jsx("div",{className:"text-center",children:r.jsx("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),r.jsxs("div",{className:"mt-10 sm:mt-16",children:[r.jsx("h3",{className:`font-general-regular \r
                        text-center text-secondary-dark\r
                        dark:text-ternary-light\r
                        text-md\r
                        sm:text-xl\r
                        mb-3\r
                        `,children:"Search projects by title or filter by category"}),r.jsxs("div",{className:`\r
                        flex\r
                        flex-col\r
                        md:flex-row\r
                        justify-between\r
                        border-b border-primary-light\r
                        dark:border-secondary-dark\r
                        pb-3\r
                        gap-3\r
                        `,children:[r.jsxs("div",{className:"flex gap-2",children:[r.jsx("span",{className:`\r
                                hidden\r
                                sm:block\r
                                bg-primary-light\r
                                dark:bg-ternary-dark\r
                                p-2.5\r
                                shadow-sm\r
                                rounded-xl\r
                                cursor-pointer\r
                                `,children:r.jsx(p,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),r.jsx("input",{onChange:e=>{l(e.target.value)},className:`font-general-medium \r
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
                                `,id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),r.jsx(k,{setSelectProject:o})]})]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:[t&&r.jsx("div",{className:"col-span-3 text-center text-ternary-dark dark:text-ternary-light",children:"Loading projects..."}),!t&&n&&r.jsx("div",{className:"col-span-3 text-center text-red-500",children:n}),!t&&!n&&a.length===0&&r.jsx("div",{className:"col-span-3 text-center text-ternary-dark dark:text-ternary-light",children:"No projects found"}),c?m.map(e=>r.jsx(d,{id:e.id,title:e.title,category:e.category,image:e.img},e.id)):s?i.map(e=>r.jsx(d,{id:e.id,title:e.title,category:e.category,image:e.img},e.id)):a.map(e=>r.jsx(d,{id:e.id,title:e.title,category:e.category,image:e.img},e.id))]})]})};export{u as P};
