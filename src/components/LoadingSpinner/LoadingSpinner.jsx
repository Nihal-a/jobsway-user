import React from 'react'

function LoadingSpinner() {
    return (
        <div class="flex justify-center items-center w-screen h-screen">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
}

export default LoadingSpinner
