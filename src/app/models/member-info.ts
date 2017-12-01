import { Member } from './member';

export interface MemberInfo extends Member {
  lastUpdateDate: string;
  lastUpdateUser: string;
  membershipStatus: string;
  membershipEffdate: string | Date;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  vitalityProdcode: string;
  vitalityProdcodeEffdate: string | Date;
  employerExternalId: string;
  employerBranchId: string;
  relationshipCode: string;
  sin: string;
  vitalityEffdate: string | Date;
  vitalityTermdate: string;
  language: string;
  accountStrategy: string;
  altMemberId: string;
  sourceSystem: string;
  establishedOnC360: boolean;
}
