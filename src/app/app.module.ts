import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CompanylistComponent } from './companylist/companylist.component';
import { OrganizationComponent } from './organization/organization.component';
import { GstComponent } from './gst/gst.component';
import { EpfComponent } from './epf/epf.component';
import { IncometaxComponent } from './incometax/incometax.component';
import { RegisterComponent } from './register/register.component';
import { PhoneloginComponent } from './phonelogin/phonelogin.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddEpfComponent } from './add-epf/add-epf.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule} from '@angular/material/form-field';
import { UpdateEpfComponent } from './update-epf/update-epf.component';
import { EpfviewComponent } from './viewepf/epfview.component'
import { KmpComponent } from './kmp/kmp.component';
import { EsiComponent } from './esi/esi.component';
import { DirectorComponent } from './director/director.component';
import { AddbankComponent } from './addbank/addbank.component';
import { AddorgComponent } from './addorg/addorg.component';
import { AddgstComponent } from './addgst/addgst.component';
import { AddesiComponent } from './addesi/addesi.component';
import { AddincometaxComponent } from './addincometax/addincometax.component';
import { AddkmpComponent } from './addkmp/addkmp.component';
import { AdddirectorsComponent } from './adddirectors/adddirectors.component';
import { UpdatebankComponent } from './updatebank/updatebank.component';
import { UpdateorgComponent } from './updateorg/updateorg.component';
import { UpdategstComponent } from './updategst/updategst.component';
import { UpdateesiComponent } from './updateesi/updateesi.component';
import { UpdateincometaxComponent } from './updateincometax/updateincometax.component';
import { UpdatekmpComponent } from './updatekmp/updatekmp.component';
import { UpdatedirectorsComponent } from './updatedirectors/updatedirectors.component';
import { ViewbankComponent } from './viewbank/viewbank.component';
import { VieworgComponent } from './vieworg/vieworg.component';
import { ViewgstComponent } from './viewgst/viewgst.component';
import { ViewesiComponent } from './viewesi/viewesi.component';
import { ViewincometaxComponent } from './viewincometax/viewincometax.component';
import { ViewkmpComponent } from './viewkmp/viewkmp.component';
import { ViewdirectorsComponent } from './viewdirectors/viewdirectors.component';
import { Jwtinterceptor } from './jwtinterceptor';
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
import { MatDialogModule } from '@angular/material/dialog';
import { BankotpComponent } from './bankotp/bankotp.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    BankListComponent,
    CompanylistComponent,
    OrganizationComponent,
    GstComponent,
    EpfComponent,
    IncometaxComponent,
    RegisterComponent,
    PhoneloginComponent,
    AddEpfComponent,
    UpdateEpfComponent,
    EpfviewComponent,
    KmpComponent,
    EsiComponent,
    DirectorComponent,
    AddbankComponent,
    AddorgComponent,
    AddgstComponent,
    AddesiComponent,
    AddincometaxComponent,
    AddkmpComponent,
    AdddirectorsComponent,
    UpdatebankComponent,
    UpdateorgComponent,
    UpdategstComponent,
    UpdateesiComponent,
    UpdateincometaxComponent,
    UpdatekmpComponent,
    UpdatedirectorsComponent,
    ViewbankComponent,
    VieworgComponent,
    ViewgstComponent,
    ViewesiComponent,
    ViewincometaxComponent,
    ViewkmpComponent,
    ViewdirectorsComponent,
    PtComponent,
    AddptComponent,
    UpdateptComponent,
    ViewptComponent,
    ForgotpasswordComponent,
    TdsComponent,
    AddtdsComponent,
    UpdatetdsComponent,
    ViewtdsComponent,
    McaComponent,
    AddmcaComponent,
    UpdatemcaComponent,
    ViewmcaComponent,
    DeletedataComponent,
    BankotpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule,
    MatProgressSpinnerModule
     
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: Jwtinterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
