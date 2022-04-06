import { useState } from 'react'
import Contexts from '../Contexts'

const { PlaceContext } = Contexts

const PlaceProvider = (props) => {
    const { children } = props
    const [placeDetails, setPlaceDetailsVal] = useState({ name: '' })

    const setPlaceDetails = (usrDtl) => {
        setPlaceDetailsVal({ ...usrDtl })
    }

    return (
        <PlaceContext.Provider value={{ placeDetails, setPlaceDetails }}>
            {children}
        </PlaceContext.Provider>
    )
}

export default PlaceProvider