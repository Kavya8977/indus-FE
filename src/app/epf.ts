export class Epf {

  id?:number;
  estid:string;
  lin:number;
  // panno:string;
  niccode:string;
  pfOfficeAddress:string;
  signatory:string;
  userid:String;
  password:string;
  emailId: string;
  mobileNo:number;

    createdBy?:string;
    updatedBy?:string;
    createdDate?:string;
    updatedDate?:string;
    active:boolean=true;

    company: {
        companyid: number;
      };
}
