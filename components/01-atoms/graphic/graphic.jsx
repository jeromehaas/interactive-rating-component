import { createRef, useEffect } from 'react';
import lottie from 'lottie-web';
import graphicSource from './lottie.json';

const Graphic = ({ className }) => {

  const graphicReference = createRef();

  useEffect(() => {
    graphicReference.current = lottie.loadAnimation({
      container: graphicReference.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: graphicSource
    });
    graphicReference.current.playSegments([[0, 30]], true)
  }, [graphicReference]);

  return (
    <div className={`graphic ${className ? className : ''}`} ref={graphicReference}></div>
  );

};

export {
  Graphic
};