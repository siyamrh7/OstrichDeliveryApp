import styles from "./ChatList.module.css";
import FoodBottomNav from "../components/FoodBottomNav";
import CloseHeader from "../components/CloseHeader"
import { useNavigate } from "react-router-dom";
const ChatList = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.chatList}>
      <CloseHeader text="Your Chats"/>
      <div className={styles.messageParent}>
        <div className={styles.message}>
          <div className={styles.item}>
            <div className={styles.pictNameMessage}>
              <img
                className={styles.pictNameMessageChild}
                alt=""
                src="/frame-579@2x.png"
              />
              <div className={styles.nameMessage}>
                <div onClick={()=>navigate('/foods/chat')} className={styles.johnDoe}>John Doe</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.minutes}>
              <div className={styles.minutesInner}>
                <div className={styles.mWrapper}>
                  <div className={styles.m}>5 m</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" src="/divider.svg" />
        </div>
        <div className={styles.message}>
          <div className={styles.item}>
            <div className={styles.pictNameMessage}>
              <img
                className={styles.pictNameMessageChild}
                alt=""
                src="/frame-5791@2x.png"
              />
              <div className={styles.nameMessage}>
                <div onClick={()=>navigate('/foods/chat')} className={styles.johnDoe}>Cody Fisher</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.minutes1}>
              <div className={styles.minutesInner}>
                <div className={styles.mContainer}>
                  <div className={styles.m}>5 m</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" src="/divider.svg" />
        </div>
        <div className={styles.message}>
          <div className={styles.item}>
            <div className={styles.pictNameMessage}>
              <img
                className={styles.pictNameMessageChild}
                alt=""
                src="/frame-5792@2x.png"
              />
              <div className={styles.nameMessage}>
                <div onClick={()=>navigate('/foods/chat')} className={styles.johnDoe}>Kathryn Murphy</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.minutes1}>
              <div className={styles.minutesInner}>
                <div className={styles.mContainer}>
                  <div className={styles.m}>5 m</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" src="/divider.svg" />
        </div>
        <div className={styles.message}>
          <div className={styles.item}>
            <div className={styles.pictNameMessage}>
              <img
                className={styles.pictNameMessageChild}
                alt=""
                src="/frame-5793@2x.png"
              />
              <div className={styles.nameMessage}>
                <div onClick={()=>navigate('/foods/chat')} className={styles.johnDoe}>Savannah Nguyen</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.minutes}>
              <div className={styles.minutesInner}>
                <div className={styles.mWrapper}>
                  <div className={styles.m}>5 m</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" src="/divider.svg" />
        </div>
        <div className={styles.message}>
          <div className={styles.item}>
            <div className={styles.pictNameMessage}>
              <img
                className={styles.pictNameMessageChild}
                alt=""
                src="/frame-5794@2x.png"
              />
              <div className={styles.nameMessage}>
                <div onClick={()=>navigate('/foods/chat')} className={styles.johnDoe}>Devon Lane</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.minutes}>
              <div className={styles.minutesInner}>
                <div className={styles.mWrapper}>
                  <div className={styles.m}>5 m</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" src="/divider1.svg" />
        </div>
        <div className={styles.message}>
          <div className={styles.item}>
            <div className={styles.pictNameMessage}>
              <img
                className={styles.pictNameMessageChild}
                alt=""
                src="/frame-5795@2x.png"
              />
              <div className={styles.nameMessage}>
                <div onClick={()=>navigate('/foods/chat')} className={styles.johnDoe}>Cameron Williamson</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.minutes}>
              <div className={styles.minutesInner}>
                <div className={styles.mWrapper}>
                  <div className={styles.m}>5 m</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" src="/divider2.svg" />
        </div>
        <div className={styles.message}>
          <div className={styles.item}>
            <div className={styles.pictNameMessage}>
              <img
                className={styles.pictNameMessageChild}
                alt=""
                src="/frame-5796@2x.png"
              />
              <div className={styles.nameMessage}>
                <div onClick={()=>navigate('/foods/chat')} className={styles.johnDoe}>Dianne Russell</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.minutes}>
              <div className={styles.minutesInner}>
                <div className={styles.mWrapper}>
                  <div className={styles.m}>5 m</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.dividerIcon6} alt="" src="/divider.svg" />
        </div>
        <div className={styles.message}>
          <div className={styles.item}>
            <div className={styles.pictNameMessage}>
              <img
                className={styles.pictNameMessageChild}
                alt=""
                src="/frame-5797@2x.png"
              />
              <div className={styles.nameMessage}>
                <div onClick={()=>navigate('/foods/chat')} className={styles.johnDoe}>Ralph Edwards</div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.minutes}>
              <div className={styles.minutesInner}>
                <div className={styles.mWrapper}>
                  <div className={styles.m}>5 m</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.dividerIcon6} alt="" src="/divider.svg" />
        </div>
      </div>
      <div className={styles.titleTopSubTitleParent}>
        
        <div className={styles.categoriesParent}>
          <div className={styles.categories}>
            <img
              className={styles.iconlysharpbulktimeCircle}
              alt=""
              src="/iconlysharpbulktime-circle.svg"
            />
            <div className={styles.ctg}>All</div>
            <img
              className={styles.iconlysharpbulktimeCircle}
              alt=""
              src="/iconlysharpbulktime-circle.svg"
            />
          </div>
          <div className={styles.categories1}>
            <img
              className={styles.iconlysharpbulktimeCircle}
              alt=""
              src="/iconlysharpbulktime-circle1.svg"
            />
            <div className={styles.crg}>Read</div>
            <img
              className={styles.iconlysharpbulktimeCircle}
              alt=""
              src="/iconlysharpbulktime-circle1.svg"
            />
          </div>
          <div className={styles.categories1}>
            <img
              className={styles.iconlysharpbulktimeCircle}
              alt=""
              src="/iconlysharpbulktime-circle1.svg"
            />
            <div className={styles.ctg}>Unread</div>
            <img
              className={styles.iconlysharpbulktimeCircle}
              alt=""
              src="/iconlysharpbulktime-circle1.svg"
            />
          </div>
        </div>
      </div>
  <FoodBottomNav/>
    
    </div>
  );
};

export default ChatList;
