import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PDMService } from './pdm.service';

import { StringLibrary } from '../shared/services/string.library';
import { PairValue, VehicleModel } from '../shared/interfaces/index';

import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'vehicle-model-picker',
  templateUrl: 'vehicle-model.picker.html',
  providers: [PDMService]
})

export class VehicleModelPicker implements OnInit {

  public yearList: string[] = [];
  public makeList: string[] = [];
  public modelList: string[] = [];
  public engineList: PairValue[] = [];
  public vehicleList: VehicleModel[] = [];

  public year = -1;
  private make = '';
  private model = '';
  private engineId = 0;
  private selectedVehicleId = -1;

  @Output() vehicleModel = new EventEmitter<VehicleModel>();

  constructor(private pdmService: PDMService) {

  }

  ngOnInit() {
    this.loadYearList();
  }

  // region Public methods

  public onChangeYearCbo(year: string): void {
    this.intializeLists();

    this.year = +year;
    this.loadMakeList();
  }

  public onChangeMakeCbo(make: string): void {
    this.cleanModelList();
    this.cleanengineList();

    this.make = make;
    this.loadModelList();
  }

  public onChangeModelCbo(model: string): void {
    this.cleanengineList();

    this.model = model;
    this.loadEngineList();
  }

  public onChangeEngineCbo(engineId: string): void {
    this.engineId = +engineId;
  }

  public addAplication(): void {
    this.loadVehicleModel();
    this.year = -1;
    this.intializeLists();
  }

  public onRemoveFromVehicleList(vehicle: VehicleModel): void {
    let index = this.vehicleList.findIndex(x => x.id === vehicle.id);

    if (index !== -1) {
      this.vehicleList.splice(index, 1);
    }
    if ((this.vehicleList.length === 0) || (this.selectedVehicleId === vehicle.id)) {
      this.vehicleModel.emit();
    }
  }

  public onSelectVehicle(vehicle: VehicleModel): void {
    this.selectedVehicleId = vehicle.id;
    this.vehicleModel.emit(vehicle);
  }

  // endregion Public methods

  // region Private methods

  private loadYearList(): void {
    this.pdmService.getYears()
      .then(x => {
        this.yearList = x;
      }).catch(err => {
        this.handleErrors(err);
      });
  }

  private loadMakeList(): void {
    this.pdmService.getMakes(this.year)
      .then(x => {
        this.makeList = x;
      }).catch(err => {
        this.handleErrors(err);
      });
  }

  private loadModelList(): void {
    this.make = StringLibrary.encondeAsURLIndetifier(this.make);
    this.pdmService.getModels(this.year, this.make)
      .then(x => {
        this.modelList = x;
      }).catch(err => {
        this.handleErrors(err);
      });
  }

  private loadEngineList(): void {
    this.model = StringLibrary.encondeAsURLIndetifier(this.model);
    this.pdmService.getEngines(this.year, this.make, this.model)
      .then(x => {
        this.engineList = x;
      }).catch(err => {
        this.handleErrors(err);
      });
  }

  private loadVehicleModel(): void {
    this.pdmService.getVehicleModel(this.engineId)
      .then(x => {
        this.vehicleList.push(x);
      }).catch(err => {
        this.handleErrors(err);
      });
  }

  private cleanMakeList(): void {
    this.makeList = [];
  }

  private cleanModelList(): void {
    this.modelList = [];
  }

  private cleanengineList(): void {
    this.engineList = [];
  }

  private intializeLists(): void {
    this.cleanMakeList();
    this.cleanModelList();
    this.cleanengineList();
  }

  private handleErrors(err: any): void {
    console.log(err);
  }


  // endregion Private methods

} //AplicationPicker
