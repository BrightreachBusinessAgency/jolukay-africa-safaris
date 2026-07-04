import { useEffect } from "react";

export default function TawkChat() {
  useEffect(() => {
    const existingScript = document.getElementById("tawk-script");

    if (existingScript) return;

    const script = document.createElement("script");

    script.id = "tawk-script";
    script.async = true;
    script.src = "https://embed.tawk.to/6a4818022fd7581d45967375/1jskpril4";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      const tawk = document.getElementById("tawk-script");

      if (tawk) {
        tawk.remove();
      }
    };
  }, []);

  return null;
}