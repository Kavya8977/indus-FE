export class Pt {
  id?:number;
  ptinSal:String;
  ptinCom: string;
  taxDivision: string;
  taxCircle: string;
  mobileNo: string;
  email: string;
  dateOfEnrollment: string;
  userid: string;
  password: string;


    createdBy?:String;
    updatedBy?:String;
    createdDate?:string;
    updatedDate?:string;
    active:boolean=true;

    company: {
        companyid: number;
      };
}
