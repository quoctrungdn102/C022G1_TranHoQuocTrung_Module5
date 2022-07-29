import {Component, OnInit} from '@angular/core';
import {VeXEService} from '../service/veXE.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {VeXe} from '../model/ve-xe';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  id: number;
  tenDiemDi: string;
  tenDiemDen: string;
  ngay: string;
  gio: string;

  constructor(private studentService: VeXEService, private router: Router, private toast: ToastrService) {
  }

  danhSachVeXe: any;
  veXe: VeXe;

  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe(data => {
      this.danhSachVeXe = data;
      console.log(data);
    });
  }

  getId(id: number, diemDi: string, diemDen: string, gio: string, ngay: string) {
    this.id = id;
    this.tenDiemDen = diemDen;
    this.tenDiemDi = diemDi;
    this.ngay = ngay;
    this.gio = gio;

  }

  delete() {

  }

  diemDen(value: any) {
    this.studentService.tiemKiemDiemDen(value).subscribe(data => {
      this.danhSachVeXe = data;
    });
  }

  diemDi(value: any) {
    this.studentService.tiemKiemDiemDi(value).subscribe(data => {
      this.danhSachVeXe = data;
    });
  }

  datVe(id: number) {
    this.studentService.tiemKiemVeXe(id).subscribe(data => {
      this.veXe = data;
      const soLuong1 = this.veXe.soLuong - 1;
      this.veXe.soLuong = soLuong1;
      console.log(this.veXe);
      this.studentService.suaVeXe(id, this.veXe).subscribe();
      this.ngOnInit();
    });
  }
}

