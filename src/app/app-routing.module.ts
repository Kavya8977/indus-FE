import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { EpfComponent } from './epf/epf.component';
import { GstComponent } from './gst/gst.component';
import { IncometaxComponent } from './incometax/incometax.component';
import { OrganizationComponent } from './organization/organization.component';
import { PhoneloginComponent } from './phonelogin/phonelogin.component';
import { RegisterComponent } from './register/register.component';
import { AddEpfComponent } from './add-epf/add-epf.component';
import { UpdateEpfComponent } from './update-epf/update-epf.component';
import { EpfviewComponent } from './viewepf/epfview.component';
import { DirectorComponent } from './director/director.component';
import { EsiComponent } from './esi/esi.component';
import { KmpComponent } from './kmp/kmp.component';
import { AddbankComponent } from './addbank/addbank.component';
import { AddorgComponent } from './addorg/addorg.component';
import { AdddirectorsComponent } from './adddirectors/adddirectors.component';
import { AddesiComponent } from './addesi/addesi.component';
import { AddgstComponent } from './addgst/addgst.component';
import { AddincometaxComponent } from './addincometax/addincometax.component';
import { AddkmpComponent } from './addkmp/addkmp.component';
import { UpdatebankComponent } from './updatebank/updatebank.component';
import { UpdateorgComponent } from './updateorg/updateorg.component';
import { UpdatedirectorsComponent } from './updatedirectors/updatedirectors.component';
import { UpdateesiComponent } from './updateesi/updateesi.component';
import { UpdategstComponent } from './updategst/updategst.component';
import { UpdateincometaxComponent } from './updateincometax/updateincometax.component';
import { UpdatekmpComponent } from './updatekmp/updatekmp.component';
import { ViewbankComponent } from './viewbank/viewbank.component';
import { ViewdirectorsComponent } from './viewdirectors/viewdirectors.component';
import { ViewesiComponent } from './viewesi/viewesi.component';
import { ViewgstComponent } from './viewgst/viewgst.component';
import { ViewincometaxComponent } from './viewincometax/viewincometax.component';
import { ViewkmpComponent } from './viewkmp/viewkmp.component';
import { VieworgComponent } from './vieworg/vieworg.component';
import { PtComponent } from './pt/pt.component';
import { AddptComponent } from './addpt/addpt.component';
import { UpdateptComponent } from './updatept/updatept.component';
import { ViewptComponent } from './viewpt/viewpt.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TdsComponent } from './tds/tds.component';
import { AddtdsComponent } from './addtds/addtds.component';
import { UpdatetdsComponent } from './updatetds/updatetds.component';
import { ViewtdsComponent } from './viewtds/viewtds.component';
import { McaComponent } from './mca/mca.component';
import { AddmcaComponent } from './addmca/addmca.component';
import { UpdatemcaComponent } from './updatemca/updatemca.component';
import { ViewmcaComponent } from './viewmca/viewmca.component';
import { DeletedataComponent } from './deletedata/deletedata.component';
import { BankotpComponent } from './bankotp/bankotp.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent,canActivate: [AuthGuard]},
  {path: 'phonelogin', component:PhoneloginComponent,canActivate: [AuthGuard]},
  {path: 'forgotpassword', component:ForgotpasswordComponent,canActivate: [AuthGuard]},
  {path: 'home/:id', component:HomeComponent,canActivate: [AuthGuard]},
  {path: 'navbar', component:NavbarComponent,canActivate: [AuthGuard]},
  {path: 'companylist', component:CompanylistComponent,canActivate: [AuthGuard]},
  {path: 'banklist',component:BankListComponent,canActivate: [AuthGuard]},
  {path: 'epflist', component:EpfComponent,canActivate: [AuthGuard]},
  {path: 'gstlist', component:GstComponent,canActivate: [AuthGuard]},
  {path: 'incometaxlist',component:IncometaxComponent,canActivate: [AuthGuard]},
  {path: 'orglist',component:OrganizationComponent,canActivate: [AuthGuard]},
  {path: 'addepf',component:AddEpfComponent,canActivate: [AuthGuard]},
  {path: 'updateepf/:id',component:UpdateEpfComponent,canActivate: [AuthGuard]},
  {path: 'viewepf/:id',component:EpfviewComponent,canActivate: [AuthGuard]},
  {path: 'directorlist',component:DirectorComponent,canActivate: [AuthGuard]},
  {path: 'esilist',component:EsiComponent,canActivate: [AuthGuard]},
  {path: 'kmplist',component:KmpComponent,canActivate: [AuthGuard]},
  {path: 'addbank',component:AddbankComponent,canActivate: [AuthGuard]},
  {path: 'addorg',component:AddorgComponent,canActivate: [AuthGuard]},
  {path: 'adddirectors',component:AdddirectorsComponent,canActivate: [AuthGuard]},
  {path: 'addesi',component:AddesiComponent,canActivate: [AuthGuard]},
  {path: 'addgst',component:AddgstComponent,canActivate: [AuthGuard]},
  {path: 'addincometax',component:AddincometaxComponent,canActivate: [AuthGuard]},
  {path: 'addkmp',component:AddkmpComponent,canActivate: [AuthGuard]},
  {path: 'updatebank/:id',component:UpdatebankComponent,canActivate: [AuthGuard]},
  {path: 'updateorg/:companyid',component:UpdateorgComponent,canActivate: [AuthGuard]},
  {path: 'updatedirectors/:id',component:UpdatedirectorsComponent,canActivate: [AuthGuard]},
  {path: 'updateesi/:id',component:UpdateesiComponent,canActivate: [AuthGuard]},
  {path: 'updategst/:id',component:UpdategstComponent,canActivate: [AuthGuard]},
  {path: 'updateincometax/:id',component:UpdateincometaxComponent,canActivate: [AuthGuard]},
  {path: 'updatekmp/:id',component:UpdatekmpComponent,canActivate: [AuthGuard]},
  {path: 'viewbank/:id',component:ViewbankComponent,canActivate: [AuthGuard]},
  {path: 'viewdirectors/:id',component:ViewdirectorsComponent,canActivate: [AuthGuard]},
  {path: 'viewesi/:id',component:ViewesiComponent,canActivate: [AuthGuard]},
  {path: 'viewgst/:id',component:ViewgstComponent,canActivate: [AuthGuard]},
  {path: 'viewincometax/:id',component:ViewincometaxComponent,canActivate: [AuthGuard]},
  {path: 'viewkmp/:id',component:ViewkmpComponent,canActivate: [AuthGuard]},
  {path: 'vieworg/:companyid',component:VieworgComponent,canActivate: [AuthGuard]},
  {path: 'ptlist', component:PtComponent,canActivate: [AuthGuard]},
  {path: 'addpt',component:AddptComponent,canActivate: [AuthGuard]},
  {path: 'updatept/:id', component:UpdateptComponent,canActivate: [AuthGuard]},
  {path: 'viewpt/:id', component:ViewptComponent,canActivate: [AuthGuard]},
  {path: 'tdslist',component:TdsComponent,canActivate: [AuthGuard]},
  {path: 'addtds',component:AddtdsComponent,canActivate: [AuthGuard]},
  {path: 'updatetds/:id',component:UpdatetdsComponent,canActivate: [AuthGuard]},
  {path: 'viewtds/:id',component:ViewtdsComponent,canActivate: [AuthGuard]},
  {path: 'mcalist',component:McaComponent,canActivate: [AuthGuard]},
  {path: 'addmca',component:AddmcaComponent,canActivate: [AuthGuard]},
  {path: 'updatemca/:id',component:UpdatemcaComponent,canActivate: [AuthGuard]},
  {path: 'viewmca/:id',component:ViewmcaComponent,canActivate: [AuthGuard]},
  {path: 'delete', component:DeletedataComponent,canActivate: [AuthGuard]},
  {path: 'bankotp',component:BankotpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
