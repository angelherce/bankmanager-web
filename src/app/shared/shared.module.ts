import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AccountNumberRenderComponent } from '../main/accounts/accounts-home/account-number-render/account-number-render.component';
import { CustomertypeColumnRendererComponent } from '../main/customers/customers-home/customertype-column-renderer/customertype-column-renderer.component';

export function intRateMonthlyFunction (rowData: Array<any>): number {
  return rowData["INTERESRATE"]/12;
}

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    AccountNumberRenderComponent,
    CustomertypeColumnRendererComponent
  ],
  exports: [
    CommonModule,
    AccountNumberRenderComponent,
    CustomertypeColumnRendererComponent
  ]
})
export class SharedModule { }
