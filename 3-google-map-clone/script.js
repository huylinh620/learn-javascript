mapboxgl.accessToken = 'pk.eyJ1IjoiaHV5bGluaDYyMCIsImEiOiJja2t5cmhhZWgxeG43MnBtcGE4YTZqaTN6In0.1IEqL_s8OcaH4_4zmGuYOA';

  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })

  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }

  function errorLocation() {

  }

  function setupMap(center) {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: 14
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/cycling'
    });
    map.addControl(directions, 'top-left')
  }
