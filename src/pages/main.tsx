import styles from "./main.module.css";

export default function Main() {
  return (
    <>
      <div>메인</div>
      <div>폰트 pre</div>
      <div className="font-nanum">폰트 nanum</div>
      <div className={styles.nanum}>폰트 css 변수사용 </div>
    </>
  );
}
