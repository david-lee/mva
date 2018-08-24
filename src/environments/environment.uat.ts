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
    clientId: 'd41bf915-7c71-44b6-8f64-4c28297e8038',
    credentials: {
      secret: 'd39dea26-2914-452b-bd98-51ede3ef2f4b'
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
