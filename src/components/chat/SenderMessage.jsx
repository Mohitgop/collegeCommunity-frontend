import React from 'react'

function SenderMessage({sender,msg}) {
  return (
    <div class="col-start-1 col-end-8 p-3 rounded-lg">
      <div class="flex flex-row items-center">
        <div
          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
        >
          A
        </div>
        <div
          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Vel ipsa commodi illum saepe numquam maxime
            asperiores voluptate sit, minima perspiciatis.
          </div>
        </div>
      </div>
    </div>
  )
}

export default SenderMessage