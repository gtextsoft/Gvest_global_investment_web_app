import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.5453064211056!2d-80.1417069!3d25.950150599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acf866ec0be9%3A0x784a17d5a36e8520!2s18851%20NE%2029th%20Ave%20STE%201000%2C%20Aventura%2C%20FL%2033180%2C%20USA!5e0!3m2!1sen!2sng!4v1741339221668!5m2!1sen!2sng"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
