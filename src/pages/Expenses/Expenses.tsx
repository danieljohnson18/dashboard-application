import { useState } from "react";
import styles from "./Expenses.module.scss";
import personOne from "../../assets/png/person1.png";
import personTwo from "../../assets/png/person2.png";
import personThree from "../../assets/png/person3.png";
import addIcon from "../../assets/png/addIcon.png";
import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import optionIcons from "../../assets/png/menuIcon.png";
import cartIcon from "../../assets/svg/cartIcon.svg";
import transportIcon from "../../assets/svg/transportIcon.svg";
import houseIcon from "../../assets/svg/houseIcon.svg";
import boxes from "../../assets/png/boxes.png";
import plant from "../../assets/png/plant.png";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const todayExpenses = [
  {
    id: 1,
    expense: "Grocery",
    time: "5:12 pm",
    location: "Belanja di pascar",
    price: 326.8,
    icon: cartIcon,
    iconBackgroundColor: "#32a7e2",
  },
  {
    id: 2,
    expense: "Transportation",
    time: "5:12 pm",
    location: "Naik bus umum",
    price: 15.0,
    icon: transportIcon,
    iconBackgroundColor: "#B548C6",
  },
  {
    id: 3,
    expense: "Housing",
    time: "5:12 pm",
    location: "Bayar Listrik",
    price: 185.75,
    icon: houseIcon,
    iconBackgroundColor: "#FF8700",
  },
];

const previousExpenses = [
  {
    id: 1,
    expense: "Food and Drink",
    time: "5:12 pm",
    location: "Makan Steak",
    price: 156.0,
    icon: cartIcon,
    iconBackgroundColor: "#DC3434",
  },
  {
    id: 2,
    expense: "Entertainment",
    time: "5:12 pm",
    location: "Nonton Bioskop",
    price: 35.2,
    icon: transportIcon,
    iconBackgroundColor: "#4BA83D",
  },
];

const spendCategories = [
  {
    id: 1,
    category: "Food and Drinks",
    price: 872.4,
  },
  {
    id: 2,
    category: "Shopping",
    price: 1378.2,
  },
  {
    id: 3,
    category: "Housing",
    price: 928.5,
  },
  {
    id: 4,
    category: "Transportation",
    price: 420.7,
  },
  {
    id: 5,
    category: "Vehicle",
    price: 520,
  },
];

export default function Expenses() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onMouseOver = (data: any, index: number) => setActiveIndex(index);

  return (
    <>
      <main className={styles.expenses}>
        <div className={styles.expensesCard}>
          <section className={styles.expensesOverview}>
            <div className={styles.expensesHeader}>
              <p className={styles.expensesTitle}>Expenses</p>
              <div className={styles.expensesAction}>
                <div className={styles.personImages}>
                  <img
                    className={styles.personOne}
                    src={personOne}
                    alt="person one"
                  />
                  <img
                    className={styles.personTwo}
                    src={personTwo}
                    alt="person two"
                  />
                  <img
                    className={styles.personThree}
                    src={personThree}
                    alt="person three"
                  />
                </div>
                <button>
                  <img className={styles.addIcon} src={addIcon} alt="add" />
                </button>
              </div>
            </div>
            <p className={styles.dateRange}>01 - 09 Sept, 2021</p>
            <ResponsiveContainer width="100%" height="9%">
              <BarChart data={data}>
                <Bar
                  dataKey="uv"
                  fill="rgba(21, 122, 255, .2)"
                  onMouseOver={onMouseOver}
                >
                  {data.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={
                        index === activeIndex
                          ? "rgb(21, 122, 255)"
                          : "rgba(21, 122, 255, .2)"
                      }
                      key={index}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>Today</p>
              <button>
                <img
                  className={styles.optionIcon}
                  src={optionIcons}
                  alt="options"
                />
              </button>
            </div>
            <ul>
              {todayExpenses.map((todayExpense) => (
                <li className={styles.expenseItem} key={todayExpense.id}>
                  <div className={styles.expenseItemLeft}>
                    <div
                      style={{
                        backgroundColor: todayExpense.iconBackgroundColor,
                      }}
                      className={styles.expenseItemDiv}
                    >
                      <img src={todayExpense.icon} alt="cart" />
                    </div>
                    <div className={styles.expenseItemDetails}>
                      <p className={styles.expenseItemTitle}>
                        {todayExpense.expense}
                      </p>
                      <p className={styles.expenseItemTime}>
                        {todayExpense.time} • {todayExpense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expenseItemPrice}>
                    {todayExpense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>9th Sept, 2021</p>
              <button>
                <img
                  className={styles.optionIcon}
                  src={optionIcons}
                  alt="options"
                />
              </button>
            </div>

            <ul>
              {previousExpenses.map((previousExpense) => (
                <li className={styles.expenseItem} key={previousExpense.id}>
                  <div className={styles.expenseItemLeft}>
                    <div
                      style={{
                        backgroundColor: previousExpense.iconBackgroundColor,
                      }}
                      className={styles.expenseItemDiv}
                    >
                      <img src={previousExpense.icon} alt="cart" />
                    </div>
                    <div className={styles.expenseItemDetails}>
                      <p className={styles.expenseItemTitle}>
                        {previousExpense.expense}
                      </p>
                      <p className={styles.expenseItemTime}>
                        {previousExpense.time} • {previousExpense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expenseItemPrice}>
                    {previousExpense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.moneyOverview}>
            <p className={styles.moneyOverviewTitle}>Where'd you money go?</p>
            <ul>
              {spendCategories.map((spendCategory) => (
                <li key={spendCategory.id}>
                  <div className={styles.spendCategory}>
                    <p className={styles.spendCategoryName}>
                      {spendCategory.category}
                    </p>
                    <p className={styles.spendCategoryPrice}>
                      {spendCategory.price.toFixed(2)}
                    </p>
                  </div>
                  <div className={styles.spendCategoryBar}>
                    <div
                      style={{
                        width: `${
                          (spendCategory.price /
                            spendCategories.reduce(
                              (acc, current) => acc + current.price,
                              0
                            )) *
                          100
                        }%`,
                      }}
                      className={styles.spendCategoryColorBar}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.saveMoneyDiv}>
              <img className={styles.boxes} src={boxes} alt="boxes" />
              <img className={styles.plants} src={plant} alt="" />
              <p className={styles.saveMoneyTitle}>Save more money</p>
              <p className={styles.saveMoneyInfo}>
                Lorem, ipsum dolor sit amet conse adipi elit. Quos volup{" "}
              </p>
              <button className={styles.button} type="button">
                VIEW TIPS
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
