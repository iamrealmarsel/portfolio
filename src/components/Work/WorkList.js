import { useContext, useState } from 'react';
import { getTags, getWorkByTags } from '../../store/selectors';
import WorkContext from '../../store/WorkContext';
import Tags from './Tags';
import WorkItem from './WorkItem';
import cn from './WorkList.module.scss';

const WorkList = () => {
  const { workList } = useContext(WorkContext);
  const tags = getTags(workList);
  const [currentTags, setCurrentTags] = useState([]);
  const taggedWorkList = getWorkByTags(workList, currentTags);

  const handleTagClick = (tag) => {
    const index = currentTags.indexOf(tag);
    if (index === -1) {
      setCurrentTags([...currentTags, tag]);
    } else {
      setCurrentTags([
        ...currentTags.slice(0, index),
        ...currentTags.slice(index + 1),
      ]);
    }
  };

  return (
    <>
      <Tags tags={tags} currentTags={currentTags} onTagClick={handleTagClick} />
      <div className={cn.workList}>
        {taggedWorkList.map((workItem) => (
          <WorkItem
            url={workItem.url}
            key={workItem.url}
            srcPreview={workItem.srcPreview}
            urlGithub={workItem.urlGithub}
            tags={workItem.tags}
          />
        ))}
      </div>
    </>
  );
};

export default WorkList;
