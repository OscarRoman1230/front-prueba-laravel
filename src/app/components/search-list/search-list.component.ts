import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PixabayService } from "../../services/pixabay.service";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  data: any = [];
  searchText: String = '';

  constructor(private pixabayService: PixabayService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.search();
  }

  search () {
    const params = this.activatedRoute.snapshot.params;
    console.log(params.search);
    this.searchText = params.search;
    if (params.search) {
      this.pixabayService.searchImage(params.search).subscribe(
        res => {
          this.data = res;
        },
        err => console.error(err)
      );
    }
  }

  tagsArray (item: String) {
    return item.split(',');
  }

}
