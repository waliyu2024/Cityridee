const {CalculateDistance, FindDrivers, RideRequest} = require("../utils/calculationdistance")



const apiKey = ""

const Request = new CalculateDistance(apiKey);

const locateDrivers = new FindDrivers(); 

const origin = { latitude: 40.748817, longitude: -73.985428 }; // Example coordinates (New York)
const destination = { latitude: 34.052235, longitude: -118.243683 }; // Example coordinates (Los Angeles)


locateDrivers.find()

Request.getDistance(origin, destination)
.then((result)=>{
    console.log(`Distance: ${result.distance}`);
    console.log(`duration ${result.duration}`);
})
.catch(error => {console.log(error)})


const createRideRequest =async (userId, riderId, origin, destination) =>{
    try {
        const request = new RideRequest(userId, riderId, origin, destination)
        const saveRequest = await request.save()

        console.log("Ride Request Save:" , saveRequest);
        return saveRequest;
    } catch (error) {
        console.log(error)
    }
}