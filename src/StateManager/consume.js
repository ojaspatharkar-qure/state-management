import { useContext } from "react"

const consume = (WrapperComponent, contexts) => {

    const Consumer = (props) => {
        const { children } = props
        const value = {}

        contexts.forEach((context) => {
            // eslint-disable-next-line
            value[`${context.displayName}Store`] = useContext(context)
        })
        return (
            <WrapperComponent {...props} store={{...value}}>
                {children}
            </WrapperComponent>
        )

    }
    return Consumer
}

export default consume;