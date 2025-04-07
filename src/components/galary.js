import React, { useState } from "react";
import "../components/galary.css";

// Importing images
import img1 from "../Assets/Galary/img1.jpg";
import img2 from "../Assets/Galary/img2.jpg";
import img3 from "../Assets/Galary/img3.jpg";
import img4 from "../Assets/Galary/img4.jpg";
import img5 from "../Assets/Galary/img5.jpg";
import img6 from "../Assets/Galary/img6.jpg";
import img7 from "../Assets/Galary/img1.jpg";
import img8 from "../Assets/Galary/img8.jpg";
import img9 from "../Assets/Galary/img9.jpg";
import img10 from "../Assets/Galary/img10.jpg";
import img11 from "../Assets/Galary/img11.jpg";
import img12 from "../Assets/Galary/img12.jpg";
import img13 from "../Assets/Galary/img13.jpg";
import img14 from "../Assets/Galary/img14.jpg";
import img15 from "../Assets/Galary/img15.jpg";
import img16 from "../Assets/Galary/img16.jpg";
import img17 from "../Assets/Galary/img17.jpg";
import img18 from "../Assets/Galary/img18.jpg";
import img19 from "../Assets/Galary/img19.jpg";
import img20 from "../Assets/Galary/img20.jpg";
import img21 from "../Assets/Galary/img21.jpg";
import img22 from "../Assets/Galary/img22.jpg";
import img23 from "../Assets/Galary/img23.jpg";
import img24 from "../Assets/Galary/img24.jpg";
import img25 from "../Assets/Galary/img25.jpg";
import img26 from "../Assets/Galary/img26.jpg";
import img27 from "../Assets/Galary/img27.jpg";
import img28 from "../Assets/Galary/img28.jpg";
import img31 from "../Assets/Galary/img31.jpg";
import img32 from "../Assets/Galary/img32.jpg";
import img34 from "../Assets/Galary/img34.jpg";
import img35 from "../Assets/Galary/img35.jpg";
import img36 from "../Assets/Galary/img36.jpg";
import img37 from "../Assets/Galary/img37.jpg";
import img38 from "../Assets/Galary/img38.jpg";
import img41 from "../Assets/Galary/img41.jpg";
import img42 from "../Assets/Galary/img42.jpg";
import img43 from "../Assets/Galary/img43.jpg";
import img44 from "../Assets/Galary/img44.jpg";
import img46 from "../Assets/Galary/img46.jpg";

// Importing videos
import vid1 from "../Assets/Galary/vid1.mp4";
import vid2 from "../Assets/Galary/vid2.mp4";

// Gallery list
const galleryItems = [
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "image", src: img3 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
  { type: "image", src: img6 },
  { type: "image", src: img7 },
  { type: "image", src: img8 },
  { type: "image", src: img9 },
  { type: "image", src: img10 },
  { type: "image", src: img11 },
  { type: "image", src: img12 },
  { type: "image", src: img13 },
  { type: "image", src: img14 },
  { type: "image", src: img15 },
  { type: "image", src: img16 },
  { type: "image", src: img17 },
  { type: "image", src: img18 },
  { type: "image", src: img19 },
  { type: "image", src: img20 },
  { type: "image", src: img21 },
  { type: "image", src: img22 },
  { type: "image", src: img23 },
  { type: "image", src: img24 },
  { type: "image", src: img25 },
  { type: "image", src: img26 },
  { type: "image", src: img27 },
  { type: "image", src: img28 },
  { type: "image", src: img31 },
  { type: "image", src: img32 },
  { type: "image", src: img34 },
  { type: "image", src: img35 },
  { type: "image", src: img36 },
  { type: "image", src: img37 },
  { type: "image", src: img38 },
  { type: "image", src: img41 },
  { type: "image", src: img42 },
  { type: "image", src: img43 },
  { type: "image", src: img44 },
  { type: "image", src: img46 },
  { type: "video", src: vid1 },
  { type: "video", src: vid2 },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="gallery-container lg:px-14 p-5 bg-green-100">
      <h2 className="text-2xl font-bold pb-8">Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="thumbnail-wrapper" onClick={() => setSelectedItem(item)}>
            {item.type === "image" ? (
              <img src={item.src} alt={`Gallery ${index}`} className="thumbnail" />
            ) : (
              <video className="thumbnail" muted>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="overlay" onClick={() => setSelectedItem(null)}>
          <span className="close-btn" onClick={() => setSelectedItem(null)}>&times;</span>
          {selectedItem.type === "image" ? (
            <img src={selectedItem.src} alt="Full View" className="popup-img" />
          ) : (
            <video controls autoPlay className="popup-img">
              <source src={selectedItem.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
}
