import React, { useEffect } from 'react'
import { usestore } from '../../Store/ContextStore'
import { useState } from 'react'
import AdminJobCard from '../../Components/Cardss/AdminJobCard'
import { toast } from 'react-toastify'

export const Deletejob = () => {
    const [jobs, setjobs] = useState([])
    const {url,jwtToken}=usestore()
    const getjobsdata=()=>{
        fetch(`${url}/api/admin/getallJobs`, {
            method:'GET',
            headers:{
                "Authorization":`Bearer ${jwtToken}`
            }
        }).then((res)=>{
            console.log(res);
            
            return res.json()

        }).then((data)=>{
            console.log(data);
            if(data.length>0){
                setjobs(data)
            }
            else{
                setjobs([])
            }
            
        }).catch((error)=>{
            console.log(error);
            
        })
    }
    useEffect(()=>{
        getjobsdata()
    },[])

   

  return (
    <div className='h-[90%] '>
         <div className='w-[100%] mt-2 flex justify-center'>
      <div className="bg-gradient-to-r w-[700px]  from-blue-700 to-purple-900 text-white p-6">
          <h1 className="text-2xl font-bold mb-2">Delete a Job</h1>
          <p className="text-blue-100">Select the job your want to delete</p>
        </div>
        </div>
      <div className='w-[100%] flex justify-center'>
        
        <div className='w-[700px] h-[500px] overflow-y-scroll' >
<div className='w-full flex flex-col  '>
  {jobs?.map((value,index)=>(
<AdminJobCard key={value._id} title={value.JobName} job={jobs} setjob={setjobs} image={value.JobImage} type={value.JobType} duration={value.JobDuration} id={value._id} />
  )

  )}

</div>
</div>
</div>
      </div>
    
  )
}

export default Deletejob
