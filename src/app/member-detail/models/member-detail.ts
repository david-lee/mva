import { Member } from '../../member-list/models/member';

export interface MemberDetail extends Member {
  lastUpdateDate: string;
  lastUpdateUser: string;
  membershipStatus: string;
  membershipEffdate: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  vitalityProdcode: string;
  vitalityProdcodeEffdate: string
  employerExternalId: string;
  employerBranchId: string;
  relationshipCode: string;
  sin: string;
  vitalityEffdate: string;
  vitalityTermdate: string;
  language: string;
  accountStrategy: string;
  altMemberId: string;
  sourceSystem: string;
}
