// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const apiBase = 'https://vitalitymemberservice-tst.apps.cac.preview.pcf.manulife.com/v1';

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
    url: 'https://manulife-tst.login.sys.cac.preview.pcf.manulife.com/oauth/authorize',
    urlToken: 'https://manulife-tst.login.sys.cac.preview.pcf.manulife.com/oauth/token',
    clientId: '8052cca9-8d8e-4c36-b80f-521273c730e0',
    credentials: {
      secret: '099b0f2a-e861-426e-bba1-fb88213fa464'
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
