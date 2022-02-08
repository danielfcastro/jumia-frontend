import React from 'react';
import axios from 'axios';
import DynamicDataTable from "@langleyfoxall/react-dynamic-data-table";

class ListCustomerComponent extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			content: [],
			currentPage:1,
			totalPages: null,
			itemsCountPerPage:null,
			totalItemsCount:null,
			selectedState:"",
			selectedCountry:""
		};
		this.changePage = this.changePage.bind(this);
		this.fetchURL = this.fetchURL.bind(this);
		this.updateCountry = this.updateCountry.bind(this);
		this.checkCountry = this.checkCountry.bind(this);
	}

	fetchURL(page) {
		if ( typeof(page) == "undefined" || page == null ) page = 0;

		axios.get(`http://127.0.0.1:8080/v1/customers?page=${page-1}&size=10&sort=id,asc&country=${this.state.selectedCountry}&state=${this.state.selectedState}`)
			.then( response => {

			const totalPages = response.data.page.totalPages;
			const itemsCountPerPage = response.data.page.size;
			const totalItemsCount = response.data.page.totalElements;
	
			this.setState({totalPages: totalPages})
			this.setState({currentPage: page})
			this.setState({totalItemsCount: totalItemsCount})
			this.setState({itemsCountPerPage: itemsCountPerPage})
			this.setState({content: response.data.content})
			}
		);
	}

	componentDidMount () {
		this.fetchURL(0)
	}

	changePage(page) {
		this.fetchURL(page)
	}

	// this.checkCountry is passed as the callback to setState
	updateCountry = (value) => {
		this.setState({ selectedCountry: value}, this.checkCountry);
	};

	checkCountry = () => {
		this.fetchURL(0);
	};
	
	// this.checkState is passed as the callback to setState
	updateState = (value) => {
		this.setState({ selectedState: value}, this.checkState);
	};

	checkState = () => {
		this.fetchURL(0);
	};	

	render(){
		const { selectedCountry } = this.state.selectedCountry;
		const { selectedState } = this.state.selectedState;
		return (
			<div>
				<div style={{position: 'relative', left: '10%', top: '50%'}} id="divGroup" data-testid="divGroup">
					<label htmlFor="state" id="lblState" data-testid="lblState">
						<span className="visually-hidden">State</span>
					</label>			
					<select type="text"
						id="state"
						data-testid="state"
						placeholder="state"
						name="state"
						value={selectedState}
						onChange={e => this.updateState(e.target.value)}>
						<option defaultValue=""></option>
						<option value="1">Valid</option>
						<option value="0">Not Valid</option>
					</select> <br/>

			
					<label htmlFor="country" id="lblCountry" data-testid="lblCountry">
						<span className="visually-hidden">Countries</span>
					</label>			
					<select type="text"
						id="country"
						data-testid="country"
						placeholder="country"
						name="country"
						value={selectedCountry}
						onChange={e => this.updateCountry(e.target.value)}>
					  <option defaultValue=""></option>
					  <option value="237">Cameroon</option>
					  <option value="251">Ethiopia</option>
					  <option value="212">Morocco</option>
					  <option value="258">Mozambique</option>
					  <option value="256">Uganda</option>
					</select>
				</div>
			<DynamicDataTable
				id="resultTable"
				data-testid="resultTable"
				rows={this.state.content}
				fieldsToExclude={['links']}
				buttons={[]}
				orderByField={this.state.content.id}
				currentPage={this.state.currentPage}
				totalPages={this.state.totalPages}
				changePage={page => this.changePage(page)}			
			/>
			</div>
		);
	}
}

export default ListCustomerComponent;