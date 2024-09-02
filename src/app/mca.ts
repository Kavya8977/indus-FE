export class Mca {

  id?: number;
  cin: String;
  rocName: String;
  registrationNo: String;
  authorisedCapital: string;
  paidUpCapital: string;
  dateOfIncorporation: String;
  email: String;
  registeredAddress:string;
  stockExchanges:string;
  classOfCompany:string;
  telephone:string;
  mobileNo:string;
  v2loginid:string;
  v3loginid:string;
  v2emailId:string;
  v3emailId:string;
  v2password:string;
  v3password:string;


  createdBy?: String;
  updatedBy?: String;
  createdDate?: string;
  updatedDate?: string;
  active : boolean=true;

  company: {
    companyid: number;
  };
}
