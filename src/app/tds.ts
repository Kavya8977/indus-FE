export class Tds {
    id?: number;
    tanNo:string;
    mobileNo:number;
    email:string;
    surrendered:boolean=true;
    signatory:string;
    userid:string;
    password:string;


    createdBy?:String;
    updatedBy?:String;
    createdDate?:string;
    updatedDate?:string;

    active:boolean=true;

    company: {
        companyid: number;
      };

}
