import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

import { JobsService } from "../services/Jobs.service";
import { JobInterface } from "../interfaces/Job.interface";

export default function JobsPage() {
    const [jobs, setJobs] = useState<JobInterface[]>([])

    const getJobsData = async () => {
        const queryParams = window.location.search
        const params = new URLSearchParams(queryParams);
        const query = params?.get("query");
        console.log(query)
        const jobsData = (await JobsService.getJobs(query ? {query: query} : {})).data
        setJobs(jobsData || [])
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