export class Esi {
  id?:number;
  employerCodeNo:number;
  employerName:String;
  ro:String;
  lin:number;
  userid:string;
  password:string;
  emailId:string;
  mobileNo:number;
  signatory:string;


    createdBy?:String;
    updatedBy?:String;
    createdDate?:string;
    updatedDate?:string;
    active:boolean=true;

    company: {
        companyid: number;
      };
}
