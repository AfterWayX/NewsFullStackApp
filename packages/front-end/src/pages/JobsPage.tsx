import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

import { JobsService } from "../services/Jobs.service";
import { JobInterface } from "../interfaces/Job.interface";

export default function JobsPage() {
    const [jobs, setJobs] = useState<JobInterface[]>([])
    const [job, setJob] = useState<JobInterface>()

    const getJobsData = async (limitParam?: number) => {
        const queryParams = window.location.search
        const params = new URLSearchParams(queryParams);
        const query = params?.get("query");
        const jobsData = (await JobsService.getJobs(query ? { query: query, limit: limitParam || 13 } : { limit: limitParam || 13 })).data
        setJobs(jobsData || [])
        if (limitParam === 13 || !limitParam) {
            setJob(jobsData[0])
        }
    }

    useEffect(() => {
        getJobsData()
    }, [])

    return (
        <>
            <Helmet>
                <title>Jobs | OpenByte</title>
                <meta
                    name="description"
                    content="Jobs on OpenByte"
                />
            </Helmet>
            <div className="container mx-auto flex gap-5 py-5">
                <div className='grid-cols-2 grid gap-5 w-7/12 h-full'>
                    {jobs.map((job: JobInterface) => {
                        const { jobTitle, jobUrl, companyName, location } = job
                        return (
                            <div onClick={() => {
                                setJob(job)
                            }} className='h-max col-span-2 text-white border border-white rounded-lg p-5' key={jobUrl}>
                                <h2 className='text-xl font-bold mb-4'>{jobTitle}</h2>
                                <div className='flex gap-x-1 items-end'>
                                    <div className='font-semibold text-sm'>
                                        <h3>Company: {companyName}</h3>
                                        <p className='font-medium'>Location: {location}</p>
                                    </div>
                                    <button className='border font-bold text-base border-slate-300 rounded-lg px-5 py-2.5 ml-auto mb-auto'>Show More</button>
                                </div>

                            </div>
                        )
                    })}
                    <div className='col-span-2 flex justify-center  '>
                        <button 
                        onClick={() => {
                            getJobsData(jobs.length += 10)
                        }} 
                        className='border font-bold text-base text-white mx-auto border-slate-300 rounded-lg px-20 py-2.5 ml-auto mb-auto'>
                            Show More
                            </button>
                    </div>
                </div>
                {
                    job && (
                        <div className='w-5/12 sticky top-5 text-white border border-white rounded-lg p-5 h-max'>
                            <div className='flex justify-between border-b border-gray-500 mb-5 gap-x-5'><h1 className='text-2xl font-bold mb-4'>{job.jobTitle}</h1><a className='w-max' target='_blank' href={job.jobUrl}>Source Link</a></div>
                            <div className='flex gap-x-5'>
                                <h3>Company: {job.companyName},</h3>
                                <p className='font-medium'>Location: {job.location}</p>
                            </div>
                            <div className='mt-2.5 indent-4 leading-7 text-sm' dangerouslySetInnerHTML={{ __html: job.description.content.replaceAll('<p><b>', '<p class="indent-0 text-lg font-bold">') }} />

                        </div>
                    )
                }

            </div>
        </>
    )
}