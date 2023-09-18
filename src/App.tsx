import {Fragment, JSX, useState} from "react";
import data from "./mock/data.json";
import {AnimatePresence, motion} from "framer-motion";
export default function App(): JSX.Element {
  const [current, setCurrent] = useState<number>(1);
  const showIndex = (idx: number): void => {
    setCurrent(idx);
  }
  return (
    <Fragment>
      <div className="h-[550px] min-w-[450px] max-w-[550px]">
        <div className="flex items-center border-b-cyan-900 border-b-2">
          {data.map((item: { id: number, tab: string, content: string }) => (
            <button
              key={item.id}
              onClick={() => showIndex(item.id)}
              className={`${current === item.id ? "bg-gray-900" : ""} px-4 py-2 bg-gray-800 text-blue-500 font-bold`}
            >
              {item.tab}
            </button>
          ))}
        </div>
        <AnimatePresence>
          <div className="w-full h-full bg-gray-800 p-3 overflow-x-hidden">
            <motion.p
              initial={{
                x: 550
              }} animate={{
              x: 0
            }} exit={{
              x: -550
            }} transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 80
            }}
              className={"text-violet-500"}
            >
              {data[current - 1].content}
            </motion.p>
          </div>
        </AnimatePresence>
      </div>
    </Fragment>
  )
}

