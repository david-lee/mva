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
    clientId: 'beb55281-309e-4513-9007-b7dcb50d79c5',
    credentials: {
      secret: '3d90ecc8-9f68-4092-8562-115cce14971f'
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
