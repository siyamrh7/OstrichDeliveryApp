import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.statusbarIphoneXOrNewer}>
        <img className={styles.notchIcon} alt="" src="/notch.svg" />
        <img className={styles.rightSideIcon} alt="" src="/right-side.svg" />
        <div className={styles.leftSide}>
          <div className={styles.statusbarTime}>
            <div className={styles.div}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.iosBar} />
      <div className={styles.userProfileInner}>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/ellipse-36@2x.png"
            />
            <div className={styles.yanbaghilahaParent}>
              <div className={styles.yanbaghilaha}>Yanbaghilaha</div>
              <div className={styles.yanbaghilahagmailcom}>081234567890</div>
              <div className={styles.yanbaghilahagmailcom}>
                Yanbaghilaha@gmail.com
              </div>
            </div>
          </div>
          <div className={styles.categories}>
            <img
              className={styles.iconlycurvedboldedit}
              alt=""
              src="/iconlycurvedboldedit.svg"
            />
            <div className={styles.text}>Edit</div>
            <img
              className={styles.iconlysharpbulktimeCircle}
              alt=""
              src="/iconlysharpbulktime-circle.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.titleParent}>
          <div className={styles.title}>
            <b className={styles.title1}>Account</b>
          </div>
          <div className={styles.textParent}>
            <div className={styles.text1}>
              <div className={styles.frameContainer}>
                <div className={styles.iconlyregularboldpaperParent}>
                  <img
                    className={styles.iconlyregularboldpaper}
                    alt=""
                    src="/iconlyregularboldpaper.svg"
                  />
                  <div className={styles.text2}>My Activity</div>
                </div>
                <img
                  className={styles.iconlyregularlightarrowR}
                  alt=""
                  src="/iconlyregularlightarrow--right-2.svg"
                />
              </div>
            </div>
            <div className={styles.text1}>
              <div className={styles.frameContainer}>
                <div className={styles.iconlyregularboldpaperParent}>
                  <img
                    className={styles.iconlyregularboldpaper}
                    alt=""
                    src="/iconlysharpboldcard.svg"
                  />
                  <div className={styles.text2}>Payment</div>
                </div>
                <img
                  className={styles.iconlyregularlightarrowR}
                  alt=""
                  src="/iconlyregularlightarrow--right-2.svg"
                />
              </div>
            </div>
            <div className={styles.text1}>
              <div className={styles.frameContainer}>
                <div className={styles.iconlyregularboldpaperParent}>
                  <img
                    className={styles.iconlyregularboldpaper}
                    alt=""
                    src="/maptrifold.svg"
                  />
                  <div className={styles.text2}>Saved Place</div>
                </div>
                <img
                  className={styles.iconlyregularlightarrowR}
                  alt=""
                  src="/iconlyregularlightarrow--right-2.svg"
                />
              </div>
            </div>
            <div className={styles.text1}>
              <div className={styles.frameContainer}>
                <div className={styles.iconlyregularboldpaperParent}>
                  <img
                    className={styles.iconlyregularboldpaper}
                    alt=""
                    src="/iconlysharpbold2-user.svg"
                  />
                  <div className={styles.text2}>Invite Friends</div>
                </div>
                <img
                  className={styles.iconlyregularlightarrowR}
                  alt=""
                  src="/iconlyregularlightarrow--right-2.svg"
                />
              </div>
            </div>
            <div className={styles.text9}>
              <div className={styles.frameContainer}>
                <div className={styles.iconlyregularboldpaperParent}>
                  <img
                    className={styles.iconlyregularboldpaper}
                    alt=""
                    src="/iconlyregularlightlogout.svg"
                  />
                  <div className={styles.text2}>Logout</div>
                </div>
                <img
                  className={styles.iconlyregularlightarrowR}
                  alt=""
                  src="/iconlyregularlightarrow--right-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.titleParent}>
          <div className={styles.title}>
            <b className={styles.title1}>General</b>
          </div>
          <div className={styles.textGroup}>
            <div className={styles.text1}>
              <div className={styles.frameContainer}>
                <div className={styles.iconlyregularboldpaperParent}>
                  <img
                    className={styles.iconlyregularboldpaper}
                    alt=""
                    src="/question.svg"
                  />
                  <div className={styles.text2}>Help Center</div>
                </div>
                <img
                  className={styles.iconlyregularlightarrowR}
                  alt=""
                  src="/iconlyregularlightarrow--right-2.svg"
                />
              </div>
            </div>
            <div className={styles.text1}>
              <div className={styles.frameContainer}>
                <div className={styles.iconlyregularboldpaperParent}>
                  <img
                    className={styles.iconlyregularboldpaper}
                    alt=""
                    src="/iconlyregularbolddelete.svg"
                  />
                  <div className={styles.text2}>Delete Account</div>
                </div>
                <img
                  className={styles.iconlyregularlightarrowR}
                  alt=""
                  src="/iconlyregularlightarrow--right-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.title4}>
        <img className={styles.iconlyregularlightarrowR} alt="" src="/x.svg" />
        <div className={styles.title5}>User Profile</div>
        <img className={styles.switchIcon} alt="" src="/switch.svg" />
        <div className={styles.iconlysharpbulklocationParent}>
          <img
            className={styles.iconlysharpbulklocation}
            alt=""
            src="/iconlysharpbulklocation.svg"
          />
          <div className={styles.seeAll}>See All</div>
        </div>
        <img
          className={styles.iconlycurvedbulkinfoSquare}
          alt=""
          src="/iconlycurvedbulkinfo-square.svg"
        />
      </div>
    </div>
  );
};

export default UserProfile;
