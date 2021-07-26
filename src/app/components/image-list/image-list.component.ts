import { Component, OnInit } from '@angular/core';
import { PixabayService } from "../../services/pixabay.service";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  data: any = [];

  constructor(private pixabayService: PixabayService) { }

  ngOnInit(): void {
    this.pixabayService.getImages().subscribe(
      res => {
        this.data = res;
      },
      err => console.error(err)
    );
  }

  tagsArray (item: String) {
    return item.split(',');
  }

}
