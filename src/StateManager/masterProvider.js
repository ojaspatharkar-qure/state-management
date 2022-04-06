
// Main HOC wrapping App.js
import React from 'react'

const masterProvider = (WrapperComponent, providers) => {

    const ManageComp = (props) => {

        let WrappedComp = (
            <WrapperComponent {...props}>
                {props.children}
            </WrapperComponent>
        )
        providers.forEach((ProviderComp) => {
            WrappedComp = (
                <ProviderComp>
                    {WrappedComp}
                </ProviderComp>
            )
        })
        return WrappedComp
    }
    return ManageComp
}


export default masterProvider;