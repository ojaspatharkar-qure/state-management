import './scss/index.scss'
import Contexts from './context/Contexts'
import consume from './StateManager/consume'
const { UserContext, PlaceContext } = Contexts

const User = (props) => {
  const { store } = props
  
  const { UserContextStore, PlaceContextStore } = store
  
  const onChangeName = (e) => {
    const usrDtl = UserContextStore?.userDetails
    usrDtl.name = e.target.value
    UserContextStore?.setUserDetails(usrDtl)
  }

  const onChangePlaceName = (e) => {
    const usrDtl = PlaceContextStore?.placeDetails
    usrDtl.name = e.target.value
    PlaceContextStore?.setPlaceDetails(usrDtl)
  }

  return (
    <div className="App">
      <div className='name-container'>
        <div><input value={UserContextStore?.userDetails.name} onChange={onChangeName} /></div>
        <div>Hello {UserContextStore?.userDetails.name}</div>
      </div>
      <div className='name-container'>
        <div><input value={PlaceContextStore?.placeDetails.name} onChange={onChangePlaceName} /></div>
        <div>You are from {PlaceContextStore?.placeDetails.name}</div>
      </div>
    </div>
  );
}

export default consume(User, [UserContext, PlaceContext]);