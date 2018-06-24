import { Component, Input, OnInit } from '@angular/core';


@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
	@Input() postList = [];
	/*posts = [
	{title: "Mon premier post", content: "premier contenu"},
	{title: "Mon deuxième post", content: "deuxième contenu"},
	{title: "Mon troisième post", content: "troisième contenu"}
	];*/

	constructor() { }

	ngOnInit() {
	}

}
