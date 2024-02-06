import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import styles from "./Accordion.module.css"
export default function AccordionUsage() {
  return (
    <div className={styles.accordionContainer}>
    <div className={styles.flex1}>
        <h3>FAQ</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ducimus, modi maxime, expedita quia perspiciatis aliquam iure voluptate error, perferendis
         laboriosam officia quas quae vel tempore nostrum sequi esse rem ut!</p>
    </div>
    <div className={styles.flex2}>
          <div className={styles.text}>
            <h4>Do I need a personal injury report?</h4>
            <p >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p></div>
    <Accordion sx={{color:'white',backgroundColor:'black'}}>
        <AccordionSummary  sx={{color:'white',fontSize:24}}
          expandIcon={<AddCircleIcon sx={{ color:"rgba(227, 183, 72, 1)" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How much is my case worth?
        </AccordionSummary>
        <AccordionDetails sx={{color:'white',opacity:0.3}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{color:'white',backgroundColor:'black'}}>
        <AccordionSummary sx={{color:'white',fontSize:24}}
          expandIcon={<AddCircleIcon sx={{ color: "rgba(227, 183, 72, 1)"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          What should I do right after car accidect?
        </AccordionSummary>
        <AccordionDetails sx={{color:'white',opacity:0.3}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{color:'white',backgroundColor:'black'}}>
        <AccordionSummary sx={{color:'white',fontSize:24}}
          expandIcon={<AddCircleIcon sx={{ color: "rgba(227, 183, 72, 1)"}}  />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How much is my case worth?
        </AccordionSummary>
        <AccordionDetails sx={{color:'white',opacity:0.3}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>

      </Accordion>
    </div>
    </div>
  );
}
