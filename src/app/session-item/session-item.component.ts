import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
@Input() session:any;
  constructor() {}

  ngOnInit(): void {
  }
inscrire(): void{
  console.log('Nouvele Inscription...');
  this.session.participants= +this.session.participants + 1;
  console.log(this.session.participants+ ' Participants')
  if (this.session.participants >=20)
  {
    this.session.isCompleted = true;
  }
}
}
