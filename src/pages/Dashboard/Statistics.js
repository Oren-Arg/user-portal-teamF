import Assessment from './Asssessment'
import Focus from './Focus'
import Graph from './Graph'
import Reading from './Reading'
import styles from './style.module.css'



// Creator : Team F - Asael
function Statistic(){
    return <div>
   <Graph />
   <Focus />
  <Reading />
  <Assessment />

    </div>
}


export default Statistic