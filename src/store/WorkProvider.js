import workData from './work-data';
import WorkContext from './WorkContext';

const initialValue = {
  workList: workData,
};

const WorkProvider = ({ children }) => {
  return (
    <WorkContext.Provider value={initialValue}>{children}</WorkContext.Provider>
  );
};

export default WorkProvider;
