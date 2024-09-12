import "../styles/HistorySec.css";
import "../styles/index.css";

function HistorySec() {
  return (
    <section className="history-section">
      <div className="history-sec-cntr">
        <div className="purpose-cntr">
          <h3 className="history-title">Our Purpose</h3>
          <span className="history-desc-span">
            We want to share with you the rich culture of Filipino cooking, a
            tapestry of flavors and traditions. This culinary heritage is deeply
            rooted in the diverse history of the Philippines. By exploring
            Filipino cuisine, you can experience its unique blend of influences
            and ingredients. Sharing this experience allows you to appreciate
            and enjoy the richness of Filipino culinary culture.
          </span>
        </div>
        <div className="culture-cntr">
          <h3 className="history-title">Food Culture</h3>
          <span className="history-desc-span">
            Filipino cuisine reflects the Philippines diverse cultural heritage,
            blending indigenous ingredients with influences from Spanish,
            Chinese, and American culinary traditions. It features a unique
            balance of savory, sweet, and tangy flavors, often achieved through
            techniques like slow cooking and fermentation. Meals are typically
            communal, emphasizing the importance of family and togetherness in
            Filipino culture.
          </span>
        </div>
        <div className="interesting-cntr">
          <h3 className="history-title">What's Interesting?</h3>
          <span className="history-desc-span">
            Filipino cuisine is intriguing due to its diverse and distinctive
            flavors, influenced by a rich history of trade and colonization. One
            standout feature is its fusion of flavors, combining sweet, sour,
            and salty in dishes like adobo and sinigang. Additionally, Filipino
            food often involves unique cooking methods, such as slow-braising
            and fermenting, which contribute to its distinct taste. The communal
            nature of Filipino dining, where meals are shared family-style, also
            highlights the cultural importance of togetherness and hospitality.
          </span>
        </div>
        <div className="did-you-know-cntr">
          <h3 className="history-title">Did You know?</h3>
          <span className="history-desc-span">
            Did you know that most Filipino dishes are prepared in large
            portions because meals are typically enjoyed with the entire family
            gathered together. This tradition emphasizes the importance of
            sharing and communal dining in Filipino culture. Preparing ample
            food ensures that everyone at the table can partake in the meal. The
            practice of eating together strengthens family bonds and fosters a
            sense of unity.
          </span>
        </div>
      </div>
    </section>
  );
}

export default HistorySec;
