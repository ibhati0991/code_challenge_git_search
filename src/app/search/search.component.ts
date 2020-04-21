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
  page = 1;
  pagedItems: any = [];
  total_results = 0;
  total_pages: number;
  constructor(private searchService: SearchService, private pagerService: PagerService) { }

  ngOnInit(): void {
  }

  searchUsers() {

    this.searchService.getAllUsers(this.search, this.page).then(res => {
      console.log(res);
      this.searchResult = res['items']
      this.total_results = res['total_count']

      this.total_pages = Math.floor(this.total_results / 30);

      // if (this.total_pages - Math.floor(this.total_results / 10)) {
      //   this.total_pages = this.total_results + 1;
      // }

      console.log(this.total_pages)

    })

  }

  next() {
    if (this.page >= 1) {
      ++this.page
      this.searchUsers()
    }

  }
  prev() {
    if (this.page >= 1) {
      --this.page
      this.searchUsers()
    }
  }



  // setPage(page: number) {
  //   // get pager object from service
  //   this.pager = this.pagerService.getPager(this.searchResult.length, page);

  //   // get current page of items
  //   this.pagedItems = this.searchResult.slice(this.pager.startIndex, this.pager.endIndex + 1);
  // }

  getFollowers(url) {
    let response
    this.searchService.getUrl(url).then(res => {
      console.log(res)
      response = res
    })
    return response['length']
  }

}


