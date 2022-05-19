window.onload = () => {
  
  const title = document.querySelector('.title');
  const image = document.querySelector('.image');
  const author = document.querySelector('.author');
  
  function getData() {
    fetch('https://meme-api.herokuapp.com/gimme/wholesomememes')
      .then(response => response.json())
      .then(data => putValue(data));
  }
  
  getData();
  
  function putValue({author : a, title : t, url}) {
    title.textContent = t;
    author.textContent = `Author By : ${a}`;
    image.setAttribute('src', url);
  }
  
  const generateButton = document.querySelector('.generate');
  generateButton.addEventListener('click', getData)
  
}