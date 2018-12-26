import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalidadComponent } from './calidad.component';

const routes: Routes = [
    {
        path: '',
        component: CalidadComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CalidadRoutingModule {}
