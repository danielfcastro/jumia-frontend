import React from 'react';


function Customer (customer) {

  return (
		<tr key={customer.id}>
			<td>{customer.name}</td>
			<td>{customer.phone}</td>
			<td>{customer.country}</td>
			<td>{customer.countryCode}</td>
			<td>{customer.state}</td>
		</tr>
  );
}

export default Customer;