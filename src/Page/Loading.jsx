import React from 'react';

const Loading = () => {
    return (
        <div className=''>
           <div className="flex items-center justify-center mx-auto w-52 min-h-screen  gap-4">
           <span className="loading text-white loading-ring loading-xs"></span>
<span className="loading loading-ring text-white loading-sm"></span>
<span className="loading loading-ring text-white loading-md"></span>
<span className="loading loading-ring text-white loading-lg"></span>
</div> 
        </div>
    );
};

export default Loading;