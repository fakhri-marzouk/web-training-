import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';


@Component({
  selector: 'app-admin',
  providers: [FakeSessionItemService],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
