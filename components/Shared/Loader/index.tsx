/* eslint-disable @next/next/no-img-element */
import style from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={style.cargando}>
      <div className={style.first_loading}>
        <div className={style.second_ldio}>
          <div></div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
