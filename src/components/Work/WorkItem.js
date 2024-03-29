import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../../helpers/constants';
import { isMobile } from '../../helpers/utilities';
import cn from './WorkItem.module.scss';

const directionsIn = [cn.inTop, cn.inRight, cn.inBottom, cn.inLeft];
const directionsOut = [cn.outTop, cn.outRight, cn.outBottom, cn.outLeft];
const rotateDeg = 10;

const getDirection = (event, { width, height, x, y }) => {
  const mousePreviewCenterX =
    (event.clientX - x - width / 2) * (width > height ? height / width : 1);
  const mousePreviewCenterY =
    (event.clientY - y - height / 2) * (height > width ? width / height : 1);

  return Math.round(Math.atan2(mousePreviewCenterY, mousePreviewCenterX) / 1.57079633 + 5) % 4;
};

const WorkItem = ({ url, srcPreview, urlGithub, tags, id, srcDescription }) => {
  const previewRef = useRef(null);
  const overlayRef = useRef(null);
  let previewElement = null;
  let overlayElement = null;

  useEffect(() => {
    previewElement = previewRef.current;
    overlayElement = overlayRef.current;
  });

  const handleWrapperPreviewMouseEnter = (event) => {
    const direction = getDirection(event, previewElement.getBoundingClientRect());
    overlayElement.classList.remove(...directionsOut);
    overlayElement.classList.add(directionsIn[direction]);
  };

  const handleWrapperPreviewMouseLeave = (event) => {
    previewElement.style.transform = `scale(1) perspective(1000px) rotateY(0) rotateX(0)`;
    const direction = getDirection(event, previewElement.getBoundingClientRect());
    overlayElement.classList.remove(...directionsIn);
    overlayElement.classList.add(directionsOut[direction]);
  };

  const handleWrapperPreviewMouseMove = (event) => {
    const { width, height, x, y } = previewElement.getBoundingClientRect();
    const mouseProgressX = (event.clientX - (x + width / 2)) / (width / 2);
    const mouseProgressY = -(event.clientY - (y + height / 2)) / (height / 2);
    previewElement.style.transform = `scale(1.05) perspective(1000px) rotateY(${
      mouseProgressX * rotateDeg
    }deg) rotateX(${mouseProgressY * rotateDeg}deg)`;
  };

  return (
    <div className={cn.item}>
      <div
        onMouseEnter={isMobile() ? null : handleWrapperPreviewMouseEnter}
        onMouseLeave={isMobile() ? null : handleWrapperPreviewMouseLeave}
      >
        <div
          className={cn.preview}
          ref={previewRef}
          onMouseMove={isMobile() ? null : handleWrapperPreviewMouseMove}
        >
          <img className={cn.imagePreview} src={`img/preview/${srcPreview}`} alt='project' />
          <div className={cn.overlay} ref={overlayRef}>
            <div className={cn.info}>
              <div className={cn.tags}>{tags.join(', ')}</div>
            </div>
            {srcDescription ? (
              <Link className={cn.linkPreview} to={`${navigation.work.path}/${id}`} />
            ) : (
              <a className={cn.linkPreview} href={url} target='_blank' rel='noreferrer'>
                link
              </a>
            )}
            <div className={`${cn.info} ${cn.info_bottom}`}>
              <div className={cn.icons}>
                <a className={cn.linkGithub} href={urlGithub} target='_blank' rel='noreferrer'>
                  <img src='img/icons/logo-github.svg' alt='go to github' />
                </a>
                <a className={cn.linkWebsite} href={url} target='_blank' rel='noreferrer'>
                  <img src='img/icons/external-link.svg' alt='go to website' />
                </a>
                {srcDescription && (
                  <Link className={cn.linkDescription} to={`${navigation.work.path}/${id}`}>
                    <img src='img/icons/angle-right.svg' alt='go to description' />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
