const FILE_TYPES = ['jpg', 'jpeg', 'png'];

function isSuitableType (element) {
  const imageFile = element.files[0];
  const imageFileName = imageFile.name.toLowerCase();
  return FILE_TYPES.some((item) => imageFileName.endsWith(item));

}

const avatarChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('#avatar-preview');

avatarChooser.addEventListener('change', () => {
  if (isSuitableType(avatarChooser)) {
    avatarPreview.src = URL.createObjectURL(avatarChooser.files[0]);
  }
});

const imagesChooser = document.querySelector('#images');
const imagesPreview = document.querySelector('.ad-form__photo');

imagesChooser.addEventListener('change', () => {
  imagesPreview.style.display = 'flex';
  if (isSuitableType(imagesChooser)) {
    const image = document.createElement('img');
    image.style.width = '80px';
    image.style.height = '80px';
    image.style.marginRight = '5px';
    image.src = URL.createObjectURL(imagesChooser.files[0]);
    imagesPreview.append(image);
  }
});

