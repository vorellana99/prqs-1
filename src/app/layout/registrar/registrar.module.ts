import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarRoutingModule } from './registrar-routing.module';
import { RegistrarComponent } from './registrar.component';

import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, RegistrarRoutingModule, PageHeaderModule],
    declarations: [RegistrarComponent]
})
export class RegistrarModule {}
