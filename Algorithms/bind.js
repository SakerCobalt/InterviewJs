//set the this context with bind

distance = 10000

const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit,caption){
    return this.distance+unit+caption
  }
}

const roadTrip2 = {
  distance: 5000
}

const getTripDistance = roadTrip1.getDistance.bind(roadTrip2) // without bind, we get the global distance
const getTripDistanceWithUnits = roadTrip1.getDistance.bind(roadTrip2,'km')

console.log(getTripDistanceWithUnits(' left to go'))