import React from 'react'
import styler from "../styles/Index.module.css"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
  const [certificates, setCertificates] = useState([])
  const [teachName, setTeachName] = useState("all")
  const [colors, setColors] = useState(["#ffc400","rgb(94, 94, 94)","green"])
  const handleChange = (event) => {
    setTeachName(event.target.value)
  };
  useEffect(() => {
    fetch(`/api/certificates?teacher=${teachName}`).then((a) => {
      return a.json()
    }).then((res) => {
      setCertificates(res)
    })
  }, [teachName])
  return (
    <>
      <section className={styler.pageHeader}>
        <div className={styler.head} style={{marginTop:"5rem"}}>Government Girls Senior Secondary School</div>
        <div className={styler.headCont} style={{fontSize:"5rem",fontWeight:"600",marginTop:"1rem"}}>Science Exhibition Certificates</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styler.path1}><path style={{marginTop:"5rem"}} fill="#ffffff" fill-opacity="1" d="M0,160L40,144C80,128,160,96,240,85.3C320,75,400,85,480,117.3C560,149,640,203,720,224C800,245,880,235,960,213.3C1040,192,1120,160,1200,149.3C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </section>
      <h1 className={styler.howHeader}>Important Information</h1>
      <section className={styler.scoreSec}>
        <div className={styler.decInfo}>
          <p className={styler.info}>1. These are your certificates for the Science Exhibition held on 3rd November.</p>
          <p className={styler.info}>2. Choose your Science Teacher's Name from the dropdown. </p>
          <p className={styler.info}>3. Download your certificates by clicking on the <span style={{color:"green",fontWeight:"500"}}>"Download Certificate"</span> button.</p>
        </div>
      </section>
      <section className={styler.teacher}>
        Select Your Science Teacher's Name 
        <select name="teachs" id="teachs" className={styler.teachs} onChange={handleChange}>
          <option value="all" className={styler.option} selected disabled>Select your Teacher</option>
          <option value="Sarika Saini" className={styler.option}>Sarika Saini</option>
          <option value="Seema Nayyar" className={styler.option}>Seema Nayyar</option>
          <option value="Poonam Chaudhary" className={styler.option}>Poonam Chaudhary</option>
          <option value="Deepika Garhwal" className={styler.option}>Deepika Garhwal</option>
          <option value="Shashi Saini" className={styler.option}>Shashi Saini</option>
          <option value="Sumedha Yadav" className={styler.option}>Sumedha Yadav</option>
          <option value="Manju" className={styler.option}>Manju</option>
          <option value="Aradhana" className={styler.option}>Aradhana</option>
        </select>
      </section>
      <h1 className={styler.howHeader}>Science Exhibition Certificates</h1>
      <section className={styler.scoreSec}>
        <div className={styler.scoreBoard}>
          <div className={styler.headRow}>
            <div className={styler.headers}>Student Name</div>
            <div className={styler.headers}>Father Name</div>
            <div className={styler.headers} style={{width:"10%"}}>Class</div>
            <div className={styler.headers} style={{width:"10%"}}>Section</div>
            <div className={styler.headers}>Event</div>
            <div className={styler.headers}>Download Certificate</div>
          </div>
          {
            certificates.map((certificate,index)=>{
                return <div className={styler.scoreRow} >
                <div className={styler.score} style={{fontWeight:"500"}}>{certificate.Student_Name}</div>
                <div className={styler.score}>{certificate.Father_Name}</div>
                <div className={styler.score} style={{width:"10%"}}>{certificate.Class}</div>
                <div className={styler.score} style={{width:"10%"}}>{certificate.Section}</div>
                <div className={styler.score}>{certificate.Event}</div>
                <Link className={styler.score} href={certificate.Link} target='_blank' style={{color:"green",fontWeight:"500"}}>Download Certificate</Link>

              </div>
            })
          }

        </div>
      </section>
      <section style={{height:"5rem"}} className={styler.footer}>
        <span style={{fontSize:"1.5rem",marginLeft:"0.5rem",marginRight:"0.5rem",color:"#fd7500"}}>Saransh Saini</span> ~ web app created by 

      </section>
    </>
  )
}

export default index