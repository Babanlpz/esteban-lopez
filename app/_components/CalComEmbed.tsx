"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export function CalComEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#00e152" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      calLink="babanlpz/15min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
