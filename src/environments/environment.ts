// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// const apiBase = 'http://localhost:3000';
const apiBase = 'https://vitalitymemberservice-dev.apps.cac.preview.pcf.manulife.com/v1/';

export const environment = {
  production: false,
  emptyEmailString: '** required **',
  dateFormat: 'DD/MMM/YYYY',
  endPoints: {
    memberList: `${apiBase}/members`,
    memberDetail: `${apiBase}/member`,
    updateEmail: `${apiBase}/updateMemberEmail`,
    updateMember: `${apiBase}/updateMemberInfo`,
    auditLog: `${apiBase}/audit`
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
    ]
  }
};
