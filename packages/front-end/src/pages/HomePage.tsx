import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

import { JobsService } from "../services/Jobs.service";
import { JobInterface } from "../interfaces/Job.interface";

export default function HomePage() {
    const [jobs, setJobs] = useState<JobInterface[]>([])

    const getJobsData = async () => {
        const jobsData = (await JobsService.getJobs({})).data
        console.log(jobsData)
        setJobs(jobsData || [])
    }

    useEffect(() => {
        getJobsData()
    }, [])

    return (
        <>
            <Helmet>
                <title>Homepage | OpenByte</title>
                <meta
                    name="description"
                    content="Jobs posting off OpenByte companies"
                />
            </Helmet>
            <div className="container">
                {jobs.map((job: JobInterface) => {
                    const { jobTitle, jobUrl } = job
                    return (
                        <div key={jobUrl}>
                            {jobTitle}
                        </div>
                    )
                })}
            </div>
        </>
    )
}