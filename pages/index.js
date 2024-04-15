import VerticalBar from "@/components/VerticalBar";
import HorizontalChart from "@/components/HorizontalChart";
import PieChart from "@/components/PieChart";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <VerticalBar/>
        <HorizontalChart/>
        <PieChart/>
      </main>
    </>
  );
}
