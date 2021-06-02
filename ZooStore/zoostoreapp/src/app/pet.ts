export class Pet {
  constructor(public id : number, public category : {id : number, name : string}, public name : string, public photoUrls : string[], public tags : [{id : number, name : string}], public status : string) { }
}
