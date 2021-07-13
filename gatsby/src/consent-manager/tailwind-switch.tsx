import React, { useMemo } from "react"
import { SwitchProps } from "@consent-manager/interface-default"
import { FieldRenderProps } from "react-final-form"

export const Switch: React.FC<SwitchProps> = ({
  children,
  input,
  meta,
  enabledColor = "#48bb78",
  ...rest
}) => {
  const key = `switch-${input.name}`
  const checked: boolean = useMemo(() => !!input.value, [input.value])

  return (
    <label htmlFor={key} className="flex items-center cursor-pointer" {...rest}>
      <div className="relative">
        <input
          id={key}
          type="checkbox"
          checked={checked}
          {...input}
          className="hidden"
        />
        <div
          className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"
          style={{
            backgroundColor: checked ? enabledColor : undefined,
            transition: "background-color 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
          style={{
            top: "-.25rem",
            left: "-.25rem",
            transition: "transform 0.3s ease-in-out",
            transform: checked ? "translateX(100%)" : undefined,
          }}
        />
      </div>
      <div className="ml-3 text-gray-700 font-medium">{children} </div>
    </label>
  )
}
