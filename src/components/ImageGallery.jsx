import ImageCard from "./ImageCard"

const ImageGallery = ( props ) =>
{
    return (
        <>
  <section className="container mx-auto py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        props.photos.map( (photo) => ( <ImageCard key={photo.id} id={photo.id} img={photo.urls.small} name={props.slug} setPhotoView={props.setPhotoView}/> )  )
      }
    </div>
  </section>



        </>
    )
}

export default ImageGallery