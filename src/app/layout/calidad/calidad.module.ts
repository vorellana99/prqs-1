import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalidadRoutingModule } from './calidad-routing.module';
import { CalidadComponent } from './calidad.component';

@NgModule({
    imports: [CommonModule, CalidadRoutingModule],
    declarations: [CalidadComponent]
})
export class CalidadModule {}
