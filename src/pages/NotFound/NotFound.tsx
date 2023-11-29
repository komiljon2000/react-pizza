import React from "react";
import m from "../../styles/NotFound.module.scss";
import { Link } from "react-router-dom";

interface Props {}

const NotFound: React.FC<Props> = (_props) => {
  return (
    <section className={m.page_404}>
      <div className={m.container}>
        <div className={m.row}>
          <div className={m["col-sm-12"]}>
            <div
              className={`${m["col-sm-10"]} ${m["col-sm-offset-1"]} ${m["text-center"]}`}
            >
              <div className={m.four_zero_four_bg}>
                <h1 className={m["text-center"]}>404</h1>
              </div>

              <div className={m.contant_box_404}>
                <h3 className={m.h3}>Look like you're lost</h3>

                <p className={m.p1}>
                  the page you are looking for not avaible!
                </p>

                <Link to="/" className={m.link_404}>
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
