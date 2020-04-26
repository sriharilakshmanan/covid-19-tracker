import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let countrySpecificURL = url;

  if (country) {
    countrySpecificURL = url + "/countries/" + country;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(countrySpecificURL);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(url + "/daily");

    //console.log(data);

    const filteredData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));

    return filteredData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryData = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(url + "/countries");
    const countryArray = countries.map((country) => country.name);
    return countryArray;
  } catch (error) {
    console.log(error);
  }
};
