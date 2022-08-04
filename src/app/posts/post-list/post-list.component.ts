import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   { title: "First Post", content: "This is the first post content" },
  //   { title: "Second Post", content: "This is the second post content" },
  //   { title: "Third Post", content: "This is the third post content" }
  // ]

  @Input() posts: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
