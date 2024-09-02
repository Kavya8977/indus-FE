export class Gst {
  id?: number;
  gstNumber: String;
  userid: String;
  password: String;
  address: string;
  state: string;
  email: String;
  mobileno: number;
  signatory:string;

  createdBy?: String;
  updatedBy?: String;
  createdDate?: string;
  updatedDate?: string;
  active: boolean=true;

  company: {
    companyid: number;
  };
}
