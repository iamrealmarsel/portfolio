export const getTags = (workList) => {
  const tagArrays = workList.map((workItem) => workItem.tags);
  const tags = tagArrays.toString().split(',');
  const uniqueTagSet = new Set(tags);

  return [...uniqueTagSet];
};

export const getWorkByTags = (workList, currentTags) => {
  if (currentTags.lenght === 0) return workList;

  const workByTag = workList.filter((workItem) =>
    currentTags.every((currentTag) => workItem.tags.includes(currentTag))
  );

  return workByTag;
};

export const getWorkItemById = (work, id) => work.find((item) => item.id === id);
