/*

https://newsapi.org/v2/sources?apiKey=ac35a991c0834cd6a33c020826e7cb4e

API Key : ac35a991c0834cd6a33c020826e7cb4e

https://newsapi.org/v2/sources?category=appleapiKey=ac35a991c0834cd6a33c020826e7cb4e

top headlines in india...
https://newsapi.org/v2/top-headlines?country=in&apiKey=ac35a991c0834cd6a33c020826e7cb4e

there are some links from i fetch json data...
http://newsapi.org/v2/everything?q=tesla&apiKey=ac35a991c0834cd6a33c020826e7cb4e
https://newsapi.org/v2/sources?apiKey=ac35a991c0834cd6a33c020826e7cb4e
https://newsapi.org/v2/top-headlines?country=us&apiKey=ac35a991c0834cd6a33c020826e7cb4e

https://saurav.tech/NewsAPI/top-headlines/category/<category>/<countryCode>.json
[business,entertainment,general,health,science,sports,technology]

*/
// const sourcesUrl = 'https://newsapi.org/v2/sources?apiKey=ac35a991c0834cd6a33c020826e7cb4e';

const slct = document.getElementById('slct');
const loadingAnimation = document.getElementById('loading-animation');
const newsData = document.getElementById('news-data');
const secondSection = document.getElementById('second-section');
const newsTopics = document.getElementById('newsTopics');
const newsCategory = document.getElementById('newsCategory');
const newsTopicsBody = document.getElementById('newsTopicsBody');
const secondSectionTitle = document.querySelector('.titles');
const select = document.getElementById('select');
const newsSourcesBtn = document.getElementById('newsSourcesBtn');
const newsCategoryTitle = document.querySelector('.news-category-title');
const buttonsTopic = document.querySelector('.buttons-topic');
const svg = document.querySelector('svg');
const footerSection = document.getElementById('footer-section');
// const webpageLinks = document.querySelector('.webpage-links');

// svg.classList.add('display-none');
// footerSection.classList.add('display-none');

// svg.classList.remove('display-none');
// footerSection.classList.remove('display-none');


// async function getSources() {
//     let response = await fetch('https://saurav.tech/NewsAPI/sources.json');
//     let data = await response.json();
//     Array.from(data.sources).forEach(newsSource => {
//         // console.log(newsSource.name);
//         if (newsSource.id == 'bbc-news' || newsSource.id == 'cnn' || newsSource.id == 'fox-news') {
//             // slct.innerHTML =`<option selected disabled>Choose an option</option>`;
//             slct.innerHTML += `
//             <option value='${newsSource.id}'>${newsSource.name}</option>
//             `;
//         }
//     })
// }

slct.addEventListener('change', () => {
    showPostsOf(slct.value);
    svg.classList.add('display-none');
    footerSection.classList.add('display-none');
    document.getElementById('disclaimer').style.display = 'block';
    loadingAnimation.classList.remove('loading-animation-off');
})

function showPostsOf(source) {
    svg.classList.add('display-none');
    footerSection.classList.add('display-none');
    let sourceStr = source;
    sourceStr = sourceStr.toLowerCase();
    if (sourceStr == 'bbc-news') {
        secondSectionTitle.innerHTML = `BBC News`;
    }
    else {
        secondSectionTitle.innerHTML = `${sourceStr} News`;
    }
    newsSourcesBtn.innerText = `Read News`;
    select.style.display = 'none';
    // console.log(`Entered in showPostsOf ${source}`);
    fetch(`https://saurav.tech/NewsAPI/everything/${source}.json`)
        .then(response => response.json())
        .then(sourceNews => {
            // console.log(sourceNews);
            loadingAnimation.classList.add('loading-animation-off');
            let articles = Array.from(sourceNews.articles);
            // console.log(articles);
            let i = 0;
            let posts = 5;
            let limit = articles.length - 1;
            let newsArr = [];
            for (let k = 0; k <= limit; k++) {
                newsArr.push(k);
            }
            newsArr.sort(() => .5 - Math.random());
            // console.log(newsArr);
            do {
                window.onscroll = function () {
                    // console.log(window.innerHeight, window.scrollY.toFixed(2), document.body.offsetHeight);
                    if ((window.innerHeight + window.scrollY) + 5 >= document.body.offsetHeight) {
                        document.getElementById('disclaimer').style.display = 'none';
                        // loadingAnimation.classList.remove('loading-animation-off');
                        loadingAnimation.style.opacity = '1';
                        // console.log(articles[newsArr[0]]);
                        for (let j = 0; j < posts; j++) {
                            // console.log(newsArr[j + i]);
                            // console.log(`i:${i} , limit:${limit}`);
                            if ((i >= ((limit) - (limit % 5)))) {
                                loadingAnimation.style.opacity = '0';
                                svg.classList.remove('display-none');
                                footerSection.classList.remove('display-none');
                                // console.log('loop breaked');
                                break;
                            }
                            newsData.innerHTML += `
                                <div class="news-card flex-row-justify-flex-start">
                                <div class="news-img">
                                    <img src="${articles[newsArr[j + i]].urlToImage}">
                                </div>
                                <div class="news-content flex-column-align-flex-start">
                                        <div class="news-title">${articles[newsArr[j + i]].title}</div>
                                        <div class="news-description">${articles[newsArr[j + i]].content}</div>
                                        <a class="news-read-more" href="${articles[newsArr[j + i]].url}" target="_blank">Read More</a>
                                    </div>
                                </div>
                            `;
                            // console.log(newsArr[j + i]);
                            // console.log(articles[newsArr[j + i]]);
                        }
                        i += posts;
                        loadingAnimation.classList.add('loading-animation-off');
                    }
                }
            } while (i > ((limit) - (limit % 5)))
        });
    slct.addEventListener('change', () => {
        // console.log('changed again slct value');
        setTimeout(() => {
            document.getElementById('disclaimer').style.display = 'none';
        }, 4000);
        showPostsOf(slct.value);
    })
}

