import emailData from './email';
import websitesData from './websites';

const sortByDateDesc = (data1, data2) => Date.parse(data2.year) - Date.parse(data1.year);

const sortedWebsitesByDate = websitesData.sort(sortByDateDesc);
const sortedEmailWorkByDate = emailData.sort(sortByDateDesc);

const workData = [...sortedWebsitesByDate, ...sortedEmailWorkByDate];

export default workData;
