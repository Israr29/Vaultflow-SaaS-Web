import { motion } from 'framer-motion';

import './DashboardPreview.css'
import analysisboard from '/projects/my-app/src/assets/analysis-board.png'

function DashboardPreview(){
    return(
        <>
       <motion.div
        src={analysisboard}
      alt="Dashboard Screenshot"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
       className="analysis-dashboard">
        <img src={analysisboard} alt="analysisboard" />
       </motion.div>

        </>
    )

}

export default DashboardPreview;