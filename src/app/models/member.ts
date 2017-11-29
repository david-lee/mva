export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  gender: string;
  birthDate: string | Date;
  customerRole: string;
  invalidEmail?: boolean;
}
