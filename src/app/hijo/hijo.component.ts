import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{

  @Input()
  tex: string="kkk";
  @Output()
  evento= new EventEmitter<string>();

  constructor(){}
  ngOnInit(): void {
  }
  enviar() {
    
    this.evento.emit("kkk")
  }

}
