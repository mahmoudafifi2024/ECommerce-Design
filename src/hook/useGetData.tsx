import baseURL from "../API/baseURL";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGetData = async (url: string, parameters?: any) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const res = await baseURL.get(url, parameters);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export default useGetData;