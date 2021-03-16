import React from "react"

export function Switch({ children, ...props }) {
  const key = `${props.name}-${props.value}`

  return (
    <label htmlFor={key} className="flex items-center cursor-pointer">
      <div className="relative">
        <input id={key} type="checkbox" {...props} className="hidden" />
        <div
          className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"
          style={{
            backgroundColor: props.checked && "#48bb78",
            transition: "background-color 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
          style={{
            top: "-.25rem",
            left: "-.25rem",
            transition: "transform 0.3s ease-in-out",
            transform: props.checked && "translateX(100%)",
          }}
        />
      </div>
      <div className="ml-3 text-gray-700 font-medium">{children} </div>
    </label>
  )
}
