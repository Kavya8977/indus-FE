import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bank } from './bank';
import { Observable, catchError, throwError } from 'rxjs';
import { Epf } from './epf';
import { Organization } from './organization';
import { Director } from './director';
import { Esi } from './esi';
import { Gst } from './gst';
import { Incometax } from './incometax';
import { Kmp } from './kmp';
import { Pt } from './pt';
import { Tds } from './tds';
import { Mca } from './mca';
import { Login } from './login';
import { State } from './addgst/addgst.component';

@Injectable({
  providedIn: 'root'
})

// login service
export class AdminService{
  constructor() { }
  getToken() {
    return localStorage.getItem('token');
  }

  IsAuthentication() {
    if(localStorage.getItem('token')!=null){
      return true;
    }else{
      return false;
    }
  }
  isLoggedIn() {
    let token=localStorage.getItem('token');
    if(token!=null){
      return true;
    }else{
      return false;
    }
  }
  logout() {
    localStorage.removeItem('token');
    return true;
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

   token = localStorage.getItem('token'); 
  
  private apiUrl="http://localhost:9090";
  // private role: string;

  constructor(private httpClient:HttpClient) { }

//register
signup(admin: Login): Observable<any> {
  return this.httpClient.post(`${this.apiUrl}/api/auth/signup`, admin)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error); // Rethrow the error for component to handle
      })
    );
}
//states
getStates(): Observable<State[]> {
  return this.httpClient.get<State[]>(`${this.apiUrl}/api/admin/states`);
}


//otp through mail
sendPasswordResetOTP(email:String):Observable<any>{
  return this.httpClient.post(`http://localhost:9090/api/auth/requestOtp?email=${email}`,null)
}

VerifyOtp(email:String,otp:String):Observable<any>{
  return this.httpClient.post(`http://localhost:9090/api/auth/verifyOtp?email=${email}&otp=${otp}`,null)
}

forgotPassword(email:String,otp:String,newPassword:String):Observable<any>{
  return this.httpClient.post(`http://localhost:9090/api/auth/changePassword?email=${email}&otp=${otp}&newPassword=${newPassword}`,null);
}
///bank
  getAllBanks():Observable<Bank[]>{
    return this.httpClient.get<Bank[]>(`${this.apiUrl}/api/admin/banks/fetchall`);
  }

  createBank(bank:Bank):Observable<object>{
    return this.httpClient.post(`${this.apiUrl}/api/admin/banks/save`,bank);
  }

  fetchBankById(id:number):Observable<Bank>{
    return this.httpClient.get<Bank>(`${this.apiUrl}/api/admin/banks/fetchbyid/${id}`);
  }

  fetchBankByCompanyId(companyid:number):Observable<Bank[]>{
    return this.httpClient.get<Bank[]>(`${this.apiUrl}/api/admin/banks/company/${companyid}`)
  }

  updateBank(id:number,bank:Bank):Observable<object>{
    return this.httpClient.put(`${this.apiUrl}/api/admin/banks/update/${id}`,bank);
  }

  deleteBank(id:number):Observable<object>{
    return this.httpClient.delete(`${this.apiUrl}/api/admin/banks/delete/${id}`);
  }

  decrypt(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/banks/decrypt/LoginPassword/${id}`, { responseType: 'text' })
  }

  decryptTP(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/banks/decrypt/TransactionPassword/${id}`, { responseType: 'text' })
  }

//organization
getAllOrganization(): Observable<Organization[]> {
  return this.httpClient.get<Organization[]>(`${this.apiUrl}/api/admin/companies/fetchall`);
}
createOrganization(organization: Organization): Observable<object> {
  return this.httpClient.post(`${this.apiUrl}/api/admin/companies/save`,organization)
}

fetchOrganizationById(companyid:number):Observable<Organization>{
  return this.httpClient.get<Organization>(`${this.apiUrl}/api/admin/companies/fetchbyid/${companyid}`);
}

updateOrganization(companyid:number,organization:Organization):Observable<object>{
  return this.httpClient.put(`${this.apiUrl}/api/admin/companies/update/${companyid}`,organization);
}

deleteOrganization(companyid:number):Observable<object>{
  return this.httpClient.delete(`${this.apiUrl}/api/admin/companies/delete/${companyid}`);
}


//directors
getAllDirector(companyid:number):Observable<Director[]>{
  return this.httpClient.get<Director[]>(`${this.apiUrl}/api/admin/directors/company/${companyid}`);
}

createDirector(director:Director):Observable<object>{
  return this.httpClient.post(`${this.apiUrl}/api/admin/directors/save`,director);
}

