import { InstructorA } from './../../models/models';
import { InteractionService } from './../../services/interaction.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})
export class AjustesComponent  implements OnInit {

  data: InstructorA = {
    Nombre: '',
    Apellido: '',
    DNI: 0,
    Edad: 0,
    Nacionalidad: '',
    Sexo: 'M',
  }
  constructor(private basedatos: DataService,
    public Interaction: InteractionService) { }

  ngOnInit() {}

  createInstructor () {
    this.Interaction.presentLoading ('Guardando...')
        const path = '/Empresa (Aeroclub)/eTlKHnZSjVbaAsvlluJu/Instructores';
        const id = this.basedatos.getId();
        this.basedatos.createDoc (this.data, path, id ).then ( () => {
          this.Interaction.closeLoading()
          this.Interaction.presentToast ('Guardado con Exito')
          
        })
}
}
