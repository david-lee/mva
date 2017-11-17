export interface Biometrics {
  id: string;
  lastUpdateDate?: string;
  lastUpdateUser?: string;
  sentToTvg: string;
  assessmentDate: string | Date;
  tc?: string;
  hdl?: string;
  ldl?: string;
  tcHdlRatio?: string;
  glu?: string;
  bps?: string;
  bpd?: string;
  ht?: string;
  wght?: string;
  cotinineResult?: string;
}