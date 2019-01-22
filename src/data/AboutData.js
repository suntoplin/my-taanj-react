
// import React from 'react';

// import styles from '../styles.css';

// const textStyle = styles.bodyTextAbout

// function Paragraph(props) {
//   return <p>{props.children}</p>
// }
// function Item(props) {
//   return <span>{props.children}</span>
// }
// function Itemize(props) {
//   return <ul>{props.children.map((item, index) => <li key={index}>{item}</li>)}</ul>
// }

// 同一個方框框 [ ] 包住的東西每一項必須有獨立的 key.
// 可以是任何字串，只要同一個方框裡面都不一樣就好。

// format of a person:
// id: string;
// title: string;
// name: {
//     en: string;
//     tw: string; (optional)
// };
// email: string;

const AboutData = Object.freeze({
  people: [
    {
      id:"1",
      title: "titleA",
      name: { en: "A", tw: "" },
      email: "titleA@gmail.com",
    },
    {
      id:"2",
      title: "titleB",
      name: { en: "B", tw: "EST" },
      email: "titleB@gmail.com",
    },
    {
      id:"3",
      title: "titleC",
      name: { en: "C", tw: "AB" },
      email: "titleC@gmail.com",
    },
    {
      id:"4",
      title: "titleD",
      name: { en: "DC", tw: "AB" },
      email: "titlDDeA@gmail.com",
    },
    {
      id:"5",
      title: "titleG",
      name: { en: "GC", tw: "AB" },
      email: "titleGGGGGG@gmail.com",
    }
  ]
});

export default AboutData;