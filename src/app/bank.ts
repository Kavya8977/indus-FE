export class Bank {
    id?:number;
    accountHolderName:string;
    bankAccountNumber:string;
    ifccode:string;
    bankName:string;
    branch:string;
    mcircode:number;
    loginid:string;
    accountType:string;
    loginpassword:string;
    transpassword:string;
    primarysignatory:string;
    secondarysignatory:string;
    email:string;
    mobileNo:number;


    createdBy?:String;
    updatedBy?:String;
    createdDate?:string;
    updatedDate?:string;
    active:boolean=true;

    company: {
        companyid: number;
      };
}
