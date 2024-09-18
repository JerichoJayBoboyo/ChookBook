import HistorySecCSS from "../styles/HistorySec.module.css";
import "../styles/index.css";

function HistorySec() {
  return (
    <section className={HistorySecCSS.historySection}>
      <div className={HistorySecCSS.historySecCntr}>
        <div className={HistorySecCSS.purposeCntr}>
          <h3 className={HistorySecCSS.historyTitle}>Our Purpose</h3>
          <span className={HistorySecCSS.historyDescSpan}>
            We aim to share the rich culture of Filipino cooking, highlighting
            its diverse flavors and traditions. Explore Filipino cuisine to
            appreciate its unique influences and enjoy its culinary heritage.
          </span>
        </div>
        <div className={HistorySecCSS.cultureCntr}>
          <h3 className={HistorySecCSS.historyTitle}>Food Culture</h3>
          <span className={HistorySecCSS.historyDescSpan}>
            Filipino cuisine showcases the country's diverse cultural heritage,
            blending indigenous ingredients with Spanish, Chinese, and American
            influences. It features a balance of savory, sweet, and tangy
            flavors, often through techniques like slow cooking and
            fermentation, emphasizing communal meals that highlight family and
            togetherness.
          </span>
        </div>
        <div className={HistorySecCSS.interestingCntr}>
          <h3 className={HistorySecCSS.historyTitle}>What's Interesting?</h3>
          <span className={HistorySecCSS.historyDescSpan}>
            Filipino cuisine is notable for its diverse flavors shaped by a rich
            history of trade and colonization. It features a unique fusion of
            sweet, sour, and salty in dishes like adobo and sinigang, and
            employs distinctive cooking methods such as slow-braising and
            fermenting. The communal nature of dining, with meals shared
            family-style, emphasizes the cultural importance of togetherness and
            hospitality.
          </span>
        </div>
        <div className={HistorySecCSS.didYouKnowCntr}>
          <h3 className={HistorySecCSS.historyTitle}>Did You know?</h3>
          <span className={HistorySecCSS.historyDescSpan}>
            Many Filipino dishes are prepared in large portions to be enjoyed by
            the whole family, highlighting the importance of sharing and
            communal dining. This tradition ensures that everyone can partake in
            the meal, strengthening family bonds and fostering unity.
          </span>
        </div>
      </div>
    </section>
  );
}

export default HistorySec;
