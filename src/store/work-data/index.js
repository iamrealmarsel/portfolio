import { emailData } from './email';
import { multiPageData } from './multiPage';
import { onePageData } from './onePage';
import { spaData } from './spa';

const sortByDateDesc = (data1, data2) =>
  Date.parse(data2.year) - Date.parse(data1.year);

const sortedWorkByDate = [...spaData, ...onePageData, ...multiPageData].sort(
  sortByDateDesc
);

const sortedEmailWorkByDate = [...emailData].sort(sortByDateDesc);

const workData = [...sortedWorkByDate, ...sortedEmailWorkByDate];

export default workData;
