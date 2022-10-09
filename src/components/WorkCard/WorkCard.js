import { useContext, useEffect, useState } from 'react';
import { marked } from 'marked';
import { useParams } from 'react-router-dom';
import cn from './WorkCard.module.scss';
import WorkContext from '../../store/WorkContext';
import { getWorkItemById } from '../../store/selectors';
import Loader from '../Loader';
import NotFound from '../NotFound';

const WorkCard = () => {
  const { workList } = useContext(WorkContext);
  const [postMarkDown, setPostMarkDown] = useState(null);
  const [loader, setLoader] = useState(true);
  const { param } = useParams();
  const workItem = getWorkItemById(workList, +param);

  useEffect(() => {
    (async () => {
      try {
        const postFile = workItem?.srcDescription;

        if (postFile) {
          const { default: url } = await import(
            /* webpackMode: "eager" */ `../../posts/${postFile}`
          );
          const response = await fetch(url);
          const post = await response.text();
          setPostMarkDown(post);
        }
      } catch (error) {
        console.log(error);
      }

      setLoader(false);
    })();
  }, [workItem?.srcDescription]);

  const Content = () => {
    marked.setOptions({
      breaks: true,
    });

    return postMarkDown ? (
      <div className={cn.container}>
        <div className={cn.header}>
          <div className={cn.tags}>
            {workItem.tags.map((tag) => (
              <span key={tag} className={cn.tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className={cn.urls}>
            <a className={cn.github} href={workItem.urlGithub} target='_blank' rel='noreferrer'>
              <img src='img/icons/logo-github.svg' alt='go to github' />
              <span>source code</span>
            </a>
            <a className={cn.deploy} href={workItem.url} target='_blank' rel='noreferrer'>
              <img src='img/icons/external-link.svg' alt='go to website' />
              <span>deploy</span>
            </a>
          </div>
        </div>
        <div className={cn.post} dangerouslySetInnerHTML={{ __html: marked.parse(postMarkDown) }} />
      </div>
    ) : (
      <NotFound />
    );
  };

  return loader ? <Loader /> : <Content />;
};

export default WorkCard;
