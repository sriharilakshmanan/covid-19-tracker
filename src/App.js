import React from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import icon from "./assets/images/covid-19-response-icon.png";

class App extends React.Component {
  state = { data: {}, country: "" };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  onCountryChangeHandler = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.icon} src={icon} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker onCountryChangeHandler={this.onCountryChangeHandler} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
