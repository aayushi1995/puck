/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { ComponentConfig } from "@/core/types/Config";
import styles from "./styles.module.css";
import { getClassNameFactory } from "@/core/lib";
import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import ElementsGenerator from "./ElementsGenerator";
import { get } from "http";

const getClassName = getClassNameFactory("Form", styles);

const icons = Object.keys(dynamicIconImports).reduce((acc, iconName) => {
  const El = dynamic(dynamicIconImports[iconName]);

  return {
    ...acc,
    [iconName]: <El />,
  };
}, {});

const iconOptions = Object.keys(dynamicIconImports).map((iconName) => ({
  label: iconName,
  value: iconName,
}));

export type FormProps = {
  formFields: {
    textLabel: string;
    fieldType: "text" | "number" | "radio" | "checkbox" | "select";
    Options: {
      label: string;
      value: string;
    }[];
    isRequired: boolean
  }[];
};


export const Form: ComponentConfig<FormProps> = {
  fields: {
    formFields: {
      type: "array",
      arrayFields: {
        textLabel: { type: "text" },
        fieldType: {
          type: "select",
          options: [
              { label: "Number Input", value: "number" },
              { label: "Text Input", value: "text" },
              { label: "Radio Group", value: "radio" },
              { label: "Checkbox Group", value: "checkbox" },
              { label: "Select", value: "select" },
          ],
        },
        isRequired: { 
          type: "radio",
          options: [
           {
            label: 'true', value: true,
           },
           {
            label: 'false', value: false
           }
          ]
         },
        Options: {
          type: "array",
          arrayFields: {
            label: { type: "text" },
            value: {type: 'text'}
          },
          getItemSummary: (item) => item.label || "Item",
        },
      },
      getItemSummary: (item) => item.textLabel || "Form Field",
    },
  },
  render: ({ formFields }) => {
    const formRef = useRef();

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(formRef.current);

      for (const value of formData.values()) {
        // Form Data
        console.log(value);
      }
    };

    return <form id="aayushi" className={getClassName()} ref={formRef} onSubmit={handleSubmit}>
      {formFields?.map((item, i) => {
      return (
        <div className={getClassName("field")} key={item?.textLabel}>
          <ElementsGenerator {...item}/>
        </div>
      )}
    )}
    <div className={getClassName("field")}>
      {formFields?.length > 0 ?  <button type="submit" className={getClassName("submit")}>Submit</button> : <div> No form fields <p>Please add some form fields in the right sidebar.</p></div>}
    </div>
    </form>
  },
};


