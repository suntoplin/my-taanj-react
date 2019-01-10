
import React from 'react';

// import styles from '../styles.css';

// const textStyle = styles.bodyTextAbout

function Paragraph(props) {
  return <p>{props.children}</p>
}
function Item(props) {
  return <span>{props.children}</span>
}
function Itemize(props) {
  return <ul>{props.children.map((item, index) => <li key={index}>{item}</li>)}</ul>
}

// 同一個方框框 [ ] 包住的東西每一項必須有獨立的 key.
// 可以是任何字串，只要同一個方框裡面都不一樣就好。

const AboutData = Object.freeze({
  boardMembers: [
    {
      title: "titleA",
      name: "AAAAAA",
      email: "titleA@gmail.com",
    },
    {
      title: "titleB",
      name: "BBBBB",
      email: "titleB@gmail.com",
    },
    {
      title: "titleC",
      name: "CCCCC",
      email: "titleC@gmail.com",
    },
    {
      title: "titleD",
      name: "DDD",
      email: "titlDDeA@gmail.com",
    },
    {
      title: "titleE",
      name: "EEEEEE",
      email: "EEE@gmail.com",
    },
    {
      title: "titleF",
      name: "FFFFFFF",
      email: "titlFeA@gmail.com",
    },
    {
      title: "titleG",
      name: "GGGGGG",
      email: "titleGGGGGG@gmail.com",
    }
  ]
});

export default AboutData;