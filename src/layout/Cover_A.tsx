"use client"

import { useEffect, useRef } from "react"
import styles from "./Cover_A.module.scss"

import { gsap } from "gsap"

export default function Cover_A() {
  const paragraphsRef = useRef<HTMLParagraphElement[]>([])

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 }) // infinite loop

    paragraphsRef.current.forEach((p, i) => {
        if(p) {

            timeline
            .to(
                p,
                {
                    opacity: 1,
                    y: 0,
                    duration:1.33,
                    ease: 'Power2.inOut',
                },
                i * 4
            )
            .to(
                p,
                {
                    opacity: 1,
                    duration:1.33,
                },
                i * 4 + 1.33
            )
            .to(
                p,
                {
                    opacity: 0,
                    // y: -20,
                    duration:1.33,
                    ease: 'Power2.inOut',
                },
                i * 4 + 2.66
            )
        }
    })
  }, [])

  return (
    <section className={`${styles.section} xsection`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.frame} title3`}>
          <p ref={(el) => { paragraphsRef.current[0] = el! }}>Supermanifold</p>
          <p ref={(el) => { paragraphsRef.current[1] = el! }}>
            Intelligent products for cozy living
            <span className={`${styles.highlight}`}>*</span>.
          </p >
          <p ref={(el) => { paragraphsRef.current[2] = el! }}>Designed and manufactured in Montréal, Canada.</p>
        </div>
      </div>
    </section>
  )
}
