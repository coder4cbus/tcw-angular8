import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './account-home/account-home.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AddressbookComponent } from './addressbook/addressbook.component';


@NgModule({
  declarations: [AccountHomeComponent, OrderHistoryComponent, AddressbookComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
