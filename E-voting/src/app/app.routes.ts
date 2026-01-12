import { Routes } from '@angular/router';

import { Home } from './page/home/home';
import { UserLogin } from './auth/user/login/login';
import { UserRegister } from './auth/user/register/register';
import { CandidateLogin } from './auth/candidate/login/login';
import { CandidateRegister } from './auth/candidate/register/register';
import { AdminLogin } from './auth/admin/login/login';
import { CandidateDashbord } from './page/dashbord/candidate/dashbord/dashbord';
import { UserDashbord } from './page/dashbord/user/dashbord/dashbord';
import { AdminDashbord } from './page/dashbord/admin/dashbord/dashbord';

export const routes: Routes = [
  { path: 'user/login', component: UserLogin },
  { path: 'user/register', component: UserRegister },
   { path: 'candidate/login', component: CandidateLogin },
  { path: 'candidate/register', component: CandidateRegister },
    { path: 'admin/login', component: AdminLogin },
  {path:'home',component: Home},
{path:'candidate/dashbord' ,component:CandidateDashbord},
{path:'user/dashbord' , component:UserDashbord},
  { path: 'admin/dashbord', component: AdminDashbord }

];
