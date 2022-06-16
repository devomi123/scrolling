import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { ProductComponent } from './components/product/product.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"product",component:ProductComponent},
  {path:"place",component:PlaceholderComponent},
  {path:"spinner",component:SpinnerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