// getSources();

newsCategory.addEventListener('click', showNewsCategory);
// newsTopics.addEventListener('click', closeNewsCategory);

// newsTopics.classList.add('news-topics-close');
// newsTopics.classList.add('display-none');

function showNewsCategory() {
    newsTopics.classList.remove('display-none');
    newsTopics.classList.remove('news-topics-close');
    newsTopics.classList.add('display-block');
    setTimeout(() => {
        newsTopics.classList.add('news-topics-show');
    }, 100)
    document.body.style.overflowY = 'hidden';
}
function closeNewsCategory() {
    svg.classList.add('display-none');
    footerSection.classList.add('display-none');
    newsTopics.classList.replace('news-topics-show', 'news-topics-close');
    setTimeout(() => {
        newsTopics.classList.replace('display-block', 'display-none');
    }, 500);
    document.body.style.overflowY = 'scroll';
}

// document.querySelectorAll('.topic-btn').forEach(e=>{
//     console.log(e);
// })

async function categoryOf(category) {
    // newsCategoryTitle.innerText = `We are fetching news data for ${category} category.`;
    loadingAnimation.style.opacity = '1';
    newsTopicsBody.innerHTML = `
        <p class="news-category-loading">Please wait, We are fetching ${category} category news for you.</p>
        <div class="loading-animation-for-category" id="loading-animation">
            <div class="blue-balls"></div>
            <div class="blue-balls"></div>
            <div class="blue-balls"></div>
        </div>
    `;
    let categoryStr = category;
    categoryStr = categoryStr.toLowerCase();
    secondSectionTitle.innerHTML = `${category} News`;
    newsSourcesBtn.innerText = `Read News`;
    select.style.display = 'none';
    let response = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${categoryStr}/in.json`);
    let categoryNews = await response.json();
    // console.log(categoryNews);
    // console.log(categoryNews.articles.length);
    setTimeout(() => {
        closeNewsCategory();
    }, 3000)
    loadingAnimation.style.opacity = '0';
    let articles = Array.from(categoryNews.articles);
    // console.log(articles);
    let i = 0;
    let posts = 5;
    let limit = articles.length - 2;
    let newsArr = [];
    for (let k = 0; k <= limit; k++) {
        newsArr.push(k);
    }
    newsArr.sort(() => .5 - Math.random());
    // console.log(newsArr);
    do {
        window.onscroll = function () {
            // ok
            // console.log(window.innerHeight, window.scrollY.toFixed(2), document.body.offsetHeight);
            if ((window.innerHeight + window.scrollY) + 5 >= document.body.offsetHeight) {
                document.getElementById('disclaimer').style.display = 'none';
                // loadingAnimation.classList.remove('loading-animation-off');
                loadingAnimation.style.opacity = '1';
                // console.log(articles[newsArr[0]]);
                for (let j = 0; j < posts; j++) {
                    if ((i >= ((limit) - (limit % 5)))) {
                        svg.classList.remove('display-none');
                        footerSection.classList.remove('display-none');
                        loadingAnimation.style.opacity = '0';
                        // console.log('loop breaked');
                        break;
                    }
                    newsData.innerHTML += `
                        <div class="news-card flex-row-justify-flex-start">
                        <div class="news-img">
                            <img src="${articles[newsArr[j + i]].urlToImage}">
                        </div>
                        <div class="news-content flex-column-align-flex-start">
                                <div class="news-title">${articles[newsArr[j + i]].title}</div>
                                <div class="news-description">${articles[newsArr[j + i]].content}</div>
                                <a class="news-read-more" href="${articles[newsArr[j + i]].url}" target="_blank">Read More</a>
                            </div>
                        </div>
                    `;
                    // console.log(newsArr[j + i]);
                    // console.log(articles[newsArr[j + i]]);
                }
                i += posts;
                loadingAnimation.classList.add('loading-animation-off');
                // console.log(`i: ${i} , limit: ${limit}`);

            }
        }
    } while (i > ((limit) - (limit % 5)))
}
