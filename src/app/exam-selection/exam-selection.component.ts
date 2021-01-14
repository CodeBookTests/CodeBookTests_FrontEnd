import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {ExamSelectionService} from '../service/exam-selection.service';
@Component({
  selector: 'app-exam-selection',
  templateUrl: './exam-selection.component.html',
  styleUrls: ['./exam-selection.component.css']
})
export class ExamSelectionComponent implements OnInit {

  userid: number;
  examservice: ExamSelectionService;
  constructor(private router:Router) { 
    this.userid = parseInt(sessionStorage.getItem("userid"));
  }

  ngOnInit() {
  }

  public selection(courseid:number):void{
      this.examservice.examselection(courseid,this.userid).subscribe(response=>{
        if(response==false)
        {
          this.router.navigate(['']);
          sessionStorage.setItem("courseid",String(courseid));
        }
        else
        {
          alert("you have already taken up the test");
          this.router.navigate(['userDashboard']);
        }
      });
  }
}
