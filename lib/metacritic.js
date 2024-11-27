export async function getLatestGames() {
    const LATEST_GAMES =
      "https://fakerapi.it/api/v2/custom?_quantity=10&_locale=en_US&uuid=uuid&first_name=firstName&last_name=lastName&birthday=date";
  
    const rawData = await fetch(LATEST_GAMES);
    const json = await rawData.json();
  
    // const {
    //   data: { items },
    // } = json; 
  
    const { data } = json;
    
    console.log(data.length);  

    return data.map(item => {
      const { uuid, first_name, last_name, birthday } = item;
      console.log(`ID: ${uuid}, Name: ${first_name} ${last_name}, Birthday: ${birthday}`);
      const txt1 = `Descripción ${first_name} ${last_name}`;
      const releaseDate = 'releaseDate ' 
      const score = '99 ' 
      const slug = `${uuid}`
      const title = `Título`
 
      // Generate a random number between 1 and 100
      const number = Math.floor(Math.random() * 5) + 1;

      const img = `https://loremflickr.com/200/200?random=${number}`;

      return {
        description: txt1,
        releaseDate,
        score,
        slug,
        title,
        image: img,
      };
    });

    /*return items.map((item) => {
      const { description, slug, releaseDate, image, criticScoreSummary, title } =
        item;
      const { score } = criticScoreSummary;
  
      // crea la imagen
      const { bucketType, bucketPath } = image;
      const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;
  
      return {
        description,
        releaseDate,
        score,
        slug,
        title,
        image: img,
      };
    });*/
  }
  
  export async function getGameDetails(slug) {
    const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;
  
    const rawData = await fetch(GAME_DETAILS);
    const json = await rawData.json();
  
    const { components } = json;
    const { title, description, criticScoreSummary, images } = components[0];
    const { score } = criticScoreSummary;
  
    // get the card image
    const cardImage = images.find((image) => image.typeName === "cardImage");
    const { bucketType, bucketPath } = cardImage;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;
  
    const rawReviews = components[3].data.items;
  
    // get the reviews
    const reviews = rawReviews.map((review) => {
      const { quote, score, date, publicationName, author } = review;
      return { quote, score, date, publicationName, author };
    });
  
    return {
      img,
      title,
      slug,
      description,
      score,
      reviews,
    };
  }