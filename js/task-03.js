
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]; 

const imagesLists = document.querySelector('.gallery');
images.forEach(({ url, alt }) => {
  const lists = document.createElement('li')
  const element = document.createElement('img');
  lists.append(element);
  element.style.marginBottom = '30px';
  element.style.width = '640px';
  element.src = url;
  element.textContent = alt;
  imagesLists.appendChild(lists)
});


// const imagesLists = document.querySelector('.gallery');
// const imgContent = images.map(imgEl => 
//   `<li><img src = ${imgEl.url} alt=${imgEl.alt} width = "640px"/></li>`)
//   .join('');
// imagesLists.insertAdjacentHTML("beforeend" ,imgContent)
