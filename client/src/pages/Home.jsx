import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import logo from '../assets/logo.svg';
import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                3D <br className="xl:block hidden" /> SHIRT RENDER.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              Discover the ultimate shirt customization experience with my innovative 3D rendering tool. This unique application, meticulously crafted with the power of Three.js and React, enables you to create a shirt design that's distinctively you. Utilizing advanced artificial intelligence and Node.js for the backend operations, I ensure a seamless and interactive customization process. <strong>Unleash your imagination</strong> and define your own style with precision and creativity, all in real-time 3D. Step into the future of fashion design with my groundbreaking 3D shirt rendering application.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
