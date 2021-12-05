import {Component} from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

class ImageInput extends Component {
    constructor() {
        super()
        this.state = {
            src: null,
            crop: {
                unit: "%",
                width: 30,
                aspect: 1 / 1
            },
            croppedImageUrl: null,
            convertedImage : null
        }
    }

    handleFile = e => {
        e.preventDefault()
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({src: fileReader.result })
        }   
        fileReader.readAsDataURL(e.target.files[0])
    }
    
    handleSubmit = e => {
        e.preventDefault()

        var reader = new FileReader();
        reader.readAsDataURL(this.state.croppedImage);
        const scope = this
        reader.onload = function () {
          scope.props.setImage(reader.result)
          scope.state.src = null
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };

    }

    onImageLoaded = image => {
        this.imageRef = image
    }
    
    onCropChange = (crop) => {
        this.setState({ crop });
    }
    
    onCropComplete = crop => {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = this.getCroppedImg(this.imageRef, crop)
            this.setState({ croppedImageUrl })
        }
    }
    
    getCroppedImg(image, crop) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
        
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
         )
    
        const reader = new FileReader()
        canvas.toBlob(blob => {
            reader.readAsDataURL(blob)
            reader.onloadend = () => {
                this.dataURLtoFile(reader.result, 'cropped.jpg')
            }
        })
    }

    dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
                
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        let croppedImage = new File([u8arr], filename, {type:mime});
        this.setState({croppedImage: croppedImage }) 
    }

    render() {
    
        const { crop, profile_pic, src } = this.state
    
        return (
            <div >
                <label htmlFor="profile_pic"></label>

                <div className="bg-black relative overflow-hidden h-14 mt-3 flex items-center p-4 rounded-md cursor-pointer">
                <span className="text-sm text-white font-light cursor-pointer">
                  Upload Photo
                </span>
                <input
                  type="file"
                  className="absolute inset-0 text-md pointer opacity-0 w-20 h-10 bg-primary"
                  accept="image/*"
                  name="photo"
                  type='file' id='profile_pic'
                value={profile_pic} 
                onChange={this.handleFile}
                />
              </div>

                <input  />

                {src && (
                    <div className="">
                        <ReactCrop
                      src={src}
                      crop={crop}
                      onImageLoaded={this.onImageLoaded}
                      onComplete={this.onCropComplete}
                      onChange={this.onCropChange}
                     /> 
                        <button onClick={this.handleSubmit}>save</button>
                    </div>
                )}
            </div>
        )
    }
}

export default ImageInput