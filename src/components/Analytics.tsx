import { useEffect } from 'react';

const goatCounterCode = import.meta.env.VITE_GOATCOUNTER_CODE as string | undefined;

export const Analytics = () => {
  useEffect(() => {
    if (!goatCounterCode) return;

    const script = document.createElement('script');
    script.src = 'https://gc.zgo.at/count.js';
    script.async = true;
    script.setAttribute('data-goatcounter', `https://${goatCounterCode}.goatcounter.com/count`);
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};
