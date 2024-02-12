import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private apiUrl='https://localhost:7207/api/Documents/';
  document:any;
  id:any;
  selectedFile:any;
  editForm:any;
  //===================
  // docName:any;
  // docCreationDate:any;
  // docDueDate:any;
  // priority:any;  
  //===================
  constructor(private route : ActivatedRoute, private http : HttpClient) {}
  ngOnInit() {
    //get id and get elements
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      this.getDocument(this.id);
    });  
  }
  //===============================================
  insertFile(event:any){
    this.selectedFile=event.target.files[0] as File;
  }
  //===============================================
  getDocument(id:number){
    this.http.get(this.apiUrl+id).subscribe(
      response => {
        this.document = response
        // ,this.editForm.patchValue(this.document);
      },
      error => console.log('Error getting files', error)
    )
  }
  //===============================================
  // onSave(updatedDocument:any){
  //   console.log(updatedDocument)
  //   this.http.put(this.apiUrl+this.id,updatedDocument).subscribe(
  //     (response) => {
  //     // Handle the response as needed
  //     console.log('Data updated successfully', response);
  //   },
  //   error=>console.log('update failed because :', error)
  //   );
  // }
    //===============================================
    onSave(){
      console.log(this.document);
      this.http.put(this.apiUrl+this.id,this.document ).subscribe(
        (response) => {
        // Handle the response as needed
        console.log('Data updated successfully', response);
      },
      error=>console.log('update failed because :', error)
      );
    }

}
