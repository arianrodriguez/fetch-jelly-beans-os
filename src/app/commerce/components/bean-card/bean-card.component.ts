import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {BeanService} from "../../services/bean-service.service";
import BeanEntity from "../../entities/bean-entity";

@Component({
  selector: 'app-bean-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle, MatCardSubtitle,
    NgForOf
  ],
  templateUrl: './bean-card.component.html',
  styleUrl: './bean-card.component.css'
})
export class BeanCardComponent implements OnInit {
  beans: any[] = [];

  constructor(private beanService: BeanService){}

  ngOnInit() {
    this.getBeans();
  }

  getBeans() {
    this.beanService.getBeans().subscribe(
      (r) => {
        const data: any[] = r.items;
        console.log(data);

        for(let i=0; i<data.length; ++i) {
          const bean = new BeanEntity(
            data[i].flavorName,
            data[i].ingredients.join(", "),
            data[i].glutenFree,
            data[i].sugarFree,
            data[i].seasonal,
            data[i].imageUrl,
            data[i].description,
            data[i].kosher
          )

          this.beans.push(bean);
        }
      },
      (e) => {
        console.error(`Error to obtain beans: ${e}`)
      }
    )
  }
}
