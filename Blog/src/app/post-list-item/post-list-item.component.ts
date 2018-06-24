import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-post-list-item',
	templateUrl: './post-list-item.component.html',
	styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() title: string;
	@Input() content = "contenu";
	loveIts = 0;
	created_at;

	constructor() {
		this.loveIts = 0;
		this.created_at = new Date();
	}

	ngOnInit() {
	}

	onLike() {
		this.loveIts += 1;
	}

	onDislike() {
		this.loveIts -= 1;
	}

}
