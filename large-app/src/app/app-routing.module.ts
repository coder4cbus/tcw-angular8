import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';


const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "catalog", component: CatalogComponent },
  {path: "account", loadChildren: "./account/account.module#AccountModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
