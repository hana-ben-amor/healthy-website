import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TipsComponent } from './tips/tips.component';

export const routes: Routes = [

    {'path': '', component:HomeComponent},
    {'path':'tips', component:TipsComponent},
    {'path': 'contact', component:ContactComponent},


];
