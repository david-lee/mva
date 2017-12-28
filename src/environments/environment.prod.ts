// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// const apiBase = 'http://localhost:3000';
const apiBase = 'https://vitalitymemberservice-dev.apps.cac.preview.pcf.manulife.com/v1';

export const environment = {
  production: false,
  emptyEmailString: '** required **',
  dateFormat: 'DD/MMM/YYYY',
  serverDateFormat: 'YYYY-MM-DD',
  roleUrl: 'https://vitalitymemberservice-dev.apps.cac.preview.pcf.manulife.com/v1/roles',
  endPoints: {
    memberList: `${apiBase}/members`,
    member: `${apiBase}/member`,
    auditLog: `${apiBase}/audit`
  },
  ssoConfig: {
    url: 'https://manulife-dev.login.sys.cac.preview.pcf.manulife.com/oauth/authorize',
    urlToken: 'https://manulife-dev.login.sys.cac.preview.pcf.manulife.com/oauth/token',
    clientId: '4a048376-c719-4f89-99e8-93dbdaa63528',
    credentials: {
      secret: '287aba65-65a9-4284-b57b-421041d7d6f1'
    }
  },  
  lookups: {
    genders: [
      {label: 'All', value: null}, // used in the filter in Member List
      {label: 'Male', value: 'M'},
      {label: 'Female', value: 'F'}
    ],
    customerRoles: [
      {label: 'All', value: null}, // used in the filter in Member List
      {label: 'Promo', value: '98'},
      {label: 'Insured', value: '24'}
    ],    
    language: [
      {label: 'English', value: 'English'},
      {label: 'French', value: 'French'}
    ],
    memberStatus: [
      {label: 'Active', value: '1'},
      {label: 'Terminated', value: '2'},
      {label: 'Duplicate', value: '3'}
    ],
    provinces: [
      {label: 'Alberta', value: 'AB'},
      {label: 'Britsh columbia', value: 'BC'},
      {label: 'Manitoba', value: 'MB'},
      {label: 'New Brunswick', value: 'NB'},
      {label: 'Newfoundland & Labrador', value: 'NL'},
      {label: 'Northwest Territories', value: 'NT'},
      {label: 'Nova Scotia', value: 'NS'},
      {label: 'Nunavut', value: 'NN'},
      {label: 'Ontario', value: 'ON'},
      {label: 'Prince Edward Island', value: 'PE'},
      {label: 'Quebec', value: 'QC'},
      {label: 'Saskatchewan', value: 'SK'},
      {label: 'Yukon', value: 'Yukon', code: 'YT'},
    ],
    cotinines: [
      {label: 'Somker', value: '1'},
      {label: 'Non-Somker', value: '2'}
    ],
    branches: [
      {label: 'All', value: null},
      {label: 'MEDREWTERM', value: 'MEDREWTERM'},
      {label: 'QCMEDREWTM', value: 'QCMEDREWTM'},
      {label: 'PROMOMEDTM', value: 'PROMOMEDTM'},
      {label: 'QCPROMEDTM', value: 'QCPROMEDTM'}
    ]    
  }
};
