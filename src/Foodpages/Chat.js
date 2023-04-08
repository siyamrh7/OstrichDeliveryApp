import styles from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.messageWrapper}>
        <div className={styles.message}>
          <div className={styles.item}>
            <div className={styles.pictNameMessage}>
              <img
                className={styles.pictNameMessageChild}
                alt=""
                src="/frame-579@2x.png"
              />
              <div className={styles.nameMessage}>
                <div className={styles.johnDoe}>John Doe</div>
                <div className={styles.online}>Online</div>
              </div>
            </div>
            <div className={styles.iconlylightvideoParent}>
              <img
                className={styles.iconlylightvideo}
                alt=""
                src="/iconlylightvideo.svg"
              />
              <img
                className={styles.iconlylightvideo}
                alt=""
                src="/iconlylightcall.svg"
              />
              <div className={styles.iconlylightvideo}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/ellipse-27.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/ellipse-28.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/ellipse-29.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.todayWrapper}>
            <div className={styles.today}>Today</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.helloWhereAreYouWrapper}>
                  <div className={styles.helloWhereAre}>
                    Hello Where are you?
                  </div>
                </div>
                <div className={styles.div}>08:00</div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.parent}>
                <div className={styles.div1}>08:10</div>
                <div className={styles.imInBlockMJakselBroWrapper}>
                  <div className={styles.helloWhereAre}>
                    I’m in Block M Jaksel bro
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.helloWhereAreYouWrapper}>
                  <div className={styles.helloWhereAre}>Yeeh Agian</div>
                </div>
                <div className={styles.div}>08:11</div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.parent}>
                <div className={styles.div1}>08:10</div>
                <div className={styles.imInBlockMJakselBroWrapper}>
                  <div className={styles.helloWhereAre}>
                    Dari tadi so soan basa inggris knyk
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.helloWhereAreYouWrapper}>
                  <div className={styles.helloWhereAre}>Koplok</div>
                </div>
                <div className={styles.div}>08:12</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navbarPayment}>
          <div className={styles.item}>
            <div className={styles.frameParent3}>
              <div className={styles.pictNameMessage}>
                <img
                  className={styles.iconlylightvideo}
                  alt=""
                  src="/iconlyregularbulkcamera.svg"
                />
                <img
                  className={styles.paperclipIcon}
                  alt=""
                  src="/paperclip1.svg"
                />
              </div>
              <input className={styles.typeSomething} placeholder="Type Something..."/>
            </div>
            <img
              className={styles.paperplanetiltIcon}
              alt=""
              src="/paperplanetilt.svg"
            />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Chat;