fetchDirectorById(id:number):Observable<Director>{
  return this.httpClient.get<Director>(`${this.apiUrl}/api/admin/directors/fetchbyid/${id}`);
}

updateDirector(id:number,director:Director):Observable<object>{
  return this.httpClient.put(`${this.apiUrl}/api/admin/directors/update/${id}`,director);
}

deleteDirector(id:number):Observable<object>{
  return this.httpClient.delete(`${this.apiUrl}/api/admin/directors/delete/${id}`);
}

//epf
  getAllEpf(companyid:number):Observable<Epf[]>{
    return this.httpClient.get<Epf[]>(`${this.apiUrl}/api/admin/epf/company/${companyid}`);
  }

  createEpf(epf:Epf):Observable<object>{
    return this.httpClient.post(`${this.apiUrl}/api/admin/epf/save`,epf);
  }

  fetchEpfById(id:number):Observable<Epf>{
    return this.httpClient.get<Epf>(`${this.apiUrl}/api/admin/epf/fetchbyid/${id}`);
  }

  updateEpf(id:number,epf:Epf):Observable<object>{
    return this.httpClient.put(`${this.apiUrl}/api/admin/epf/update/${id}`,epf);
  }

  deleteEpf(id:number):Observable<object>{
    return this.httpClient.delete(`${this.apiUrl}/api/admin/epf/delete/${id}`);
  }

  decryptEPF(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/epf/decrypt/${id}`, { responseType: 'text' })
  }

  //esi
  getAllEsi(companyid:number):Observable<Esi[]>{
    return this.httpClient.get<Esi[]>(`${this.apiUrl}/api/admin/esi/company/${companyid}`);
  }

  createEsi(esi:Esi):Observable<object>{
    return this.httpClient.post(`${this.apiUrl}/api/admin/esi/save`,esi);
  }

  fetchEsiById(id:number):Observable<Esi>{
    return this.httpClient.get<Esi>(`${this.apiUrl}/api/admin/esi/fetchbyid/${id}`);
  }

  updateEsi(id:number,esi:Esi):Observable<object>{
    return this.httpClient.put(`${this.apiUrl}/api/admin/esi/update/${id}`,esi);
  }

  deleteEsi(id:number):Observable<object>{
    return this.httpClient.delete(`${this.apiUrl}/api/admin/esi/delete/${id}`);
  }

  decryptESI(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/esi/decrypt/${id}`, { responseType: 'text' })
  }

  //gst
  getAllGst(companyid:number):Observable<Gst[]>{
    return this.httpClient.get<Gst[]>(`${this.apiUrl}/api/admin/gst/company/${companyid}`);
  }

  createGst(gst:Gst,createdBy: string,companyid:number):Observable<object>{
    return this.httpClient.post(`${this.apiUrl}/api/admin/gst/save?createdBy=${createdBy}&companyid=${companyid}`,gst);
  }

  fetchGstById(id:number):Observable<Gst>{
    return this.httpClient.get<Gst>(`${this.apiUrl}/api/admin/gst/fetchbyid/${id}`);
  }

  updateGst(id:number,gst:Gst):Observable<object>{
    return this.httpClient.put(`${this.apiUrl}/api/admin/gst/update/${id}`,gst);
  }

  deleteGst(id:number):Observable<object>{
    return this.httpClient.delete(`${this.apiUrl}/api/admin/gst/delete/${id}`);
  }

  decryptGst(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/gst/decrypt/${id}`, { responseType: 'text' })
  }


  decryptgst(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/gst/decrypt/${id}`, { responseType: 'text' })
  }

  //incometax
  getAllIncometax(companyid:number):Observable<Incometax[]>{
    return this.httpClient.get<Incometax[]>(`${this.apiUrl}/api/admin/incometax/company/${companyid}`);
  }

  createIncometax(incometax:Incometax):Observable<object>{
    return this.httpClient.post(`${this.apiUrl}/api/admin/incometax/save`,incometax);
  }

  fetchIncometaxById(id:number):Observable<Incometax>{
    return this.httpClient.get<Incometax>(`${this.apiUrl}/api/admin/incometax/fetchbyid/${id}`);
  }

  updateIncometax(id:number,incometax:Incometax):Observable<object>{
    return this.httpClient.put(`${this.apiUrl}/api/admin/incometax/update/${id}`,incometax);
  }

  deleteIncometax(id:number):Observable<object>{
    return this.httpClient.delete(`${this.apiUrl}/api/admin/incometax/delete/${id}`);
  }

  decryptincometax(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/incometax/decrypt/${id}`, { responseType: 'text' })
  }

  //kmp
  getAllKmp(companyid:number):Observable<Kmp[]>{
    return this.httpClient.get<Kmp[]>(`${this.apiUrl}/api/admin/kmp/company/${companyid}`);
  }

  createKmp(kmp:Kmp):Observable<object>{
    return this.httpClient.post(`${this.apiUrl}/api/admin/kmp/save`,kmp);
  }

  fetchKmpById(id:number):Observable<Kmp>{
    return this.httpClient.get<Kmp>(`${this.apiUrl}/api/admin/kmp/fetchbyid/${id}`);
  }

  updateKmp(id:number,kmp:Kmp):Observable<object>{
    return this.httpClient.put(`${this.apiUrl}/api/admin/kmp/update/${id}`,kmp);
  }

  deleteKmp(id:number):Observable<object>{
    return this.httpClient.delete(`${this.apiUrl}/api/admin/kmp/delete/${id}`);
  }

  decryptkmp(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/kmp/decrypt/${id}`, { responseType: 'text' })
  }

  //pt
  getAllPt(companyid:number):Observable<Pt[]>{
    return this.httpClient.get<Pt[]>(`${this.apiUrl}/api/admin/pt/company/${companyid}`);
  }

  createPt(pt:Pt):Observable<object>{
    return this.httpClient.post(`${this.apiUrl}/api/admin/pt/save`,pt);
  }

  fetchPtById(id:number):Observable<Pt>{
    return this.httpClient.get<Pt>(`${this.apiUrl}/api/admin/pt/fetchbyid/${id}`);
  }

  updatePt(id:number,pt:Pt):Observable<object>{
    return this.httpClient.put(`${this.apiUrl}/api/admin/pt/update/${id}`,pt);
  }

  deletePt(id:number):Observable<object>{
    return this.httpClient.delete(`${this.apiUrl}/api/admin/pt/delete/${id}`);
  }

  decryptPt(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/pt/decrypt/${id}`, { responseType: 'text' })
  }

  //tds
  getAllTds(companyid:number):Observable<Tds[]>{
    return this.httpClient.get<Tds[]>(`${this.apiUrl}/api/admin/tds/company/${companyid}`);
  }

  createTds(tds:Tds):Observable<object>{
    return this.httpClient.post(`${this.apiUrl}/api/admin/tds/save`,tds);
  }

  fetchTdsById(id:number):Observable<Tds>{
    return this.httpClient.get<Tds>(`${this.apiUrl}/api/admin/tds/fetchbyid/${id}`);
  }

  updateTds(id:number,tds:Tds):Observable<object>{
    return this.httpClient.put(`${this.apiUrl}/api/admin/tds/update/${id}`,tds);
  }

  deleteTds(id:number):Observable<object>{
    return this.httpClient.delete(`${this.apiUrl}/api/admin/tds/delete/${id}`);
  }

  decryptTds(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/tds/decrypt/${id}`, { responseType: 'text' })
  }

  //mca
  getAllMca(companyid:number):Observable<Mca[]>{
    return this.httpClient.get<Mca[]>(`${this.apiUrl}/api/admin/mca/company/${companyid}`);
  }

  createMca(mca:Mca):Observable<object>{
    return this.httpClient.post(`${this.apiUrl}/api/admin/mca/save`,mca);
  }

  fetchMcaById(id:number):Observable<Mca>{
    return this.httpClient.get<Mca>(`${this.apiUrl}/api/admin/mca/fetchbyid/${id}`);
  }

  updateMca(id:number,mca:Mca):Observable<object>{
    return this.httpClient.put(`${this.apiUrl}/api/admin/mca/update/${id}`,mca);
  }

  deleteMca(id:number):Observable<object>{
    return this.httpClient.delete(`${this.apiUrl}/api/admin/mca/delete/${id}`);
  }

  decryptMcV2(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/mca/decrypt/V2Password/${id}`, { responseType: 'text' })
  }

  decryptMcV3(id:number):Observable<string>{
    return this.httpClient.get(`${this.apiUrl}/api/admin/mca/decrypt/V3Password/${id}`, { responseType: 'text' })
  }

  //interceptor
  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token; // Optionally check token expiration
}

}

export class OtpService {

  constructor() { }

  requestOtp(phone: string): Promise<void> {
    // Simulate an OTP request
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(`OTP sent to ${phone}`);
        resolve();
      }, 1000);
    });
  }

  verifyOtp(phone: string, otp: string): boolean {
    // Simulate OTP verification
    return otp === '1234'; // For simplicity, the OTP is hardcoded to '1234'
  }
}