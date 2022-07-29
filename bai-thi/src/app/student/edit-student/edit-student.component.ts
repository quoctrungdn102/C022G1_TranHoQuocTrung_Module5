import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
  formCreateStudent: FormGroup = new FormGroup({
    id: new FormControl(),
    nameStudent: new FormControl(),
    class: new FormGroup({
      id: new FormControl(),
    }),
  });

  constructor(private studentService: VeXEService, private activatedRoute: ActivatedRoute, private router: Router, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.studentService.getAllClass().subscribe(data => {
      this.listClass = data;
    });
    const idStudent = this.activatedRoute.snapshot.params.id;
    this.studentService.tiemKiemVeXe(idStudent).subscribe(data => {
      this.formCreateStudent.patchValue(data);
    });
  }

  onSubmit() {
    const student = this.formCreateStudent.value;
    this.listClass.forEach(data => {
      if (data.id === Number(student.class.id)) {
        student.class = data;
      }
    });
    this.studentService.suaVeXe(student.id, student).subscribe(data => {
      this.router.navigateByUrl('/home');
    });
    this.toast.success('Edit thành công ', 'Edit', {timeOut: 1000});

  }
}
