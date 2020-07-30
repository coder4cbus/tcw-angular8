import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHomeComponent } from './account-home/account-home.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AddressbookComponent } from './addressbook/addressbook.component';


const routes: Routes = [
  {path: "", component: AccountHomeComponent },
  {path: "orders", component:OrderHistoryComponent },
  {path: "address", component: AddressbookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
