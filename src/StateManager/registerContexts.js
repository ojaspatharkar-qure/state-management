import React from "react"

const registerContexts = (contexts) => {
    const result = {}
    Object.keys(contexts).forEach((contextName) => {
        const context = React.createContext(contexts[contextName])
        context.displayName = contextName
        result[contextName] = context
    })
    return result
}

export default registerContexts