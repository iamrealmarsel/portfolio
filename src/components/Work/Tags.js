import cn from './Tags.module.scss';

const Tags = ({ tags, currentTags, onTagClick }) => {
  return (
    <>
      <div className={cn.tags}>
        {tags.map((tag) => (
          <button
            className={`${cn.tag} ${
              currentTags.includes(tag) ? cn.active : ''
            }`}
            type='button'
            onClick={() => onTagClick(tag)}
            key={tag}
          >
            {tag}
          </button>
        ))}
      </div>
    </>
  );
};

export default Tags;
