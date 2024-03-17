import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'path/to/some-script.js');
    document.appendChild(script);
  }, []);

  return <>Some component content</>;
}