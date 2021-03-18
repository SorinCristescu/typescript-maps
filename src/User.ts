import { Marker } from './CustomMap';
import faker from 'faker';


export class User implements Marker {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name= faker.name.firstName() + ' ' + faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  markerContent(): string {
    return `<h3>${this.name}</h3>`
  }
} 