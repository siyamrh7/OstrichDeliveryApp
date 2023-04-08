import styles from "./DetailsResto.module.css";

const DetailsResto = () => {
  return (
    <div className={styles.detailsResto}>
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
            <div className={styles.lorem}>Your Restaurant</div>
          </div>
          <img
            className={styles.iconlyregularoutlinearrow}
            alt=""
            src="/iconinforegularbulkinfo-circle.svg"
          />
        </div>
      </div>
      <div className={styles.location}>
        <div className={styles.mappinParent}>
          <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
          <div className={styles.deliverToParent}>
            <div className={styles.deliverTo}>Deliver to</div>
            <div className={styles.baliUbudKaranganyarWrapper}>
              <div className={styles.baliUbudKaranganyar}>
                Bali, Ubud Karanganyar
              </div>
            </div>
          </div>
        </div>
        <div className={styles.changeWrapper}>
          <div className={styles.change}>Change</div>
        </div>
      </div>
      <div className={styles.promo}>
        <div className={styles.frameGroup}>
          <img className={styles.frameChild} alt="" src="/frame-289.svg" />
          <div className={styles.usePromosMoreSparinglyWrapper}>
            <div className={styles.usePromosMore}>
              Use promos more sparingly
            </div>
          </div>
        </div>
        <img
          className={styles.iconlyregularlightarrowR}
          alt=""
          src="/iconlyregularlightarrow--right-2.svg"
        />
      </div>
      <div className={styles.yourOrder}>
        <div className={styles.yourOrder1}>
          <b className={styles.yourOrder2}>Your Order</b>
          <div className={styles.plusParent}>
            <img className={styles.plusIcon} alt="" src="/plus.svg" />
            <div className={styles.change}>Add</div>
          </div>
        </div>
        <div className={styles.orderItem}>
          <div className={styles.itemInCartParent}>
            <div className={styles.itemInCart}>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/frame-41@2x.png"
                />
                <div className={styles.martabakManisParent}>
                  <div className={styles.martabakManis}>Martabak Manis</div>
                  <div className={styles.frameDiv}>
                    <div className={styles.minusWrapper}>
                      <img
                        className={styles.iconlyregularlightarrowR}
                        alt=""
                        src="/minus.svg"
                      />
                    </div>
                    <b className={styles.b}>1</b>
                    <div className={styles.minusWrapper}>
                      <img
                        className={styles.iconlyregularlightarrowR}
                        alt=""
                        src="/plus1.svg"
                      />
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
                    src="/iconlyregularlightdocument2.svg"
                  />
                  <div className={styles.note}>Note</div>
                </div>
              </div>
            </div>
            <div className={styles.itemInCart}>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/frame-411@2x.png"
                />
                <div className={styles.martabakManisParent}>
                  <div className={styles.martabakManis}>Martabak Telur</div>
                  <div className={styles.frameDiv}>
                    <div className={styles.minusWrapper}>
                      <img
                        className={styles.iconlyregularlightarrowR}
                        alt=""
                        src="/minus.svg"
                      />
                    </div>
                    <b className={styles.b}>2</b>
                    <div className={styles.minusWrapper}>
                      <img
                        className={styles.iconlyregularlightarrowR}
                        alt=""
                        src="/plus1.svg"
                      />
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
                    src="/iconlyregularlightdocument2.svg"
                  />
                  <div className={styles.note}>Note</div>
                </div>
              </div>
            </div>
            <div className={styles.deliverToParent}>
              <div className={styles.itemInCart}>
                <div className={styles.frameContainer}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/frame-412@2x.png"
                  />
                  <div className={styles.martabakManisContainer}>
                    <div className={styles.martabakManis}>Martabak Keju</div>
                    <div className={styles.frameParent5}>
                      <div className={styles.minusFrame}>
                        <img
                          className={styles.iconlyregularlightarrowR}
                          alt=""
                          src="/minus.svg"
                        />
                      </div>
                      <b className={styles.b}>1</b>
                      <div className={styles.minusFrame}>
                        <img
                          className={styles.iconlyregularlightarrowR}
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
                        src="/iconlyregularlightdocument2.svg"
                      />
                      <div className={styles.b}>Write something...</div>
                    </div>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/frame-108.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" src="/divider3.svg" />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.frameParent7}>
          <div className={styles.frameParent8}>
            <div className={styles.iconlyregularlightdocumentContainer}>
              <div className={styles.div1}>1</div>
              <div className={styles.note}>Martabak Manis</div>
            </div>
            <b className={styles.b}>$ 14</b>
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.frameContainer}>
              <div className={styles.div1}>2</div>
              <div className={styles.note}>Martabak Telur</div>
            </div>
            <b className={styles.b}>$ 28</b>
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.frameContainer}>
              <div className={styles.div1}>1</div>
              <div className={styles.note}>Martabak Keju</div>
            </div>
            <b className={styles.b}>$ 15</b>
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.deliveryFeeWrapper}>
              <div className={styles.note}>Delivery Fee</div>
            </div>
            <b className={styles.free}>FREE</b>
          </div>
        </div>
        <img className={styles.dividerIcon1} alt="" src="/divider4.svg" />
        <div className={styles.frameParent8}>
          <div className={styles.deliveryFeeWrapper}>
            <div className={styles.note}>Total</div>
          </div>
          <b className={styles.b9}>$ 31</b>
        </div>
      </div>
      <div className={styles.backgroundDim} />
      <div className={styles.navbar}>
        <div className={styles.navbarHome}>
          <div className={styles.navbarIcon}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularbulkhome.svg"
            />
            <div className={styles.change}>Home</div>
          </div>
          <div className={styles.navbarIcon1}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightdocument.svg"
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
              src="/iconlyregularlightprofile.svg"
            />
            <div className={styles.activity}>Account</div>
          </div>
        </div>
      </div>
      <div className={styles.navbar1}>
        <div className={styles.yourOrder1}>
          <div className={styles.iconlycurvedboldshieldDoneParent}>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlycurvedboldshield-done.svg"
            />
            <div className={styles.paymentMethod}>Payment Method</div>
          </div>
          <div className={styles.cashParent}>
            <div className={styles.paymentMethod}>Cash</div>
            <img
              className={styles.iconlyregularoutlinearrow}
              alt=""
              src="/iconlyregularlightarrow--right-21.svg"
            />
          </div>
        </div>
        <div className={styles.payButton}>
          <div className={styles.totalParent}>
            <div className={styles.total1}>Total</div>
            <b className={styles.b10}>$ 31</b>
          </div>
          <div className={styles.payWrapper}>
            <div className={styles.pay}>PAY</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameParent14}>
          <div className={styles.backWrapper}>
            <div className={styles.pay}>Back</div>
          </div>
          <div className={styles.applyWrapper}>
            <div className={styles.pay}>Apply</div>
          </div>
        </div>
        <div className={styles.availablePromotionsWrapper}>
          <div className={styles.lorem}>Available Promotions</div>
        </div>
        <img className={styles.dividerIcon2} alt="" src="/divider5.svg" />
        <div className={styles.discountCouponParent}>
          <div className={styles.deliverToParent}>
            <div className={styles.subtractParent}>
              <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
              <div className={styles.pnrCodeParent}>
                <img
                  className={styles.pnrCodeIcon}
                  alt=""
                  src="/pnr-code@2x.png"
                />
                <div className={styles.offParent}>
                  <div className={styles.lorem}>24% Off</div>
                  <div className={styles.notAvailableOn}>
                    Not Available on this store
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.deliverToParent}>
            <div className={styles.subtractParent}>
              <img
                className={styles.subtractIcon}
                alt=""
                src="/subtract1.svg"
              />
              <div className={styles.pnrCodeParent}>
                <img
                  className={styles.pnrCodeIcon}
                  alt=""
                  src="/pnr-code@2x.png"
                />
                <div className={styles.offParent}>
                  <div className={styles.lorem}>24% Off</div>
                  <div className={styles.notAvailableOn}>
                    Not Available on this store
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.deliverToParent}>
            <div className={styles.subtractParent}>
              <img
                className={styles.subtractIcon}
                alt=""
                src="/subtract2.svg"
              />
              <div className={styles.pnrCodeParent}>
                <img
                  className={styles.pnrCodeIcon}
                  alt=""
                  src="/pnr-code@2x.png"
                />
                <div className={styles.lorem}>24% Off</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.applyContainer}>
            <div className={styles.pay}>Apply</div>
          </div>
        </div>
      </div>
      <div className={styles.iosBar} />
    </div>
  );
};

export default DetailsResto;
