export class Director {
  id?: number;
  name: String;
  designation:string;
  email: String;
  dinNo: number;
  panNo: String;
  passportNo: String;
  // position: String;
  dateOfAppointment: String;
  dateOfExit: String;
  address: String;
  mobileNo:number;
  image:any;
  aadharNo:number;

  createdBy?: String;
  updatedBy?: String;
  createdDate?: string;
  updatedDate?: string;
  active: boolean=true;

  company: {
    companyid: number;
  };
}
