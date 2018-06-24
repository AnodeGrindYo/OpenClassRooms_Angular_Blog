import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  posts = [
		{title: "Mon premier post", content: "premier contenuzz"},
		{title: "Mon deuxième post", content: "deuxième contenu"},
		{title: "Mon troisième post", content: "troisième contenu"}
	];
}
