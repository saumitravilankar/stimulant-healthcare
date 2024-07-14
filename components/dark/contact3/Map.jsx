import React from "react";

function Map() {
  return (
    <div className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.36707058479405!2d73.82074246589657!3d19.971837093615445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeab85185da39%3A0x6cc64984e6ec356!2sAkshardhara%20-%20F!5e0!3m2!1sen!2sin!4v1720939559018!5m2!1sen!2sin"
        width="800"
        height="600"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
