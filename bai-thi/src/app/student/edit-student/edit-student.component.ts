import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {VeXEService} from '../service/veXE.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
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

  constructor(private studentService: VeXEService, private activatedRoute: ActivatedRoute, private router: Router,
              private toast: ToastrService) {
  }ngOnInit(): void {
    this.studentService.getAllClass().subscribe(data => {
      this.listClass = data;
    });
    const idStudent = this.activatedRoute.snapshot.params.id;
    this.studentService.tiemKiemVeXe(idStudent).subscribe(data => {
      this.themVeXe.patchValue(data);
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
    const student = this.themVeXe.value;
    this.studentService.createStudent(student).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/home');
    });
    this.toast.success('Edit thành công ', 'Edit', {timeOut: 1000});

  }

  comback() {
    this.router.navigateByUrl('/home');
  }
}
