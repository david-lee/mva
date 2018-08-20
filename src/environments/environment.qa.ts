// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const apiBase = 'https://vitalitymemberservice-dev.apps.cac.preview.pcf.manulife.com/v1';

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
    url: 'https://manulife-dev.login.sys.cac.preview.pcf.manulife.com/oauth/authorize',
    urlToken: 'https://manulife-dev.login.sys.cac.preview.pcf.manulife.com/oauth/token',
    clientId: '24b4dbbf-1696-457b-b3b6-328103d89f7f',
    credentials: {
      secret: 'd70d7d38-2da3-4f90-9d9d-2c4fe004ef6e'
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
