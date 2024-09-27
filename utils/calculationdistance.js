const axios = require("axios");
const Rider = require("../model/ridermodel");
const User = require("../model/usermodel");
const RideRequest = require("../model/riderequest")

class RideRequest {
    
    constructor(userId, riderId, origin, destination){
        this.userId = userId;
        this.riderId = riderId;
        this.origin = origin;
        this.destination = destination;
        this.status = 'Pending';



    }

     async save(){
        try {
            const newRequest =  new RideRequest({
                userId: this.userId,
                riderId: this.riderId,
                origin: {
                    type: 'Point',
                    coordinates: [this.origin.longitude, this.origin.latitude]
                },

                destination:{
                    type: 'Point',
                    coordinates: [this.destination.latitude, this.destination.longitude]
                },
                status: this.status

            });
            await newRequest.save()

            return newRequest;

        } catch (error) {
            
        }
    }

    static async updateStatus(requestId, newStatus){
            try {
                const rideRequest = await RideRequest.findById(requestId);
                    if (!rideRequest) {
                        throw new Error("Ride request not found");
                    }

                    rideRequest.status = newStatus;
                    await rideRequest.save();
                    return rideRequest;
            } catch (error) {
                console.log(error);
            }
    }



    static async findRideById(requestId){
            try {
                const rideRequest = await RideRequest.findById(requestId).populate('userId').populate('riderId');
                if (!rideRequest) {
                    throw new Error("Ride Request not found")
                }
                return rideRequest;

            } catch (error) {
                console.log('error finding ride request', error);
            }
    }


}

class FindDrivers{
    

    async find(latitude, longitude, maxDistance= 5000){
        try {
           const drivers =  await Rider.find({
            location:{
                $near:{
                    $geometry:{
                        type:"Point",
                        coordinate: [longitude, latitude]
                    },
                    $maxDistance:maxDistance
                }
            }
           })

           return drivers;

        } catch (error) {
            console.log(error)
        }
    }
}


class CalculateDistance{
        constructor(apiKey){
            this.apiKey = apiKey;
            this.baseUrl = "https://maps.googleapis.com/maps/api/distancematrix/json";

        }


        async getDistance(origin, destination){
                try {
                    const response = await axios.get(this.baseUrl,{
                        params:{
                            origin:`${origin.latitude}, ${origin.longitude}`,
                            destination:`${destination.latitude}, ${destination.longitude}`,
                            key: this.apiKey
                        }
                    });

                    const data = response.data;
                    if (data.status === 'OK') {
                        const distance = data.rows[0].elements[0].distance.text;
                        const duration = data.rows[0].elements[0].duration.text;

                        return{distance, duration};
                    }else{
                        console.log(`${data.status}`)
                    }
                } catch (error) {
                    console.log(error.message);
                }
        }

}

module.exports = {CalculateDistance, RideRequest, FindDrivers};