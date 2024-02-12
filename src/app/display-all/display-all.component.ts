import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit{

  constructor(private http : HttpClient) {
    
  }

  private apiUrl='https://localhost:7207/api/Documents/';
  filename:any;
  documents:any;
  document:any;
  files:any;

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(){
    this.http.get(this.apiUrl).subscribe(
      response => this.documents = response,
      error => console.log('Error getting files', error)
    );
  }
  deleteDocument(id:any){
    console.log("delete works");
    this.http.delete(this.apiUrl+id).subscribe(
      () => {
        console.log('Record deleted successfully');
        this.getDocuments();
      },
      error => {
        console.error('Error deleting record:', error);
      }
    );
  }
  //================================================================================
  // getFiles(){
  //   this.http.get(this.apiUrl+'files').subscribe(
  //     response => this.files = response,
  //     error => console.log('Error getting files', error)

  //   );
  // }
}
