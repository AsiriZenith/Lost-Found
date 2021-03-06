import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminNewComponent } from './pages/admin-new/admin-new.component';
import { ModNewComponent } from './pages/mod-new/mod-new.component';
import { LostfoundItemComponent } from './components/lostfound-item/lostfound-item.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ModDashboardComponent } from './pages/mod-dashboard/mod-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new_admin', component: AdminNewComponent },
  { path: 'new_mod', component: ModNewComponent },
  { path: 'lostfounditem', component: LostfoundItemComponent },
  { path: 'user_dashboard', component: UserDashboardComponent},
  { path: 'mod_dashboard', component: ModDashboardComponent},
  { path: 'admin_dashboard', component: AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
