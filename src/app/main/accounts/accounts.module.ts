import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';
import { AccountsDetailComponent } from './accounts-detail/accounts-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountsNewComponent } from './accounts-new/accounts-new.component';


@NgModule({
  declarations: [AccountsHomeComponent, AccountsDetailComponent, AccountsNewComponent],
  imports: [
    CommonModule,
    SharedModule,
    OntimizeWebModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
