import registerContexts from "../StateManager/registerContexts";

export default registerContexts({
    'UserContext': {
        userDetails: { name: '' },
        setUserDetails: ()=>{}
    },
    'PlaceContext': {
        placeDetails: { name: '' },
        setPlaceDetails: ()=>{}
    }
})