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
    url: 'https://manulife-prod.login.sys.cac.pcf.manulife.com/oauth/authorize',
    urlToken: 'https://manulife-prod.login.sys.cac.pcf.manulife.com/oauth/token',
    clientId: '7b424e41-ca35-47da-a3b0-5e63b2d14063',
    credentials: {
      secret: 'ef7f07ae-3726-4f64-b817-8410fcdd97dd'
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
