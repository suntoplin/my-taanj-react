
import React from 'react';

import styles from '../styles.css';

const textStyle = styles.bodyTextAbout

function Paragraph(props) {
  return <p className={textStyle}>{props.children}</p>
}
function Item(props) {
  return <span className={textStyle}>{props.children}</span>
}
function Itemize(props) {
  return <ul>{props.children.map((item, index) => <li key={index}>{item}</li>)}</ul>
}

// 同一個方框框 [ ] 包住的東西每一項必須有獨立的 key.
// 可以是任何字串，只要同一個方框裡面都不一樣就好。

const LandingData = Object.freeze({
  activities: [
    {
      id:"1",
      title: "titleA",
      name: { en: "A", tw: "" },
      email: "titleA@gmail.com"
    },
    {
      id:"2",
      title: "titleB",
      name: { en: "B", tw: "EST" },
      email: "titleB@gmail.com"
    }
  ],
  events: [
      {
         id:"1",
         date:"2/28/2015"
         title:[{en:"",tw:""}],
         description:[{en:"",tw:""}],
         time:[{start:"",end:""}],          
         place:"",
         address:"",
         detail:[
         <Paragraph key="p1">2015</Paragraph>,
         <Paragraph key="p2">P2asdg2</Paragraph>
        ],
         icon:"",
         image:"",      
         contact:[
             {
                title:"",
                name:"",
                email:"",
            }
        ],
         photos:{
             images:[
                 {img:""},
                 {img:""},
                 {img:""},
                 {img:""}
                ],
             link:""
         } 
      },
      {
        id:"2",
        date:"3/1/2015"
        title:[{en:"",tw:""}],
        description:[{en:"",tw:""}],
        time:[{start:"",end:""}],          
        place:"",
        address:"",
        detail:[
        <Paragraph key="p1">asd</Paragraph>,
        <Paragraph key="p2">P2asdgasdg2</Paragraph>
       ],
        icon:"",
        image:"",      
        contact:[
            {
               title:"",
               name:"",
               email:"",
           }
       ],
        photos:{
            images:[
                {img:""},
                {img:""},
                {img:""},
                {img:""}
               ],
            link:""
        } 
     },
     {
        id:"3",
        date:"2/28/2016"
        title:[{en:"",tw:""}],
        description:[{en:"",tw:""}],
        time:[{start:"",end:""}],          
        place:"",
        address:"",
        detail:[
        <Paragraph key="p1">Pdddasdgasdgasd111</Paragraph>,
        <Paragraph key="p2">Psdaaaaaaadsa22</Paragraph>
       ],
        icon:"",
        image:"",      
        contact:[
            {
               title:"",
               name:"",
               email:"",
           }
       ],
        photos:{
            images:[
                {img:""},
                {img:""},
                {img:""},
                {img:""}
               ],
            link:""
        } 
     },
     {
        id:"4",
        date:"2/28/2017"
        title:[{en:"",tw:""}],
        description:[{en:"",tw:""}],
        time:[{start:"",end:""}],          
        place:"",
        address:"",
        detail:[
        <Paragraph key="p1">P1asdgasdgasd11</Paragraph>,
        <Paragraph key="p2">P2hhhhhhhhhhhhhhhhhhhh2</Paragraph>
       ],
        icon:"",
        image:"",      
        contact:[
            {
               title:"",
               name:"",
               email:"",
           }
       ],
        photos:{
            images:[
                {img:""},
                {img:""},
                {img:""},
                {img:""}
               ],
            link:""
        } 
     },
     {
        id:"3",
        date:"2/28/2018"
        title:[{en:"",tw:""}],
        description:[{en:"",tw:""}],
        time:[{start:"",end:""}],          
        place:"",
        address:"",
        detail:[
        <Paragraph key="p1">P111</Paragraph>,
        <Paragraph key="p2">P22</Paragraph>
       ],
        icon:"",
        image:"",      
        contact:[
            {
               title:"",
               name:"",
               email:"",
           }
       ],
        photos:{
            images:[
                {img:""},
                {img:""},
                {img:""},
                {img:""}
               ],
            link:""
        } 
     },
  ],
  aims:[    {
    id:"1",
    title: "AIM1",
    image: "AIM1@gmail.com"
  },
  {
    id:"2",
    title: "AIM2",
    image: "AIM2@gmail.com"
  }]
});

export default LandingData;