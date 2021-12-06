"use strict";
class Subject {
    constructor(id, intitule) {
      this.id = id;
      this.intitule = intitule;
    }
  }
  
  class SubSubject extends Subject{
    constructor(id, intitule, subject_id) {
      super(id, intitule);
      this.subject_id = subject_id;
    }
  }
  
  class Topic extends SubSubject {
    constructor(id, intitule, sub_subject_id) {
        super(id, intitule);
        this.sub_subject_id = sub_subject_id;
    }
  }

  export { Subject, SubSubject, Topic };