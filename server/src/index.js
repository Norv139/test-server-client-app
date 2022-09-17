const image_input = document.querySelector("#image-input");
const display_image = document.querySelector("#display-image");
const image_box = document.querySelector("#image-box");



image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;

    console.log(reader.result);

    display_image.style.backgroundImage = `url(${uploaded_image})`;

    var img = document.createElement("img")

    img.setAttribute("src", uploaded_image);
    image_box.appendChild(img);
  });
  reader.readAsDataURL(this.files[0]);
});
