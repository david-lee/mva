// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const apiBase = 'https://vitalitymemberservice-uat.apps.cac.pcf.manulife.com/v1';

export const environment = {
  production: false,
  emptyEmailString: '** required **',
  dateFormat: 'DD/MMM/YYYY',
  serverDateFormat: 'YYYY-MM-DD',
  endPoints: {
    memberList: `${apiBase}/members`,
    member: `${apiBase}/member`,
    auditLog: `${apiBase}/audit`,
    lookups: `${apiBase}/lookups`,
    roles: `${apiBase}/roles`
  },
  ssoConfig: {
    url: 'https://manulife-uat.login.sys.cac.pcf.manulife.com/oauth/authorize',
    urlToken: 'https://manulife-uat.login.sys.cac.pcf.manulife.com/oauth/token',
    clientId: '7b9e7ad5-f93c-4f7e-992d-0b82d2bfe281',
    credentials: {
      secret: 'fc93b1e2-15ab-475d-acae-3a631b598697'
    }
  },
  lookups: {
    genders: [],
    customerRoles: [],
    language: [],
    memberStatus: [],
    provinces: [],
    cotinines: [],
    branches: []
  }
};
