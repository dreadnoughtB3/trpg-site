import { Cormorant_Garamond } from "next/font/google";
import { Button } from '@/components/ui/button';
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const notoSansJP = Cormorant_Garamond({ subsets: ["latin"], weight: ["400"] });

const HeaderComponent = () => {
	return ( 
		<header className={notoSansJP.className}>
			<nav className="w-full bg-black">
				<div className="flex justify-between max-w-6xl mx-auto">
					{/* ロゴ */}
					<div className=" flex items-center">
						<img src="/Logo.png" className="max-w-40 md:max-w-60 my-1"></img>
					</div>
					<div className="w-full">
            <div className="hidden justify-evenly md:flex">
              <Button variant="headerbutton">GAME</Button>
              <Button variant="headerbutton">CHARACTER</Button>
              <Button variant="headerbutton">WORLD</Button>
              <Button variant="headerbutton">STORY</Button>
            </div>
            <div className="md:hidden flex justify-end">
              <IconButton >
                <MenuIcon className="text-white mt-1 mr-2"/>
              </IconButton>
            </div>
					</div>
				</div>
			</nav>


		</header>
	);
}
 
export default HeaderComponent;