import React, { FC } from "react";

const textStyle: React.CSSProperties = {
  color: "#808080",
  fontFamily: "Inter",
  fontStyle: "normal",
  textAlign: "center"
};

const roundStyle: React.CSSProperties = {
  width:"460px", 
  height:"460px",  
  flexShrink :0,  
  borderRadius :"50%",  
  background :"#D9D9D9",
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};

export const Weekhelp: FC = () => {
    return (
        <div>
          <div className="weekhelpText" style={{...textStyle, position: "relative", top: "200px", width: '100%'}}>
            <h1 style={{...textStyle, fontSize: "48px", fontWeight:600}}>산모도 예비아빠도 편한 MO-ING</h1>
            <p style={{...textStyle, fontSize:"25px", fontWeight :500, lineHeight:"161.023%"}}>임신 초기, 중기, 후기 어떤 증상이 일어나고 어떤 점을 조심해야하며 어떤 것을 준비해야하는 것들의<br />MO-ING에서 도와줍니다!</p>
          </div>

          <div className="weekhelpRound" style={{ display:"flex", justifyContent:"center", gap:'59px', marginTop:'400px' }}>
            {["임신 초기","임신 중기","임신 후기"].map(text => 
              <div style={roundStyle}>
                <span style={{...textStyle, fontSize:"48px", fontWeight:"600"}}>{text}</span>
              </div>)}
          </div>
        </div>
    );
};
