import React from 'react'
import { getClassNameFactory } from "@/core/lib";
import styles from "./styles.module.css";


const getClassName = getClassNameFactory("Form", styles);


const ElementsGenerator = ({fieldType, textLabel, Options, ...props}) => {
    
    switch (fieldType) {
        case "text":
            return (
            <>
                <label className={getClassName("label")} htmlFor={textLabel}>
                    {textLabel}
                </label>
                <input className={getClassName("textbox")} type="text" id={textLabel} name={textLabel}/>
            </>
            )
            
        case "number":
            return (
                <>
                    <label className={getClassName("label")} htmlFor={textLabel}>
                        {textLabel} 
                    </label>
                    <input className={getClassName("textbox")} type="number" id={textLabel} name={textLabel}/>
                </>
        )
        case "radio":
            return (
                <>
                    <div className={getClassName("label")}>{textLabel}</div>
                    {Options?.map((option) => {
                        return (
                            <div className={getClassName("radio-option-wrapper")}>
                            <input className={getClassName("radio")} type="radio" id={option?.label} name={textLabel} value={option?.value}/>   
                            <label className={getClassName("radio-label")} htmlFor={option?.label}>
                                {option?.label}
                            </label>
                            </div>
                        )
                    })}
                </>
            )
        case "checkbox":
            return (
                <>
                    <div className={getClassName("label")}>{textLabel}</div>
                    {Options?.map((option) => {
                        return (
                            <div className={getClassName("checkbox-option-wrapper")}>
                                <input type="checkbox" id={option?.label} name={textLabel} value={option?.value}/>   
                                <label className={getClassName("checkbox-label")} htmlFor={option?.label}> {option?.label} </label>
                            </div>
                        )
                    })}
                </>
            )
        case "select":
            return (
                <>
                    <div className={getClassName("label")}>{textLabel}</div>
                    <select className={getClassName("select")} name={textLabel} id={textLabel}>
                        {
                            Options?.map((obj) => {
                                return <option value={obj?.value}>{obj?.label}</option>
                            })
                        }
                    </select>
                </>
            )
        default:
            return <div></div>
    }
}
export default ElementsGenerator