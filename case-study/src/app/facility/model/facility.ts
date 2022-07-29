export interface Facility {
  idFacility: String;
  nameFacility: String;
  areaFacility: number;
  costFacility: number;
  peopleFacility: number;
  typeFacility: {
    id : number;
    nameFacility: string;
  }
  roomStandard: String;
  other:String;
  areaPool: number;
  floor: number;
  freeAttachService: String;
}
