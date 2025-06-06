import React from 'react'

function ReciverMessage({reciever,msg}) {
    return (
        <div class="col-start-6 col-end-13 p-3 rounded-lg">
            <div class="flex items-center justify-start flex-row-reverse">
                <div
                    class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                    B
                </div>
                <div
                    class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                    </div>
                    {/* <div
                        class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                    >
                        Seen
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ReciverMessage