export class User {
  userId: number;
  firstName: string;
  lastName: string;
  // @JsonFormat(pattern = "yyyy-MM-dd")
  dateOfBirth: Date;
  emailId: string;
  mobileNo: string;
  password: string;
  confirmPassword: string;
  address: string;
  bankName: string;
  accountNo: number;
  ifscCode: string;
  pancardNumber: string;
  aadharNumber: number;
  cardType: string;

  cardStatus: number;
  registrationFee: number;
}
