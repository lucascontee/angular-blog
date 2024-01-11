import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/data-fake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = 'https://i.ytimg.com/vi/mVjYG9TSN88/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEyhWMA8=&rs=AOn4CLAd8M7O1rK30HRH-9RXrVAjhjqCOA'
  contentTitle:string = ''
  contentDescription:string = '' 
  private id:string | null = "0"

  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit():void{
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    
    this.setValueToComponent(this.id)
  }

  setValueToComponent(id: string | null):void{
    if (id !== null) {
      const result = dataFake.filter(article => article.id === id)[0];
      if (result) {
        this.contentTitle = result.title;
        this.contentDescription = result.description;
        this.photoCover = result.photoCover;
      }
      else {
        console.error(`Nenhum artigo encontrado com o ID: ${id}`);
      }
    }
  }
}
