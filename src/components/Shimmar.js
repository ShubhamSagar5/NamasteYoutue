import React from 'react'

const Shimmar = () => {
  return (
    <div className="flex flex-wrap">
      {Array(50)
        .fill("")
        .map((e, index) => (
          <div
            className="w-[250px] h-[250px] bg-slate-200 rounded-lg  m-5"
            key={index}
          ></div>
        ))}
    </div>
  )
}

export default Shimmar