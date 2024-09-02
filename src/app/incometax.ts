export class Incometax {
  id?: number;
  panNumber: String;
  name: String;
  panIssuedDate: String;
  primaryMobile: number;
  secondaryMobile: number;
  primaryEmail: String;
  secondaryEmail: String;
  userid: String;
  password: String;
  primarysignatory:string;
  secondarysignatory:string;
  incorporationDate:string;

  createdBy?: String;
  updatedBy?: String;
  createdDate?: string;
  updatedDate?: string;
  active: boolean=true;

  company: {
    companyid: number;
  };
}
