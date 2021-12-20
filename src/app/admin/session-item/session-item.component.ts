import { Component, Input, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @Input() session: any;

  constructor(private sessionItemService:FakeSessionItemService) { }

  ngOnInit(): void {
  }
  onDelete(){
    console.log(this.session);
    this.sessionItemService.delete(this.session);
  }

}
