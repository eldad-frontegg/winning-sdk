import { useEffect, useMemo, useState } from 'react';

export const useShadowDom = () => {
  const [shadowRootElem, setShadowRootElem] = useState<HTMLElement>()
  const [emotionRootElem, setEmotionRootElem] = useState<HTMLElement>()


  useEffect(() => {
    if(document && !shadowRootElem)  {
      const container = document.createElement('support-bot-app');
      document.body.appendChild(container);
      const shadowContainer = container.attachShadow({ mode: 'open' });
      const emotionRoot = document.createElement("style");
      const shadowRootElement = document.createElement("div");
      shadowContainer.appendChild(emotionRoot)
      shadowContainer.appendChild(shadowRootElement)
      setShadowRootElem(shadowRootElement)
      setEmotionRootElem(emotionRoot)
    }
  }, [setShadowRootElem, setEmotionRootElem, document])

  return {shadowRootElem, emotionRootElem}
}
