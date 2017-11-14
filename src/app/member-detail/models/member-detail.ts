import { Account } from './accounts';
import { Biometrics } from './biometrics';
import { MemberInfo } from './member-info';

export interface MemberDetail {
  memberInfo: MemberInfo;
  accounts: Account[];
  biometrics: Biometrics[];
}
