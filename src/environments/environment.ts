// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// const apiBase = 'http://localhost:3000';
const apiBase = 'https://vitalitymemberservice.apps.cac.preview.pcf.manulife.com/v1/';

export const environment = {
  production: false,
  emptyEmailString: '** required **',
  dateFormat: 'DD/MMM/YYYY',
  endPoints: {
    memberList: `${apiBase}/members`,
    memberDetail: `${apiBase}/member`,
    auditLog: `${apiBase}/audit`
  },
  lookups: {
    genders: [
      {label: 'Male', value: 'Male', code: 'M'},
      {label: 'Female', value: 'Female', code: 'F'}
    ],
    language: [
      {label: 'English', value: 'English', code: 'English'},
      {label: 'French', value: 'French', code: 'French'}
    ],
    memberStatus: [
      {label: '1-Active', value: '1-Active', code: '1'},
      {label: '2-Terminated', value: '2-Terminated', code: '2'},
      {label: '3-Duplicate', value: '3-Duplicate', code: '3'}
    ],
    provinces: [
      {label: 'Alberta', value: 'Alberta', code: 'AB'},
      {label: 'Britsh columbia', value: 'Britsh columbia', code: 'BC'},
      {label: 'Manitoba', value: 'Manitoba', code: 'MB'},
      {label: 'New Brunswick', value: 'New Brunswick', code: 'NB'},
      {label: 'Newfoundland & Labrador', value: 'Newfoundland & Labrador', code: 'NL'},
      {label: 'Northwest Territories', value: 'Northwest Territories', code: 'NT'},
      {label: 'Nova Scotia', value: 'Nova Scotia', code: 'NS'},
      {label: 'Nunavut', value: 'Nunavut', code: 'NU'},
      {label: 'Ontario', value: 'Ontario', code: 'ON'},
      {label: 'Prince Edward Island', value: 'Prince Edward Island', code: 'PE'},
      {label: 'Quebec', value: 'Quebec', code: 'QC'},
      {label: 'Saskatchewan', value: 'Sakkatchewan', code: 'SK'},
      {label: 'Yukon', value: 'Yukon', code: 'YT'},
    ],
    cotinines: [
      {label: '1-Somker', value: '1-Smoker', code: '1'},
      {label: '2-Non-Somker', value: '2-Non-Smoker', code: '2'}
    ]
  }
};
