import { Component, OnInit } from '@angular/core';

import { PixabayService } from "../../services/pixabay.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  textSearch: String = '';

  constructor(private pixabayService: PixabayService, private router: Router) { }

  ngOnInit(): void {
  }

  search () {
    if (this.textSearch !== '') {
      this.router.navigate([`/search/${this.textSearch}`]);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }
}
