import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {
            data: { data },
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude: bl_lat ? bl_lat : "40.47739906045452",
                    tr_latitude: tr_lat ? tr_lat : "40.91757705070789",
                    bl_longitude: bl_lng ? bl_lng : "-74.25908991427882",
                    tr_longitude: tr_lng ? tr_lng : "-73.70027206817629",
                    limit: "30",
                    currency: "USD",
                    lunit: "km",
                    lang: "en_US",
                },
                headers: {
                    "X-RapidAPI-Key": "a111200961msh63d1774830454cap135f83jsn647f22565e5c",
                    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                },
            }
        );

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

