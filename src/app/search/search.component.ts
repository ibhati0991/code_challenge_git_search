import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult = [];
  search: string;
  // pager object
  pager: any = {};
  pagedItems: any = [];
  constructor(private searchService: SearchService, private pagerService: PagerService) { }

  ngOnInit(): void {
  }

  searchUsers() {

    this.searchService.getAllUsers(this.search).then(res => {
      console.log(res);
      this.searchResult = res['items']

      this.setPage(1);
    })

  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.searchResult.length, page);

    // get current page of items
    this.pagedItems = this.searchResult.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  getFollowers(url) {
    let response
    this.searchService.getUrl(url).then(res => {
      console.log(res)
      response = res
    })
    return response['length']
  }

}


