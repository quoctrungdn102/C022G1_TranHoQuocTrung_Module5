import {Component, OnInit} from '@angular/core';
import {VeXEService} from '../service/veXE.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(private studentService: VeXEService, private router: Router) {
  }

  listClass: any;

  themVeXe: FormGroup = new FormGroup({
    id: new FormControl(),
    giaVe: new FormControl('', Validators.required),
    diemDi: new FormControl('', Validators.required),
    diemDen: new FormControl('', Validators.required),
    ngayKhoiHanh: new FormControl('', [Validators.required, this.checkDate]),
    gioKhoiHanh: new FormControl('', Validators.required),
    nhaXe: new FormGroup({
      id: new FormControl('', Validators.required)
    }),
    soLuong: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.studentService.getAllClass().subscribe(data => {
      this.listClass = data;
    });

  }

  checkDate(abstractControl: AbstractControl): any {
    // console.log(abstractControl.value);
    const date = new Date(abstractControl.value);
    const now = new Date();
    if (date > now) {
      console.log(true);
      return null;
    } else {
      console.log(false);
      return {date: true};
    }


  }


  onSubmit() {
    this.studentService.createStudent(this.themVeXe.value).subscribe(value => {
      console.log(this.themVeXe.value);
      alert('thêm thành công ');
      this.router.navigateByUrl('/home');
    });

  }

  comback() {
    this.router.navigateByUrl('/home');
  }
}
