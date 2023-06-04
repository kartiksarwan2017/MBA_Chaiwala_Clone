import React from 'react';
import "../../styles/section.scss";

const Section = ({
  h3, 
  text, 
  hasBtn = true, 
  btnTxt, 
  imgSrc, 
  imgSize= "70%", 
  backgroundColor, 
  headingColor, 
  textColor, 
  btnBgColor, 
  btnColor
}) => {
  return (
    <>
      <section 
        className='section' 
        style={{
        backgroundColor
        }}
      >
        <div>
            <h3 style={{
              color: headingColor
            }}
            data-cursorpointer={true}
            >
              {h3}
            </h3>

            <p style={{
              color: textColor
            }}
            data-cursorpointer={true}>
              {text}
            </p>

            {
               hasBtn && 
               (
                <button style={{
                  color: btnColor,
                  backgroundColor: btnBgColor
                }}
                data-cursorpointer={true}>
                  {btnTxt}
                </button> 
               )}

            <div>
                <img 
                  src={imgSrc} 
                  alt="imgSrc" 
                  style={{
                    width: imgSize
                  }}
                />
            </div>
        </div>
      </section>
    </>
  )
}

export default Section;