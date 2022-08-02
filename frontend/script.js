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

async function getPictureOfTheDay() {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=obcpDMJFMpsYBaFm04u6tY6Zn0ctSap6iouRct1G"
  );
  const data = await response.json();

  const root = document.querySelector("#root");
  const picture = pictureComponent(data);
  root.innerHTML = picture;
  console.log("2");
  console.log("1");
};

await getPictureOfTheDay();

function pictureComponent(pictureData) {
  return `
        <div>
            <img src="${pictureData.url}" alt="pic of the day"/>
            <p>${pictureData.explanation}</p>
            </div>
    `;
}
