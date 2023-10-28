import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InstructorPage } from './instructor.page';

import { InstructorPageRoutingModule } from './instructor-routing.module';
import { AjustesComponent } from '../back/ajustes/ajustes.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructorPageRoutingModule,
    AjustesComponent,
      ],
  declarations: [InstructorPage]
})

export class InstructorPageModule {}
