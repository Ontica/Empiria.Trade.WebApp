/**
 *  Solution : Empiria Trade Client                             || v0.1.0625
 *  Type     : ConfigData
 *  Summary  : Internal type used to hold testing configuration data.
 *
 *  Copyright (c) 2015-2016. Ontica LLC, La Vía Óntica SC and contributors. <http://ontica.org>
*/

import { DataOperationDef } from './shared/services/data.operation';

const DEFAULT_DATASERVER = 'http://masautopartes.com.mx/api/';

const TESTS_API_KEY = 'Tr4d3fGZUTzp7pRdUHWTQVcB6TWpLaATAwDPeYzX9yV8eYTNxCe5rsL9dZwererx';

const DATAOPERATIONLIST: DataOperationDef[] = [
  {
    'uid': 'System.GetLicense',
    'url': 'v1/system/license',
    'method': 'GET'
  },
  {
    'uid': 'System.GetEndpoints',
    'url': 'v1/system/api-endpoints',
    'method': 'GET'
  }
];   // END

export const APP_SETTINGS = {
  'defaultDataServer':DEFAULT_DATASERVER,
  'apiKey': TESTS_API_KEY,
  'initialOperations': DATAOPERATIONLIST
};

/*
const TEST_SESSION_TOKEN = '2a3b02e6-9d59-41de-8698-6482ec4e9ce2-' +
                           '3a951dab66a2360fa08564bf39b24b7d7e6a92e2ba86813cb24afc84cde2e572';


export function initializeTestEnvironment() {
  Settings.set(APP_SETTINGS);
  Session.setCurrent(TEST_SESSION_TOKEN);
}
*/
