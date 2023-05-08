import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myVariable1: string = "The force is with me!";
  myVariable2: string = "Hello from CCT";
  myVariable3: string = "Third message";

  constructor() {}
  
    UpdateFirstVariable(){
      this.myVariable1 = "I felt the force";
    }

    UpdateSecondVariable(){
      this.myVariable2 = "I'm stuck in CAs for a while";
    }

    UpdateThirdVariable(){
      this.myVariable3 = "Today is such a lovely day in Dublin";
    }

}
