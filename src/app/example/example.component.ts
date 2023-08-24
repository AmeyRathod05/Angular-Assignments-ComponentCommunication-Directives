import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {


  isLogIn : boolean = true;
  isLogOut : boolean = false; 

  list = [1,2,3,4,5];

  studentArr: any[] = [ { 
    "id": 1, 
    "name": "student1" 
 }, 
 { 
    "id": 2,
    "name": "student2" 
 }, 
 { 
    "id": 3, "name": "student3"
 },
 { 
    "id": 4, 
    "name": "student4" 
 } 
 ]; 
 trackByData(index:number, studentArr:any): number { 
    return studentArr.id; 
 }
   
   movies: Movie[] = [  
   {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
   {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
   {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
   {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
]  


students: Student[] = [  
   {name:'Student 1',class:'Angular',rollNumber:'1',email:'student1@gmail.com'},  
   {name:'Student 2',class:'Node.js',rollNumber:'2',email:'student2@gmail.com'},  
   {name:'Student 3',class:'Angular',rollNumber:'3',email:'student3@gmail.com'},  
   {name:'Student 4',class:'Node.js',rollNumber:'4',email:'student4@gmail.com'},  
] 

firstString : string = 'UpperCasePipe is an angular Pipe API that belongs to CommonModule. As the name suggests, this pipe transforms the text (string) to all uppercase.'

secondString : string = 'UPPERCASEPIPE IS AN ANGULAR PIPE API THAT BELONGS TO COMMONMODULE. AS THE NAME SUGGESTS, THIS PIPE TRANSFORMS THE TEXT (STRING) TO ALL UPPERCASE.'

currentDate : Date = new Date();
num:number = 234.5466;

currency1: number = 1200;

myArray: number[] = [11,22,33,44,55,66,77,88];





}






class Movie {  
title : string;  
director : string;  
cast : string;  
releaseDate : string;  
}  



class Student{
   name : string;
   class : string;
   rollNumber : string;
   email : string;
}

