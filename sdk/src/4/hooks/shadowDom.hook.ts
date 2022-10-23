import { useEffect, useState } from 'react';

export const useShadowDom = (containerRef?: HTMLElement) => {
  const [shadowRootElem, setShadowRootElem] = useState<HTMLElement>()
  const [emotionRootElem, setEmotionRootElem] = useState<HTMLElement>()


  useEffect(() => {
    if(document && !shadowRootElem)  {
      let container = containerRef
      if(!container) {
        container = document.createElement('support-bot');
        document.body.appendChild(container);
      }

      const shadowContainer = container.attachShadow({ mode: 'open' });
      const emotionRoot = document.createElement("style");
      const shadowRootElement = document.createElement("div");
      shadowContainer.appendChild(emotionRoot)
      shadowContainer.appendChild(shadowRootElement)
      setShadowRootElem(shadowRootElement)
      setEmotionRootElem(emotionRoot)
    }
  }, [setShadowRootElem, setEmotionRootElem, document, containerRef])

  return {shadowRootElem, emotionRootElem}
}
