import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const renderedImages = images.map((imageRecievedFromImagesArray) => {
    return (
      <ImageShow
        key={imageRecievedFromImagesArray.id}
        image={imageRecievedFromImagesArray}
      />
    );
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
