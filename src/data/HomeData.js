
import React from 'react';

import styles from '../styles.css';

const textStyle = styles.bodyTextAbout

function Paragraph(props) {
  return <p className={textStyle}>{props.children}</p>
}
// function Item(props) {
//   return <span className={textStyle}>{props.children}</span>
// }
// function Itemize(props) {
//   return <ul>{props.children.map((item, index) => <li key={index}>{item}</li>)}</ul>
// }

// 同一個方框框 [ ] 包住的東西每一項必須有獨立的 key.
// 可以是任何字串，只要同一個方框裡面都不一樣就好。

const HomeData = Object.freeze({
  activities: [
    {
      id: "1",
      title: "activity1",
      name: { en: "A", tw: "" },
      email: "titleA@gmail.com"
    },
    {
      id: "2",
      title: "activity2",
      name: { en: "B", tw: "EST" },
      email: "titleB@gmail.com"
    }
  ],
  aims: [{
    id: "1",
    title: "AIM1",
    image: "AIM1@gmail.com"
  },
  {
    id: "2",
    title: "AIM2",
    image: "AIM2@gmail.com"
  }],
  events: [
    {
      id: "1",
      date: "2/28/2015",
      title: { en: "A sunny day", tw: "" },
      description: { en: "", tw: "" },
      time: { start: "", end: "" },
      place: "",
      address: "",
      detail: [
        <Paragraph key="p1">2015</Paragraph>,
        <Paragraph key="p2">Paragraph</Paragraph>,],
      icon: "",
      image: "",
      contact: [
        {
          title: "",
          name: "",
          email: "",
        }],
      photos: [
        { img: "images/about.png" },
        { img: "images/program.png" },
        { img: "images/about.png" },
        { img: "images/speaker.png" }
      ],
      link: "https://www.taiwannews.com.tw/en/index"
    },
    {
      id: "2",
      date: "2/28/2016",
      title: { en: "Be awesome", tw: "" },
      description: { en: "", tw: "" },
      time: { start: "", end: "" },
      place: "",
      address: "",
      detail: [
        <Paragraph key="p1">2016</Paragraph>,
        <Paragraph key="p2">Paragraph</Paragraph>,],
      icon: "",
      image: "",
      contact: [
        {
          title: "",
          name: "",
          email: "",
        }],
      photos: [
        { img: "images/about.png" },
        { img: "images/program.png" },
        { img: "images/about.png" },
        { img: "images/speaker.png" }
      ],
      link: "http://news.ltn.com.tw/"
    },
  ]

});

export default HomeData;