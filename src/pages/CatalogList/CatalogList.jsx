import css from "./CatalogList.module.css";
export default function CatalogList() {
  return (
    <div>
      <section className={css.catalogSection}>
        <ul className={css.carList}>
          <li className={css.carItem}>
            <div className={css.carItemContainer}>
              <img src="" alt="" className={css.carImage} />
              <div className={css.carInfo}>
                <div className={css.carTitleContainer}>
                  <h3 className={css.carText}>Maveric</h3>
                  <div className={css.priceContainer}>
                    <p className={css.carPrice}>€8000.00</p>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 9.854L11.659 7.1705C11.326 6.506 10.7485 5.5505 9.931 4.778C9.127 4.0175 8.164 3.5 7 3.5C4.486 3.5 2.5 5.489 2.5 7.88C2.5 9.6965 3.331 10.979 5.302 12.935C5.8075 13.436 6.3835 13.9775 7.021 14.5745C8.683 16.1345 10.75 18.0755 13 20.6705C15.25 18.0755 17.317 16.1345 18.979 14.5745C19.6165 13.9775 20.194 13.4345 20.698 12.935C22.669 10.979 23.5 9.6965 23.5 7.88C23.5 5.489 21.514 3.5 19 3.5C17.8345 3.5 16.873 4.0175 16.069 4.778C15.2515 5.5505 14.674 6.506 14.341 7.1705L13 9.854ZM13.588 22.292C13.5158 22.3776 13.4257 22.4463 13.3242 22.4935C13.2226 22.5407 13.112 22.5651 13 22.5651C12.888 22.5651 12.7774 22.5407 12.6758 22.4935C12.5743 22.4463 12.4842 22.3776 12.412 22.292C10.0105 19.439 7.837 17.399 6.0475 15.7205C2.95 12.812 1 10.9835 1 7.88C1 4.6325 3.685 2 7 2C9.4 2 11.0785 3.575 12.106 5.012C12.496 5.5595 12.793 6.086 13 6.5C13.2597 5.982 13.5586 5.48456 13.894 5.012C14.9215 3.5735 16.6 2 19 2C22.315 2 25 4.6325 25 7.88C25 10.9835 23.05 12.812 19.9525 15.7205C18.163 17.4005 15.9895 19.442 13.588 22.292Z"
                        fill="#101828"
                      />
                    </svg>
                  </div>
                </div>
                <div className={css.carDetailsContainer}>
                  <p className={css.cardetailText}>⭐️ 4.4(2 Reviews)</p>
                  <div className={css.locationContainer}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={css.locationSvg}
                    >
                      <path
                        d="M15.817 0.112823C15.8743 0.159759 15.9204 0.218822 15.952 0.285748C15.9837 0.352674 16 0.425792 16 0.499823V14.4998C15.9999 14.6154 15.9598 14.7273 15.8866 14.8167C15.8133 14.906 15.7113 14.9672 15.598 14.9898L10.598 15.9898C10.5333 16.0028 10.4667 16.0028 10.402 15.9898L5.5 15.0098L0.598 15.9898C0.525489 16.0043 0.450665 16.0025 0.378921 15.9846C0.307176 15.9667 0.240296 15.9331 0.183099 15.8863C0.125903 15.8394 0.0798134 15.7804 0.0481518 15.7136C0.0164902 15.6468 4.46527e-05 15.5738 0 15.4998L0 1.49982C6.9782e-05 1.38428 0.0401561 1.27232 0.113443 1.18299C0.186731 1.09366 0.288695 1.03247 0.402 1.00982L5.402 0.00982311C5.46669 -0.00310763 5.53331 -0.00310763 5.598 0.00982311L10.5 0.989823L15.402 0.00982311C15.4745 -0.00476108 15.5493 -0.00308756 15.6211 0.0147231C15.6928 0.0325338 15.7597 0.0660382 15.817 0.112823ZM10 1.90982L6 1.10982V14.0898L10 14.8898V1.90982ZM11 14.8898L15 14.0898V1.10982L11 1.90982V14.8898ZM5 14.0898V1.10982L1 1.90982V14.8898L5 14.0898Z"
                        fill="#101828"
                      />
                    </svg>
                    <p className={css.cardDetailText}>Kyiv, Ukraine</p>
                  </div>
                </div>
                <p className={css.carInfotext}>
                  Embrace simplicity and freedom with the Mavericks panel
                  truck...
                </p>
                <div className={css.badgesContainer}>
                  <ul className={css.badgesList}>
                    <li className={css.badgesItem}></li>
                    <li className={css.badgesItem}></li>
                    <li className={css.badgesItem}></li>
                    <li className={css.badgesItem}></li>
                  </ul>
                </div>
                <button className={css.showMoreButton}>Show more</button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
