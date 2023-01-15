import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "../pages";
import { useContext } from "react";
import { CustomContext } from "../contexts/customContext";

export default function Header({
  
  }: InferGetStaticPropsType<typeof getStaticProps>) {
  
    const { customString, setCustomString, gridString, setGridString } = useContext(CustomContext);
    

    // const { theme, themes, setTheme } = useToggleTheme()
    const onButtonClick = () => {
        setCustomString(!customString);
      }

      const onGridClick = () => {
        setGridString(!gridString);
      }

    return (
        <div className="fixed uppercase flex flex-row items-center justify-between text-white px-2 cursor-pointer z-50 top-0 left-0">
          
           <div className="m-6 w-full flex-row flex justify-between">
                {/* <h1 onClick={props.setInfo}  > */}
                    {/* {props.title} */}
                {/* </h1> */}
                <h1 onClick={onButtonClick}>
                {customString ?
              <div> CLOSE
              </div>
              : <div> INFO </div>}
                </h1>

                {/* <h1 onClick={props.setView}  >
                 */}
                 {/* <h1 onClick={onGridClick}>
                    INDEX
                </h1>  */}
                </div>

{/* <div>
                <button
                    className="flex w-full capitalize cursor-pointer px-6 py-3 transition ease-in-out duration-150 text-primary leading-6 font-medium items-center hover:bg-accent-1"
                    role={'link'}
                >
                    grid
                </button>
                <button
                    className="flex w-full capitalize cursor-pointer px-6 py-3 transition ease-in-out duration-150 text-primary leading-6 font-medium items-center hover:bg-accent-1"
                    role={'link'}
                >
                    list
                </button>
                </div> */}

        </div>
    )
}

// export default Header;