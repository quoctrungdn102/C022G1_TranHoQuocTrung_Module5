export class Facility {
  nameFacility: String;
  areaFacility: number;
  costFacility: number;
  peopleFacility: number;
  typeFacility: String;
  roomStandard: String;
  other:String;
  areaPool: number;
  floor: number;
  freeAttachService: String;


  constructor(nameFacility: String, areaFacility: number, costFacility: number, peopleFacility: number, typeFacility: String, roomStandard: String, other: String, areaPool: number, floor: number, freeAttachService: String) {
    this.nameFacility = nameFacility;
    this.areaFacility = areaFacility;
    this.costFacility = costFacility;
    this.peopleFacility = peopleFacility;
    this.typeFacility = typeFacility;
    this.roomStandard = roomStandard;
    this.other = other;
    this.areaPool = areaPool;
    this.floor = floor;
    this.freeAttachService = freeAttachService;
  }
}
