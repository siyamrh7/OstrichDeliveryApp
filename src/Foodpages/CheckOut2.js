import styles from "./CheckOut2.module.css";

const CheckOut2 = () => {
  return (
    <div className={styles.checkOut}>
      <div className={styles.statusbarIphoneXOrNewer}>
        <img className={styles.notchIcon} alt="" src="/notch.svg" />
        <img className={styles.rightSideIcon} alt="" src="/right-side1.svg" />
        <div className={styles.leftSide}>
          <div className={styles.statusbarTime}>
            <div className={styles.div}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.statusbarIphoneXOrNewer}>
        <img className={styles.notchIcon} alt="" src="/notch.svg" />
        <img className={styles.rightSideIcon} alt="" src="/right-side1.svg" />
        <div className={styles.leftSide}>
          <div className={styles.statusbarTime}>
            <div className={styles.div}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.titleTopSubTitle}>
        <div className={styles.frameParent}>
          <div className={styles.iconlyregularoutlinearrowParent}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularoutlinearrow--left.svg"
            />
            <div className={styles.lorem}>Checkout</div>
          </div>
          <img
            className={styles.iconlyregularoutlinearrow}
            alt=""
            src="/iconinforegularbulkinfo-circle.svg"
          />
        </div>
      </div>
      <div className={styles.yourOrderParent}>
        <b className={styles.yourOrder}>Your Order</b>
        <div className={styles.plusParent}>
          <img className={styles.plusIcon} alt="" src="/plus.svg" />
          <div className={styles.add}>Add</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.itemInCartParent}>
          <div className={styles.itemInCart}>
            <div className={styles.frameContainer}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-413@2x.png"
              />
              <div className={styles.martabakManisParent}>
                <div className={styles.martabakManis}>Sashimi</div>
                <div className={styles.frameDiv}>
                  <div className={styles.minusWrapper}>
                    <img className={styles.minusIcon} alt="" src="/minus.svg" />
                  </div>
                  <b className={styles.b}>1</b>
                  <div className={styles.minusWrapper}>
                    <img className={styles.minusIcon} alt="" src="/plus1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b1}>$ 14</b>
              <div className={styles.iconlyregularlightdocumentParent}>
                <img
                  className={styles.iconlyregularlightdocument}
                  alt=""
                  src="/iconlyregularlightdocument3.svg"
                />
                <div className={styles.note}>Note</div>
              </div>
            </div>
          </div>
          <div className={styles.itemInCart}>
            <div className={styles.frameContainer}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-414@2x.png"
              />
              <div className={styles.martabakManisParent}>
                <div className={styles.martabakManis}>Nigiri</div>
                <div className={styles.frameDiv}>
                  <div className={styles.minusWrapper}>
                    <img className={styles.minusIcon} alt="" src="/minus.svg" />
                  </div>
                  <b className={styles.b}>2</b>
                  <div className={styles.minusWrapper}>
                    <img className={styles.minusIcon} alt="" src="/plus1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.parent}>
              <b className={styles.b1}>$ 28</b>
              <div className={styles.iconlyregularlightdocumentParent}>
                <img
                  className={styles.iconlyregularlightdocument}
                  alt=""
                  src="/iconlyregularlightdocument3.svg"
                />
                <div className={styles.note}>Note</div>
              </div>
            </div>
          </div>
          <div className={styles.itemInCart2}>
            <div className={styles.itemInCart}>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-415@2x.png"
                />
                <div className={styles.martabakManisContainer}>
                  <div className={styles.martabakManis}>Roses</div>
                  <div className={styles.frameParent5}>
                    <div className={styles.minusFrame}>
                      <img
                        className={styles.minusIcon}
                        alt=""
                        src="/minus.svg"
                      />
                    </div>
                    <b className={styles.b}>1</b>
                    <div className={styles.minusFrame}>
                      <img
                        className={styles.minusIcon}
                        alt=""
                        src="/plus1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container}>
                <b className={styles.b1}>$ 15</b>
                <div className={styles.frameParent6}>
                  <div className={styles.iconlyregularlightdocumentContainer}>
                    <img
                      className={styles.iconlyregularlightdocument}
                      alt=""
                      src="/iconlyregularlightdocument3.svg"
                    />
                    <div className={styles.b}>Write something...</div>
                  </div>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-1084.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.dividerIcon} alt="" src="/divider3.svg" />
        <div className={styles.frameParent7}>
          <div className={styles.frameParent8}>
            <img className={styles.frameChild1} alt="" src="/frame-2891.svg" />
            <div className={styles.usePromosMoreSparinglyWrapper}>
              <div className={styles.usePromosMore}>
                Use promos more sparingly
              </div>
            </div>
          </div>
          <img
            className={styles.minusIcon}
            alt=""
            src="/iconlyregularlightarrow--right-2.svg"
          />
        </div>
      </div>
      <div className={styles.frameParent9}>
        <div className={styles.frameParent10}>
          <div className={styles.frameParent11}>
            <div className={styles.iconlyregularlightdocumentContainer}>
              <div className={styles.windhoekNamibia}>1</div>
              <div className={styles.note}>Sashimi</div>
            </div>
            <b className={styles.b}>$ 14</b>
          </div>
          <div className={styles.frameParent11}>
            <div className={styles.frameContainer}>
              <div className={styles.windhoekNamibia}>2</div>
              <div className={styles.note}>Nigiri</div>
            </div>
            <b className={styles.b}>$ 28</b>
          </div>
          <div className={styles.frameParent11}>
            <div className={styles.frameContainer}>
              <div className={styles.windhoekNamibia}>1</div>
              <div className={styles.note}>Roses</div>
            </div>
            <b className={styles.b}>$ 15</b>
          </div>
          <div className={styles.frameParent11}>
            <div className={styles.deliveryFeeWrapper}>
              <div className={styles.note}>Delivery Fee</div>
            </div>
            <b className={styles.free}>FREE</b>
          </div>
        </div>
        <img className={styles.dividerIcon1} alt="" src="/divider4.svg" />
        <div className={styles.frameParent11}>
          <div className={styles.deliveryFeeWrapper}>
            <div className={styles.note}>Total</div>
          </div>
          <b className={styles.b9}>$ 57</b>
        </div>
      </div>
      <div className={styles.location}>
        <div className={styles.mapsPin}>
          <div className={styles.location1}>
            <img
              className={styles.iconlyregularbulklocation}
              alt=""
              src="/iconlyregularbulklocation1.svg"
            />
          </div>
          <div className={styles.location2}>
            <div className={styles.windhoekNamibia}>Windhoek, Namibia</div>
            <div className={styles.jlBaliLarangan}>
              Jl. Bali, Larangan, Harjamukti, Kota Cirebon Kec
            </div>
          </div>
        </div>
        <div className={styles.iconlyregularboldeditParent}>
          <img
            className={styles.plusIcon}
            alt=""
            src="/iconlyregularboldedit1.svg"
          />
          <div className={styles.add}>Edit</div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navbarHome}>
          <div className={styles.navbarIcon}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularbulkhome.svg"
            />
            <div className={styles.add}>Home</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightdocument4.svg"
            />
            <div className={styles.activity}>Activity</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightwallet.svg"
            />
            <div className={styles.activity}>Wallet</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightprofile2.svg"
            />
            <div className={styles.activity}>Account</div>
          </div>
        </div>
      </div>
      <div className={styles.navbarPayment}>
        <div className={styles.paymentMethod}>
          <div className={styles.iconlycurvedboldshieldDoneParent}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlycurvedboldshield-done.svg"
            />
            <div className={styles.paymentMethod1}>Payment Method</div>
          </div>
          <div className={styles.categoriesSmall}>
            <div className={styles.note}>Select</div>
            <img
              className={styles.iconlyregularlightdocument}
              alt=""
              src="/iconright.svg"
            />
          </div>
        </div>
        <div className={styles.payButton}>
          <div className={styles.payWrapper}>
            <div className={styles.pay}>PAY</div>
          </div>
        </div>
      </div>
      <div className={styles.iosBar} />
    </div>
  );
};

export default CheckOut2;
