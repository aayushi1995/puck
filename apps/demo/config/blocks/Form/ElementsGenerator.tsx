import React from 'react'

const ElementsGenerator = ({fieldType, textLabel, Options, ...props}) => {

    switch (fieldType) {
        case "text":
            return (
            <label htmlFor={textLabel}>
                {textLabel}
                <input type="text" id={textLabel} name={textLabel}/>
            </label>
            )
            
        case "number":
            return (<label htmlFor={textLabel}>
                   {textLabel}
            <input type="number" id={textLabel} name={textLabel}/>
        </label>)
        case "radio":
            return (
                <>
                    <div>{textLabel}</div>
                    {Options?.map((option) => {
                        return (
                            <>
                            <label htmlFor={option?.label}>
                                {option?.label}
                                <input type="radio" id={option?.label} name={textLabel} value={option?.value}/>   
                            </label>
                            </>
                        )
                    })}
                </>
            )
        case "checkbox":
            return (
                <>
                    <div>{textLabel}</div>
                    {Options?.map((option) => {
                        return (
                            <>
                            <label htmlFor={option?.label}>
                                {option?.label}
                                <input type="checkbox" id={option?.label} name={textLabel} value={option?.value}/>   
                            </label>
                            </>
                        )
                    })}
                </>
            )
        case "select":
            return (
                <>
                    <label htmlFor={textLabel}>
                        {textLabel} 
                        <select name={textLabel} id={textLabel}>
                            {
                                Options?.map((obj) => {
                                    return <option value={obj?.value}>{obj?.label}</option>
                                })
                            }
                        </select>
                    </label>
                </>
            )
        default:
            return <div></div>
    }
}
export default ElementsGenerator