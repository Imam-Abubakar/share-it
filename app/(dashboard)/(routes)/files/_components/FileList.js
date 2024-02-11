import { Link } from '@react-email/components'
import React from 'react'

function FileList({fileList}) {
  return fileList&&(
<div className="overflow-x-auto mt-7 rounded-md">
  <table className="min-w-full divide-y-2 rounded-md divide-gray-200 bg-black text-white text-sm">
    <thead className="text-left">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100">File Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100"> Type</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100">Size</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200 bg-black">
      {fileList.map((file,index)=>(
        <tr className="bg-black" key={index}>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-100">{file.fileName}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-100">{file.fileType}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-100">{(file.fileSize/1024/1024).toFixed(2)}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-100">
            <Link 
            href={'/file-preview/'+file.id}
            className='cursor-pointer'>View</Link>
        </td>
        </tr>
      ))}
     

   
    </tbody>
  </table>
</div>
  )
}

export default FileList