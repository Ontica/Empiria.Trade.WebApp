import { Component, ViewChild, OnInit } from '@angular/core';
import { PDMService } from './pdm.service';

import { ModalWindow } from '../shared/windows/modal-window.component';

import {
  BrandData, CategoryData, ProductData, ProductTermData, SubcategoryData,
  TraderData, VehicleModel
} from '../shared/interfaces/index';

import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'product-catalog',
  templateUrl: 'product.catalogue.html',
  providers: [PDMService, ModalWindow]
})

export class ProductCatalogue implements OnInit {

  products: ProductData[] = [];

  public submitted = false;
  public searchValue = '';
  public productEquivalent: ProductData;
  public vehicleModel: VehicleModel;
  public componentToShow = '';

  public categoryList: CategoryData[] = [];
  public subcategoryList: SubcategoryData[] = [];
  public productTermList: ProductTermData[] = [];
  public brandList: BrandData[] = [];
  public traderList: TraderData[] = [];

  @ViewChild(ModalWindow) public modalWindow: ModalWindow;

  constructor(private pdmService: PDMService) {

  }

  ngOnInit() {
    this.loadCategoryList();
    this.loadBrandList();
    this.loadTrader();
  }
  // region Public methods

  public search(): void {
    this.loadProducts(this.searchValue);
  }

  public onChangeCategory(categoryId: string): void {
    this.loadSubcategoryList(+categoryId);
  }

  public onChangeSubCategory(subcategoryId: string): void {
    this.loadProductTermList(+subcategoryId);
  }


  public onGoogleSearchProduct(productPartNumber: string): void {
    window.open('https://www.google.com/search?q=' + productPartNumber);
  }

  public onShowEquivalents(product: ProductData): void {
    this.productEquivalent = product;
    this.componentToShow = 'equivalent-editor';
    this.modalWindow.show();
  }

  public onSearchByVehicle(): void {
    this.componentToShow = 'application-picker';
    this.modalWindow.show();
  }

  public getVehicleModel(vehicleModel: VehicleModel): void {
    this.vehicleModel = vehicleModel;
    this.modalWindow.close();
  }

  // endregion Public methods

  // region Private methods

  private loadProducts(searchValue: string): void {
    this.pdmService.getProducts('getPDMProductsList', searchValue)
      .then(x => {
        this.products = x;
        this.submitted = true;
      }).catch(err => {
        console.log(err);
      });

  }

  private loadCategoryList(): void {
    this.pdmService.getProductCategories()
      .then(x => {
        this.categoryList = x;
      }).catch(err => {
        this.handleErrors(err);
      });
  }

  private loadSubcategoryList(categoryId: number): void {
    this.pdmService.getProductSubcategories(categoryId)
      .then(x => {
        this.subcategoryList = x;
      }).catch(err => {
        this.handleErrors(err);
      });
  }

  private loadProductTermList(subCategoryId: number): void {
    this.pdmService.getProductTerms(subCategoryId)
      .then(x => {
        this.productTermList = x;
      }).catch(err => {
        this.handleErrors(err);
      });
  }

  private loadBrandList(): void {
    this.pdmService.getBrands()
      .then(x => {
        this.brandList = x;
      }).catch(err => {
        this.handleErrors(err);
      });
  }

  private loadTrader(): void {
    this.pdmService.getTraders()
      .then(x => {
        this.traderList = x;
      }).catch(err => {
        this.handleErrors(err);
      });
  }

  private handleErrors(err: any): void {
    console.log(err);
  }


  // endregion Private methods

}  //ProductCatalogue
