import { Component, OnInit } from '@angular/core';
import { NewsService, News } from './news.service';

 

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})

export class NewsListComponent implements OnInit {
  newsItems : News[] = []
  searchText: string

   selectedNewsId: number

      expandNews(id: number) {
      this.selectedNewsId = id
      return false
    }
  
  constructor(private newsSvc:NewsService) { }

  ngOnInit() {
    this.newsSvc.getNewsItems().subscribe(response => {
      this.newsItems = response;
    },
    error => {alert("Sorry. There is a problem getting data.")
    })

  }

}

 