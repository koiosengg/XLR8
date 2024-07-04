import FAQ from "./FAQ";
import Gokart from "../assets/gokart_blue.jpeg";
import Dune_buggy from "../assets/Dune_buggy.jpeg";
function Products() {
  return (
    <>
      <div className="p-products">
        <div className="p-product-text-container">
          <p className="p-product-label">Products</p>
          <h1>
            Elevate your race with
            <span> Our karts </span>
          </h1>
          <p className="p-product-subtext">
            Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis
            quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg
            hynm Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam
            felis quis ultrices lacinia proin
          </p>
        </div>
        <div className="p-product-cards">
          <div className="p-horizontal-card">
            <div className="p-img-cover">
              <img src={Gokart} alt="GoKart" />
            </div>
            <div className="p-gokart-text-main">
              <div className="p-gokart-label">
                <p>Gokart</p>
                <div className="p-svg-cover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M5.83325 14.6666L14.1666 6.33325"
                      stroke="#F6F6F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.83325 6.33325H14.1666V14.6666"
                      stroke="#F6F6F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="p-product-desc">
                Office ipsum you must be muted. Search decisions read
                exploratory fit. Across lunch book deliverables welcome
                crystallize eco-system wanted fured playing. Crack shoot
                mindfulness stands deep first-order for canatics nobody. Invite
                practices ladder eod regroup catching pin running whistles web.
                Pretend six assassin day hill prioritize impact assassin
                relaxation take. Hill muted prioritize weaponize back policy
                web. Social rehydrate organic only invite minimize dunder. Know
                asserts giant usabiltiy waste level journey disband t-shaped
                synergy. Ballpark savvy best uat here it 30,000ft do time
                manage.
              </p>
            </div>
          </div>
          <div className="p-vertical-card-container">
            <div className="p-vertical-card">
              <div className="p-img-cover-vertical">
                <img src={Dune_buggy} alt="Dune buggy" />
              </div>
              <div>
                <div className="p-gokart-text-main">
                  <div className="p-gokart-label">
                    <p>Dune Buggy</p>
                    <div className="p-svg-cover">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          d="M5.83325 14.6666L14.1666 6.33325"
                          stroke="#F6F6F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.83325 6.33325H14.1666V14.6666"
                          stroke="#F6F6F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="p-product-desc">
                    Office ipsum you must be muted. Pulling cadence sorry into
                    standup solutionize don&apos;t. Masking accountable customer
                    productize discussions food note offline lunch. Expectations
                    container drive last muted join. Adoption deliverables see
                    base indicators. Opportunity shift member watches globalize
                    dangerous solutionize can barn growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-vertical-card">
              <div className="p-img-cover-vertical">
                <img src={Dune_buggy} alt="Dune buggy" />
              </div>
              <div>
                <div className="p-gokart-text-main">
                  <div className="p-gokart-label">
                    <p>Offroad Kart</p>
                    <div className="p-svg-cover">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          d="M5.83325 14.6666L14.1666 6.33325"
                          stroke="#F6F6F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.83325 6.33325H14.1666V14.6666"
                          stroke="#F6F6F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="p-product-desc">
                    Office ipsum you must be muted. Pulling cadence sorry into
                    standup solutionize don&apos;t. Masking accountable customer
                    productize discussions food note offline lunch. Expectations
                    container drive last muted join. Adoption deliverables see
                    base indicators. Opportunity shift member watches globalize
                    dangerous solutionize can barn growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </>
  );
}

export default Products;
