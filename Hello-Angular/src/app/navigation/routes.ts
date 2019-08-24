import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'archive/:year/:month', component: ArchiveComponent},
    {path: '**', component: NotFoundComponent}
];
