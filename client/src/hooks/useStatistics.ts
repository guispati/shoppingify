import { useAuth } from "./useAuth";

export const useStatistics = () => {
    const { doAuthenticatedRequest } = useAuth();
    const axiosInstance = doAuthenticatedRequest('statistics/');

    async function getMonthlySalesByYear(year: number) {
        var res = await axiosInstance!.get('/sales', { params: { year }});
        return res.data.data.data; 
    }

    async function getTopSellingsByField(field: "category" | "name") {
        var res = await axiosInstance!.get('/topItems', { params: { field }});
        return res.data.data.data; 
    }

    return { getMonthlySalesByYear, getTopSellingsByField };
}