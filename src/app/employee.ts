export class Employee {
  id:number;
  title:string;
  active: boolean =true;
  nameFirst: string;
  nameLast: string ;
  descripton: string;
  email: string;
  phoneNumber: string;
  extension: string;
  pictureLink: string;
  constructor(values: Object = {}){
    Object.assign(this,values);
  }
}
