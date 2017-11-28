import { Account } from './accounts';
import { Biometrics } from './biometrics';
import { MemberInfo } from './member-info';
// import { AuditLog } from './audit-log';

export interface MemberDetail {
  memberInfo: MemberInfo;
  accounts: Account[];
  biometrics: Biometrics[];
}

export { Account } from './accounts';
export { Biometrics } from './biometrics';
export { MemberInfo } from './member-info';
export { AuditLog } from './audit-log';
