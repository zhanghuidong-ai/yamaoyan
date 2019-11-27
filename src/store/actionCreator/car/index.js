    import carType from "../../actionType/car"
    export function joinCar(payload) {
        return {
            type:carType.JOIN_CAR,
            payload
        }
    }