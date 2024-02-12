import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  private apiUrl='https://localhost:7207/api/Documents/';
  docName:any;
  docCreationDate:any;
  docDueDate:any;
  priority:any;
  selectedFile:any;
  mySelectedFile:any;
  //========================
  constructor(private http:HttpClient) {}
  ngOnInit(): void {
  }
  //================================================================================
  insertFile(event:any){
    this.selectedFile=event.target.files[0] as File;
  }
  onSubmit():void{
    const formData:FormData = new FormData();
    formData.append('file',this.selectedFile);
    formData.append('name',this.docName);
    formData.append('creationDate',this.docCreationDate);
    formData.append('dueDate',this.docDueDate);
    formData.append('priority',this.priority);
    ///==========================================
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    const formDataFile = new FormData();
    formData.append('myFile', this.mySelectedFile);
    ///==========================================
    this.http.post(this.apiUrl+'document', formData)
      .subscribe(response => {
        console.log('Form submitted successfully:', response);
      }, error => {
        console.error('Form submission failed:', error);
      });    
      //==========================================
      this.http.post(this.apiUrl+'file', formDataFile)
      .subscribe(response => {
        console.log('file submitted successfully:', response);
      }, error => {
        console.error('file submission failed:', error);
      });    
  }
  


  //================================================================================
  // getDocuments(){
  //   this.http.get(this.apiUrl).subscribe(
  //     response => this.documents = response,
  //     error => console.log('Error getting files', error)

  //   );
  // }
  //================================================================================
  // getFiles(){
  //   this.http.get(this.apiUrl+'files').subscribe(
  //     response => this.files = response,
  //     error => console.log('Error getting files', error)

  //   );
  // }
  //================================================================================
  // getDocument(id:any){
  //   this.http.get(this.apiUrl+id).subscribe(
  //     response => this.document = response,
  //     error => console.log('Error getting files', error)
  //   )
  // }
  //================================================================================
  // insertFile(files:any){
  //   if(files.length===0)
  //     return;
  //   let fileToUpload = <File>files[0];
  //   const formData = new FormData();
  //   formData.append('file',fileToUpload,fileToUpload.name);
  //   this.http.post(this.apiUrl+'files', formData,{responseType: 'text'}
  //   ).subscribe(
  //     response => this.filename=response,
  //     error => console.log('Error uploading file', error)
  //   );
  // }
  
}
