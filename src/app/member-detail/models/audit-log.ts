export interface AuditLog {
  id: string;
  auditType?: string;
  auditTs: string;
  username?: string;
  tableName?: string;
  tableIdValue?: string;
  accountNumber?: string;
  fieldName?: string;
  oldValue: string;
  newValue: string;
}
