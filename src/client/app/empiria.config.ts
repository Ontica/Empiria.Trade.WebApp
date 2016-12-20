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
    'uid': 'getPDMProductsList',
    'url': 'v1/product-data/products?searchFor={0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Product',
    'typeOperation': 'getList'
  },
  {
    'uid': 'getPDMBrandsList',
    'url': 'v1/product-data/brands?searchFor={0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Brand',
    'typeOperation': 'getList'
  },
  {
    'uid': 'getPDMBrand',
    'url': 'v1/product-data/brands/{0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Brand',
    'typeOperation': 'parse'
  },
  {
    'uid': 'getPDMManufacturerList',
    'url': 'v1/product-data/manufacturers?searchFor={0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Manufacturer',
    'typeOperation': 'getList'
  },
  {
    'uid': 'getPDMManufacturer',
    'url': 'v1/product-data/manufacturers/{0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Manufacturer',
    'typeOperation': 'parse'
  },
  {
    'uid': 'getPDMCategoryList',
    'url': 'v1/product-data/product-categories',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Category',
    'typeOperation': 'getList'
  },

  {
    'uid': 'getPDMCategory',
    'url': 'v1/product-data/product-categories/{0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Category',
    'typeOperation': 'parse'
  },
  {
    'uid': 'getPDMCategorySubcategoriesList',
    'url': 'v1/product-data/product-categories/{0}/sub-categories',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Category',
    'typeOperation': 'getSubcategories'
  },
  {
    'uid': 'getPDMSubcategory',
    'url': 'v1/product-data/product-sub-categories/{0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Subcategory',
    'typeOperation': 'parse'
  },
  {
    'uid': 'getPDMSubcategoryProductTerms',
    'url': 'v1/product-data/product-sub-categories/{0}/product-terms',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Subcategory',
    'typeOperation': 'getProductTerms'
  },
  {
    'uid': 'getPDMProductTermList',
    'url': 'v1/product-data/product-terms?searchFor={0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.ProductTerm',
    'typeOperation': 'getList'
  },
  {
    'uid': 'getPDMProductTerm',
    'url': 'v1/product-data/product-terms/{0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.ProductTerm',
    'typeOperation': 'parse'
  },
  {
    'uid': 'getPDMPresentationUnitList',
    'url': 'v1/product-data/presentation-units',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.PresentationUnit',
    'typeOperation': 'getList'
  },
  {
    'uid': 'getPDMPresentationUnit',
    'url': 'v1/product-data/presentation-units/{0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.PresentationUnit',
    'typeOperation': 'parse'
  },
  {
    'uid': 'getPDMPresentationUnitContentsList',
    'url': 'v1/product-data/presentation-units/{0}/content-units',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.PresentationUnit',
    'typeOperation': 'getContentUnits'
  },
  {
    'uid': 'getPDMContentUnit',
    'url': 'v1/product-data/content-units/{0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.ContentUnit',
    'typeOperation': 'parse'
  },
  {
    'uid': 'getPDMProductsList',
    'url': 'v1/product-data/products?searchFor={0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Product',
    'typeOperation': 'getList'
  },
  {
    'uid': 'getPDMProduct',
    'url': 'v1/product-data/products/{0}',
    'method': 'GET',
    'typeName': 'Empiria.Trade.PDM.Product',
    'typeOperation': 'parse'
  }

];   // END

export const APP_SETTINGS = {
  'defaultDataServer': DEFAULT_DATASERVER,
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
