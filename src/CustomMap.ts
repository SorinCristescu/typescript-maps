export interface Marker {
  location: {
    lat: number,
    lng: number
  },
  markerContent(): string
}

export class CustomMap {
  private  googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(marker: Marker): void {
    const point = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng
        
      }
    })

    point.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.markerContent()
      })
      infoWindow.open(this.googleMap, point )
    })
  }
} 
