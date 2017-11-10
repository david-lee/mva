export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  gender: string;
  dob: string;
  customerRole: string;
  invalidEmail?: boolean;
}