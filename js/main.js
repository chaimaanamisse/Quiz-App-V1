"use strict";

import { Persone, Formateur, Etudiant } from './Persone.js'
import { Subject, SubSubject, Topic } from './Subject.js'

import Question from './Question.js'
import Level from './Level.js'

const  qst   = await Question.GetAll()

// const question = document.querySelector("#questions")

const container = document.querySelector('.questions');

const  uid =  () =>  (new Date().getTime()).toString(36)




qst.forEach((ele) => {
    container.innerHTML +=
    /*html*/
    `
      <div class="post">
      <div   class="icon ico--more ico--${ele.id}">
      <img id="ico--${ele.id}" src="./public/icons/more.svg" alt="more">
        </div>
      <div  class="post--dropdown">
            <ul>
            <li>Edit</li>
            <li id="${ele.id}">Delete</li>
            <li>View</li>
            </ul>
        </div>
      <small>${ele.sujet["intitule"]}</small>
        <h2>${ele.question}</h2>
        
        
      </div>
    `

    document.addEventListener('click', (e)=>{
        if(e.target.id === ele.id ){
            Question.delete(ele.id )
        }
    })

    document.addEventListener('click', (e)=>{
        if(e.target.id === `ico--${ele.id}`){
            document.querySelector(".post--dropdown").style.visibility = "visible";
        }
        // console.log(e.target.className)
    })

  
    // document.addEventListener("click",(e)=>{
    //     if(e.target.id == `ico--more${ele.id}`){
    //         document.querySelector(".post--dropdown").style.visibility = "visible";
    //     }
    // })
})






document.querySelector("#save--question").addEventListener('click',()=>{
    const anwer_op = [];
    
    Array.from(document.querySelectorAll(".answer-op")).forEach(function(el) {
        anwer_op.push(el.value)
      });

    let qt = new Question(
        uid(),
        document.querySelector("#question-types").value,
        "ma5986956896898",
        document.querySelector("#question-level").value,
        "33",
        document.querySelector(".question-text").value,
        anwer_op,
        document.querySelector(".answer-cr").value

    )

    Question.Save(qt);

})


const addQuestion = document.getElementById("add--question");
const modal_outer = document.querySelector(".modal_outer");
const box = document.querySelector(".box");
const close = document.querySelector(".close");

addQuestion.addEventListener("click", () => {
  box.style.visibility = "visible";
  modal_outer.style.visibility = "visible";
});

close.addEventListener("click", () => {
  box.style.visibility = "hidden";
  modal_outer.style.visibility = "hidden";
});

modal_outer.addEventListener("click", () => {
  box.style.visibility = "hidden";
  modal_outer.style.visibility = "hidden";
});












