import React from 'react';
import moment from 'moment';

interface FormattedDateProps {
	dateString: string;
}

const FormattedDate: React.FC<FormattedDateProps> = ({ dateString }) => {
	const date = moment(dateString);
	const formattedDate = date.format('MMMM Do YYYY'); // Example format: July 4th 2024, 6:12:01 am
	// const formattedDate = date.format('MMMM Do YYYY, h:mm:ss a'); // Example format: July 4th 2024, 6:12:01 am

	return <time dateTime={dateString}>{formattedDate}</time>;
};

export default FormattedDate;
