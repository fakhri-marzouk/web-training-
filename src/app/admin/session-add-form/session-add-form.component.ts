import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FakeSessionItemService } from '../fake-session-item.service';


@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private sessionItemService:FakeSessionItemService) { }

  ngOnInit(): void {
  }
  addSession(sessionItem: NgForm){
    console.log(sessionItem.value );
    this.sessionItemService.add(sessionItem.value);
    }
   }


