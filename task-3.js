const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list_gallery = document.getElementById("gallery");
images.forEach((elem) => {
  // li
  const item_gallery = `<li><img src="${elem.url}" alt="${elem.alt}" width="320" height="180"></li>`;
  // li => ul
  list_gallery.insertAdjacentHTML("afterbegin", item_gallery);
  // console.log(list_gallery);
  //
  const galleryList = list_gallery.children[0];
  // console.log(list_gallery.children);
  // galleryList.classList.add("item-gallery");

  // galleryList.classList.add("class", "item-gallery");
});
// console.log(gallery_item);
// console.dir(list_gallery);