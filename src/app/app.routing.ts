import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EliquidsComponent } from './components/eliquids/eliquids.component';
import { DetailComponent } from './components/detail/detail.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';


const appRoutes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'liquidos', component: EliquidsComponent },
    { path: 'detalle/:name', component: DetailComponent },
    { path: 'nosotros', component: AboutComponent },
    { path: '**', component: ErrorComponent }

    
    /* { path: 'crear-proyecto', component: CreateComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'edit/:id', component: EditComponent }, */
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);