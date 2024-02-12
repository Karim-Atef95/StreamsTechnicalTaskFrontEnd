import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-single',
  templateUrl: './display-single.component.html',
  styleUrls: ['./display-single.component.css']
})
export class DisplaySingleComponent implements OnInit {
  id:number=0;
  private apiUrl='https://localhost:7207/api/Documents/';
  document:any;
  constructor(private route:ActivatedRoute, private http:HttpClient) {
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      this.getDocument(this.id);
    });    
  }
  //=========================================================
    getDocument(id:number){
    this.http.get(this.apiUrl+id).subscribe(
      response => this.document = response,
      error => console.log('Error getting files', error)
    )
  }

}
