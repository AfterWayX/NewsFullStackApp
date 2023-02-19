import axios from "axios";

const instance = axios.create({
    baseURL: process.env.API
        ? `${process.env.API}/jobs`
        : "http://localhost:3001/jobs",
});

interface JobsParams {
    query?: string;
    skip?: number;
    limit?: number
}

export class JobsService {
    static getJobs(params: JobsParams) {
        const { query = '', skip = 0, limit = 5 } = params
        console.log(query)
        return instance.get('', {
            params: {
                searchStr: query,
                skip,
                limit
            }
        });
    }
}
