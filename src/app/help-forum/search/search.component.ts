import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-help-forum-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string;
  testSearch: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchText = "";
  }

  search(){
    this.testSearch = this.searchText;
      this.searchService.searchChanged.emit(this.searchText);
  }

}
