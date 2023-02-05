import './preview.css';
import { useRef, useEffect } from 'react';

interface PreviewProps {
  code: string;
}

const html = `
    <html>
      <head>
        <style>html { background-color: #eeeeee }</style>
      </head>
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
    // Delay so iframe's srcdoc has time to update with default html
    setTimeout(() => {
      // postMessage considered safe communication for iframes
      // Passes only text
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
    </div>
  );
};

export default Preview;
