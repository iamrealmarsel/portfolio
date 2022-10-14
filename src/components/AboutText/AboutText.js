import { marked } from 'marked';
import { useState } from 'react';
import cn from './AboutText.module.scss';

const AboutText = () => {
  const [html, setHtml] = useState('');

  const fetchContent = async () => {
    const { default: url } = await import(/* webpackMode: "eager" */ `./text.md`);
    const response = await fetch(url);
    const content = await response.text();

    setHtml(marked.parse(content));
  };

  marked.setOptions({
    breaks: true,
  });

  fetchContent();

  return (
    <div className={cn.container}>
      <h1 className={cn.title}>
        <span className={cn.title_small}>Little man with </span>
        <span className={cn.title_big}>big ambitions</span>
      </h1>
      <div className={cn.content} dangerouslySetInnerHTML={{ __html: marked.parse(html) }} />
    </div>
  );
};

export default AboutText;
