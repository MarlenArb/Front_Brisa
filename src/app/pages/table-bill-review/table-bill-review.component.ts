import { Component, PipeTransform, OnInit} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataServiceService } from '../../service/data-service/data-service.service';


@Component({
  selector: 'app-table-bill-review',
  templateUrl: './table-bill-review.component.html',
  providers: [DecimalPipe],
  styleUrls: ['./table-bill-review.component.css']
})
export class NgbdTableFiltering implements OnInit {
  ngOnInit(){
  this.getData();
}

  data: any[] = [];
  data$: Observable<any[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe, private dataService: DataServiceService) {
      this.data$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  getData(){
    this.dataService.getDataJson().subscribe(
      response =>{
         this.data = response
        console.log(this.data)
        }
    )
  }

  search(text: string, pipe: PipeTransform): any[] {
    return this.data.filter(data => {
      const term = text.toLowerCase();
      return data.id.toLowerCase().includes(term)
          || pipe.transform(data.factura).includes(term)
          || pipe.transform(data.nif).includes(term);
    });
  }
  


}