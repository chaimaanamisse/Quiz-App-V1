"use strict";

export default class Question {
  constructor(id, type, id_sujet, difficulty, score, question, correct_answer, answer_options ) {
    this.id = id;
    this.type = type ;
    this.id_sujet = id_sujet;
    this.difficulty = difficulty;
    this.score = score;
    this.question = question;
    this.correct_answer = correct_answer;
    this.answer_options = answer_options;
  }

    
    static GetAll(){
      return fetch('http://localhost:3000/questions?_expand=sujet',
      {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        return responseData;
      })
      .catch(error => console.warn(error));
    }

   static Save(obj){
    fetch("http://localhost:3000/questions/",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(obj)
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
    }

    static delete(id){
      fetch(`http://localhost:3000/questions/${id}`,
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "DELETE"
      })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })
    }
 
}
