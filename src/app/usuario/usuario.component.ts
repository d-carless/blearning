import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass']
})
export class UsuarioComponent implements OnInit {
  @Input() isOn = true;
  constructor() { }

  ngOnInit(): void {
  }

}
