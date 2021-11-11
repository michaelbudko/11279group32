import React from 'react'


export default class Info extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			address: this.props.address,
			dni: "",
			ghi: "",
			util_comp: "",
			util_rate_com: 0,
			util_rate_ind: 0,
			util_rate_res:0,
			isLoaded: false,
			notFound: false,
			isError: false,
			ac_monthly: [],
			ac_annual: 0,
			
			//For testing
			test: "",
			counter: 0,
		}
	}
	
	getApiInfo(address) {
		//Stops function when nothing is inputted
		if(address === ""){
			return;
		}
		
		//API URLs
		const api_key = 'api_key=hbWbn4H2aZ8jE99uBd5khfbHxqbF09JKwcXA7ayH&';
		const solarRad_url = 'https://developer.nrel.gov/api/solar/solar_resource/v1.json?' + api_key + "&address=" + address;
		//const solarSat_url = 'https://developer.nrel.gov/api/solar/solar_resource/v1.json?'+ api_key + "&address=" + address;
		const util_url = 'https://developer.nrel.gov/api/utility_rates/v3.json?' + api_key + "address=" + address;
		const pvwatts_url = 'https://developer.nrel.gov/api/pvwatts/v6.json?' + api_key + "address=" + address + "&system_capacity=4&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10";
		
		//Fetch data from APIs
		//Solar Radiation
		fetch(solarRad_url)
			.then((response) => response.json())
			.then((data) => {
				const output = data.outputs;
				try {
					this.setState({
						dni: output.avg_dni.annual,
						ghi: output.avg_ghi.annual,
						isLoaded: true,
					});
				} catch (e) {

				}
			});
			
		//Solar Panel
		fetch(pvwatts_url)
			.then((response) => response.json())
			.then((data) => {
				
				const output = data.outputs;
				this.setState({
					ac_annual: output.ac_annual,
					ac_monthly: (output.ac_annual)/12,
				});
			});
		
		//Utility Rates
		fetch(util_url)
			.then((response) => response.json())
			.then((data) => {
				
				const output = data.outputs;
				this.setState({
					//test: JSON.stringify(data),
					util_comp: output.utility_name,
					util_rate_com: output.commercial,
					util_rate_ind: output.industrial,
					util_rate_res: output.residential,
			});
		});
		
		
	}
	
	//Runs function when component rendered
	componentDidMount() {
		this.getApiInfo(this.props.address);
	}
	
	render() {
		//Display message at start before query
		if(!this.state.isLoaded){
			return <div> Input Address Above!<br/><br/></div>;
		}
		else{
			return (
				//Display info from APIs
				<div key={this.props.address} >
				
				<h3>Solar Radiation Stats</h3>
				Average Daily Direct Normal Irradiance: {this.state.dni} kWh/m<sup>2</sup>/day <br/>
				Average Daily Global Horizontal Irradiance: {this.state.ghi} kWh/m<sup>2</sup>/day<br/><br/>
				
				<h3>Solar Power Output</h3>
				Average Output for 4 kW Capacity System<br/>
				AC Monthly Output: {this.state.ac_monthly} kWh<br/>
				AC Annual Output: {this.state.ac_annual} kWh<br/><br/>
				
				<h3>Utility Info</h3>
				Utility Company: {this.state.util_comp} <br/>
				Utility Rates <br/>
				Commerical: {this.state.util_rate_com} $/kWh<br/>
				Industrial: {this.state.util_rate_ind} $/kWh<br/>
				Residential: {this.state.util_rate_res} $/kWh<br/><br/>

				<h3>Average Utility Costs</h3>
				Residential figures based on 893 kWh/month average<br/><br/>
				Average Monthly Cost (Residential): ${parseFloat((this.state.util_rate_res)*893).toFixed(2)} <br/>
				Average Annual Cost (Residential): ${parseFloat((this.state.util_rate_res)*10715).toFixed(2)} <br/><br/>
				</div>
			);
		}
	}
}
