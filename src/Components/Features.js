import "./Features.css";
import { sol } from "./Feature";
import { useEffect, useState } from "react";
export default function Feature() {
  const [truewidth, settruewidth] = useState(true);

  // const [notshow,setshow]=useState(false);
  useEffect(() => {
    if (window.innerWidth <= 730) {
      settruewidth(false);
    }
  }, []);
  return (
    <>
      <div className="featureBox">
        <div className="featureTitle">
          Ecosystem That Powers The Roker PLUS Drive
        </div>

        <div className="FeatureIcon">
          {sol.map((i, ind) => {
            return (
              <div
                className={
                  ind % 2 === 0 ? "icona leftFeature" : "icona rightFeature"
                }
                key={ind}
              >
                {(!truewidth || ind % 2 === 0) && (
                  <div
                    className={
                      ind % 2 === 0
                        ? "FlexOwn leftIconImg"
                        : "FlexOwn rightIconImg"
                    }
                  >
                    <img
                      className="featureIconImg "
                      src={i.url}
                      alt="nthng"
                      data-aos="zoom-in"
                    />
                  </div>
                )}

                <div
                  className={
                    ind % 2 === 0
                      ? "featureContent"
                      : "featureContent rightIconfeature"
                  }
                  data-aos="zoom-in"
                >
                  <div className="featureHeading">{i.heading}</div>
                  <div className="featureDescription">{i.description}</div>
                </div>

                {truewidth && ind % 2 !== 0 && (
                  <div
                    className={
                      ind % 2 === 0 ? "FlexOwn leftIconImg" : "rightIconImg"
                    }
                    data-aos="zoom-in"
                  >
                    <img className="featureIconImg " src={i.url} alt="nthng" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
