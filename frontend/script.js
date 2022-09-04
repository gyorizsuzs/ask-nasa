/*================================================================*\
*                                                                 *
*                          FETCH promise                          *
*                                                                 *
\*================================================================*/

/* function getPictureOfTheDay() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=obcpDMJFMpsYBaFm04u6tY6Zn0ctSap6iouRct1G')
    .then((response) => response.json())
    .then((data) => {
        const root = document.querySelector('#root');
        const picture = pictureComponent(data);
        root.innerHTML = picture;
    });
};

getPictureOfTheDay()

function pictureComponent(pictureData) {
    return `
        <div>
            <img src="${pictureData.url}" alt="pic of the day"/>
            <p>${pictureData.explanation}</p>
            </div>
    `
} */

/*================================================================*\
*                                                                 *
*                          FETCH async await                      *
*                                                                 *
\*================================================================*/

const key = "obcpDMJFMpsYBaFm04u6tY6Zn0ctSap6iouRct1G";
const url = "https://api.nasa.gov/planetary/apod?api_key=";

let datePickerComponent = function () {
  return `
    <input type="date" id="date">
  `;
};

//take json from the api and format it with online formatter so we can see the parameters like date, media_type, url of the picture etc »»

function mediaComponent(mediaData) {
  if (mediaData.media_type === "image") {
    return `
      <h1>Picture of the Day<h1>
      <p>${mediaData.date}</p>
      <img src="${mediaData.url}"/>
      <p>${mediaData.explanation}</p>
    `; // here we manage the cases when we receive an image with the data, then we have to manage it when we receive something else, e.g. a video
  } else {
    return `
    <h1>Picture of the Day<h1>
    <p>${mediaData.date}</p>
    <iframe width="560" height="315" src="${mediaData.url}" freeborder="0" allor="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>${mediaData.explanation}</p>
    `;
  }
}

function pastContentCreator() {
  const xDate = "&date=" + document.getElementById("date").value;

  fetch(url + key + xDate)
    .then((response) => response.json())
    .then((data) => {
      const content = document.querySelector("#content");
      const picture = mediaComponent(data);
      content.innerHTML = picture;
    });
}

function loadEvent() {
  console.log("Page loaded");

  let datePickerElement = document.querySelector("#datepicker");
  datePickerElement.insertAdjacentHTML("beforeend", datePickerComponent());
  const datePicker = document.querySelector("#date");
  datePicker.addEventListener("change", pastContentCreator);

  function getPicture() {
    fetch(url + key)
      .then((response) => response.json())
      .then((data) => {
        const content = document.querySelector("#content");
        const picture = mediaComponent(data);
        content.innerHTML = picture;
      });
  }

  getPicture();
}

window.addEventListener("load", loadEvent);

/* async function getPictureOfTheDay() {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=obcpDMJFMpsYBaFm04u6tY6Zn0ctSap6iouRct1G"
  );
  const data = await response.json();

  const root = document.querySelector("#root");
  const picture = pictureComponent(data);
  root.innerHTML = picture;
  console.log("2");
  console.log("1");
}

await getPictureOfTheDay();

function pictureComponent(pictureData) {
  return `
        <div>
            <img src="${pictureData.url}" alt="pic of the day"/>
            <p>${pictureData.explanation}</p>
            </div>
    `;
} */
