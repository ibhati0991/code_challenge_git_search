import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
export interface User {
  name: string;
  location: string;
  email: string;
  followers: number;
  following: number;
  public_repos: number;
}
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() user: any;

  userDetails: User;
  constructor(private searchService: SearchService, ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.searchService.getUser(this.user.login).then((res: User) => {
      console.log(res)
      this.userDetails = res;
    })
  }
}
