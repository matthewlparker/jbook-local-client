import { useRef, useEffect } from 'react';

interface PreviewProps {
  code: string;
}

const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (err) {
              const root = document.querySelector('#root');
              root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>'
              console.error(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    // Reset contents of frame
    iframe.current.srcdoc = html;
    // postMessage considered safe communication for iframes
    // Passes only text
    iframe.current.contentWindow.postMessage(code, '*');
  }, [code]);
  return (
    <iframe
      title="preview"
      ref={iframe}
      sandbox="allow-scripts"
      srcDoc={html}
    />
  );
};

export default Preview;