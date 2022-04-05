function GallerySlider(images) {
  return (
    <>
      <div className="gallery">
        <div className="scrollbar" id="style-3">
          {images?.map(
            (image, i) =>
              image && (
                <img
                  src={image}
                  style={{ height: "400px", margin: "0 10px" }}
                  alt="portfolioImage"
                  key={i}
                />
              )
          )}
        </div>
        {window.innerWidth > 461 &&
        images &&
        Array.isArray(images) &&
        images.length ? (
          <>
            <div
              className="gradient"
              style={{
                left: "100%",
                marginLeft: "-100px",
                bottom: "calc(100% + 17px)",
              }}
            />
            <div
              className="gradient"
              style={{
                transform: "rotate(180deg)",
                bottom: "calc(200% + 17px)",
              }}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

function GalleryList(images) {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {images?.map(
        (image, i) =>
          image && (
            <img
              src={image}
              style={{ width: "300px", margin: "10px 10px" }}
              alt="portfolioImage"
              key={image + i}
            />
          )
      )}
    </div>
  );
}

export { GallerySlider, GalleryList };
