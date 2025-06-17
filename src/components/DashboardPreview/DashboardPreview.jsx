import './DashboardPreview.css'
import analysisboard from '/projects/my-app/src/assets/analysis-board.png'

function DashboardPreview(){
    return(
        <>
       <div className="analysis-dashboard">
        <img src={analysisboard} alt="analysisboard" />
       </div>

        </>
    )

}

export default DashboardPreview;