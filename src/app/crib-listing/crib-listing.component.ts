import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; // allow us to transform the  values that come back from http request
//import { cribs } from './../../data/cribs';
import { Crib } from './../crib';
import { CribsService } from './../services/cribs.service';



@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  //cribs : Array<Crib> = cribs;
  cribs : Array<Crib> ;

  error : string;

  constructor( private http : HttpClient, private cribsService : CribsService ) {}

  ngOnInit() {
    //make an http request

    //Anscychronys request which let the programm work and when the data arrive, fetch them
    //this.http.get('/src/data/cribs.json', function(err, data));

    //Promises
    //this.http.get('/src/data/cribs.json').then(data);

    //Obsevrable
    //when the data comes back map it as json
    // this.http.get('http://localhost:4200/assets/data/cribs.json')
    //   .subscribe(
    //     data => this.cribs = data,
    //     error => this.error = error.statusText
    //   );

      this.cribsService.getAllCribs()
      .subscribe(
        data  => this.cribs = data,
        error => this.error = error.statusText
      );

      this.cribsService.newCribSubject.subscribe(
        //put it at the end of the list
        //data => this.cribs.push(data)
        data => this.cribs = [data, ...this.cribs]
      )

  }


}
